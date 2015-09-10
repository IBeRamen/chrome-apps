chrome.app.runtime.onLoad.addListener (function() {
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 500;
  var height = 300;
  
  chrome.app.window.create('index.html', {
    id: "HelloWorldID",
    outerBounds: {
      width: width,
      height: height,
      left: Math.round((screenWidth-width)/2),
      top: Math.round((screenHeight-height)/2)
    }
  });
});