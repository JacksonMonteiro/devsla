const modelSAnchor = document.getElementById('model-s-anchor');
const model3Anchor = document.getElementById('model-3-anchor');
const modelXAnchor = document.getElementById('model-x-anchor');
const modelYAnchor = document.getElementById('model-y-anchor');
const solarRoofAnchor = document.getElementById('solar-roof-anchor');
const solarPanelsAnchor = document.getElementById('solar-panels-anchor');


modelSAnchor.addEventListener('click', (e) => {
	e.preventDefault();
	window.scrollTo({
		top: document.getElementById('model-s').offsetTop,
		behavior: 'smooth'
	});
});

model3Anchor.addEventListener('click', (e) => {
	e.preventDefault();
	window.scrollTo({
		top: document.getElementById('model-3').offsetTop,
		behavior: 'smooth'
	});
});

modelXAnchor.addEventListener('click', (e) => {
	e.preventDefault()
	window.scrollTo({
		top: document.getElementById('model-x').offsetTop,
		behavior: 'smooth'
	});
});

modelYAnchor.addEventListener('click', (e) => {
	e.preventDefault();
	window.scrollTo({
		top: document.getElementById('model-y').offsetTop,
		behavior: 'smooth'
	});
});

solarRoofAnchor.addEventListener('click', (e) => {
	e.preventDefault();
	window.scrollTo({
		top: document.getElementById('solar-roof').offsetTop,
		behavior: 'smooth'
	});
});

solarPanelsAnchor.addEventListener('click', (e) => {
	e.preventDefault();
	window.scrollTo({
		top: document.getElementById('solar-panels').offsetTop,
		behavior: 'smooth'
	});
});

// JQuery
$(function() {
	$('#asideMenuCloser').on('click', function() {
		$('aside').animate({
			right: '-300px'
		});
	});

	$('.menu').on('click', function() {
		$('aside').animate({
			right: '0'
		});
	});
});