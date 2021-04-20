<template>
	<div id="app">
		<div class="app--header">
			<div class="app--header-logo">
				<router-link to="/">VUE+FIREBASE-AUTH</router-link>
			</div>
			<div class="app--header-nav">
				<router-link to="/">Dashboard</router-link>
				<router-link to="/privacy">Privacy</router-link>
			</div>
		</div>
		
		<router-view/>
	</div>
</template>

<script>

</script>

<style lang="scss">
* {
	box-sizing: border-box;
}

body {
	padding: 0;
	margin: 0;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #111;
}

.app--header {
	display: flex;
	justify-content: space-between;
	padding: 30px;
	background: #111;

	.app--header-logo {
		color: #fff;
		font-weight: bold;

		a {
			color: #fff;
			text-decoration: none;
		}
	}

	.app--header-nav {
		a {
			font-weight: bold;
			color: #fff;
			text-decoration: none;

			&.router-link-exact-active {
				color: #666;
			}
		}
	}
}
</style>
