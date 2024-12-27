import React from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import {LibrosContext} from "./context/LibrosContext";
import {Footer} from "./components/Footer";
import {useLibros} from "./hooks/useLibro";

function App() {
    const Libros = useLibros();

    return (
        <LibrosContext.Provider value={{Libros}}>

                <GlobalRouter>
                </GlobalRouter>
                <Footer/>

        </LibrosContext.Provider>
    );
}

export default App;
