import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import {Link} from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    return (
        <div className="cart-container">
            <h2 className="cart-title">Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p className="empty-cart">El carrito está vacío</p>
            ) : (
                <ul className="cart-items">
                    {cart.map((item, index) => (
                        <li key={index} className="cart-item">
                            <span className="item-title">{item.title}</span> -
                            <span className="item-price">${item.price}</span>
                            <button
                                className="remove-button"
                                onClick={() => removeFromCart(index)}
                            >
                                Eliminar
                            </button>
                            <Link to={`/libros/${item.id}`}>
                                <button className="view-details-button" >Ver detalle</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
