async function createAccount(page, inpageSelectorSignUp) {
  await page.waitForSelector(inpageSelectorSignUp);
  console.log("Inpage found");

  await page.waitForTimeout(1000); // Wait for 1000 milliseconds (1 second)

  const inpageElement = await page.$(inpageSelectorSignUp);
  await inpageElement.click();
  console.log("vs-inpage clicked");
  await page.waitForTimeout(1000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (login button)
  const SignUpSelector1 = 'button[class*="_loginButton"] span';
  const SignUp1 = await page.waitForSelector(SignUpSelector1);
  await SignUp1.click();
  console.log("login button");
  await page.waitForTimeout(3000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (login button)
  const SignUpSelector2 = 'div[class*="_signUpContainer"] span';
  const SignUp2 = await page.waitForSelector(SignUpSelector2);
  await SignUp2.click();
  console.log("signUp button");
  await page.waitForTimeout(3000); // Wait for 1000 milliseconds (1 second)

  //create ACCOUNT ----start----

  // Click on the span element with a dynamic class (sign up account)
  const nextElementSelector16 =
    'div[class*="_alignItemsCenter"] > div:nth-child(4) button span[class^="_root_"]';
  const nextElement16 = await page.waitForSelector(nextElementSelector16);
  await nextElement16.click();
  console.log("sign up account");
  await page.waitForTimeout(8000); // Wait for 1000 milliseconds (1 second)

  // Auto input data: name and email
  const nameSelector =
    'div[class*="_root"][class*="_formInput"] >  input:not(#SignInEmailInput):not(#signInPasswordInput)';
  const emailSelector = "#SignUpEmailInput";
  const passwordSelector = "#SignUpPasswordInput";

  // Generate a random email address
  const randomEmail = generateUniqueRandomEmail();
  function generateUniqueRandomEmail() {
    const timestamp = new Date().getTime(); // Get current timestamp
    const randomString = Math.random().toString(36).substring(2, 8); // Generate random string

    const email = `user${timestamp}${randomString}@example.com`; // Combine timestamp and random string with a prefix and suffix

    return email;
  }

  // Auto input name
  await page.type(nameSelector, "John");
  await page.waitForTimeout(2000); // Wait for 1000 milliseconds (1 second)
  await page.type(emailSelector, randomEmail); //Type the random email address into the email input field
  await page.waitForTimeout(2000); // Wait for 1000 milliseconds (1 second)
  await page.type(passwordSelector, "Password123!");
  await page.waitForTimeout(2000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (click outside)
  const clickOutsideSelector1 =
    'button[class*="_eye"] span[class*="_root"]:not(#signInPasswordInput)';
  const clickOutside1 = await page.waitForSelector(clickOutsideSelector1);
  await clickOutside1.click();
  await page.waitForTimeout(2000); // Wait for 1000 milliseconds (1 second)

  // Click on the span element with a dynamic class (submit account created)
  const signUpSelector3 = 'button[class*="_submit"]:not([disabled])';
  const signUp3 = await page.waitForSelector(signUpSelector3);
  await signUp3.click();
  console.log("submit account created");
  await page.waitForTimeout(3000); // Wait for 1000 milliseconds (1 second)

  // Close the browser
  // await browser.close();
}

module.exports = createAccount;
