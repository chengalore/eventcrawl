const puppeteer = require('puppeteer');
const fs = require('fs');

async function crawlNetworkTab(url) {
  console.log('Function running');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Enable request interception
  await page.setRequestInterception(true);

  // Store the filtered network requests
  const filteredRequests = [];

  page.on('request', (request) => {
    const urlWithQuery = request.url();

    if (urlWithQuery.includes('virtusize')) {
      const postData = request.postData();
      if (postData) {
        try {
          const { storeName, name, source, externalUserId, isKid } = JSON.parse(postData);
          if (storeName !== undefined) {
            filteredRequests.push({ storeName, name, source, externalUserId, isKid });
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
    }

    // Continue all requests
    request.continue();
  });

  // Navigate to the URL
  await page.goto(url, {
    waitUntil: 'networkidle0',
    timeout: 0,
  });

  console.log('Filtered Requests:', filteredRequests);

  // Close the browser
  await browser.close();

  // Export filtered requests to HTML table
  const html = generateHTMLTable(filteredRequests);
  const filename = 'filtered_requests.html';
  fs.writeFileSync(filename, html);
  console.log(`Filtered requests exported to ${filename}`);
}

function generateHTMLTable(filteredRequests) {
  let html = `
    <html>
    <head>
      <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1px solid black;
          padding: 8px;
          text-align: left;
        }
      </style>
    </head>
    <body>
      <h1>Filtered Requests</h1>
  `;

  filteredRequests.forEach((request) => {
    html += `
      <table>
        <tr>
          <th colspan="2">Store Name: ${request.storeName}</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Source</th>
        </tr>
        <tr>
          <td>${request.name}</td>
          <td>${request.source}</td>
        </tr>
      </table>
    `;
  });

  html += `
    </body>
    </html>
  `;

  return html;
}

// URLs to crawl
const urls = [
  'https://i.lumine.jp/item/589230003060004',
  'https://voi.0101.co.jp/voi/wsg/wrt-5_mcd-TO910_cpg-095_pno-09_ino-01.html?intid=ttop_main_r',
  'https://shop.adidas.jp/products/HC4509/',
  'https://dfashion.docomo.ne.jp/product/detail/id_504525212-mc_03N',
  'https://www.ec-store.net/sws/g/g11896073/'
];

// Call the function for each URL
urls.forEach((url) => crawlNetworkTab(url));