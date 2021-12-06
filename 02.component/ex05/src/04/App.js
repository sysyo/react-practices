import React, {useState, useEffect, Fragment} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentClockTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
            minutes: minutes,
            seconds: seconds,
            session: hours >= 12 ? "pm" : "am"
        };
    }

    const [currentClockTime, setCurrentClockTime] = useState(getCurrentClockTime());
    const [ticks, setTicks] = useState(0);

    useEffect(() => {
        setInterval(function () { // Interval 안에 callback 함수로 들어와 있음
            setCurrentClockTime(getCurrentClockTime());
            setTicks(ticks+1);
        }, 1000);
    }, []);

    // useEffect(() => {
    //     console.log("setTimeout called");
    //     setInterval(function () {
    //         setCurrentClockTime(getCurrentClockTime());
    //         setTicks(ticks+1);
    //     }, 1000);
    // }, [currentClockTime]);

    // -------------------- setInterval ----------------------
    // useEffect(() => {
    //     console.log("setInterval called");
    //     setInterval(function () {
    //         setCurrentClockTime(getCurrentClockTime());
    //     }, 1000);
    // }); // -> 랜더링이 될 때마다 호출됨 -> 쓰면 안되는 코드

    // -------------------- setTimeout ----------------------
    // useEffect(() => {
    //     console.log("setTimeout called");
    //     setTimeout(function () {
    //         setCurrentClockTime(getCurrentClockTime());
    //     }, 1000);
    // }); // [] 없이 사용하고 싶으면 Timeout 을 사용하기 - 시간이 다 되면 호출 (state 변경되는 호출이기 때문에 console에서 호출)

    //-----------------------------------------------------
    // return <Clock
    //             message={'ex05: useEffect Hook example'}
    //             hours={currentClockTime.hours}
    //             minutes={currentClockTime.minutes}
    //             seconds={currentClockTime.seconds} />;

    return (
        <Fragment>
            <span>{ticks} </span>
            <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={currentClockTime.hours}
                    minutes={currentClockTime.minutes}
                    seconds={currentClockTime.seconds} />
         </Fragment>
    );
                
}