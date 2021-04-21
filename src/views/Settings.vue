<template>
	<div>
		<div class="app--main-settings" v-if="authUser">
			<h1>Settings</h1>
			<form @submit.prevent="updateProfile">
				<h2>Update Profile</h2>
				<label>Name</label>
				<input v-model="displayName" placeholder="John Smith">
				<button>Update</button>
			</form>
			<form @submit.prevent="updateEmail">
				<h2>Update Email</h2>
				<label>E-mail</label>
				<input v-model="email" placeholder="Your Email">
				<button>Update</button>
			</form>
			<form @submit.prevent="updatePassword">
				<h2>Update Password</h2>
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
	databaseURL: "https://vueauth-2783e-default-rtdb.firebaseio.com",
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
.app--main-settings-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #eee;
	border-radius: 4px;
	padding: 5px 5px 5px 15px;
}

.app--main-settings {
	h2 {
		border-top: 1px solid #ccc;
		padding-top: 25px;
	}
}

.app--main-auth {
	max-width: 550px;
	margin: 0 auto;
	box-shadow: 0 25px 25px rgba(0, 0, 0, 0.10);
	padding: 50px;

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