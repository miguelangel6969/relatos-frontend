import React, { createContext, useState } from 'react';
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

// Crea el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const addToCart = (book) => {
        setCart((prevCart) => [...prevCart, book]);
        console.log("Añadido al carrito", book);
    };

    const removeFromCart = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    const ComprarCart = () => {
        setCart([]);
        console.log("Carrito comprado");
        Swal.fire({
            title: '¡Pedido realizado!',
            text: 'Tu pedido ha sido procesado con éxito.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
        }).then(() => {
            setTimeout(() => {
                navigate('/libros');
            }, 3000);
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,ComprarCart }}>
            {children}
        </CartContext.Provider>
    );
};
