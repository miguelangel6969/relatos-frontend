import React, {useContext, useEffect, useState} from 'react';
import '../styles/styles.css';
import {Libro} from "../components/Libro";
import {LibrosContext} from "../context/LibrosContext";
import {LinearProgress} from "@mui/material";
import Cart from "../components/Carrito";
import {Link} from "react-router-dom";

export const Overview = () => {
    const {Libros} = useContext(LibrosContext);
    const [LibrosFilter, setLibrosFilter] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

    useEffect(() => {
        // Filtra los libros según el título
        if (searchTerm === "") {
            setLibrosFilter(Libros);
        } else {
            const filteredBooks = Libros.filter((libro) =>
                libro.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra por título
            );
            setLibrosFilter(filteredBooks);
        }
    }, [Libros, searchTerm]); // Se vuelve a ejecutar cuando cambia el término de búsqueda o los libros

    return (
        <div>
            <h2 className="center-text">Libros Disponibles</h2>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar por título"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado al escribir
                    className="search-input"
                />
            </div>

            <Cart></Cart>

            <div className="center-text">
                <Link to={`/libros/comprar`}>
                    <button className="button">Realizar compra</button>
                </Link>
            </div>

            <div className="restaurant-container">
                {
                    /**
                     * Si la lista de libros no está vacía, mapea los libros filtrados
                     * Si no, muestra el spinner
                     */

                    LibrosFilter.length > 0 ? (
                        LibrosFilter.map((libro) => (
                            <Libro
                                key={libro.id}
                                id={libro.id}
                                title={libro.title}
                                author={libro.author}
                                genre={libro.genre}
                                year={libro.year}
                                rating={libro.rating}
                                summary={libro.summary}
                                price={libro.price}
                            />
                        ))
                    ) : (
                        <LinearProgress color="secondary"/>
                    )
                }
            </div>
        </div>
    );
};
