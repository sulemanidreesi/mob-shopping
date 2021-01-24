import React, { useEffect, useState } from 'react'
import Product from '../product'
import { BASE_URL } from "../../../constants"
import { ToastContainer } from "react-toastr";
import axios from "axios";
import CartIcon from 'images/shopping-bag.svg';
import CartCounter from '../cart-counter';
import Cart from '../cart';

let container;

function index() {

  const [productList, setProductList] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);

  const userId = document.getElementById("products").dataset.userId;
  console.log(userId);

  useEffect(() => {
    axios
        .get(`${BASE_URL}/api/v1/products`)
        .then((res) => setProductList(res.data));
  }, []);

  const addCart = (product) => {
    setCartList([
      ...cartList,
      product
    ]);
    setTotal(total + product.price)
  };

  const removeCart = (product) => {
    let filteredArray = cartList.filter(item => item.id !== product.id)
    setCartList(filteredArray)
    setTotal(total - product.price)
  };

  const handleCheckout = () => {
    axios
        .post(`${BASE_URL}/api/v1/orders`, {
          products: cartList,
          user_id: userId
        })
        .then((res) => {
          container.success(`Order is Placed!`, ``, {
            closeButton: true,
          });
          setShowCart(false);
          setCartList([]);
        })
  }


  return (
    <div className="album py-5 bg-light">
      <ToastContainer
        ref={ref => container = ref}
        className="toast-top-right"
      />

      <button type="button" className="btn cart-btn cart"  onClick={() => setShowCart(true)}>
        <img src={CartIcon} className="cart-icon mr-2"/>
        <CartCounter cartList={cartList}/>
      </button>
      
      {showCart && <Cart
        setShowCart={setShowCart}
        cartList={cartList}
        removeCart={removeCart}
        total={total}
        handleCheckout={handleCheckout}
      />}

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {
            productList.map((item, index) => (
              <Product 
                key={index}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                description={item.description}
                addCart={addCart}
                item={item}
              />
            ))
          }
        </div>
      </div>

    </div>

  )
}

export default index
