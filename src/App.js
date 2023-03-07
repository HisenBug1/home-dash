// import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock'
import Garbage from './components/Garbage'

// const dateTime=new Date();

// const data = Clock.getDate()

function App() {

  return (
    <div className='background h-screen text-white'>
        <Clock />
      <div className='flex pt-10 justify-evenly'>
        <Garbage />
      </div>
    </div>
  );
}

export default App;
