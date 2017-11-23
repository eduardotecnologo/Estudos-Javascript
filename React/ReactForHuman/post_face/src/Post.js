import React, { Component } from 'react'
import { Card, Cardtext } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

class Post extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Eduardo',
            likes: 0,
            isFavorite: false,
            comments: ['E ae Manolo!!!']
        }
    }
    componentDidMont() {
        let state = localStorage.getItem('this.props.storageKey')
        state = JSON.parse(state)
        this.setState(state)
    }
    saveInStorage(){
        let actualState = this.state
        actualState = JSON.stringify(actualState)
        localStorage.setItem(this.props.storageKey, actualState)
    }
    giveLike() {
        let numLikes = this.state.likes
        numLikes = numLikes + 1
        const newState = {
            likes: numLikes
        }
        console.log('GIVELIKES')
        this.setState(newState)
        this.saveInStorage()
    }
    setFavorite() {
        let favorite = this.state.isFavorite
        favorite = !favorite
        this.setState({ isFavorite: favorite })
        this.saveInStorage()
    }
    newComment() {
        //Pegar o estado atual
        let comments = this.state.comments
        //Mudar ele
        const newCommentText = prompt('Digite seu comentário Manolo!!!')
        comments.push(newCommentText)
        //Setar no estado
        this.setState({ comments: comments })
        this.saveInStorage()
    }
    render() {
        console.log('RENDER DO APP - ', this.state)
        let favoriteText
        if (this.state.isFavorite) {
            favoriteText = 'Remover dos Favoritos'
        } else {
            favoriteText = 'Favoritos'
        }
        return (
            <Card style={{ marginBottom: 30, background: '#3f5896' }}>
            <Cardtext>
                <h1>{ this.props.text }</h1>
                <h3>{this.state.name}</h3>
                <h4>{'Likes: ' + this.state.likes}</h4>
                <RaisedButton
                        backgroundColor="#a4c639"
                        label={'Likes'}
                        onClick={this.giveLike.bind(this)} 
                    />
                <RaisedButton
                        backgroundColor="#99AAAA"
                        label={'favoriteText'}
                        onClick={this.giveLike.bind(this)}
                />
                <RaisedButton
                        label = { 'Comentar' }
                        onClick = { this.newComment.bind(this)}
                />
                <Card style={{ padding: 15, backgroundColor: '#FFFFFF'}}>
                    {this.state.comments.map((text,index) => {
                        return(
                            <h4 key></h4>
                        )
                    })}
                </Card>
                </Cardtext>
            </Card>
        )
    }
    saveStorage() {
        let actualState = this.state
        actualState = JSON.stringify(actualState)
        localStorage.setItem('appState', actualState)
    }
}


export default Post;

