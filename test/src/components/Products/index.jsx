import React from 'react';
import './ProductsElements.css';

const Products = ({ heading, data }) => {
  return (
    <div className='ProductsContainer'>
      <div className='ProductsHeading'>{heading}</div>
      <div className='ProductWrapper'>
        {data.map((product, index) => {
          return (
            <div className='ProductCard' key={index}>
              <img className='ProductImg' src={product.img} alt={product.alt} />
              <div className='ProductInfo'>
                <div className='ProductTitle'>{product.name}</div>
                <div className='ProductDesc'>{product.desc}</div>
                <div className='ProductPrice'>{product.price}</div>
                <div className='ProductButton'>{product.button}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
