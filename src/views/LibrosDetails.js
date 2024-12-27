import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {LibrosContext} from '../context/LibrosContext';
import {AddToCard} from "../components/AddToCard";

const LibrosDetails = () => {
    const {libroId} = useParams();

    const {Libros} = useContext(LibrosContext);
    const Libro = Libros.find(r => r.id === libroId);

    if (!Libro) {
        return <h2>Libro no encontrado</h2>;
    }

    return (
        <div className="restaurant-details">
            <h3 className="restaurant-name">{Libro.title}</h3>
            <p className="restaurant-name">{Libro.author}</p>
            <p className="restaurant-cuisine">Categoria: {Libro.genre}</p>
            <p className="restaurant-cuisine">Año: {Libro.year}</p>
            <p className="restaurant-rating">Calificación: {Libro.rating} / 5</p>
            <p className="restaurant-name">Resumen</p>
            <p className="restaurant-cuisine">{Libro.summary}</p>

            <AddToCard book={Libro}></AddToCard>
        </div>
    );
}

export default LibrosDetails;