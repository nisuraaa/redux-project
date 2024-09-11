import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeItem} from './cartSlice';
import {useAppSelector} from '../../store/hooks';
import { Button, Divider } from '@mui/material';

function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <div style={{width: '50%'}}>
      <h2>Cart</h2>
      {cart.totalQuantity === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <ul style={{listStyleType: 'none'}}>
          {cart.items.map((item) => (
          <>
            <div key={item.id} style={{display: 'flex', justifyContent: 'space-between'}}>
              <p>{item.name} - {item.quantity} x ${item.price}</p>
              <Button onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
            </div>
            <Divider variant="inset" component="li" />
            </>
          ))}
        </ul>
      )}
      <p>Total Quantity: {cart.totalQuantity}</p>
    </div>
  );
}

export default Cart;
