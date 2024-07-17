import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


function App() {            //we are using function based components so we don't need to import react (imr)
  const [mode, setmode] = useState("light");
 
  const toggleMode = ()=>{
    if(mode === 'light')
      {
        setmode('dark');
        document.body.style.backgroundColor = '#043a5e';
        
      }
      else{
        setmode('light');
        document.body.style.backgroundColor = 'white';
      }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading="Enter the Text to Analyze below"  mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
