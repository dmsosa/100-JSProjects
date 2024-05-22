function Score({ firstTime, score, setShowScore, handleTryAgain }) {
    return (
        <div className="score-div">
            { firstTime ? 
            <>
                <button onClick={() => setShowScore(false)}>New game</button>
            </> :
            <>
                <h1>Your final score is {score}</h1>
                <button onClick={() => handleTryAgain}>Play Again</button>
            </>
            }
        </div>
    )
};

export default Score;