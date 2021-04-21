<template>
	<div class="app--header">
		<AppLogo />
		<AppNav />
	</div>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'
import AppNav from '@/components/AppNav.vue'

export default {
	components: {
		AppLogo, AppNav
	}
}
</script>

<style lang="scss" scoped>
.app--header {
	display: flex;
	justify-content: space-between;
	padding: 25px 0 25px 25px;
	background: #111;
}
</style>