import { useEffect, useState } from "react";
import Quiz, { getAllQuestions } from "../components/Questions/Quiz";



function Three() {
    

    return (
        <>
            <h1>Quick quiz</h1>
            <div className="quiz-wrapper">
                <Quiz />
            </div>
        </>
    )
}

export default Three; 