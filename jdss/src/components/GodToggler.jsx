import { useGod } from "../context/GodContext";

function GodToggler() {
    const { withGod, setWithGod } = useGod();
    
    const handleGod = () => {
        setWithGod(!withGod);
    }
    return (
        <div className="god-toggler">
            <button onClick={handleGod} 
            className="toggler-btn" type="button">
                click God
            </button>
        </div>
    )
}

export default GodToggler;