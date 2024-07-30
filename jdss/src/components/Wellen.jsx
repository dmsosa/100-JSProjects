import { useEffect } from "react";

function Wellen({withGod}) {

    const toggleDry = () => {
        const berge = document.querySelectorAll(".berge");

        for (let i = 0; i < berge.length ; i++) {
            if (berge[i].classList.contains("dry")) {
                berge[i].classList.remove("dry");     
            } else {
                berge[i].classList.add("dry");     
            }
            
        }

        const wellen = document.querySelectorAll(".welle");

        for (let i = 0; i < wellen.length ; i++) {
            if (wellen[i].classList.contains("dry")) {
                wellen[i].classList.remove("dry");     
            } else {
                wellen[i].classList.add("dry");     
            }
            
        }


    }

    useEffect(() => {
        setTimeout(() => {
            toggleDry();
        }, 3000)
    }, [withGod])

    return (    
            <div className="wellen-container">
                <div className="welle-wrapper welle-wrapper--1">
                    <div className="welle welle--1"></div>
                </div>
                <div className="welle-wrapper welle-wrapper--2">
                    <div className="welle welle--2"></div>
                </div>
                <div className="welle-wrapper welle-wrapper--3">
                    <div className="welle welle--3"></div>
                </div>
                <div className="welle-wrapper welle-wrapper--4">
                    <div className="welle welle--4"></div>
                </div>
            </div>
    )
}

export default Wellen;