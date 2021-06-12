import React, { useState } from 'react';
import Menu from '../components/Menu';

import { Jumbotron, Container, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

function Cadastrar() {
  const [meta, setMeta] = useState({
    name: '',
    description: '',
    status: ''
  });

  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    massage: ''
  });

  const onChangeInput = e => setMeta({ ...meta, [e.target.name]: e.target.value });

  const sendMeta = async e => {
    e.preventDefault();//Não recarrega a página
    setResponse({formSave: true});
    try {
      const res = await fetch('http://localhost:3001/metas', {
        method: 'POST',
        body: JSON.stringify(meta),
        headers: { 'Content-Type': 'application/json' }
      });

      const responseEnv = await res.json();
      if (responseEnv.error) {
        setResponse({
          formSave: false,
          type: 'error',
          message: responseEnv.message
        });
      } else {
        setResponse({
          formSave: false,
          type: 'success',
          message: responseEnv.message
        });
      }
    } catch (err) {
      setResponse({
        formSave: false,
        type: 'error',
        message: 'Error: Ops! tente mais tarde.'
      });
    }
  }

  return (
    <>
      <Menu />
      <Jumbotron fluid className="form">
        <style>
          {`.form{
            background-color: #e5e5e5;
            color: #717171;
            padding-top: 50px;
            padding-bottom: 50px;
            margin-bottom: 0rem !important;
          }`}
        </style>
        <Container>
      <h1 className="display-4 text-center">Cadastrar nova meta!</h1>
          {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
          {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}

          <Form onSubmit={sendMeta}>
            <FormGroup>
              <Label for="name">Nome: </Label>
              <Input type="text" name="name" id="name" placeholder="Nova meta" onChange={onChangeInput} />
            </FormGroup>
        <br />
            <FormGroup>
              <Label for="description">Descrição: </Label>
              <Input type="text" name="description" id="description" placeholder="Descrição" onChange={onChangeInput} />
            </FormGroup>
        <br />
            <FormGroup>
              <Label for="status">Status: </Label>
              <Input type="textarea" name="status" id="status" placeholder="status" onChange={onChangeInput} />
            </FormGroup>
        <br />

            {response.formSave ? <Button color="danger" type="submit" disabled>Enviando...</Button> :
                                 <Button color="success" type="submit" outline>Cadastrar</Button>}

          </Form>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Cadastrar;