import React from 'react';
import Subtotal from '../components/subtotal';
import '../styles/cart.css';

function Cart() {
    return (
        <div className="cart">
            <div className="cart_left">
                <h1> YOUR CART: </h1>
            </div>
            <div className="cart_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Cart;
