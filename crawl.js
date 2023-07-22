const puppeteer = require("puppeteer");
const waitAndClick = require("./functions/waitAndClick");
const checkOverlay = require("./functions/overlayChecker");

async function crawl(config, url) {
  const browser = await puppeteer.launch({
    headless: config.headless ? "new" : false,
  });
  const page = await browser.newPage();

  // Enable request interception
  await page.setRequestInterception(true);

  // Store the filtered network requests
  const filteredRequests = [];

  page.on("request", (request) => {
    const urlWithQuery = request.url();

    if (urlWithQuery.includes("virtusize")) {
      const postData = request.postData();
      if (postData) {
        try {
          const { storeName, name, source, externalUserId, isKid } =
            JSON.parse(postData);
          if (name === "user-saw-widget-button") startCrawling();
          if (storeName !== undefined) {
            filteredRequests.push({
              storeName,
              name,
              source,
              externalUserId,
              isKid,
            });
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    }

    // Continue all requests
    request.continue();
  });

  await page.goto(url, {
    waitUntil: "networkidle0",
    timeout: 0,
  });

  async function startCrawling() {
    console.log("closing overlay");
    try {
      await checkOverlay(page, config.overlay.location, url);
      await page.waitForTimeout(config.overlay.timeout);
    } catch (error) {
      console.error(error);
    }

    console.log("start crawl");
    try {
      console.log("try1");
      await waitAndClick(page, config.widgets.inpage);
    } catch (error) {
      try {
        console.log("try2");
        await waitAndClick(page, config.widgets.inpageLuxury);
      } catch (error) {
        try {
          console.log("try3");
          await waitAndClick(page, config.widgets.inpageMini);
        } catch (error) {
          console.error(error);
          console.log("no widget found");
        }
      }
    }
  }

  const el = config.elements;
  for (const key in el) {
    await waitAndClick(page, el[key]);
    await page.waitForTimeout(
      config.slowMode
        ? el[key].timeout * config.slowModeMultiplier
        : el[key].timeout
    );

    if (config.basicEvents && el[key].name === "Privacy Policy") {
      await page.close();
      await browser.close();
      console.log(filteredRequests);
      return filteredRequests;
    }
  }

  // End function
  await page.waitForTimeout(5000);
  console.log(filteredRequests);
  await page.waitForTimeout(10000);
  await page.close();
  await browser.close();
  return filteredRequests;
}

module.exports = crawl;
