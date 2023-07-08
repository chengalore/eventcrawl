const puppeteer = require('puppeteer');
const url = 'https://i.lumine.jp/item/589230003060004';
const checkOverlay = require('./overlayChecker');
const checkInpage = require('./inpageChecker');

async function crawlNetworkTab(url) {
  console.log('Function running');
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Enable request interception
  await page.setRequestInterception(true);

  // Store the filtered network requests
  const filteredRequests = [];

  page.on('request', (request) => {
    const urlWithQuery = request.url();

    // if (urlWithQuery.includes('virtusize')) {
    //   if (request.postData()) {
    //     try {
    //       const { storeName, name, source, externalUserId, isKid } = JSON.parse(request.postData());
    //       filteredRequests.push({ storeName, name, source, externalUserId, isKid });
    //     } catch (error) {
    //       console.error('Error parsing JSON:', error);
    //     }
    //   }
    // }
    if (urlWithQuery.includes('virtusize')) {
      const postData = request.postData();
      if (postData) {
        try {
          const { storeName, name, source, externalUserId, isKid } = JSON.parse(postData);
          if (storeName !== undefined) {
            filteredRequests.push({ storeName, name, source, externalUserId, isKid });
          }
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

  const overlaySelector = 'div#zigzag-worldshopping-checkout';
  await checkOverlay(page, overlaySelector);

  const inpageSelector = '#vs-inpage';
  await checkInpage(page, inpageSelector);

  // Close the browser
  // await browser.close();

  console.log('Filtered Requests:', filteredRequests);
}

crawlNetworkTab(url);
