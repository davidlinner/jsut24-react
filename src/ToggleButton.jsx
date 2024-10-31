function ToogleButton(){
    const [on, setOn] = useState(true);
    return <button style={{backgroundColor: on ? 'green' : 'grey'}} 
      onClick={()=>setOn(!on)}>
      { on ? 'On' : 'Off' }
      </button>
  }

export default ToogleButton;