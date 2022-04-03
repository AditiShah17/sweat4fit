import React from "react";
import { ChatEngine } from 'react-chat-engine';


import LoginForm from "./LoginForm"
import ChatFeed  from "./ChatFeed";

export default function Chat(props) {
  
  if(!localStorage.getItem('username')) return <LoginForm />

console.log(localStorage.getItem('username'),localStorage.getItem('password'))
  return (
    <>
     <ChatEngine 
        height="100vh"
        projectID="248f3bd8-3634-44b6-b89a-745e855ec6ad"
        userName={localStorage.getItem('username')} 
        userSecret={localStorage.getItem('password')} 
        renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps} />}
      />
    </>
  );
}
