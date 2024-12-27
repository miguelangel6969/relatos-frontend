import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from '../views/Landing';
import LibrosDetails from '../views/LibrosDetails';
import NotFound from '../views/NotFound';
import {Overview} from "../views/Overview";
import {Header} from "../components/Header";
import BackButton from "../components/BackButton";
import Checkout from "../views/Checkout";
import {CartProvider} from "../context/CartContext";

function GlobalRouter() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/libros" element={<Layout><Overview/></Layout>}/>
                <Route path="/libros/:libroId" element={<Layout><BackButton/><LibrosDetails/></Layout>}/>
                <Route path="/libros/comprar" element={<Layout><BackButton/><Checkout/></Layout>}/>
                <Route path="*" element={<Layout><NotFound/></Layout>}/>
            </Routes>
        </BrowserRouter>

    );
}

const Layout = ({children}) => (
    <>
        <CartProvider>
            <Header/>
            {children}
        </CartProvider>
    </>
);

export default GlobalRouter;
