const mainImage = document.querySelector('.home-images').src;

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
