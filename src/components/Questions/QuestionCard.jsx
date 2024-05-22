import { useState } from "react";
import AnsweredOptions from "./AnsweredOptions";
import Options from "./Options";

function QuestionCard({ question, index, sumToScore, pointsPerQuestion, setQuestions }) {

    const [ selectedOptions, setSelectedOptions ] = useState([]);

    const handleSelectOption = (index) => {
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
        if (question.correctOptions.length === 1) {
            if (question.correctOptions.includes(selectedOptions[0])) {
                sumToScore(pointsPerQuestion);
            }
        } else {
            for (let i = 0; i < selectedOptions; i++) {
                if (question.correctOptions.includes(selectedOptions[i])) {
                    sumToScore(pointsPerQuestion/question.correctOptions.length);
                }
            }
        }
        question.answered = true;
        setQuestions((prev) => [...prev, question]);
    }

    return (
        <div className={`question-${index} question-cont container ${question.answered ? "answered":""}`}>
            <div className="question-header row">Question no. {index+1}</div>
            <div className="options">
                {question.answered ? 
                <AnsweredOptions 
                correctOptions={question.correctOptions} 
                options={question.options}/>
                :
                <Options options={question.options}/>
            }
            </div>
            <button onClick={handleAnswer}>Send answer</button>
        </div>
    )
};

export default QuestionCard;