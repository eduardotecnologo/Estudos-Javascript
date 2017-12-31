//Import
import React from 'react'
import { Text, AppRegistry, View } from 'react-native'

//Format
const Estilos = {
  estiloTexto: {
    fontSize:40,
    color: 'steelblue',
    fontWeight: '600',
    textAlign:'center',
    backgroundColor: 'powderblue',
    paddingTop: 20,
    shadowColor: 'steelblue',
    shadowOffset: {width:0, height:10},
    shadowOpacity: 0.4
  },
  estiloView: {
    backgroundColor: 'skyblue',
    marginTop: 30,
    height: 300
  }

}
//Create component
const App = () =>{
  return(
    <View style={ Estilos.estiloView }>
      <Text style={ Estilos.estiloTexto }>Frases Mr Robot</Text>
    </View>
  )
}
//Register for devices
AppRegistry.registerComponent('frasesrobot', ()=> App)