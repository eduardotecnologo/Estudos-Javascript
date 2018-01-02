import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const imgPedra = require('../../img/pedra.png')
const imgPapel = require('../../img/papel.png')
const imgTesoura = require('../../img/tesoura.png')
const imgLagarto = require('../../img/lagarto.png')
const imgSpok = require('../../img/spok.png')

class Icone extends Component {
    render() {
        if (this.props.escolha === 'pedra') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgPedra} />
                </View>
            )
        } else if (this.props.escolha === 'papel') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgPapel} />
                </View>
            )
        } else if (this.props.escolha === 'tesoura') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgTesoura} />
                </View>
            )
        } else if (this.props.escolha === 'lagarto') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgLagarto} />
                </View>
            )
        } else if (this.props.escolha === 'spok') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={imgSpok} />
                </View>
            )
        }
            return false
    }
}
const styles = StyleSheet.create({
    icone: {
        alignItems: 'center'
    },
    txtJogador:{
      fontWeight: 'bold'
  }
})
export default Icone