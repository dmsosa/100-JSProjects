import Plant from "../components/Plant";
import { useGod } from "../context/GodContext";

function FlowerPage() {
    const { withGod } = useGod();
    
    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Today is Jdss's Day</h1>
                        <p>This is your very very happy birthday!</p>
                    </div>
                    <div className="col">
                        <p>{withGod ? "White ": "No god"}</p>
                    </div>
                </div>
                <div className="row">
                    <Plant/>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Always remember to be with Him</p>
                    </div>
                </div>
            </div>
        </div>

    )   
}

export default FlowerPage; 