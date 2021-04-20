<template>
	<div class="app--main">
		<div class="app--main-dashboard" v-if="authUser">
			<div class="app--main-dashboard-header">
				<p>Signed in as: <b>{{ authUser.email }}</b></p>
				<button @click="signOut">Sign out</button>
			</div>
			<form @submit.prevent="updateProfile">
				<h1>Update Profile</h1>
				<label>Name</label>
				<input v-model="displayName" placeholder="John Smith">
				<button>Update</button>
			</form>
			<form @submit.prevent="updateEmail">
				<h1>Update Email</h1>
				<label>E-mail</label>
				<input v-model="email" placeholder="Your Email">
				<button>Update</button>
			</form>
			<form @submit.prevent="updatePassword">
				<h1>Update Password</h1>
				<label>New Password</label>
				<input v-model="newPassword" type="password" placeholder="••••••••••">
				<button>Update</button>
			</form>
		</div>
		<div class="app--main-auth" v-else>
			<div class="app--main-auth-signup" v-if="registered == false">
			<h1>Register</h1>
				<form @submit.prevent="register">
					<label for="email">Email</label>
					<input type="email" v-model="email" placeholder="account@domain.com" />
					<label for="password">Password</label>
					<input type="password" v-model="password" placeholder="••••••••••" />
					<div>
						<button>Submit</button>
						<p>Already have an account? <a href="#" @click="registered = true">Sign in</a></p>
					</div>
				</form>
			</div>
			<div class="app--main-auth-signin" v-else>
				<h1>Sign in</h1>
				<form @submit.prevent="signIn">
					<label for="email">Email</label>
					<input type="email" v-model="email" placeholder="account@domain.com" />
					<label for="password">Password</label>
					<input type="password" v-model="password" placeholder="••••••••••" />
					<div>
						<button>Submit</button> <p>Don't have an account? <a href="#" @click="registered = false">Register</a></p>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
import firebase from 'firebase'

const firebaseConfig = {
	apiKey: "AIzaSyCfRIGDJjDQ3-SWqmo2RZhsXfKCNLvBtoQ",
	authDomain: "vueauth-2783e.firebaseapp.com",
	projectId: "vueauth-2783e",
	storageBucket: "vueauth-2783e.appspot.com",
	messagingSenderId: "591111982350",
	appId: "1:591111982350:web:8d6e3e7153537d0cb7db5f"
}

firebase.initializeApp(firebaseConfig);

export default {
	data () {
		return {
			email: '',
			password: '',
			authUser: null,
			registered: true,
			photoURL: null,
			displayName: null,
			newPassword: null
		}
	},

	methods: {
		register () {
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
		},

		signOut () {
			firebase.auth().signOut()
		},

		signIn() {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password)
				.catch(error => alert(error.message))
		},

		updateProfile () {
			this.authUser.updateProfile({
				displayName: this.displayName,
				photoURL: this.photoURL
			})
		},

		updateEmail () {
			this.authUser.updateEmail(this.email)
				.catch(error => alert(error.message))
		},

		updatePassword () {
			this.authUser.updatePassword(this.newPassword)
				.then(() => { this.newPassword = null })
				.catch(error => alert(error.message))
		}
	},

	created () {
		firebase.auth().onAuthStateChanged(user => { 
			this.authUser = user
			if (user) {
				this.displayName = user.displayName,
				this.photoURL = user.photoURL
				this.email = user.email
			}
		})
	}
}
</script>

<style lang="scss" scoped>
	.app--main {
		max-width: 1080px;
		margin: 0 auto;
		padding: 50px 0;
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

	.app--main-dashboard-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #eee;
		border-radius: 4px;
		padding: 5px 5px 5px 15px;
	}

	.app--main-auth {
		max-width: 550px;
		margin: 0 auto;

		h1 {
			font-family: serif;
			font-size: 42px;
		}

		form {
			div {
				display: flex;
				justify-content: space-between;
				align-items: center;

				a {
					text-decoration: none;
					font-weight: bold;
					color: #111;
				}
			}
		}
	}
</style>