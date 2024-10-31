function View2(props){
    function handleClick(){
      if(props.onBackClick){
        props.onBackClick();
      }
    }
  
    return <section className='view'>
      <p>View 2</p>
      <button onClick={handleClick}>Back</button>
    </section>
  }

export default View2;