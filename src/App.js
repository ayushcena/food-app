import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import data from './components/Products/data';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Comfort Combos' data={data.productData} />
      <Products heading='Desert' data={data.productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
