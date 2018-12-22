import {initializeApp} from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyDDfQt14JRazVVomBDkwWbt0wJUy4KUjiE",
    authDomain: "manager-53f52.firebaseapp.com",
    databaseURL: "https://manager-53f52.firebaseio.com",
    projectId: "manager-53f52",
    storageBucket: "manager-53f52.appspot.com",
    messagingSenderId: "688940568070"
})

export const db = app.database()
export const productRef = db.ref('product')