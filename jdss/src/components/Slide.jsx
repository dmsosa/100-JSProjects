function Slide() {
    return (
        <div className="slider-wrapper">
            <div className="slider">
                <img id="slide-1" 
                src="https://images.unsplash.com/photo-1535438414045-70dbc0464d5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Red flower growing">
                </img>
                <img id="slide-2" 
                src="https://images.unsplash.com/photo-1530242269066-86e5a3a480ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Plant seeds growing">  
                </img>
                <img id="slide-3" 
                src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Daisy flower image"
                ></img>
            </div>
            <div className="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
            </div>
        </div>
    )
}

export default Slide;