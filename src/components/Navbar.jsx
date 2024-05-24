import { useState } from "react";
import Gedicht from "./Gedicht";
import { useGod } from "../context/GodContext";

function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const { withGod, setWithGod } = useGod();

    const handleBodyScroll = () => {
        document.body.classList.toggle("nonscroll");
    }
    const handleDropdown = () => {
        setDropdown(!dropdown);
    }
    const handleGod = () => {
        setWithGod(!withGod);
    }
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h5>With God</h5>
                <label className="squitch">
                    <input type="checkbox" checked={withGod} onClick={handleGod} readOnly/>
                    <span className="checkSlide"></span>
                </label>
            </div>
            <div className="toggler">
                <button onClick={() => {
                    handleBodyScroll();
                    handleDropdown(); }} 
                className="toggler-btn" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <Gedicht dropdown={dropdown}/>
        </nav>
    )
}

export default Navbar;