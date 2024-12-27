import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navega a la página anterior
    };

    return (
        <button className="button" onClick={handleGoBack}>
            Volver
        </button>
    );
}

export default BackButton;
