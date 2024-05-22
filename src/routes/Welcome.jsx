import "../assets/css/slider.css";
import { useGod } from "../context/GodContext";
const flower = require('../assets/img/flower.png');
const witted = require('../assets/img/witted.png');

function Welcome() {
    const { withGod } = useGod();
    return (
        <>
            <h1>Today is Jdss's Day</h1>
            <p>{withGod ? "White ": "No god"}</p>
            
        </>
    )
}

export default Welcome; 