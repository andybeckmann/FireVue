<template>
	<div>
		<div class="app--primary-header">
			<AppLogo />
			<AppNav :user="this.authUser" />
		</div>
		<div class="app--secondary-header" v-if="authUser">
			<p>Signed in as: <b>{{ authUser.email }}</b></p>
			<button @click="signOut">Sign out</button>
		</div>
	</div>
</template>

<script>
	import AppLogo from '@/components/AppLogo.vue'
	import AppNav from '@/components/AppNav.vue'

	import firebase from 'firebase'

	export default {

		data () {
			return {
				authUser: null,
				userData: null
			}
		},

		components: {
			AppLogo, AppNav
		},

		methods: {
			updateUserData () {
				firebase.database().ref('users').child(this.authUser.uid)
					.update({userData: this.userData})
			},

			signOut () {
				firebase.auth().signOut()
				.then( () => {
					this.$router.push({ name: 'Settings' })
				})
			}
		},

		created () {
			firebase.auth().onAuthStateChanged(user => { 
				this.authUser = user
				if (user) {
					firebase.database().ref('users').child(user.uid).on('value', snapshot => {
						if (snapshot.val()) {
							this.userData = snapshot.val().userData
							this.$set(this.authUser, 'userData', this.userData)
						}
					})
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.app--primary-header {
		display: flex;
		justify-content: space-between;
		padding: 25px 0 25px 25px;
		background: #111;
	}

	.app--secondary-header {
		background: #eee;
		border-radius: 4px;
		padding: 10px 25px;
		text-align: center;

		@media (min-width: 768px) {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 5px 5px 5px 25px;
		}

		button {
			width: 100%;

			@media (min-width: 768px) {
				width: auto;
				margin-right: 20px;
			}
		}
	}
</style>