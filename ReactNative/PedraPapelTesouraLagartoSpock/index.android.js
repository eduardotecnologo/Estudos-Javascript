import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import Topo from './src/components/topo'
import Icone from './src/components/icone'

class PedraPapelTesouraLagartoSpock extends Component{
    constructor(props){
      super(props)
      this.state = { escolhaUsuario : '' , escolhaComputador : '', resultado : ''}
    }

  tbb(escolhaUsuario){
    //Generate number (0,1,2,3,4)
    const numAleatorio = Math.floor(Math.random() * 5)

    let escolhaComputador = ''

    switch (numAleatorio) {
      case 0: 
        escolhaComputador = 'pedra'
          break;
        escolhaComputador = 'papel'
          break;
        escolhaComputador = 'tesoura'
          break;
        escolhaComputador = 'lagarto'
          break;
        escolhaComputador = 'spock'
          break;
          default:
        escolhaComputador = ''
    }
    let resultado = ''
    //Computador escolha pedra
    if (escolhaComputador === 'pedra'){
      if (escolhaUsuario === 'pedra') {
          resultado = 'Vocês empataram manolo!!!'
      }
      if (escolhaUsuario === 'papel') {
          resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario === 'tesoura') {
          resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario === 'lagarto') {
        resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario === 'spock') {
        resultado = 'Você ganhou manolo!!!'
      }
}
    //Computador escolha papel
    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = 'Vocês empataram manolo!!!'
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario === 'lagarto') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario === 'spock') {
        resultado = 'Você ganhou manolo!!!'
      }
    }
    //Computador escolha tesoura
    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Vocês empataram manolo!!!'
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario === 'lagarto') {
        resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario === 'spock') {
        resultado = 'Você ganhou manolo!!!'
      }
    }
    //Computador escolha lagarto
    if (escolhaComputador === 'lagarto') {
      if (escolhaUsuario === 'lagarto') {
        resultado = 'Vocês empataram manolo!!!'
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario === 'spock') {
        resultado = 'Você ganhou manolo!!!'
      }
    }
    //Computador escolha spock
    if (escolhaComputador === 'spock') {
      if (escolhaUsuario === 'spock') {
        resultado = 'Vocês empataram manolo!!!'
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario === 'lagarto') {
        resultado = 'Você perdeu manolo!!!'
      }
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado  })
  }
  render(){
    return(
      <View>
    
        <Topo />

        <View style={styles.painelAcoes}>
            <View style={styles.btnEscolha}>
                <Button title="pedra" onPress={() => { this.tbb('pedra') }} />
            </View>
            <View style={styles.btnEscolha}>
                <Button title="papel" onPress={() => { this.tbb('papel') }} />
            </View>
            <View style={styles.btnEscolha}>
                <Button title="tesour" onPress={() => { this.tbb('tesoura') }} />
            </View>
            <View style={styles.btnEscolha}>
                <Button title="lagart" onPress={() => { this.tbb('lagarto') }} />
            </View>
            <View style={styles.btnEscolha}>
                <Button title="spock" onPress={() => { this.tbb('spock') }} />
            </View>
      </View>
      
      <View style={styles.palco}>
          <Text style={styles.txtResultado}>Resultado: {this.state.resultado}</Text>
          
          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />

          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />

      </View>
    </View>
    )
  }
}

//Componentes Botões
const styles = StyleSheet.create({
    btnEscolha:{
      width: 75
    },
    painelAcoes:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5
    },
    palco:{
      alignItems: 'center',
      marginTop: 5
    },
    txtResultado:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red'
  }
})
AppRegistry.registerComponent('PedraPapelTesouraLagartoSpock', () => PedraPapelTesouraLagartoSpock)

