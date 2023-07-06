const puppeteer = require('puppeteer');
const fs = require('fs');

const urls = [
  'https://www.anotheraddress.jp/products/detail/2211005011005?from_page=top_newitem',
  'https://belluna.jp/goods/448255.html'
];

async function crawlNetworkTab(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Enable request interception
  await page.setRequestInterception(true);

  // Store the filtered network requests
  const filteredRequests = [];

  page.on('request', (request) => {
    const urlWithQuery = request.url();

    if (urlWithQuery.includes('virtusize')) {
      const postData = request.postData();
      const { origin, pathname, searchParams } = new URL(urlWithQuery);
      const urlWithoutQuery = origin + pathname;
      const queryParams = Object.fromEntries(searchParams);

      if (postData) {
        try {
          const { name, source, externalUserId, storeName } = JSON.parse(postData);
          filteredRequests.push({ url: urlWithoutQuery, postData: { name, source, externalUserId, storeName }, queryParams });
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      } else if (Object.keys(queryParams).length > 0) {
        filteredRequests.push({ url: urlWithoutQuery, queryParams });
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

  // Close the browser
  await browser.close();

  return filteredRequests;
}

// Call the crawlNetworkTab function for each URL
async function run() {
  for (const url of urls) {
    const requests = await crawlNetworkTab(url);
    console.log('Filtered Requests:', requests);
    // Do something with the filtered requests
  }
}

// Execute the run function
run();
