import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';



class Post extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Eduardo',
            likes: 0,
            isFavorite: false,
            comments: ['Olá']
        }
    }
    componentDidMont() {
        let state = localStorage.getItem('appState')
        state = JSON.parse(state)
        this.setState(state)
    }
    giveLike() {
        let numLikes = this.state.likes
        numLikes = numLikes + 1
        const newState = {
            likes: numLikes
        }
        console.log('GIVELIKES')
        this.setState(newState)
    }
    setFavorite() {
        let favorite = this.state.isFavorite
        favorite = !favorite
        this.setState({ isFavorite: favorite })
    }
    newComment() {
        //Pegar o estado atual
        let comments = this.state.comments
        //Mudar ele
        const newCommentText = prompt('Digite seu comentário!')
        comments.push(newCommentText)
        //Setar no estado
        this.setState({ comments: comments })
    }
    render() {
        console.log('RENDER DO APP - ', this.state)
        let favoriteText
        if (this.state.isFavorite) {
            favoriteText = 'REMOVER DOS FAVORITOS'
        } else {
            favoriteText = 'FAVORITO'
        }
        return (
            <div style={{ padding: 30, background: '#DDDDDD' }}>
                <h1>Olá mundo!!</h1>
                <h3>{this.state.name}</h3>
                <h4>{'Likes: ' + this.giveLike.bind(this)}</h4>
                <RaisedButton onClick={this.giveLike.bind(this)}>LIKE</RaisedButton>
                <RaisedButton onClick={this.setFavorite.bind(this)}>{favoriteText}</RaisedButton>
                <RaisedButton onClick={this.newComment.bind(this)}>Comentar</RaisedButton>
                <div style={{ padding: 15, backgroundcolor: '#FFFFFF' }}>
                    {this.state.comments.map((text, index) => {
                        return (
                            <h4 key={index}>{text}</h4>
                        )
                    })}
                </div>
            </div>
        )
    }
    saveStorage() {
        let actualState = this.state
        actualState = JSON.stringify(actualState)
        localStorage.setItem('appState', actualState)
    }
}


export default Post;

