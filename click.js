const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false }); // Launch a non-headless browser for debugging
    const page = await browser.newPage();

    // Enable request interception
    await page.setRequestInterception(true);

    // Store the filtered network requests
    const filteredRequests = [];

    page.on('request', (request) => {
      const urlWithQuery = request.url();

      // Edited lines
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
    const url = 'https://store.flandre.ne.jp/luftrobe/knit/923_32170222/';
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Find and click the button by its text content
    await page.evaluate(() => {
      const buttons = document.querySelectorAll('span');
      for (const button of buttons) {
        if (button.textContent.trim() === 'Try it on') {
          button.click();
          break;
        }
      }
    });

    // Wait for the network requests to settle
    await page.waitForTimeout(2000); // Adjust the delay if necessary

    // Close the browser
    await browser.close();

    console.log(filteredRequests);
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
