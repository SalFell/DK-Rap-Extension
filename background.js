// Description: This script is responsible for listening to the messages sent from
// the popup and content scripts and performing the appropriate actions. Namely,
// it will open a new tab with the video URL and close it after a random amount
// of time between 30 and 120 seconds.

browser.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.key === "video_search") {
      browser.storage.local.get(["video_url"], function (result) {
        var video_url = result.video_url;
        browser.tabs.create({ url: video_url });

        // generate a random number of seconds between 30 and 120
        var randomDuration = Math.floor(Math.random() * (120 - 30 + 1)) + 30;

        setTimeout(function () {
          browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
            browser.tabs.remove(tabs[0].id);
          });
        }, randomDuration * 1000);
      });
    }
  });
