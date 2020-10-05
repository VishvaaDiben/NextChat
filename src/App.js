import "./App.css";
import "./chat.css";

import { Col, Container, Row } from "reactstrap";
import React, { useEffect, useState } from "react";

import Chat from "./components/Chat";
import Socket from "./utils/Socket"
import User from "./components/User";
import logo from "./logo.svg";

function App() {
  const [conversations, addConversation] = useState([
    {
      username: "Edwind",
      message: "What did the ocean say to another ocean?",
      timestamp: 1544532325758,
      status: "offline"
    },
    { username: "Liren", message: "sea you later?", timestamp: 1544532341078,
    
    status: "offline"
    
  },
  {
    username: "Edmund",
    message: "Nothing. It just waved",
    timestamp: 1544532347412,
    status: "offline"
  },
  {
    username: "Josh",
    message: "I'm leaving this chatroom",
    timestamp: 1544532402998,
    status: "offline"
    },
  ]);
  const [currentUser, setCurrentUser ] = useState({})
  const [userList, setUserList ] = useState([])
  const [conversation, setConversation ] = useState([])
  const [input, setInput ] = useState('')

  useEffect(() => {
    Socket.emit('NEW_USER')

    Socket.on('GET_CURRENT_USER', user => {
      console.log(user)
      setCurrentUser(user)
    })
    
    Socket.on('UPDATE_USER_LIST', users => {
      console.log(users)
      setUserList(users)
    })

    Socket.on('RECEIVE_BROADCAST', data => {
      console.log(data)
      setConversation((prev)=>{
        console.log(prev)
        return [
          ...prev,
          data
        ]
      })
    })
  }, [])

  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      username: currentUser.username,
      message: input,
      timestamp: Date.now()
    }
    Socket.emit('BROADCAST_MESSAGE', data)
    setInput("")
  }

  return (
    <div className="App">
      <User currentUser={currentUser} userList={userList} conversations={conversations}/>
      <Chat conversations={conversations} conversation={conversation} input={input} handleInput={handleInput} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
