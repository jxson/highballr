// Gets info from the DOM
function contextMenuHandler(event){
  console.debug(event.target.nodeName)
  safari.self.tab.setContextMenuEventUserInfo(event, event.target.nodeName);
}

document.addEventListener('contextmenu', contextMenuHandler, false);
