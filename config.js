//this is where you store all values
const config = {
  multipleUrl: Boolean,
  crawl: Boolean,
  slowMode: Boolean,
  slowModeMultiplier: Number,
  headless: "new",
  signUp: {},
  basicEvents: Boolean,
  widgets: {
    inpage: {
      name: "Inpage Widget",
      location: "#vs-inpage",
      timeout: 5000,
    },
    inpageLuxury: {
      name: "Inpage Luxury",
      location: "#vs-inpage-luxury",
      timeout: 5000,
    },
    inpageMini: {
      name: "Inpage Mini",
      location: "#vs-inpage-mini",
      timeout: 5000,
    },
  },
  elements: {
    checkBox: {
      name: "Privacy Policy",
      location: "input#linkText + *",
      timeout: 1000,
    },
    nextStepButtonAfterPrivacyPolicy: {
      name: "Next Step",
      location:
        '#vs-aoyama-main-modal > div:nth-child(3) > div:nth-child(3) > div > div:nth-child(3) button[class^="_root_"]',
      timeout: 1000,
    },
    ageHeightAdded: {
      name: "Age and Height",
      location:
        '#vs-aoyama-main-modal > div:nth-child(3) > div:nth-child(3) > div > div:nth-child(4) button[class^="_root_"]',
      timeout: 5000,
    },
    optionalNextButton: {
      name: "Optional Measurement",
      location:
        '#vs-aoyama-main-modal > div:nth-child(3) > div:nth-child(3) > div > div:nth-child(5) button[class^="_root_"]',
      timeout: 5000,
    },
    addItemButton: {
      name: "Add Item Button",
      location:
        '#vs-aoyama-main-modal div[class*="_root"] [class*="_avatarOuterContainer"]',
      timeout: 2000,
    },
    addNewItem: {
      name: "Add New Item",
      location:
        'div[class*="_addItemButtonWrapper_"] > button  span[class^="_root_"]',
      timeout: 2000,
    },
    closeButtonNewItem: {
      name: "Close Button New Item",
      location:
        'div[class*="_closeButtonContainer_"] > button  span[class^="_root_"]',
      timeout: 2000,
    },
    userSelectedSize: {
      name: "User Selected Size",
      location:
        '#vs-aoyama-main-modal button[class^="_root"][class*="_sizeButton"] + *',
      timeout: 2000,
    },
    oneSize: {
      name: "One Size",
      location:
        '#vs-aoyama-main-modal div[class*="_root"] [class*="_oneSizeContainer"]',
      timeout: 2000,
    },
    editBodyInfoButton: {
      name: "Edit Body Info Button",
      location:
        '#vs-aoyama-main-modal button[class^="_root"][class*="_bodyBtn"] :nth-of-type(3)',
      timeout: 2000,
    },
    // changeGender: {
    //   name: "Change Gender to Male",
    //   location: '#vs-aoyama-main-modal select[class^="_select"]',
    //   timeout: 2000,
    // },
    // saveEditBodyInfo: {
    //   name: "Save Edit Body Info",
    //   location:
    //     'div[class*="_sheetBottomNavBarPC"] [class^="_root_"]:nth-of-type(2)',
    //   timeout: 2000,
    // },
    // saveEditBodyInfo: {
    //   name: "Save Edit Body Info",
    //   location:
    //     'div[class*="_sheetBottomNavBarPC"] [class^="_root_"]:nth-of-type(2)',
    //   timeout: 2000,
    // },
    // compareBodyxItem: {
    //   name: "Compare Body x Item",
    //   location: 'div[class*="_bodyBtnContainer"]',
    //   timeout: 2000,
    // },
    // compareItemxItem: {
    //   name: "Compare Item x Item",
    //   location: 'button[class*="_wardrobeItemBtns"] div[class^="_root"]',
    //   timeout: 2000,
    // },
    // LogInButton: {
    //   name: "Log In Button",
    //   location: 'button[class*="_loginButton"] span',
    //   timeout: 2000,
    // },
    // LogInEmail: {
    //   name: "Log In Email",
    //   location: "#SignInEmailInput",
    //   timeout: 2000,
    // },
    // LogInPassword: {
    //   name: "Log In Password",
    //   location: "#signInPasswordInput",
    //   timeout: 2000,
    // },
    // SubmitLogInButton: {
    //   name: "Submit Log In Button",
    //   location: 'button[class*="_submitBtn"] span',
    //   timeout: 2000,
    // },
  },
  overlay: {
    name: "overlay",
    location: "#zigzag-worldshopping-checkout",
    timeout: 4000,
  },
};

module.exports = config;
