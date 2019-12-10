import '../styles/index.scss';

var navbarElement = document.getElementById('navbar');

document.getElementById('navbar-trigger').onclick = function() {
	navbarElement.style.display = navbarElement.style.display === 'block' ? 'none' : 'block';
};


console.log('webpack starterkit');
