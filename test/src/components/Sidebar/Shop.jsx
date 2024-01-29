import React from 'react';
import './ProductsElements.css';

const Shop = ({ heading, productData }) => {
  return (
    <div className="ProductsContainer">
      <h1 className="ProductsHeading">{heading}</h1>
      <div className="ProductWrapper">
        {productData.map((product, index) => (
          <div className="ProductCard" key={index}>
            <img className="ProductImg" src={product.img} alt={product.alt} />
            <div className="ProductInfo">
              <h2 className="ProductTitle">{product.name}</h2>
              <p className="ProductDesc">{product.desc}</p>
              <p className="ProductPrice">{product.price}</p>
              <button className="ProductButton">{product.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
