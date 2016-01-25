var
  debug = true,
  _log = function () { debug && window.console && console.log.apply(console, arguments);  };


// FUNCIONES ----------------------------

// añade los <a> con stributo rel="external" el target="_blank" para que validen
function externalLinks() {
 if (!document.getElementsByTagName) return;
 var anchors = document.getElementsByTagName("a");
 for (var i=0; i<anchors.length; i++) {
   var anchor = anchors[i];
   if (anchor.getAttribute("href") &&
       anchor.getAttribute("rel") == "external")
     anchor.target = "_blank";
 }
}

/*function elementSupportsAttribute(element,attribute) {
	var test = document.createElement(element);
	if (attribute in test) {
		return true;
	} else {
		return false;
	}
}*/

// AUTOFOCUS ---------------------------
/*
if (!elementSupportsAttribute('input','placeholder')) {
	JavaScript fallback goes here.
}

if (!elementSupportsAttribute('input','autofocus')){
	document.getElementById('status').focus();
}
*/
