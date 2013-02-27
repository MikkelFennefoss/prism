//grab audio element from DOM
var audioElem = document.getElementById('audioCtrl');
var trackTitle = document.getElementById('trackTitle');

//create array of objects withholding the information about tracks
var tracks = [
	{artist:'JamesBlake', title:'LimitToYourLove', mime:'mp3', },
	{artist:'JamesBlake', title:'Lindesfarne', mime:'mp3', }
];
//two functions that set and play tracks
var i = 0;
var audioSrc = document.createElement('source');
function setTrack(){
	audioLink = 'audio/'+tracks[i].artist+'-'+tracks[i].title+'.'+tracks[i].mime;
	audioSrc.setAttribute('src', audioLink);
 	audioElem.appendChild(audioSrc);

 	trackName = tracks[i].artist+' - '+tracks[i].title;
 	trackTitle.innerHTML = trackName;

 	audioCtrl.load();
 	audioCtrl.play();
 	i++;
};
function nextTrack(){
	console.log(i);
	if (i >= tracks.length) {
		i = 0;
	};
	setTrack();
};

//grab elements from DOM and handle events on click
var play = document.getElementById('play');
var pause = document.getElementById('pause');
var next = document.getElementById('next');

play.addEventListener('click', function(){
    audioCtrl.play();
}, false);
pause.addEventListener('click', function(){
    audioCtrl.pause();
}, false);
next.addEventListener('click', function(){
    nextTrack();
}, false);

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

window.onload = function(){
	//on load play the first track
	setTrack();

	//event handler for the ajax form
	document.getElementById('contactForm').onclick = function(e){
		e.preventDefault();
		getContactForm();
	};
}