
import './App.css';

import Navbar from './Components/Navbar';
// import About from './Components/About';
import Textarea from './Components/Textarea';
import {useState} from 'react';
import Alert from './Components/Alert';
// import {BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  const changetheme=()=>{
    if(cs.color==='black' && cs.backgroundColor==='white'){
        setcs({
            padding: '50px',
            textAlign: 'center',
            border:'1px solid black',
            backgroundColor: 'black',
            color: 'white'
        })
    }
    else{
        setcs({
            padding: '50px',
            textAlign: 'center',
            border:'1px solid black',
            backgroundColor: 'white',
            color: 'black'
        })
    }
}
const[cs,setcs]= useState({
    padding: '50px',
    textAlign: 'center',
    border:'1px solid black',
    backgroundColor: 'white',
    color: 'black'
});
  let showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  let changemode=()=>{
    if(mode.backgroundColor==='hsl(216deg 16% 82%)'){
      setmode({backgroundColor:'black'});
      document.body.style.backgroundColor='rgb(17 28 44)';
      showalert("Mode is enabled","success");
      changetheme();
    }
    else{
      setmode({backgroundColor:'hsl(216deg 16% 82%)'});
      document.body.style.backgroundColor='white';
      showalert("Mode is disable","success");
      changetheme();
    }
  }
  let changemode2=()=>{
    if(mode.backgroundColor==='hsl(216deg 16% 82%)'){
      setmode({backgroundColor:'black'});
      document.body.style.backgroundColor='rgb(204 193 15)';
      showalert("Mode is enabled","success");
      changetheme();
    }
    else{
      setmode({backgroundColor:'hsl(216deg 16% 82%)'});
      document.body.style.backgroundColor='white';
      showalert("Mode is disable","success");
      changetheme();
    }
  }
  let changemode3=()=>{
    if(mode.backgroundColor==='hsl(216deg 16% 82%)'){
      setmode({backgroundColor:'black'});
      document.body.style.backgroundColor='#c03bb1';
      showalert("Mode is enabled","success");
      changetheme();
    }
    else{
      setmode({backgroundColor:'hsl(216deg 16% 82%)'});
      document.body.style.backgroundColor='white';
      showalert("Mode is disable","success");
      changetheme();
    }
  }
  const[alert,setalert]=useState(null);
  const[mode,setmode]=useState({backgroundColor:'hsl(216deg 16% 82%)'});
  return (
    <>
    {/* <BrowserRouter>
    <Navbar title="Wcounter" about="AboutMe" Mode={mode} toggle1={changemode} toggle2={changemode2} toggle3={changemode3}/>
      <Routes>
        <Route exact path='/' element={
        <>
        <Alert alert={alert}/>
        <Textarea bt1="ToUPPER" bt2="ToLOWER" bt3="clear" textmode={mode.backgroundColor} showalert={showalert}/>
        </>
      }>  
      </Route>
        <Route exact path='/about'element={<About cs={cs} changetheme={changetheme}/>}></Route>
      </Routes>
    </BrowserRouter> */}
    <Navbar title="Wcounter" about="AboutMe" Mode={mode} toggle1={changemode} toggle2={changemode2} toggle3={changemode3}/>
    <Alert alert={alert}/>
    <Textarea bt1="ToUPPER" bt2="ToLOWER" bt3="clear" textmode={mode.backgroundColor} showalert={showalert}/>
    </>
  );
}

export default App;
