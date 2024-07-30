function QuestionButtons({questionsSize, questionId, handleWatchedQuestion}) {
    
    const nextQuestion = questionId - 1 === questionsSize ? "#" : `#question${questionId+1}`;
    const previousQuestion = questionId - 1 === 0 ? "#" : `#question${questionId-1}`;

    const scrollQuizContainer = (direction) => {

        const quizContainer = document.querySelector(".quiz-container");
        const width = quizContainer.offsetWidth;
        const pos = quizContainer.scrollLeft;

        let newPos; 


        if (direction === "back") {
            newPos = pos - width; 
        } else if (direction === "forth") {
            newPos = pos + width;
        }

        quizContainer.scroll(newPos, 0)
        
    }
    return (
        <div className="quiz-buttons">
            <button onClick={() => {
                scrollQuizContainer("back")
            }}>
                Previous
            </button>
            <button onClick={() => {
                scrollQuizContainer("forth")
                if (questionId < questionsSize) {
                    handleWatchedQuestion(questionId+1);
                }
            }}>
                Next
            </button>
        </div>
    )
}

export default QuestionButtons;