async function checkOverlay(page, overlaySelector) {
  const overlayElement = await page.$(overlaySelector);
  //for websites that have overlay or pop-up
  if (overlayElement) {
    await page.evaluate((overlaySelector) => {
      const overlayElement = document.querySelector(overlaySelector);
      const shadowRoot = overlayElement.shadowRoot;
      const closeButton = shadowRoot.querySelector("#zigzag-test__modal-close");
      if (closeButton) {
        closeButton.click();
      } else {
        overlayElement.style.display = "none";
      }
    }, overlaySelector);
  }
  // Wait for a brief timeout to allow the second overlay to appear
  await page.waitForTimeout(1000);

  // Select and close the second overlay if it exists
  const secondOverlayElement = await page.$(
    'div[class*="karte-widget__content"] i[class^="_icon-close"]'
  );
  if (secondOverlayElement) {
    await secondOverlayElement.click();
  }
}

module.exports = checkOverlay;
