import { useState, useEffect } from 'react';
import './App.css'

import View1 from './View1';
import View2 from './View2';

function App() {
  const [currenView, setCurrentView] = useState(1);

  if(currenView == 1){
    return <View1 onNextClick={()=> setCurrentView(2)}/>;
  } else if (currenView == 2){
    return <View2 onBackClick={()=> setCurrentView(1)}/>;
  }
}

export default App