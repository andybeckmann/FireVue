<template>
	<div class="app--header-nav">
		<nav v-if="user != null">
			<ul>
				<li>
					<router-link to="/dashboard">Dashboard</router-link>
				</li>
				<li>
					<router-link to="/">Settings</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	props: ['user']
}
</script>

<style lang="scss" scoped>
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
</style>
