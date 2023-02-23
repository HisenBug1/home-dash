import React, { useState, useEffect } from "react"
import axios from "axios";

const url = 'http://ubuntu:8000/garbage'

export default function Garbage() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(url)
                setData(res.data.date)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();

    }, []);
    return <p>{data}</p>
}