import { useState, useEffect } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning) {
            timer = setInterval(() => {
                setCount(count => count + 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isRunning]);

    return (
        <div>
            <h2>Incremental Timer: {count}</h2>
            <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'Pause ' : 'Play '}</button>
        </div>
    );
};

export default Timer;