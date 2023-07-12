async function checkOverlay(page, overlaySelector, url) {
  const overlayElement = await page.$(overlaySelector);

  // For websites that have overlay or pop-up
  if (overlayElement) {
    await page.evaluate(
      async (overlaySelector, url) => {
        const overlayElement = document.querySelector(overlaySelector);
        const shadowRoot = overlayElement.shadowRoot;

        let closeButton = shadowRoot.querySelector("#zigzag-test__modal-close");
        if (
          url === "https://sanyo-i.jp/s/mackintosh-philosophy-mens/p/R8R4560260"
        ) {
          console.log("Checking sanyo");
          closeButton = shadowRoot.querySelector(
            "#zigzag-test__modal-close:not(.src-___index__zigzag___dycI0)"
          );

          // Select the second overlay if sanyo
          async function closeSecondOverlay() {
            const overlay2 =
              'div[class*="_card__4YEL"] button[class*="_btn-close"] i';
            const overlayButton = document.querySelector(overlay2);
            if (overlayButton) {
              overlayButton.click();
              console.log("Second overlay 'x' button clicked");
            }
          }
          await closeSecondOverlay();
        } else {
          closeButton = shadowRoot.querySelector("#zigzag-test__modal-close");
        }

        if (closeButton) {
          closeButton.click();
        } else {
          overlayElement.style.display = "none";
        }
      },
      overlaySelector,
      url
    );
  }
}

module.exports = checkOverlay;
