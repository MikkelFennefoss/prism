function getXHR() {
	try {
		// IE7+ and other browsers
		return new XMLHttpRequest();
	}
	catch(e) {
		try { // older IE
			return new 
			ActiveXObject("MSXML2.XMLHTTP.3.0");
		}
		catch(e) {
			return false
		}
	}
}