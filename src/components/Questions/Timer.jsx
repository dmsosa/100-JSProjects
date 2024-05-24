import { useEffect, useState } from "react";

function Timer() {
    const [ timer, setTimer ] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer - 1)
        }, 1000)
        return clearInterval(interval);
    }, [])
    return (
        <div className="timer">
            <div className="timer-bar">{timer}s</div>
        </div>
    )
}

export default Timer;