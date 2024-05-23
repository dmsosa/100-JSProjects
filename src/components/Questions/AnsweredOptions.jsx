function AnsweredOptions({ correctOptions, selectedOptions, options, advise }) {
    const isCorrect = (optionIndex) => {
        return correctOptions.includes(optionIndex);
    }
    const indexToLetter = (index) => {
        switch (index) {
            case 0: {
                return "A";
            }
            case 1: {
                return "B";
            }
            case 2: {
                return "C";
            }
            case 3: {
                return "D";
            }
            default: {
                return "";
            }
        }
    }

    const checkIfSelected = (index) => {
        return selectedOptions.includes(index);
    }

    return (
        options.map((option, optionIndex) => 
            <>
            <div 
            className={`option-container ${!isCorrect(optionIndex) ? "wrong" : checkIfSelected(optionIndex) ? "correct" : "unselected"}`} 
            key={optionIndex}>
                <a>{indexToLetter(optionIndex)}</a>
                <p>{option}</p>
                <label className="custom-checkbox">
                    <input type="checkbox" checked={checkIfSelected(optionIndex)}></input>
                    <span className="checkmark"></span>
                </label>
            </div>
            </>

        )
    )
}

export default AnsweredOptions;