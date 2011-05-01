// Gets info from the DOM
function contextMenuHandler(event){
  console.debug(event.target.nodeName)
  safari.self.tab.setContextMenuEventUserInfo(event, event.target.nodeName);
}

document.addEventListener('contextmenu', contextMenuHandler, false);

function onMessage(event) {
  if (event.name === 'injectHighballer') {
    injectHighballer();
  }
}

// http://developer.apple.com/library/safari/#documentation/Tools/Conceptual/SafariExtensionGuide/MessagesandProxies/MessagesandProxies.html%23//apple_ref/doc/uid/TP40009977-CH14-SW1
safari.self.addEventListener('message', onMessage, false);

var injectHighballer = function(params){
  var frame = document.createElement('iframe');

  frame.id = 'highballr-iframe';
  frame.src = safari.extension.baseURI + 'highballr.html';

  document.body.appendChild(frame);
}