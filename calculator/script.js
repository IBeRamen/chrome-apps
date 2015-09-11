chrome.app.runtime.onLaunched.addListener (function() {
  var screenwidth = screen.availWidth;
  var screenheight = screen.availWidth;
  
  chrome.app.window.create('index.html', {
    id: "Calculator",
    
  });
});