import React from 'react';
import '../../App.css';
import Products from '../Products';
import { productData, productDataTwo } from '../Products/data.js';
import Feature from '../Feature';


function Home() {
  return (
    <div>
      
      
      <Products heading='What we do!' data={productData} />
      <Feature />
      <Products heading='What our clients say!' data={productDataTwo} />
      
    </div>
  );
}

export default Home;
