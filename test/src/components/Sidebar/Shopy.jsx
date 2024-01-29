import React from 'react';
import Shop from './Shop';
import { productData, productDataTwo } from './data';

const Shopy = () => {
  return (
    <div>
       <Shop heading="Your Heading" productData={productData} />

        <Shop heading="Your Heading" productData={productDataTwo} />
    </div>
  );
};

export default Shopy;
