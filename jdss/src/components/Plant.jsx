
function Plant() {

    return  (
        <div className="flower-container">
            <div className="blume blume--1">
                <div className="blume__blatter">
                    <div className="blume__blatt blume__blatt--1"></div>
                    <div className="blume__blatt blume__blatt--2"></div>
                    <div className="blume__blatt blume__blatt--3"></div>
                    <div className="blume__blatt blume__blatt--4"></div>
                    <div className="weiss-kreis"></div>
                    {/* licht */}
                </div>
                <div className="blume__stengel">
                    <div className="blume__stengel__blatt blume__stengel__blatt--1"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--1">
                <div className="wachsen-ans" style={{animationDelay: "4s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "4.4s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "4.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "4.7s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--2">
                <div className="wachsen-ans" style={{animationDelay: "2.4s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "2.7s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "2.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "2.2s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            
        </div>
    )

    

    
}
export default Plant;