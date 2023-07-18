const config = require("./config");
const crawl = require("./crawl");
const urls = require("./library/urls.json");

let result = [];

if (!config.multipleUrl) {
  result.push(crawl(config, urls.lumine));
} else {
  for (const key in urls) {
    const url = urls[key];
    result.push(crawl(config, url));
  }
}
console.log("hi again");
