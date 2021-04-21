<template>
	<div id="app">
		<AppHeader />
		<div class="app--main">
			<router-view/>
		</div>
		<AppFooter />
	</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
	components: {
		AppHeader, AppFooter
	}
}
</script>

<style lang="scss">
// Global
* {
	box-sizing: border-box;
}

body {
	padding: 0;
	margin: 0;
}

label {
	text-transform: uppercase;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 5px;
	display: inline-block;
}

input {
	background: #fff;
	padding: 15px 20px;
	margin: 0 0 10px;
	outline: none;
	border: 1px solid #ccc;
	font-size: 18px;
	width: 100%;
	border-radius: 4px;
	max-width: 540px;
	display: block;
	box-shadow: 	
				0 3px 3px rgba(0, 0, 0, 0.05),
				inset 0px 10px 10px #eee;
}

button {
	font-size: 16px;
	padding: 15px 20px;
	margin: 10px 10px 10px 0;
	border-radius: 4px;
	outline: none;
	border: none;
	color: #fff;
	font-weight: bold;
	background: linear-gradient(0deg, #111, #444);
	cursor: pointer;
}

p {
	font-size: 18px;
	line-height: 27px;
}

a {
	text-decoration: none;
	color: #111;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #111;
	position: relative;
    padding-bottom: 75px;
    min-height: 100vh;

	.app--main {
		max-width: 1080px;
		margin: 0 auto;
		padding: 25px 0;
		border-radius: 4px;
	}
}
</style>
