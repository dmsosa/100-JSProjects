import "../assets/css/slider.css";
import "../assets/css/plant.css";
import Flower from "../components/Flower";
import Plant from "../components/Plant";
import { useGod } from "../context/GodContext";
const flower = require('../assets/img/flower.png');
const witted = require('../assets/img/witted.png');

function FlowerPage() {
    const { withGod } = useGod();
    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Today is Jdss's Day</h1>
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