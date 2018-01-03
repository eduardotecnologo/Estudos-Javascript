import React, { Component } from 'react';
import { AppRegistry } from 'react-native'
import ListaItems from './src/components/ListaItems'

class LojaEx01 extends Component {
  render() {
    return (
        <ListaItems />
    )
  }
}

AppRegistry.registerComponent('LojaEx01', () => LojaEx01);
