import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Col, Container, Row } from "reactstrap";
import React, { useEffect, useState } from "react";

import Socket from "../utils/Socket";
import moment from "moment";

const Chat = ({
  handleSubmit,
  handleInput,
  input,
  conversation,
  conversations,
}) => {
  return (
    <Container>
      <div id="Commentbox" className="card msg_card_body">
        {conversations.map((msg) => (
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src={`https://api.adorable.io/avatars/150/${msg.username}.png`}
                class="rounded-circle user_img_msg"
              />
            </div>
            <div className="msg_cotainer">
              {msg.message}
              <div className="msg_time">
                {moment(msg.timestamp).format("h:mm:ss a")}
                <div style={{ color: "blue" }}>{msg.username}</div>
              </div>
            </div>
          </div>
        ))}
        {conversation.map((chat) => (
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src={`https://api.adorable.io/avatars/150/${chat.username}.png`}
                class="rounded-circle user_img_msg"
              />
            </div>
            <div className="msg_cotainer">
              {chat.message}
              <div className="msg_time">
                {moment(chat.timestamp).format("h:mm:ss a")}
                <div style={{ color: "blue" }}>{chat.username}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Message here..."
          onChange={handleInput}
          value={input}
        />
      </form>
    </Container>
  );
};

export default Chat;
