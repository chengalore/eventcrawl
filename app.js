const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const config = require("./config");
const crawl = require("./crawl");
const urls = require("./library/urls.json");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/start", (req, res) => {
  async function test() {
    let result = [];
    if (!config.multipleUrl) {
      result.push(crawl(config, urls.lumine));
    } else {
      for (const key in urls) {
        const url = urls[key];
        result.push(crawl(config, url));
      }
    }
    return Promise.all(result); // Wait for all crawl operations to complete
  }

  test()
    .then((crawler) => {
      const flattenedResult = crawler.flat(); // Flatten the nested arrays of responses
      res.send(JSON.stringify(flattenedResult)); // Send the flattened result to the client
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error occurred during crawling."); // Handle and send an error response
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
