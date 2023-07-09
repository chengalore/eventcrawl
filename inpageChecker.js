async function checkInpage(page, inpageSelector) {
  // Click on the button with the dynamic class _root_ under the specified hierarchy
  const buttonSelector3 =
    '#vs-aoyama-main-modal > div:nth-child(3) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div > div > button span[class^="_root_"]';
  const buttonElement3 = await page.waitForSelector(buttonSelector3);
  await buttonElement3.click();
  console.log("open add item clicked");
  await page.waitForTimeout(4000); // Wait for 1000 milliseconds (1 second)

  // Click on the button with the dynamic class _root_ under the specified hierarchy
  const buttonSelector4 =
    'div[class*="_addItemButtonWrapper_"] > button  span[class^="_root_"]';
  const buttonElement4 = await page.waitForSelector(buttonSelector4);
  await buttonElement4.click();
  console.log("add item clicked");
  await page.waitForTimeout(4000); // Wait for 1000 milliseconds (1 second)

  // Click on the button with the dynamic class _root_ under the specified hierarchy
  const buttonSelector5 =
    'div[class*="_closeButtonContainer_"] > button  span[class^="_root_"]';
  const buttonElement5 = await page.waitForSelector(buttonSelector5);
  await buttonElement5.click();
  console.log("closed button in add item");
  await page.waitForTimeout(2000); // Wait for 1000 milliseconds (1 second)

  // Click on the next element sibling (user select size)
  const nextElementSelector2 =
    '#vs-aoyama-main-modal button[class^="_root"][class*="_sizeButton"] + *';
  const nextElement2 = await page.waitForSelector(nextElementSelector2);
  await nextElement2.click();
  console.log("user selected size clicked");
  await page.waitForTimeout(1000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (edit body info)
  const nextElementSelector3 =
    '#vs-aoyama-main-modal button[class^="_root"][class*="_bodyBtn"] :nth-of-type(3)';
  const nextElement3 = await page.waitForSelector(nextElementSelector3);
  await nextElement3.click();
  console.log("edit body info clicked");
  await page.waitForTimeout(3000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (change gender)
  const nextElementSelector4 = '#vs-aoyama-main-modal select[class^="_select"]';
  await page.waitForSelector(nextElementSelector4);
  await page.select(nextElementSelector4, "male");
  console.log("Selected gender: male");
  await page.waitForTimeout(3000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (save body info)
  const nextElementSelector5 =
    'div[class*="_sheetBottomNavBarPC"] [class^="_root_"]:nth-of-type(2)';
  const nextElement5 = await page.waitForSelector(nextElementSelector5);
  await nextElement5.click();
  console.log("save body info");
  await page.waitForTimeout(4000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (compare to body)
  const nextElementSelector6 = 'div[class*="_bodyBtnContainer"]';
  const nextElement6 = await page.waitForSelector(nextElementSelector6);
  await nextElement6.click();
  console.log("body x item comparison");
  await page.waitForTimeout(4000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (compare to item)
  const nextElementSelector7 =
    'button[class*="_wardrobeItemBtns"] div[class^="_root"';
  const nextElement7 = await page.waitForSelector(nextElementSelector7);
  await nextElement7.click();
  console.log("item x item comparison");
  await page.waitForTimeout(4000); // Wait for 1000 milliseconds (1 second)

  // Close the browser
  // await browser.close();
}

module.exports = checkInpage;
