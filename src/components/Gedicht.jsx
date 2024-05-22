function Gedicht({ dropdown }) {

    return (
        <div className="toggler-content" style={{display: dropdown ? "block":"none"}}>
            <h1>Example poem</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, accusamus. Esse, a? Impedit blanditiis cupiditate maiores, laboriosam quas incidunt mollitia quidem temporibus molestias delectus quia doloremque doloribus possimus beatae quasi?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, accusamus. Esse, a? Impedit blanditiis cupiditate maiores, laboriosam quas incidunt mollitia quidem temporibus molestias delectus quia doloremque doloribus possimus beatae quasi?</p>
            <em>Best whishes 2024</em>
        </div> 
    )
    
}

export default Gedicht;