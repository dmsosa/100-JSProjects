import { useEffect, useState } from "react";
import { getAllQuestions } from "../../services/questions";
import QuestionCard from "./QuestionCard";
import Score from "./Score";

function Quiz() {
    const allQuestions = getAllQuestions();
    const [ questions, setQuestions ] = useState(allQuestions);
    const [ showScore, setShowScore ] = useState(true);
    const [ finalScore, setFinalScore ] = useState(true);
    const [ attemps, setAttemps ] = useState(0);
    const pointsPerQuestion = 10000 / questions.length;

    const sumToScore = (points) => {
        setFinalScore(finalScore + points);
    }


    const handleTryAgain = () => {
        // all questions without answer
        setQuestions(allQuestions); 
        setShowScore(false);
        setFinalScore(0);
        setAttemps(attemps+1);
    }

    useEffect(() => {
        console.log(typeof questions[1])
    }, [])

    return showScore ? 
            <Score 
            firstTime={attemps < 1} 
            score={finalScore} 
            setShowScore={setShowScore} 
            handleTryAgain={handleTryAgain} /> 
            :
            allQuestions.map((question, index) => 
                    <QuestionCard 
                    question={question} 
                    index={index} 
                    sumToScore={sumToScore} 
                    pointsPerQuestion={pointsPerQuestion}
                    setQuestions={setQuestions} />
                )
}

export default Quiz;