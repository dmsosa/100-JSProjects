function AnsweredOptions({ correctOptions, options }) {
    const isCorrect = (optionIndex) => {
        return correctOptions.includes(optionIndex);
    }
    return (
        options.map((option, optionIndex) => 
            <div 
            className={`option-${optionIndex} ${isCorrect(optionIndex) ? "correct" : "wrong"}`} 
            key={optionIndex}>
                {option}
            </div>
        )
    )
}

export default AnsweredOptions;