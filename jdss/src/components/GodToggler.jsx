import { useGod } from "../context/GodContext";

function GodToggler() {
    const { withGod, setWithGod } = useGod();
    const winds = ["wind-1", "wind-2", "wind-3"];
    const toggleSchwach = () => {
        const schwachen = document.querySelectorAll(".schwach");
        for (let i = 0; i < schwachen.length ; i++) {
            if (schwachen[i].classList.contains("wind-1") ||
                schwachen[i].classList.contains("wind-2") ||
                schwachen[i].classList.contains("wind-3")) {
                    schwachen[i].classList.remove("wind-1");
                    schwachen[i].classList.remove("wind-2");
                    schwachen[i].classList.remove("wind-3");
                    schwachen[i].style.display = "none";
                    schwachen[i].style.display = "block";
                    
                } else {
                let rand = Math.floor(Math.random() * winds.length);
                schwachen[i].classList.toggle(winds[rand]);
            }
            
        }
    }
    const dryLand = () => {
        const berge = document.querySelectorAll(".berge");
        console.log(berge);
        for (let i = 0; i < berge.length ; i++) {
            if (berge[i].classList.contains("dry")) {
                berge[i].classList.remove("dry");     
            } else {
                berge[i].classList.add("dry");     
            }
            
        }
    }
    const handleGod = () => {
        setWithGod(!withGod);
        toggleSchwach();
        dryLand();

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