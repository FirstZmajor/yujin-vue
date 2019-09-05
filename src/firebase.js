import firebase from '@firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'kHZKl19mOfPZzj0zgzhoUpBojhjUlnwjCLH8DjBx',
  databaseURL: 'https://my-web-68f99.firebaseio.com/'
}

export default firebase.apps[0] || firebase.initializeApp(config)
