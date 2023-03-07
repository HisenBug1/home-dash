import React, { useState, useEffect } from "react"
import axios from "axios";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

const url = 'http://ubuntu:8000/garbage'

export default function Garbage() {
    const [garbage_date, setDate] = useState([])
    const [garbage_type, setType] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(url)
                setDate(res.data.date)
                setType(res.data.type)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    return (
        <Box className='flex flex-col rounded-[2rem] justify-items-center text-center'
            sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        >
        <div>{garbage_date}</div>
        <div>{garbage_type}</div>
        </Box>
    )
}