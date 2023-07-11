# Event Crawler Node version: v18.16.1

Purpose: to check and record events
type node multipleurls.js to test multiple URLs
const puppeteer = require("puppeteer"); - required
const checkOverlay = require("./overlayChecker") - required, to remove overlays
const newUser = require("./newUser"); - optional, check new user flow
const checkInpage = require("./inpageChecker");- optional, check functions inside fit illustrator like compare size, add item to wardrobe
const signInAccount = require("./signInAccount"); - optional, run overlay first then this
const createAccount = require("./createAccount");- optional, run overlay first then this
const generateHTMLTable = require("./htmlGenerator");- optional
const exportToHTML = require("./export");- optional
index.html - if run, you'll see live viewer
htmlGenerator - stores my filtered requests in html format
export.js - function to use to export result or filtered request to html
