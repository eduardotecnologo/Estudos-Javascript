import React, { Component } from 'react';

export default class Home extends Component {
  constructor(){
    super();
  }

  submitForm(event) {
    event.preventDefault();
    console.log(this.refs.nome.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm.bind(this)}>
          <label htmlFor="name">Nome</label>
          <input type="text" id='name' name="x" ref="nome" />
          <input type="submit" value="salvar" />
        </form>
      </div>
    );
  }
}
