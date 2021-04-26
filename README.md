# FireVue

FireVue is a Google Firebase Authentication and RTDB demo using Vue.

## Features

- Firebase Authentication
- Firebase Real-time Database
- Form input validation
- Vue page transition animations

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
![Screenshot](/signin.png?raw=true)

### Settings
![Screenshot](/settings.png?raw=true)

### Dashboard
![Screenshot](/dashboard.png?raw=true)
