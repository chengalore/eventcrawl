const puppeteer = require("puppeteer");

async function test() {
  console.log("start");
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Instructs the blank page to navigate a URL
  const url = "https://www.estnation.co.jp/item/detail/1_332_3215811071877/719";
  await page.goto(url, { waitUntil: "networkidle0" }); // Wait until there are no more than 0 network connections for at least 500 ms

  // Fetches page's title
  const title = await page.title();
  console.info(`The title is: ${title}`);

  await page.evaluate(() => {
    const shadowRoot = document.querySelector(
      "#zigzag-worldshopping-checkout"
    ).shadowRoot;
    const closeButton = shadowRoot.querySelector(
      "#zigzag-test__modal-close:not(.src-___index__zigzag___dycI0)"
    );
    if (closeButton) {
      closeButton.click();
      console.log("closed");
    }
  });
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    const closeButton2 = document.querySelector("#karte-c i");
    if (closeButton2) {
      closeButton2.click();
      console.log("closed2");
    }
  });
  await page.waitForTimeout(2000);
  console.log("hi");
}

test();
