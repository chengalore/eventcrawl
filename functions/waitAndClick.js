async function waitAndClick(page, selector) {
  const element = await page.$(selector.location);
  if (selector.name === "Change Gender to Male") {
    await page.select(selector.location, "male");
    return;
  }
  if (selector.name === "Log In Email") {
    await page.type(selector.location, "acbtest123@gmail.com");
    return;
  }
  if (selector.name === "Log In Password") {
    await page.type(selector.location, "Password123!");
    return;
  }
  await element.click();
  console.log(selector.name + " clicked");
}

module.exports = waitAndClick;
