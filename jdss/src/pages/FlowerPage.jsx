import { useEffect } from "react";
import Plant from "../components/Plant";
import { useGod } from "../context/GodContext";
import GodToggler from "../components/GodToggler";

function FlowerPage() {
    const { withGod } = useGod();
    
    useEffect(() => {
         
    }, [])
    return (
        <div className="page flower-page">
            <GodToggler />
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <h1>Today is Jdss's Day</h1>
                        <p>This is your very very happy birthday!</p>
                    </div>
                    <div className="col">
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