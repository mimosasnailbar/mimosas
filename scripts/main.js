//image to show
const imageShow = document.querySelector('.home__image');
const mobileMenu = document.querySelector('.mobile__menu');
const mobileNav = document.querySelector('.mobile__nav');
const appButton = document.querySelector('.appointment');

//Vue JS Code
const nav = new Vue({
	el: '#nav',
	data: {
		showNav: false,
		isChanged: false
	},
	methods: {
		openNav: function() {
			this.showNav = !this.showNav;
			this.isChanged = !this.isChanged;
		}
	}
});

const image = new Vue({
	el: '#imageToggle',
	data: {
		src: mainImage
	},
	methods: {
		toggle: function() {
			this.src = event.target.src;
		}
	}
});

//Appointment button scrolling
const mainButton = document.querySelector('#mainButton');
const appButtons = document.querySelectorAll('.appointment__button');

appButtons.forEach(function(button) {
	button.addEventListener('click', function() {
		mainButton.scrollIntoView(true);
		window.scrollBy(0, -45);
	});
});

// Google Maps Functionality
function initMap() {
	// The location of Uluru
	var uluru = { lat: 35.240544, lng: -80.813173 };
	// The map, centered at Uluru
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: uluru
	});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({ position: uluru, map: map });
}
