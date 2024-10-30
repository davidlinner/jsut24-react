import './App.css'
import iphone from './assets/iphone.jpg';
import pixel from './assets/pixel.jpg';

function Cards(props){
  return <div className='cards'>
    {props.children}
  </div>
}

function Card(props){
  return <div className='card'>
    <div className='card-image'>
      <img src={props.image}/>
    </div>
    <div className='card-text'>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  </div>
}

function App() {
 return <Cards> 
  <Card 
  title="First card" 
  text="This is the text of my first card."
  image={iphone}
  />

  <Card 
  title="Second card" 
  text="More text."
  image={pixel}
  />
 </Cards>
}

export default App
