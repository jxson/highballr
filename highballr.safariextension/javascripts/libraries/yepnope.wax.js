yepnope.addPrefix( 'wax', function ( resource ) {
  resource.noexec = true;

  var isFileProtocol = (location.protocol === 'file:'    ||
                        location.protocol === 'chrome:'  ||
                        location.protocol === 'resource:'),
      id = resource.url.replace(/.mustache/, '').replace(/(.*)\//, ''),
      xhr = new(XMLHttpRequest);

  xhr.open('GET', resource.url, false);
  xhr.setRequestHeader('Accept','text/plain');
  xhr.send(null);

  if (isFileProtocol) {
    if (xhr.status === 0) {
      script = document.createElement( 'script' );
      script.type = 'text/html';
      script.id = id;
      script.appendChild(document.createTextNode(xhr.responseText));

      document.getElementsByTagName('head')[0].appendChild(script);
    } else {
      console.error('something bad happened');
    }
  } else {
    console.debug('TODO: normal non-file xhr')
  }

  return resource;
});
