function Score({ firstTime, score, handleTryAgain }) {
    return (
        <div className="score-div">
            { firstTime ? 
            <>
                <h1>{"Let's go!"}<em>{"(o 'Los gehts', en aleman!)"}</em></h1>
                <button className="newgame" onClick={() => handleTryAgain()}>New game</button>
            </> :
            <>
                <h1>Final score: <span>{Math.round(score)}</span></h1>
                <button className="tryagain" onClick={() => handleTryAgain()}>Play Again</button>
            </>
            }
        </div>
    )
};

export default Score;