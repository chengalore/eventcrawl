const puppeteer = require("puppeteer");
const waitAndClick = require("./functions/waitAndClick");
const checkOverlay = require("./functions/overlayChecker");
const { basicEvents } = require("./config");

async function crawl(config, url) {
  const browser = await puppeteer.launch({
    headless: config.headless ? true : false,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });

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

  // Run function
  try {
    await checkOverlay(page, config.overlay.location, url);
    await page.waitForTimeout(config.overlay.timeout);
  } catch (error) {
    await checkOverlay(page, config.overlay.location, url);
    await page.waitForTimeout(config.overlay.timeout);
  }

  const el = config.elements;

  for (const key in el) {
    await waitAndClick(page, el[key]);
    await page.waitForTimeout(
      config.slowMode
        ? el[key].timeout * config.slowModeMultiplier
        : el[key].timeout
    );

    if (basicEvents && el[key].name === "Privacy Policy") {
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
