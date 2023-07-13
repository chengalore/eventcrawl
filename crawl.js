//list of functions
const puppeteer = require("puppeteer");
const waitAndClick = require("./functions/waitAndClick");
const checkOverlay = require("./functions/overlayChecker");

//initiate puppeteer
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

  // run function
  //
  try {
    checkOverlay(page, config.overlay.location, url);
    await page.waitForTimeout(config.overlay.timeout);
  } catch (error) {
    checkOverlay(page, config.overlay.location, url);
    await page.waitForTimeout(config.overlay.timeout);
  }

  const el = config.elements;

  for (const key in el) {
    waitAndClick(page, el[key], el[key].timeout);
    await page.waitForTimeout(
      config.slowMode
        ? el[key].timeout * config.slowModeMultiplier
        : el[key].timeout
    );
  }

  //end function

  await page.waitForTimeout(5000);
  console.log(filteredRequests);

  //   await page.waitForTimeout(10000);
  //     await page.close();
  //     await browser.close();
}

module.exports = crawl;