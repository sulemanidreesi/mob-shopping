import React, { useState } from 'react';
import CloseIcon from 'images/x-circle.svg';
import Product from 'images/product.png';
import TrashIcon from 'images/trash-2.svg';

function index({setShowCart, cartList, removeCart, total, handleCheckout}) {
  return (
    <div className="cart-card">
      <img src={CloseIcon} onClick={() => setShowCart(false)}/>
      { cartList.length == 0 ? (
        <div className="text-muted">
          This Cart is Empty
        </div>
      ) : (
        <div>
          {
            cartList.map((item, index) => (
              <>
                <div className="cart-product" key={index}>
                  <img src={Product} />
                  <div className="cart-product-body">
                    <h6><b>Product:</b>  {item.name}</h6>
                    <span><b>Price:</b> $ {item.price}</span>
                  </div>
                  <img src={TrashIcon} onClick={() => removeCart(item)} className="trash"/>
                </div>
              </>
            ))
          }
          <div className="total">
            <span>___________________________________________________</span>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <b>Total Product: </b>
              <span>x {cartList.length}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <b>Total Price: </b>
              <span>$ {total}</span>
            </div>
            <button type="button" className="btn btn-sm btn-outline-secondary mt-2" onClick={handleCheckout}>Check Out</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default index
