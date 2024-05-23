function Options({ options, handleSelectOption, selectedOptions }) {

    const indexToLetter = (index) => {
        switch (index) {
            case 0: 
                return "A";
            
            case 1: 
                return "B";
            
            case 2: 
                return "C";
            
            case 3: 
                return "D";
            
            default: 
                return "";

        }
    }

    const checkIfSelected = (index) => {
        return selectedOptions.includes(index);
    }
    return (
        options.map((option, optionIndex) => 
            <div 
            className={`option-container`} 
            key={optionIndex} 
            onClick={() => handleSelectOption(optionIndex)}>
                <div className="letter"><a>{indexToLetter(optionIndex)}</a></div>
                <p>{option}</p>
                <div className="custom-checkbox">
                    <input type="checkbox" checked={checkIfSelected(optionIndex)}></input>
                    <span className="checkmark"></span>
                </div>
            </div>
        )
    )
}

export default Options;