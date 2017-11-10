import React, { Component } from 'react'
import logo from './logo.svg'

import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import FooterHome from './FooterHome'
import LinkCategorias from './LinkCategorias'
import base from './base'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      categorias:[]
    }
    base.baseToState('categorias',{
      context: this,
      state: 'categorias'
    })
  }
  render() {
    return (
      <div className="App">
        <HeaderHome />
        <div className="App">
          <div className="container">
          <h3>Últimos Anúncios</h3>
            <div class="row">
              <AnuncioHome />
              <AnuncioHome />
              <AnuncioHome />
            </div>
          <h3>Categorias</h3>
          <div class="row">
              <LinkCategorias categoria={{ categoria: 'Bicicleta', 'icon': 'fa-lightbulb-o' }} />
              <LinkCategorias categoria={{ categoria: 'Bicicleta', 'icon': 'fa-lightbulb-o' }} />
              <LinkCategorias categoria={{ categoria: 'Bicicleta', 'icon': 'fa-lightbulb-o' }} />
          </div>
        </div>
        <FooterHome />
        </div>
      </div>
    );
  }
}

export default App;
