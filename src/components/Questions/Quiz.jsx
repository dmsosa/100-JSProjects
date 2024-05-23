import { useEffect, useState } from "react";
import { getAllQuestions } from "../../services/questions";
import QuestionCard from "./QuestionCard";
import Score from "./Score";
import ProgressBar from "./ProgressBar";

function Quiz() {
    const allQuestions = getAllQuestions();
    const [ questions, setQuestions ] = useState(allQuestions);
    const [ showScore, setShowScore ] = useState(true);
    const [ finalScore, setFinalScore ] = useState(0);
    const [ attemps, setAttemps ] = useState(0);
    const pointsPerQuestion = 10000 / questions.length;

    const sumToScore = (points) => {
        if (finalScore + points > 10000) {
            setFinalScore(10000);
            return;
        }
        setFinalScore(finalScore + points);
    }


    const handleTryAgain = () => {
        // all questions without answer
        setQuestions(allQuestions); 
        setShowScore(false);
        setFinalScore(0);
        setAttemps(attemps+1);
    }

    return (
        showScore ? 
            <Score 
            firstTime={attemps < 1} 
            score={finalScore} 
            setShowScore={setShowScore} 
            handleTryAgain={handleTryAgain} /> 
            :
            <div className="quiz-container">
                {allQuestions.map((question, index) => 
                    <QuestionCard 
                    key={index}
                    question={question} 
                    index={index} 
                    sumToScore={sumToScore} 
                    pointsPerQuestion={pointsPerQuestion}
                    setQuestions={setQuestions} />
                )}
                <ProgressBar finalScore={finalScore}/>
            </div>)
    
}

export default Quiz;