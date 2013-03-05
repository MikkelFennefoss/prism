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

// ajax form functions
function getContactForm(){
	xhr = getXHR();
	xhr.onreadystatechange = handleResponse;
	xhr.open('GET', 'templates/contactForm.html', true);
	xhr.send();
}

function handleResponse() {
	if(xhr.readyState == 4) {
		if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) { 
			//if all is good call this function with the result
			displayForm(xhr.responseText);
		}
	}
}

function displayForm(responseText){
	//create and display form if not exist
	if (!document.getElementById('form')) {
		var container = document.getElementById('container');
		var section = document.createElement('section');
		section.setAttribute('class', 'ajaxForm');
		section.setAttribute('id', 'form');
		section.innerHTML = responseText;
		container.appendChild(section);	
	};

	//close handler
	var btn = document.getElementById('closeBtn');
	btn.addEventListener('click', function(){
		//removes section from the DOM
		section.parentNode.removeChild(section);
	});
}
//event handler for form 
document.getElementById('contactForm').onclick = function(e){
	e.preventDefault();
	getContactForm();
};
