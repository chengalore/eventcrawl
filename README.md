# Event Crawler Node version: v18.16.1

Purpose: to check and record events

- type node multipleurls.js to test multiple URLs
- const puppeteer = require("puppeteer"); - required
- const checkOverlay = require("./overlayChecker") - required, to remove overlays
- const newUser = require("./newUser"); - optional, check new user flow
- const checkInpage = require("./inpageChecker");- optional, check functions inside fit illustrator like compare size, add item to wardrobe
- const signInAccount = require("./signInAccount"); - optional, run overlay first then this
- const createAccount = require("./createAccount");- optional, run overlay first then this
- const generateHTMLTable = require("./htmlGenerator");- optional
- const exportToHTML = require("./export");- optional
- index.html - if run, you'll see live viewer
- htmlGenerator - stores my filtered requests in html format
- export.js - function to use to export result or filtered request to html

# Event Crawler Node version: v18.16.1

Event Crawler is designed to extract event information from various websites. It automates the process of gathering data such as event details, providing automatic qa solutions.

By leveraging web scraping techniques and utilizing the Puppeteer library, Event Crawler allows users to specify a list of URLs to crawl and collect event data from. The tool can handle websites with overlays, pop-ups, and other dynamic elements, ensuring accurate and comprehensive data extraction.

With Event Crawler, users can easily configure the scraping parameters, including delay intervals between requests and handling of specific website features. The extracted event data can be exported to HTML or other formats for further analysis, reporting, or integration into other systems.

Table of Contents
-Introduction
-Installation
-Usage
-Features
-Contributing
-License
-Introduction
Event Crawler simplifies the process of gathering event information without having to manually navigate on the page to run events. This tool will automatically extract event details, including event names, store name, source, external User id and if VS kid. It can effortlessly crawl websites with overlays, pop-ups, and other interactive features, ensuring the retrieval of complete and reliable event information.

Installation
To use Event Crawler, follow these installation steps:

Make sure you have Node.js version is v18.16.1 installed on your machine. Event Crawler requires Node.js to run. You can download it from the official Node.js website: https://nodejs.org

Clone the Event Crawler repository from https://github.com/chengalore/eventcrawl or download the source code as a ZIP file.

Open a terminal or command prompt and navigate to the root directory of the Event Crawler project.

Install the required dependencies by running the following command:

Copy code
npm install
This will download and install all the necessary packages and dependencies specified in the package.json file.

Once the installation is complete, you're ready to use Event Crawler!

Configuration
Before running Event Crawler, you may need to configure certain settings according to your requirements. Here's how you can do it:

Open the config.js file in the root directory of the project.

Modify the configuration options as needed. This may include specifying the URLs to crawl, setting delay intervals, defining scraping rules, or adjusting other parameters.

Save the changes.

Configuration
Before running Event Crawler, you may need to configure certain settings according to your requirements. Here's how you can do it:

Open the config.js file in the root directory of the project.

Modify the configuration options as needed.

    multipleUrl:
    crawl:
    slowMode:
    slowModeMultiplier:
    headless:
    signUp:

Save the changes.

Usage
To start using Event Crawler, follow these steps:

Ensure you're in the root directory of the Event Crawler project in your terminal or command prompt.

Run the following command to start the crawler:

Copy code
npm run start

This will execute the main script and initiate the crawling process.

Event Crawler will start visiting the specified URLs, extracting event information, and storing it for further processing.
