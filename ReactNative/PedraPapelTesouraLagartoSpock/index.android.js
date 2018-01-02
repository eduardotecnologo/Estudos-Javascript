import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native'

class PedraPapelTesouraLagartoSpock extends Component{
    constructor(props){
      super(props)
      this.state = { escolhaUsuario : '' , escolhaComputador : '', resultado : ''}
    }

  tbb(escolhaUsuario){
    //Generate number (0,1,2,3,4)
    let numAleatorio = Math.floor(Math.random() * 5)

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
    }
    let resultado = ''
    //Computador escolha pedra
    if (escolhaComputador == 'pedra'){
      if (escolhaUsuario == 'pedra') {
          resultado = 'Vocês empataram manolo!!!'
      }
      if (escolhaUsuario == 'papel') {
          resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario == 'tesoura') {
          resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario == 'lagarto') {
        resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario == 'spock') {
        resultado = 'Você ganhou manolo!!!'
      }
}
    //Computador escolha papel
    if (escolhaComputador == 'papel') {
      if (escolhaUsuario == 'papel') {
        resultado = 'Vocês empataram manolo!!!'
      }
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario == 'pedra') {
        resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario == 'lagarto') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario == 'spock') {
        resultado = 'Você ganhou manolo!!!'
      }
    }
    //Computador escolha tesoura
    if (escolhaComputador == 'tesoura') {
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Vocês empataram manolo!!!'
      }
      if (escolhaUsuario == 'papel') {
        resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario == 'pedra') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario == 'lagarto') {
        resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario == 'spock') {
        resultado = 'Você ganhou manolo!!!'
      }
    }
    //Computador escolha lagarto
    if (escolhaComputador == 'lagarto') {
      if (escolhaUsuario == 'lagarto') {
        resultado = 'Vocês empataram manolo!!!'
      }
      if (escolhaUsuario == 'papel') {
        resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario == 'pedra') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario == 'spock') {
        resultado = 'Você ganhou manolo!!!'
      }
    }
    //Computador escolha spock
    if (escolhaComputador == 'spock') {
      if (escolhaUsuario == 'spock') {
        resultado = 'Vocês empataram manolo!!!'
      }
      if (escolhaUsuario == 'papel') {
        resultado = 'Você perdeu manolo!!!'
      }
      if (escolhaUsuario == 'pedra') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Você ganhou manolo!!!'
      }
      if (escolhaUsuario == 'lagarto') {
        resultado = 'Você perdeu manolo!!!'
      }
    }

    this.setState({ escolhaUsuario: escolhaUsuario, escolhaComputador: escolhaComputador,
    resultado : resultado })
  }
  render(){
    return(
      <View>
    
        <Topo></Topo>

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
          
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>

          <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>
      </View>
      </View>
    )
  }
}
//Componente Topo
class Topo extends Component{
  render(){
    return(
      <View style={styles.topo}>
        <Image source={require('./img/PPPLS.jpg')} />
      </View>
    )
    
  }
}
class Icone extends Component{
  render(){
    if(this.props.escolha == 'pedra'){
        return(
          <View style={styles.icone}>
           <Text style={styles.txtJogador}>{this.props.jogador}</Text>
              <Image source={require('./img/pedra.png')} /> 
          </View>
        )     
    } else if (this.props.escolha == 'papel'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('./img/papel.png')} />
        </View>
      )      
    } else if (this.props.escolha == 'tesoura'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('./img/tesoura.png')} />
        </View>
      )      
    } else if (this.props.escolha == 'lagarto'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('./img/lagarto.png')} />
        </View>
      )      
    } else if (this.props.escolha == 'spok'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('./img/spok.png')} />
        </View>
      )   
    } else {
      return false
    }
  }
}
//Componentes Botões
const styles = StyleSheet.create({
    topo: {
      alignItems: 'center',
    },
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
  },
    icone:{
      alignItems: 'center'
  },
    txtJogador:{
      fontWeight: 'bold'
  }

    
})
AppRegistry.registerComponent('PedraPapelTesouraLagartoSpock', () => PedraPapelTesouraLagartoSpock)

