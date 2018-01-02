import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

const imagem = require('../../img/PPPLS.jpg')
//Componente Topo
class Topo extends Component {
    render() {
        return (
            <View style={styles.topo}>
                <Image source={imagem} />
            </View>
        )

    }
    
}

const styles = StyleSheet.create({
    topo: {
        alignItems: 'center'
    }
})
export default Topo