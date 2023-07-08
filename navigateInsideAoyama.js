async function checkInsideAoyama(page, insideAoyamaSelector ) {
    await insideAoyamaButton.click();
    console.log('Inside aoyama found');

    await page.waitForTimeout(1000); // Wait for 1000 milliseconds (1 second)

    // Click on the button with the dynamic class _root_ under the specified hierarchy
    const buttonSelector3 = '#vs-aoyama-main-modal > div:nth-child(3) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div > div > button span[class^="_root_"]';
    const buttonElement3 = await page.waitForSelector(buttonSelector3);
    await buttonElement3.click();
    console.log("open add item clicked");

    await page.waitForTimeout(1000); // Wait for 1000 milliseconds (1 second)


    // Close the browser
    // await browser.close();
}

module.exports = checkInsideAoyama;