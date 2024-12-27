import React, {useContext} from "react";
import {CartContext} from "../context/CartContext";

export const AddToCard = ({ book }) => {
    const { addToCart } = useContext(CartContext);
    return (
        <div>
            <button
                className="add-to-cart-button"
                onClick={() => addToCart(book)}
            >
                Añadir al carrito
            </button>
        </div>
    );
};