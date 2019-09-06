// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/database"

const config = {
  apiKey: 'kHZKl19mOfPZzj0zgzhoUpBojhjUlnwjCLH8DjBx',
  databaseURL: 'https://my-web-68f99.firebaseio.com/'
}

export default firebase.apps[0] || firebase.initializeApp(config)
