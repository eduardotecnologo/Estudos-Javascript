const config = {
    apiKey: "AIzaSyCh7jwf_iiwciBJHfXKtQl3ufrIbeMsPoE",
    authDomain: "mercadolivrefaker-faa6a.firebaseapp.com",
    databaseURL: "https://mercadolivrefaker-faa6a.firebaseio.com",
    projectId: "mercadolivrefaker-faa6a",
    storageBucket: "mercadolivrefaker-faa6a.appspot.com",
    messagingSenderId: "123481403153"
}

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base

