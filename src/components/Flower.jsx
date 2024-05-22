function Flower() {
    return (
        <>
        <div className="flower-container">
                <div className="flower-row">
                    <div className="petal" id="petal1"></div>
                    <div className="petal" id="petal2"></div>
                    <div className="petal" id="petal3"></div>
                    <div className="petal" id="petal4"></div>
                    <div className="petal" id="petal5"></div>
                    <div className="petal" id="petal6"></div>
                </div>
                <div className="flower-row stalk-row">
                    <div className="stalk">
                        <div className="circle"></div>
                    </div>
                </div>
                <div className="flower-row">
                    <div className="ground"></div>
                </div>
            </div>
            <div className="witted-container">
                <div className="witted-row">
                    <div className="witted-petal" id="wittedpetal1"></div>
                    <div className="witted-petal" id="wittedpetal2"></div>
                    <div className="witted-petal" id="wittedpetal3"></div>
                    <div className="witted-petal" id="wittedpetal4"></div>
                    <div className="witted-petal" id="wittedpetal5"></div>
                    <div className="witted-petal" id="wittedpetal6"></div>
                </div>
                <div className="witted-row witted-stalk-row">
                    <div className="witted-stalk">
                        <div className="witted-circle"></div>
                    </div>
                </div>
                <div className="witted-row">
                    <div className="witted-ground"></div>
                </div>
            </div>
            <div className="par">
                <div className="chi"></div>
            </div>
        </>
    )
}
export default Flower;