import React, { useState } from "react"
import Moment from 'react-moment'

export default function Clock() {

    const [dateTime, setDateTime] = useState(new Date())
    const [fullDate, setFullDate] = useState(<Moment format='dddd, MMMM D Y'>{dateTime}</Moment>)
    const [time, setTime] = useState(dateTime.toLocaleTimeString())

    function tick() {
        setDateTime(new Date());
        setFullDate(<Moment format='dddd, MMMM D Y'>{dateTime}</Moment>)
        setTime(dateTime.toLocaleTimeString())
        clearInterval(clockID)
    }

    const clockID = setInterval(() => tick(), 1000);

    return (
        <section className=' flex flex-col pt-5 text-2xl'>
            <div className="m-auto">
                {fullDate}
            </div>
            <div className="m-auto">
                {time}
            </div>
        </section>
    );
}