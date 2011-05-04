yepnope.addPrefix( 'wax', function ( resource ) {
  resource.noexec = true;

  var isFileProtocol = (location.protocol === 'file:'    ||
                        location.protocol === 'chrome:'  ||
                        location.protocol === 'resource:'),
      id = resource.url.replace(/.mustache/, '').replace(/(.*)\//, ''),
      xhr = new(XMLHttpRequest);

  var injectMustache = function(xhr){
    script = document.createElement( 'script' );
    script.type = 'text/html';
    script.id = id;
    script.appendChild(document.createTextNode(xhr.responseText));

    document.getElementsByTagName('head')[0].appendChild(script);
  }

  xhr.open('GET', resource.url, false);
  xhr.setRequestHeader('Accept','text/plain');
  xhr.send(null);

  if (isFileProtocol) {
    if (xhr.status === 0) {
      injectMustache(xhr);
    } else {
      console.error('something bad happened');
    }
  } else {
    if (xhr.status >= 200 && xhr.status < 300) {
      injectMustache(xhr);
    }
  }

  return resource;
});
