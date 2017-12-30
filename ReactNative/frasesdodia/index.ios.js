//Imports
import React from 'react'
import { Text, AppRegistry } from 'react-native'

//Format
const Estilos = {
  estiloTexto: {
    fontSize: 20
  }
}
//Create Component
const App = () =>{
  return(
    <Text>Frases do Dia</Text>
  )
}
//Register for devices
AppRegistry.registerComponent('frasesdodia', ()=> App)