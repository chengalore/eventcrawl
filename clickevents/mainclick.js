const { crawlNetworkTab } = require('./clickevents/click.js');

async function mainclick() {
  try {
    const filteredRequests = await crawlNetworkTab('https://store.flandre.ne.jp/luftrobe/knit/923_32170222/');
    console.log(filteredRequests);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

mainclick();  // Invoke the main function
