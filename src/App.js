// import logo from './logo.svg';
// import React, { useState } from 'react';
import './App.css';
// import Clock from './components/Clock'
import Garbage from './components/Garbage'
import Time from './class/Time'
import Clock2 from './components/Clock2'

// const dateTime=new Date();

// const data = Clock.getDate()

function App() {

  const time = new Time()

  return (
    <div className='background h-screen text-white'>
      <Clock2 time={time} />
      <div className='flex pt-10 justify-evenly'>
        <Garbage />
      </div>
    </div>
  );
}

export default App;
