import React from 'react';
import { Link } from 'react-router-dom';
import useRedirection from "../hooks/useRedirection";

function Landing() {
    // Redirige automáticamente a la página de libros después de 5 segundos
    useRedirection("/libros", 5000);

    return (
        <div className="landing">
            <div className="welcome-message">
                <h1>Bienvenidos a Relatos de Papel</h1>
                <p>Explora los mejores relatos y libros que te acompañarán en tu viaje literario.</p>
            </div>
            <Link to="/libros">
                <button className="button">Ver la lista de libros</button>
            </Link>
            <span className="laser-pointer"></span> {/* Puntero láser original */}
            <span className="laser-pointer-reverse"></span> {/* Puntero láser en sentido contrario */}
        </div>
    );
}

export default Landing;
