//this is my server side
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const config = require("./config");
const crawl = require("./crawl");
const urls = require("./library/urls.json");

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/process-urls", (req, res) => {
  const { urls } = req.body;

  async function crawlURLs(urls) {
    const result = await Promise.all(urls.map((url) => crawl(config, url)));
    return result;
  }

  crawlURLs(urls)
    .then((crawlers) => {
      const flattenedResult = crawlers.flat();
      res.send(JSON.stringify(flattenedResult));
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error occurred during crawling.");
    });
});

app.get("/start", (req, res) => {
  async function crawlAllURLs() {
    let result = [];
    if (!config.multipleUrl) {
      result.push(crawl(config, urls.lumine));
    } else {
      for (const key in urls) {
        const url = urls[key];
        result.push(crawl(config, url));
      }
    }
    return Promise.all(result);
  }

  crawlAllURLs()
    .then((crawler) => {
      const flattenedResult = crawler.flat();
      res.send(JSON.stringify(flattenedResult));
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error occurred during crawling.");
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
