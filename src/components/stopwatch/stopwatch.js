import React, {useState, useEffect} from 'react';
import useInterval from '../../hooks/useInterval';

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [delay, setDelay] = useState(0);

    useInterval(()=> {
        tick();
    }, isRunning ? delay : null);

    useEffect(() => {
        setDelay(1000);
    }, [])

    //Methods
    const tick = () => {
        if(seconds < 59){
            setSeconds(seconds + 1);
        }
        else if (seconds == 59) {
            setSeconds(0);
            setMinutes(minutes + 1);
        }
        else if (minutes == 59) {
            setMinutes(0);
            setHours(hours + 1);
        }
    }

    const toggleRun = () => {
        setIsRunning(!isRunning);
    }

    const reset = () => {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    const state = !isRunning ? 'start':'pause';

    return (
        <div>
            <div>Hours: {hours}</div>
            <div>Minutes: {minutes}</div>
            <div>Seconds: {seconds}</div>
            <div>
                <button onClick={toggleRun}>{state}</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;