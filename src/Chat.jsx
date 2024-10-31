import './Chat.css'

const messages = [
  {
    owner: 'me',
    text: 'hi'
  }, {
    owner: 'paul',
    text: 'hello'
  }, {
    owner: 'me',
    text: 'how are you?'
  }, {
    owner: 'me',
    text: 'whats up, why dont you answer?'
  }
];

function MyBubble(props){
  return <div className='bubble my-bubble'>
      {props.text}    
  </div>
}

function OtherBubble(props){
  return <div className='bubble other-bubble'>
      {props.text}    
  </div>
}

function Chat(props){
  return <div className='chat'>
    {props.children}
  </div>
}


function App() {
  return <Chat>
    { messages.map(message => {
      if(message.owner == 'me'){
        return <MyBubble text={message.text} />
      } else {}
        return <OtherBubble text={message.text} />
    }) }
  </Chat>
}


export default App

