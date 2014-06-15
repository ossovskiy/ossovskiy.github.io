

function setCookie (name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}

function setColor (color) {
    el = $(document.body);
    el.removeClass('light');
    el.removeClass('dark');
    el.addClass(color);

    setCookie("color", color);
}

function changeColor() {
   if(getCookie("color") == 'dark') {
       setColor("light");
   }
    else {
       setColor("dark");
   }
}


function init() {
    if(getCookie("color") == 'light') {
        setColor("light");
    }
}

 init();


