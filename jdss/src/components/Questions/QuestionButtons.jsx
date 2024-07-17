function QuestionButtons({questionsSize, questionId, handleWatchedQuestion}) {
    
    const nextQuestion = questionId - 1 === questionsSize ? "#" : `#question${questionId+1}`;
    const previousQuestion = questionId - 1 === 0 ? "#" : `#question${questionId-1}`;
    return (
        <div className="quiz-buttons">
            <a type="button" href={previousQuestion} >
                Previous
            </a>
            <a type="button" href={nextQuestion} onClick={() => {
                if (questionId < questionsSize) {
                    handleWatchedQuestion(questionId+1);
                }}}>
                Next
            </a>
        </div>
    )
}

export default QuestionButtons;