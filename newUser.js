async function newUser(page, newUserSelector) {
  await page.waitForSelector(newUserSelector);
  console.log("Inpage found");

  await page.waitForTimeout(1000); // Wait for 1000 milliseconds (1 second)

  const inpageElement = await page.$(newUserSelector);
  await inpageElement.click();
  console.log("vs-inpage clicked");
  await page.waitForTimeout(1000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (privacy policy)
  const nextElementSelector = "input#linkText + *";
  const nextElement = await page.waitForSelector(nextElementSelector);
  await nextElement.click();
  console.log("privacy policy clicked");
  await page.waitForTimeout(1000); // Wait for 1000 milliseconds (1 second)

  // Click on the button with the dynamic class _root_ under the specified hierarchy
  const buttonSelector =
    '#vs-aoyama-main-modal > div:nth-child(3) > div:nth-child(3) > div > div:nth-child(3) button[class^="_root_"]';
  const buttonElement = await page.waitForSelector(buttonSelector);
  await buttonElement.click();
  console.log("next button clicked");
  await page.waitForTimeout(1000); // Wait for 1000 milliseconds (1 second)

  // Click on the button with the dynamic class _root_ under the specified hierarchy
  const buttonSelector1 =
    '#vs-aoyama-main-modal > div:nth-child(3) > div:nth-child(3) > div > div:nth-child(4) button[class^="_root_"]';
  const buttonElement1 = await page.waitForSelector(buttonSelector1);
  await buttonElement1.click();
  console.log("age and height next button clicked");
  await page.waitForTimeout(2000); // Wait for 1000 milliseconds (2 second)

  // Click on the button with the dynamic class _root_ under the specified hierarchy
  const buttonSelector2 =
    '#vs-aoyama-main-modal > div:nth-child(3) > div:nth-child(3) > div > div:nth-child(5) button[class^="_root_"]';
  const buttonElement2 = await page.waitForSelector(buttonSelector2);
  await buttonElement2.click();
  console.log("optional next button clicked");
  await page.waitForTimeout(8000); // Wait for 1000 milliseconds (2 second)

  // Close the browser
  // await browser.close();
}

module.exports = newUser;
