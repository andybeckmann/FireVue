<template>
	<div>
		<h1>Dashboard</h1>
		<div class="app--main-settings-header">
			<p>Signed in as: <b>{{ authUser.email }}</b></p>
			<button @click="signOut">Sign out</button>
		</div>
		<p>{{ this.authUser.userData }}</p>
		<form @submit.prevent="updateUserData">
			<h2>Update Data</h2>
			<label>Data</label>
			<input v-model="userData" placeholder="data">
			<button>Update</button>
		</form>
	</div>
</template>

<script>
import firebase from 'firebase'

export default {
	data () {
		return {
			authUser: null,
			userData: null
		}
	},

	methods: {
		updateUserData () {
			firebase.database().ref('users').child(this.authUser.uid)
				.update({userData: this.userData})
		},

		signOut () {
			firebase.auth().signOut()
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
.app--main-settings-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #eee;
	border-radius: 4px;
	padding: 5px 5px 5px 15px;
}
</style>