import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import {getCartItems} from '../../store/cartSlice';
const cartItem = useSelector(getCartItems);

function App() {
  React.useEffect(()=>{
    if(cartItem.length > 0){
      localStorage.setItem('quantity',cartItem.length);
    }
  },[cartItem]);
  
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
