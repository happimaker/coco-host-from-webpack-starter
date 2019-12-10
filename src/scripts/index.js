import '../styles/index.scss';

var navbarElement = document.getElementById('navbar');

document.getElementById('navbar-trigger').onclick = function() {
	navbarElement.style.display = navbarElement.style.display === 'block' ? 'none' : 'block';
};

window.addEventListener('resize', function(e) {
	navbarElement.style.display = e.target.outerWidth <= 768 ? 'none' : '';
});

console.log('webpack starterkit');
