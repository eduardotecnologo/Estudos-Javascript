import React from 'react';
import { Jumbotron, Component, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Menu from '../components/Menu';

import { Button } from 'reactstrap';

function Home({ data }) {
  return (
    <>
      <Menu />
      <Jumbotron fluid className="list">
        <style>
          {`.list{
            background-color: #e5e5e5;
            padding-top: 30px;
            padding-bottom: 50px;
            margin-bottom: 0rem !important;
          }.title-top{
            color: #717171;
          }.list-meta{
            color: #717171;
          }`}
        </style>
        <Container>
          <h2 className="display-4 text-center title-top">Minhas Metas!</h2>
          <ListGroup>
            {
              data.metas.map(meta => (
                <div key="{meta._id}">
                  <ListGroupItem className="list-meta">
                    <ListGroupItemHeading>{meta.name}</ListGroupItemHeading>
                    <ListGroupItemText>{meta.description}</ListGroupItemText>
                    <ListGroupItemText>{meta.status}</ListGroupItemText>
                  </ListGroupItem>
                </div>
              ))
            }
          </ListGroup>
        </Container>
      </Jumbotron>
    </>
  )
};

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3001/metas`);
  const data = await response.json();
  //console.log(data);
  return {
    props: { data }// will be passed to the page component as props
  };
};

export default Home;