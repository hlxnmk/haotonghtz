<script>
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			// plus.navigator.setFullscreen(true)
			plus.navigator.hideSystemNavigation()
		},
		onUnload: function() {
			console.log('App Show')
			// plus.navigator.setFullscreen(false)
			plus.navigator.showSystemNavigation()
		},
		
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'animate.css';
	@font-face {
		font-family: my-fontm;
		src: url('~@/static/my-fontm.ttf');
	}
	@font-face {
		font-family: my-fontn;
		src: url('~@/static/my-fontn.ttf');
	}
</style>
