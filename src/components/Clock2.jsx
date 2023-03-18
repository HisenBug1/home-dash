import React, { useState, useEffect } from "react"

export default function Clock2({time}) {
    const [d, setDate] = useState(time.getDayAndDate())
    const [t, setTime] = useState(time.getTime())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(time.getDayAndDate())
            setTime(time.getTime())
        }, 1000);
        return () => clearInterval(interval);
    }, [d, t, time])

    return (
        <div className="flex flex-col pt-5 text-2xl">
            <h1 className="m-auto">{d}</h1>
            <h1 className="m-auto">{t}</h1>
        </div>
    )
}