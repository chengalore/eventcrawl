const fs = require("fs");

function exportToHTML(htmlTable) {
  // Write the new result to the index.html file, overwriting the existing content
  fs.writeFileSync("./index.html", htmlTable, "utf8");
}

module.exports = exportToHTML;
