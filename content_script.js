// Description: This script is injected into the page and listens for the
// Alt+Down key combination. When the combination is pressed, it sends a
// message to the background script to open a new tab with the video URL.

document.addEventListener("keydown", function (event) {
  if (event.altKey && event.key === "ArrowDown") {
    browser.runtime.sendMessage({ key: "video_search" });
  }
}, false);
