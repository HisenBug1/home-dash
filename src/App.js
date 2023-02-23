// import logo from './logo.svg';
// import './App.css';
import Clock from './components/Clock'
import Garbage from './components/Garbage'

// const dateTime=new Date();

// const data = Clock.getDate()

function App() {

  return (
    <div className='bg-[#23015e] h-screen text-white'>
      {/* <div className=' flex justify-center pt-5 text-2xl'> */}
        <Clock />
      {/* </div> */}
      <div className='flex justify-evenly pt-10'>
        <Garbage />
      </div>
    </div>
  );
}

export default App;
