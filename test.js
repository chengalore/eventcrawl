console.log("hello world");
function testing() {
  console.log("testing 123");
}
function externalFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = "This is the response from the external function.";
      console.log(response);
      resolve(response);
    }, 5000);
  });
}
