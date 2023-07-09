// Click on the span element with a dynamic class (select menu)
const nextElementSelector10 =
  'button[class*="_menuButton"] span[class^="_root_"]';
const nextElement10 = await page.waitForSelector(nextElementSelector10);
await nextElement10.click();
console.log("select menu");
await page.waitForTimeout(4000); // Wait for 1000 milliseconds (1 second)

// Click on the span element with a dynamic class (select wardrobe)
const nextElementSelector11 = 'ul[class*="_linkList"] li[class^="_menuLink_"]';
const nextElement11 = await page.waitForSelector(nextElementSelector11);
await nextElement11.click();
console.log("select wardrobe");
await page.waitForTimeout(3000); // Wait for 1000 milliseconds (1 second)

// Click on the span element with a dynamic class (edit silhouette)
const nextElementSelector12 =
  'div[class*="_withGutter"] > [class^="_root_"]:nth-of-type(2) > div';
const nextElement12 = await page.waitForSelector(nextElementSelector12);
await nextElement12.click();
console.log("edit silhouette");
await page.waitForTimeout(6000); // Wait for 1000 milliseconds (1 second)

// Click on the span element with a dynamic class (edit measurements)
const nextElementSelector13 = 'h6[class^="_root"]';
const nextElement13 = await page.waitForSelector(nextElementSelector13);
await nextElement13.click();
console.log("edit measurements");
await page.waitForTimeout(1000); // Wait for 1000 milliseconds (1 second)

// Click on the span element with a dynamic class (save edited silhouette)
const nextElementSelector14 =
  'div[class*="_bottomNavBar"] button[class*="inverse"]';
const nextElement14 = await page.waitForSelector(nextElementSelector14);
await nextElement14.click();
console.log("save edited silhouette");
await page.waitForTimeout(3000); // Wait for 1000 milliseconds (1 second)

// Click on the span element with a dynamic class (select account)
const nextElementSelector15 =
  'div[class*="_withGutter"] > [class^="_root_"]:nth-of-type(3) div';
const nextElement15 = await page.waitForSelector(nextElementSelector15);
await nextElement15.click();
console.log("select account");
await page.waitForTimeout(2000); // Wait for 1000 milliseconds (1 second)

// //SGI start---

// // Click on the span element with a dynamic class (add new item sgi)
// const nextElementSelector6 =
//   '#vs-aoyama-main-modal button[class*="_wardrobeBtn"] > span[class^="_root_"]:nth-of-type(2)';
// const nextElement6 = await page.waitForSelector(nextElementSelector6);
// await nextElement6.click();
// console.log("add new item sgi");
// await page.waitForTimeout(5000); // Wait for 1000 milliseconds (1 second)

// // Click on the span element with a dynamic class (pick category sgi)
// const nextElementSelector7 =
//   '#vs-aoyama-main-modal button[class*="_filterBtn"] span[class^="_root_"]:nth-of-type(2) span';
// const nextElement7 = await page.waitForSelector(nextElementSelector7);
// await nextElement7.click();
// console.log("pick category sgi");
// await page.waitForTimeout(3000); // Wait for 1000 milliseconds (1 second)

// // Click on the span element with a dynamic class (add manual measurements sgi)
// const nextElementSelector8 =
//   '#vs-aoyama-main-modal button[class*="_changeToCustomItemBtn"] span[class^="_root_"]';
// const nextElement8 = await page.waitForSelector(nextElementSelector8);
// await nextElement8.click();
// console.log("add manual measurements sgi");
// await page.waitForTimeout(3000); // Wait for 1000 milliseconds (1 second)

// // Click on the span element with a dynamic class (save measurements sgi)
// const nextElementSelector9 =
//   'div[class*="_addToClosetBtn"] span[class^="_root_"]';
// const nextElement9 = await page.waitForSelector(nextElementSelector9);
// await nextElement9.click();
// console.log("save measurements sgi");
// await page.waitForTimeout(5000); // Wait for 1000 milliseconds (1 second)

// //SGI end---
