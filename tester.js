const puppeteer = require("puppeteer");

async function test() {
  console.log("start");
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Instructs the blank page to navigate a URL
  const url = "https://i.lumine.jp/item/589230003060004";
  await page.goto(url, { waitUntil: "networkidle0" }); // Wait until there are no more than 0 network connections for at least 500 ms

  // Fetches page's title
  const title = await page.title();
  console.info(`The title is: ${title}`);

  const closeButton2 = await page.evaluate(() => {
    const button = document.querySelector(
      "#zigzag-test__modal-close:not(.src-___index__zigzag___dycI0)"
    );
    console.log("shadowdom found");
    if (button) {
      button.click();
      return true;
    } else {
      return false;
    }
  });

  if (closeButton2) {
    console.log("closed2");
  } else {
    console.log("Button not found!");
  }

  await page.waitForTimeout(2000);
  console.log("hi");
}

test();
