import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)
Vue.use(firebase)

export default new Vuex.Store({
	state: {
		email: '',
		password: '',
		authUser: null,
		registered: true,
		photoURL: null,
		displayName: null,
		newPassword: null,
		userData: null
	},

	mutations: {
	},

	actions: {

	},

	modules: {
	}
})
