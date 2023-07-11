const puppeteer = require("puppeteer");
const checkOverlay = require("./overlayChecker");
const newUser = require("./newUser");
// const checkInpage = require("./inpageChecker");
// const signInAccount = require("./signInAccount");
// const createAccount = require("./createAccount");
const generateHTMLTable = require("./htmlGenerator");
const exportToHTML = require("./export");
const urls = [
  "https://sanyo-i.jp/s/mackintosh-philosophy-mens/p/R8R4560260",
  "https://i.lumine.jp/item/589230003060004",
  // Add more URLs here
];

(async () => {
  const filteredRequests = [];

  for (const url of urls) {
    try {
      const requests = await crawlNetworkTab(url);
      filteredRequests.push(...requests);
      await delay(5000); // Delay between URLs (in milliseconds)
    } catch (error) {
      console.error(`Error crawling ${url}:`, error);
      console.log(`Rerunning ${url}`);
      const requests = await crawlNetworkTab(url);
      filteredRequests.push(...requests);
      await delay(5000); // Delay between retries (in milliseconds)
    }
  }

  // Generate the HTML table
  const htmlTable = generateHTMLTable(filteredRequests);

  // Export the result to HTML
  exportToHTML(htmlTable);
})();

async function crawlNetworkTab(url) {
  console.log(`Crawling ${url}`);
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Enable request interception
  await page.setRequestInterception(true);

  // Store the filtered network requests
  const filteredRequests = [];

  page.on("request", (request) => {
    const urlWithQuery = request.url();

    if (urlWithQuery.includes("virtusize")) {
      const postData = request.postData();
      if (postData) {
        try {
          const { storeName, name, source, externalUserId, isKid } =
            JSON.parse(postData);
          if (storeName !== undefined) {
            filteredRequests.push({
              storeName,
              name,
              source,
              externalUserId,
              isKid,
            });
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    }

    // Continue all requests
    request.continue();
  });
  //add delay before opening inpage for stores with overlay
  if (url === "https://sanyo-i.jp/s/mackintosh-philosophy-mens/p/R8R4560260") {
    await page.goto(url);
    await page.waitForTimeout(5000);
  } else {
    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 0,
    });
  }

  //List of Actions
  const overlaySelector = "div#zigzag-worldshopping-checkout";
  await checkOverlay(page, overlaySelector, url);

  const newUserSelector = "#vs-inpage";
  await newUser(page, newUserSelector);

  // Implement other functions as needed
  // const inpageSelector = "#vs-inpage";
  // await checkInpage(page, inpageSelector);

  // const inpageSelectorSignUp = "#vs-inpage";
  // await createAccount(page, inpageSelectorSignUp);

  // const inpageSelectorLogIn = "#vs-inpage";
  // await signInAccount(page, inpageSelectorLogIn);

  // Close the page and browser
  await page.close();
  await browser.close();

  console.log("Filtered Requests:", filteredRequests);

  return filteredRequests;
}
//add delay on opening new URL
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
