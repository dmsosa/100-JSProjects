function Options({ options, handleSelectOption }) {
    return (
        options.map((option, optionIndex) => 
            <div 
            className={`option-${optionIndex}`} 
            key={optionIndex} 
            onClick={() => handleSelectOption(optionIndex)}>
                {option}
            </div>
        )
    )
}

export default Options;