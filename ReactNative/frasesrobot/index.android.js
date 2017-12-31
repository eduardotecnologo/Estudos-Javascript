//Import
import React from 'react'
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native'

//Format
const Estilos = {
  estiloPrincipal: {
    backgroundColor: 'powderblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 375,
    height: 480,
    resizeMode: Image.resizeMode.contain

  },
  botao: {
    backgroundColor: 'powderblue',
    paddingVertical: 25,
    paddingHorizontal: 90,
    height: 80,
    marginTop: 20
  },
  textoBotao: {
    color: 'steelblue',
    fontSize: 20,
    fontWeight: 'bold'
  }
}
const gerarNovaFrase = () => {
  let numAleatorio = Math.random()
  numAleatorio = Math.floor(numAleatorio * 10)

  //Frases
  let frases = Array()
  frases[0] = 'Eu não sou a princesa das virtudes sociais'
  frases[1] = 'O BUG força o programa a se adaptar, envolve-se em algo novo por causa disso. Funciona ao redor e dentro. Não importa o que aconteça ele muda, ele se torna algo novo.'
  frases[2] = 'Todos vivemos nas paranóias dos outros.'
  frases[3] = 'A verdadeira coragem é ser honesto consigo mesmo.'
  frases[4] = 'Infelizmente somos todos humanos.'
  frases[5] = 'Mesmo as pessoas extraordinárias são movidas por banalidades humanas.'
  frases[6] = 'Alguma coisa disso é real? Olhe para isso. Olhe! Um mundo construído em fantasia. Emoções sintéticas em pílulas, guerra psicológica em propagandas, produtos químicos em comida que alteram a mente, seminários de lavagem cerebral em mídia, bolhas de controle em forma de redes sociais.'
  frases[7] = 'Este é o mundo em que vivemos. Pessoas se dando bem em cima dos erros alheios para manipularem e usarem uns aos outros.'
  frases[8] = 'Mudamos o mundo todos os dias. Mas para mudar o mundo de um jeito significativo leva muito mais tempo do que as pessoas têm. Nunca acontece ao mesmo tempo. É devagar. É metódico. É exaustivo. Nem todos temos o estômago para isso.'
  frases[9] = 'Dê uma arma a um homem e ele pode roubar um banco; dê um banco a um homem e ele pode roubar o mundo.'

  let fraseEscolhida = frases[numAleatorio]
  Alert.alert(fraseEscolhida)
}
//Create component
const App = () => {
  const { principal, botao, image, textoBotao } = Estilos

  return (
    <View style={principal}>
      <Image style={image} source={require('./img/logo.jpg')} />
      <TouchableOpacity
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={textoBotao}>Nova Frase Mr Robot</Text>
      </TouchableOpacity>
    </View>
  )
}
//Register for devices
AppRegistry.registerComponent('frasesrobot', () => App)