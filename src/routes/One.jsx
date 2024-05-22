import "../assets/css/slider.css";
import Slide from "../components/Slide";
import ToDo from "../components/ToDo/ToDo";

function One() {

    const todoItems = [];
    
    return (
        <>
            <h1>You will keep growing, for sure...</h1>
            <Slide/>
            <h3>Your good To-Do List</h3>
            <ToDo/>
        </>
    )
}

export default One;