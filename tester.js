const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Instructs the blank page to navigate a URL
  await page.goto("https://store.flandre.ne.jp/ined/cut-sew/934_32190028/");

  // Fetches page's title
  const title = await page.title();
  console.info(`The title is: ${title}`);

  const selector = "#zigzag-test__modal-close";
  await page.waitForSelector(selector);
  await page.click(selector);

  await browser.close();
})();
