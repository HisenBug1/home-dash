import React, { useState, useEffect, useCallback } from "react"
import axios from "axios";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import garbageLogo from '../images/garbage-bin-recycle-bin-svgrepo-com.png'
import recycleLogo from '../images/recycle-svgrepo-com.png'

const url = 'http://ubuntu:8000/garbage'

export default function Garbage() {
    const [garbage_date, setDate] = useState()
    const [both, setBoth] = useState()
    const [dayRemaining, setRemaining] = useState()
    const [timeUntilMidnight, setTimeUntilMidnight] = useState(null)

    

    const fetchData = useCallback(async () => {
        try {
            const res = await axios.get(url)

            setDate(res.data.date)
            console.log("Garbage: Data fetched")

            // format date string to JS date
            const d = res.data.date.split('-')  // '2023-12-31'
            d[1] = parseInt(d[1]) - 1   // convert month string to int
            const jsDate = new Date(d[0], d[1], d[2])

            // calculate days remaining
            setRemaining(jsDate - new Date())
            console.log("Garbage: Set remaining days")

            const garbage_type = res.data.type

            if (garbage_type.toLowerCase().includes('both')) {
                setBoth(true)
                console.log("Garbage: Set garbage type to both")
            }
            else {
                setBoth(false)
                console.log("Garbage: Set garbage type to single")
            }
        } catch (err) {
            console.log(err)
        }
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const midnight = new Date(now);

            midnight.setHours(24, 0, 0, 0); // set to next midnight

            setTimeUntilMidnight(midnight.getTime() - now.getTime());
            console.log("Garbage: Set interval")

            fetchData() // fetch every midnight

        }, timeUntilMidnight);

        return () => {
            clearInterval(intervalId);
            console.log("Garbage: Cleared interval")
        };
    }, [fetchData, timeUntilMidnight, dayRemaining]);

    function show_days_remaining() {
        const d = dayRemaining / (1000 * 3600 * 24)  // miliseconds -> days
        if (d <= 0)
            return ("Today")
        else if (d > 0 && d <= 1)
            return ("Tomorrow")
        else
            return ("" + Math.ceil(d) + " days")
    }

    if (both) {
        return (
            <Box className='flex flex-col rounded-[2rem] justify-items-center text-center'
                sx={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                <div className="pt-1">{garbage_date}</div>
                <div>{show_days_remaining()}</div>
                <div className="max-w-[50%] m-auto flex flex-row justify-center">
                    <img src={garbageLogo} alt='logo of waste bin' />
                    <img src={recycleLogo} alt='logo of recycle bin' />
                </div>
            </Box>
        )
    }
    else {
        return (
            <Box className='flex flex-col rounded-[2rem] justify-items-center text-center'
                sx={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                <div className="pt-1">{garbage_date}</div>
                <div>{show_days_remaining()}</div>
                <div className="max-w-[75%] m-auto">
                    <img src={garbageLogo} alt='logo of waste bin' />
                </div>
            </Box>
        )
    }
}