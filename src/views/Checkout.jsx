import React from 'react';
import Cart from "../components/Carrito";
import {Comprar} from "../components/Comprar";

const Checkout = () => {
    return (
        <div>
            <Cart></Cart>
            <Comprar></Comprar>
        </div>
    );
}

export default Checkout;