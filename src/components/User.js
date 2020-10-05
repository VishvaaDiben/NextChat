import {
  Card,
  CardBody,
  CardDeck,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";

import React from 'react'

const User = ({conversations, currentUser, userList, currentList}) => {
  return (
    <Container>
      <CardDeck>
        <Card>
          <CardBody>
            {
              conversations.map(user => (
                <Row><span class="dot"></span>{user.username}</Row>
              ))
            }
            {userList.map(user => {
               if (user.username==currentUser.username){
                return <Row style={{color:'blue'}}><span style={{backgroundColor: "green"}} class="dot"></span>{user.username}</Row>
               }
               return <Row><span style={{backgroundColor: "green"}} class="dot"></span>{user.username}</Row>
               })} 
          </CardBody>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default User;
