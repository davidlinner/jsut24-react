function Counter(props){
    const [count, setCount] = useState(0);
  
    function handleClick(){
      setCount(count + 1);
      console.log(`Count is: ${count}`);
    }
  
    return <div>
      Count is: {count}
      <button onClick={handleClick}>Increase</button>
    </div>
  }

export default Counter;