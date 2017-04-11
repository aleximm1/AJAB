console.log("test")
console.log("test2")
// chrome.browserAction.onClicked.addListener((tab) => {
//   console.log("hi")
// });
function throwError() {
  alert("test")
}
// throwError()

chrome.browserAction.onClicked.addListener(throwError);
