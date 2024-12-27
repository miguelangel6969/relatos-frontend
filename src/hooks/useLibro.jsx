import { useEffect, useState } from "react";

export const useLibros = () => {
    const [books, setBooks] = useState([]);

    /**
     * Se utiliza useEffect para definir un efecto de montaje que traerá la información de libros
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        // Simulación de datos con un retraso para imitar una solicitud de red.
        setTimeout(() => {
            setBooks([
                {
                    id: "1",
                    title: "Cien años de soledad",
                    author: "Gabriel García Márquez",
                    genre: "Realismo mágico",
                    year: 1967,
                    rating: 4.8,
                    summary: "Una saga familiar que narra la historia de los Buendía en el pueblo ficticio de Macondo.",
                    price: 25.99
                },
                {
                    id: "2",
                    title: "1984",
                    author: "George Orwell",
                    genre: "Distopía",
                    year: 1949,
                    rating: 4.7,
                    summary: "Una sociedad totalitaria controlada por el Gran Hermano donde la libertad y la verdad son reprimidas.",
                    price: 19.99
                },
                {
                    id: "3",
                    title: "El Principito",
                    author: "Antoine de Saint-Exupéry",
                    genre: "Fábula",
                    year: 1943,
                    rating: 4.9,
                    summary: "Un piloto perdido en el desierto encuentra a un niño de otro planeta que le enseña valiosas lecciones de vida.",
                    price: 14.99
                },
                {
                    id: "4",
                    title: "Orgullo y prejuicio",
                    author: "Jane Austen",
                    genre: "Romance",
                    year: 1813,
                    rating: 4.6,
                    summary: "Una historia de amor y malentendidos en la Inglaterra del siglo XIX.",
                    price: 12.99
                },
                {
                    id: "5",
                    title: "Don Quijote de la Mancha",
                    author: "Miguel de Cervantes",
                    genre: "Aventura",
                    year: 1605,
                    rating: 4.5,
                    summary: "Las aventuras de un hidalgo que, enloquecido por la lectura de libros de caballerías, decide convertirse en caballero andante.",
                    price: 30.99
                },
                {
                    id: "6",
                    title: "La sombra del viento",
                    author: "Carlos Ruiz Zafón",
                    genre: "Misterio",
                    year: 2001,
                    rating: 4.7,
                    summary: "Un joven descubre un libro olvidado que lo lleva a desentrañar oscuros secretos en la Barcelona de posguerra.",
                    price: 22.99
                },
                {
                    id: "7",
                    title: "Crónica de una muerte anunciada",
                    author: "Gabriel García Márquez",
                    genre: "Realismo mágico",
                    year: 1981,
                    rating: 4.4,
                    summary: "Una crónica sobre el asesinato de Santiago Nasar en un pequeño pueblo colombiano.",
                    price: 18.99
                },
                {
                    id: "8",
                    title: "Los juegos del hambre",
                    author: "Suzanne Collins",
                    genre: "Ciencia ficción",
                    year: 2008,
                    rating: 4.3,
                    summary: "Una joven debe participar en un mortal juego televisado para sobrevivir y proteger a su familia.",
                    price: 15.99
                },
                {
                    id: "9",
                    title: "El código Da Vinci",
                    author: "Dan Brown",
                    genre: "Thriller",
                    year: 2003,
                    rating: 4.1,
                    summary: "Un profesor de simbología se ve envuelto en un misterio que podría cambiar la historia de la humanidad.",
                    price: 20.99
                },
                {
                    id: "10",
                    title: "Harry Potter y la piedra filosofal",
                    author: "J.K. Rowling",
                    genre: "Fantasía",
                    year: 1997,
                    rating: 4.9,
                    summary: "Un niño huérfano descubre que es un mago y comienza su educación en la escuela de magia Hogwarts.",
                    price: 24.99
                }
            ]);
        }, 2500);
    }, []);
    return books;
};

