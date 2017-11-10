import React from 'react'
import logo from './Logo1.png'

//Functional statesless components
const HeaderHome = (props) => {
    return(
        // header home
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3 text-center">
                <img src={logo} className="App-logo" alt="logo" width="200" /></h1>
                <p className="text-center">
                <a className="btn btn-anuncie btn-lg" to="/novo-anuncio" role="button">Anuncie Grátis (FAKER) &raquo;</a></p>
            </div>
        </div>
    )
}

export default HeaderHome