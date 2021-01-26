import { useState } from 'react';

import InitialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(InitialState);

  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  }

  const removeToCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id)
    });
  }

  return {
    addToCart,
    removeToCart,
    state
  }

}

export default useInitialState;
