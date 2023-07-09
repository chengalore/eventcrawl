async function signInAccount(page, inpageSelectorLogIn) {
  await page.waitForSelector(inpageSelectorLogIn);
  console.log("Inpage found");

  await page.waitForTimeout(1000); // Wait for 1000 milliseconds (1 second)

  const inpageElement = await page.$(inpageSelectorLogIn);
  await inpageElement.click();
  console.log("vs-inpage clicked");
  await page.waitForTimeout(1000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (login button)
  const logInSelector1 = 'button[class*="_loginButton"] span';
  const logIn1 = await page.waitForSelector(logInSelector1);
  await logIn1.click();
  console.log("login button");
  await page.waitForTimeout(3000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (signin email)
  const logInSelector2 = "#SignInEmailInput";
  const logIn2 = await page.waitForSelector(logInSelector2);
  await logIn2.type("acbtest123@gmail.com");
  console.log("sign in email");
  await page.waitForTimeout(2000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (sign in password)
  const logInSelector3 = "#signInPasswordInput";
  const logIn3 = await page.waitForSelector(logInSelector3);
  await logIn3.type("Password123!");
  console.log("sign in password");
  await page.waitForTimeout(2000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (sign in clicked)
  const logInSelector4 = 'button[class*="_submitBtn"] span';
  const logIn4 = await page.waitForSelector(logInSelector4);
  await logIn4.click();
  console.log("sign in clicked");
  await page.waitForTimeout(2000); // Wait for 1000 milliseconds (1 second)

  // Close the browser
  // await browser.close();
}

module.exports = signInAccount;
