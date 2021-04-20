# FireVue

FireVue is a Google Firebase Authentication and RTDB demo using Vue.

## Methods

### Sign in

- ```register => firebase.auth().createUserWithEmailAndPassword()```
- ```signIn => firebase.auth().signInWithEmailAndPassword()```
- ```signOut => firebase.auth().signout()```

### Settings

- ```updateDisplayName => this.authUser.updateProfile()```
- ```updateEmail => this.authUser.updateEmail()```
- ```updatePassword => this.authUser.updatePassword()```

### Dashboard

- ```updateUserData => firebase.database().ref('users').child(this.authUser.uid).update()```

## Screenshots

### Sign in
![Screenshot](/screenshot1.png?raw=true)

### Settings
![Screenshot](/screenshot2.png?raw=true)

### Dashboard
![Screenshot](/screenshot3.png?raw=true)
