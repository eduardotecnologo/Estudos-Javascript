import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Post from './Post'


class App extends Component {
  constructor(){
    super()
    this.state = {
      posts:[]
    }
  }
  componentDidMount(){
    let state = localStorage.getItem('appState')
    state = JSON.parse(state)
    this.setState(state)
  }
  saveStorage(){
    let actualState = this.state;
    actualState = JSON.stringify(actualState)
    localStorage.setItem('appState', actualState)
  }
  newPost(){
    const post =prompt('Opa! Insira o texto do seu post!!!')
    let posts = this.state.posts
    posts.push(post)
    this.setState({
      posts: posts
    })
    this.saveStorage()
  }
  render() {
    return (
      <MuiThemeProvider>
        <div style={{ 
          padding: 30, 
          backgroundColor: '#DDDDDD' }}>
          {
            this.state.posts.map((post, index) => {
            return (<Post storageKey={'post' + index} text={post} />)
          })}
          <RaisedButton label={'Novo Post'} 
          onClick={ this.newPost.bind(this) } />
        </div>
      </MuiThemeProvider>
    )
  }
} 

export default App