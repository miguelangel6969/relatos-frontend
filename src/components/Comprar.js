import React, {useContext} from "react";
import {CartContext} from "../context/CartContext";

export const Comprar = ({ book }) => {
    const { ComprarCart } = useContext(CartContext);

    return (
        <div className="center-text">
            <button
                className="add-to-cart-button"
                onClick={() => ComprarCart()}
            >
                Comprar Carrito
            </button>
        </div>
    );
};