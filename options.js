document.addEventListener("DOMContentLoaded", function () {
  // Get the video URL from the storage
  var defaultVideoURL = "https://www.youtube.com/watch?v=rWSgsbWiX_g";
  browser.storage.local.get(["video_url"], function (result) {
    if (!result.video_url) {
      browser.storage.local.set({ video_url: defaultVideoURL });
      document.getElementById("video_url").value = defaultVideoURL;
    } else {
      document.getElementById("video_url").value = result.video_url;
    }
  });

  document.getElementById("video_url").addEventListener("change", function () {
    var video_url = document.getElementById("video_url").value;
    browser.storage.local.set({ video_url: video_url });
  });

});
