import React, { useState, useEffect } from "react"
import axios from "axios";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import garbageLogo from '../images/garbage-bin-recycle-bin-svgrepo-com.png'
import recycleLogo from '../images/recycle-svgrepo-com.png'

const url = 'http://ubuntu:8000/garbage'

export default function Garbage() {
    const [garbage_date, setDate] = useState()
    const [garbage_type, setType] = useState()
    const [both, setBoth] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(url)
                setDate(res.data.date)
                setType(res.data.type)
                if (garbage_type.toLowerCase().includes('both'))
                    setBoth(true)
                else
                    setBoth(false)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [garbage_type]);

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
                <div className="pt-5">{garbage_date}</div>
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
                <div className="max-w-[75%] m-auto">
                    <img src={garbageLogo} alt='logo of waste bin' />
                </div>
            </Box>
        )
    }
}