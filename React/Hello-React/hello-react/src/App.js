import React, {Component}from'react'

class Redirect extends Component {

  componentDidMount() {
    if(confirm('Você realmente quei ir para ${this.props.to}?')){
      window.location.href = this.props.to
    }
    this.props.afterRedirect()
  }
  render(){
    return <span>Redirecting to{this.props.to}...</span>  
  }
}

