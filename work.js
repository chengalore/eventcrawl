const puppeteer = require('puppeteer');

async function crawlNetworkTab(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Enable request interception
  await page.setRequestInterception(true);

  // Store the filtered network requests
  const filteredRequests = [];

  page.on('request', (request) => {
    const urlWithQuery = request.url();

    //edited lines
    if (urlWithQuery.includes('virtusize')) {
      if (request.postData()) {
        try {
          const { storeName, name, source, externalUserId, isKid } = JSON.parse(request.postData());
          filteredRequests.push({ storeName, name, source, externalUserId, isKid });
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
    }

    // Continue all requests
    request.continue();
  });

  // Navigate to the URL
  await page.goto(url, {
    waitUntil: 'networkidle0',
    timeout: 0,
  });

  // Wait for the element to be visible
await page.waitForSelector('#vs-inpage');

  // Click the div with ID 'vs-inpage'
await page.click('#vs-inpage');


  // Close the browser
  await browser.close();

  return filteredRequests;
}

module.exports = { crawlNetworkTab };
