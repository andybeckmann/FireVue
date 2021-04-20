<template>
	<div id="app">
		<div class="app--header">
			<div class="app--header-logo">
				<router-link to="/">FireVue</router-link>
			</div>
			<div class="app--header-nav">
				<nav>
					<ul>
						<li>
							<router-link to="/">Dashboard</router-link>
						</li>
						<li>
							<router-link to="/settings">Settings</router-link>
						</li>
						<li>
							<router-link to="/privacy">Privacy</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<div class="app--main">
			<router-view/>
		</div>
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

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #111;
}

.app--header {
	display: flex;
	justify-content: space-between;
	padding: 25px 0 25px 25px;
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
		ul {
			margin: 0;
			padding: 0;
			list-style-type: none;
			display: flex;

			li:first-child a {
				border-left: 1px solid #222;
			}

			a {
				font-weight: bold;
				color: #fff;
				text-decoration: none;
				padding: 25px;
				border-right: 1px solid #222;

				&.router-link-exact-active {
					color: #eee;
					background: #222;
				}
			}
		}
	}
}

.app--main {
	max-width: 1080px;
	margin: 0 auto;
	padding: 25px 0;
	border-radius: 4px;
}
</style>
