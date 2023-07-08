async function checkOverlay(page, overlaySelector) {
  const overlayElement = await page.$(overlaySelector);
//for websites that have overlay or pop-up 
  if (overlayElement) {
    await page.evaluate((overlaySelector) => {
      const overlayElement = document.querySelector(overlaySelector);
      const shadowRoot = overlayElement.shadowRoot;
      const closeButton = shadowRoot.querySelector('#zigzag-test__modal-close');
      if (closeButton) {
        closeButton.click();
      } else {
        overlayElement.style.display = 'none';
      }
    }, overlaySelector);
  }
}

module.exports = checkOverlay;
