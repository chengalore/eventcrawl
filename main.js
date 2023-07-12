const config = require("./config");
const crawl = require("./crawl");
const urls = require("./library/urls.json");

if (!config.multipleUrl) {
  crawl(config, urls.adidas);
} else {
  for (const key in urls) {
    const url = urls[key];
    crawl(config, url);
  }
}
