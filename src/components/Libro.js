import React  from "react";
import { Link } from "react-router-dom";
import {AddToCard} from "./AddToCard";

export const Libro = ({ id, title,author,genre,year,rating ,summary,price }) => {

    const book = { id, title, author, genre, year, rating, summary ,price};

    return (
        <div className="card">
            <h3>{title}</h3>
            <p>Autor: {author}</p>
            <p>Categoría: {genre}</p>
            <p>Año: {year}</p>
            <p>Calificación: {rating} / 5</p>
            <p>Resumen: {summary}</p>
            <p>Precio: ${price}</p>
            <Link to={`/libros/${id}`}>
                <button className="button">Ver detalles</button>
            </Link>
            <AddToCard book={book}></AddToCard>
        </div>
    );
}