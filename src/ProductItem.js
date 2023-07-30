import React, { Component } from 'react';
import { products } from './data';

import { IsThisProductExpired } from './Utils';

const ProductItems = products.map((product) => ProductItemFunc({ product }));

function ProductItemFunc({ product }) {
  return (
    <div style={{ display: 'inline-block', margin: '50px' }}>
      <div id="maincard" className="card">
        <img style={{height:'295px',marginTop:'50px'}}
          src={product.productImage}
          alt="Nike-Shoe"
          className="sneaaker-img"
        />
        <IsThisProductExpired
          expiredDate={product.expiredDate}
          image={product.productImage}
        ></IsThisProductExpired>
        <h1 className="title sizes-box">
          <section
            style={{
              margin: '15px',
              marginTop: '55px',
              display: 'inline-block',
            }}
          >
            <b style={{ fontSize: '30px' }}>{product.productName}</b>
            <br></br>
            {/* <b style={{ fontSize: "15px", marginLeft: "3px" }}>
              Expired Time : {product.expiredDate.toDateString()}
            </b> */}
            <b style={{ fontSize: '15px', marginLeft: '3px' }}>
              Expired Time : {product.expiredDate.toDateString()}
            </b>
          </section>
          <li
            style={{
              color: 'white',
              width: '15px',
              height: '20px',
              fontSize: '15px',
              marginBottom: '-25px',
              zIndex: '1',
              background: 'orangered',
            }}
          >
            <b
              style={{
                marginLeft: '-10px',
              }}
            >
              -{product.productDiscount}%
            </b>
          </li>
        </h1>
        <p style={{ marginTop: '-20px', marginBottom: '20px' }}>
          {product.productDescription}
        </p>
        <div className="button-box">
          <button style={{ marginBottom: '50px' }} className="purchase">
            Buy For {product.productPrice}$ Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default class ProductItem extends Component {
  render() {
    return <div>{ProductItems}</div>;
  }
}
