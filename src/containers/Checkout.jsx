import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext'
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state, removeToCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemoveToCart = (item) => () => {
    removeToCart(item);
  }

  const handlePlus = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
 
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista de Pedidos:' : 'Sin pedidos...' }</h3>
        {cart.map(item => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element" >
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={handleRemoveToCart(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 &&
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $${handlePlus()}`}</h3>
          <Link to="/checkout/information">
            <button type="button" >Continuar pedido</button>
          </Link>
        </div>
       }
    </div>
  );
}

export default Checkout;
