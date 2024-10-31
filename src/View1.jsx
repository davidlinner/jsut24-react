function View1(props){
  
    function handleClick(){
      if(props.onNextClick){
        props.onNextClick();
      }
    }
    
    return <section className='view'>
      <p>View 1</p>
      <button onClick={handleClick}>Next</button>
    </section>
  }

  export default View1;
