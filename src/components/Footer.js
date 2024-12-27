import React from "react";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    © 2024 Relatos de Papel. Todos los derechos reservados.
                </p>
                <p className="footer-text">
                    Contáctanos: <a href="mailto:contacto@relatosdepapel.com">contacto@relatosdepapel.com</a>
                </p>
                <p className="footer-text">
                    Síguenos en:
                    <a href="https://facebook.com/relatosdepapel" target="_blank" rel="noopener noreferrer"> Facebook</a>,
                    <a href="https://twitter.com/relatosdepapel" target="_blank" rel="noopener noreferrer"> Twitter</a>,
                    <a href="https://instagram.com/relatosdepapel" target="_blank" rel="noopener noreferrer"> Instagram</a>
                </p>
            </div>
        </footer>
    );
};

