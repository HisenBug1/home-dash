import React, { useState, useEffect } from "react"
import axios from "axios";

const url = 'http://ubuntu:8000/garbage'

export default function Garbage() {
    const [garbage_date, setData] = useState([])
    const [garbage_type, setType] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(url)
                setData(res.data.date)
                setType(res.data.type)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();

    }, []);
    return (
        <section>
            <p>{garbage_date}</p>
            <p>{garbage_type}</p>
        </section>
    )
}