import React from 'react'
import Product from 'images/product.png'

function index({name, price, quantity, description, addCart, item}) {
  return (
    <div className="col mt-4">
      <div className="card shadow-sm">
        <img src={Product} />
        <div className="card-body">
          <h5>{name}</h5>
          <span><b>In Stock</b> {quantity}</span>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => addCart(item)}>Add to Cart</button>
            </div>
            <small className="text-muted">$ {price}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
