chrome.app.runtime.onLaunched.addListener (function() {
  chrome.app.window.create('index.html', {
    id: "Calculator",
    innerBounds: {
      width: 350,
      height: 450,
      minWidth: 350,
      minHeight: 450
    }
  });
});