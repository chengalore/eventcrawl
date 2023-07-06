const puppeteer = require('puppeteer');
const url = 'https://i.lumine.jp/item/589230003060004';

async function crawlNetworkTab(url) {
  console.log('Function running');
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the URL
  await page.goto(url, {
    waitUntil: 'networkidle0',
    timeout: 0,
  });

  // Close the overlay by clicking the button inside the shadow root
  await page.evaluate(() => {
    const overlaySelector = 'div#zigzag-worldshopping-checkout'; // Selector for the overlay element
    const overlayElement = document.querySelector(overlaySelector);
    if (overlayElement) {
      const shadowRoot = overlayElement.shadowRoot;
      const closeButton = shadowRoot.querySelector('#zigzag-test__modal-close');
      if (closeButton) {
        closeButton.click();
      } else {
        overlayElement.style.display = 'none';
      }
    }
  });

  // Wait for the element to be visible
  await page.waitForSelector('#vs-inpage');
  console.log('Inpage found');

  // Add a delay before clicking the div with ID 'vs-inpage'
  await page.waitForTimeout(1000); // Wait for 1000 milliseconds (1 second)
  const element = await page.$('#vs-inpage');
  await element.click();

  if (!element) {
    console.log("'#vs-inpage' element not found");
  } else {
    console.log("'#vs-inpage' element clicked");
  }

  // Close the browser
//   await browser.close();
}

crawlNetworkTab(url);
