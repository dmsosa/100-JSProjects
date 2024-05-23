import { useState } from "react";
import AnsweredOptions from "./AnsweredOptions";
import Options from "./Options";

function QuestionCard({ question, index, sumToScore, pointsPerQuestion, setQuestions }) {

    const [ selectedOptions, setSelectedOptions ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState("");

    const handleSelectOption = (index) => {
        if (selectedOptions.includes(index)) {
            setSelectedOptions(selectedOptions.filter((optionIndex) => optionIndex !== index));
        }
        if (selectedOptions.length > 4) {
            return;
        }
        if (selectedOptions.length > 0 && question.correctOptions.length === 1) {
            setSelectedOptions([index]);
        } else if (!selectedOptions.includes(index)) {
            setSelectedOptions((prev) => [...prev, index])
        }

    }

    const handleAnswer = () => {
        if (selectedOptions.length < 1) {
            setErrorMessage("Please, choose at least one (1) option");
            return;
        } else {
            setErrorMessage("");
        }
        if (question.correctOptions.length === 1) {
            if (question.correctOptions.includes(selectedOptions[0])) {
                sumToScore(pointsPerQuestion);
            }
        } else {
            let totalPoints = 0;
            console.log(selectedOptions, question.correctOptions, pointsPerQuestion/question.correctOptions.length, pointsPerQuestion)
            
            for (let i = 0; i < selectedOptions; i++) {
                if (question.correctOptions.includes(selectedOptions[i])) {
                    totalPoints += pointsPerQuestion/question.correctOptions.length;
                }
            }
            console.log(totalPoints, "totalPoints")
            sumToScore(totalPoints);
        }
        question.answered = true;
        setQuestions((prev) => [...prev, question]);
    }

    return (
        <div className="question-card-container">
            <div className="question-card-header">
                <h1>Question no. {index+1}</h1>
                <p>{question.text}</p>
            </div>
            <div className={`advise ${question.answered && "show"}`}><p>{question.advise}</p></div>
            { errorMessage.length > 1 && <div className="error-message"><p>{errorMessage}</p></div> }
            <div className="options">
                {question.answered ? 
                <AnsweredOptions 
                correctOptions={question.correctOptions} 
                selectedOptions={selectedOptions}
                options={question.options}/>
                :
                <Options options={question.options} handleSelectOption={handleSelectOption} selectedOptions={selectedOptions}/>
            }
            </div>
            <button className="btn btn-primary" onClick={handleAnswer}>Send answer</button>
        </div>
    )
};

export default QuestionCard;