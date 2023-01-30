import React, { useState } from 'react'

export default function Textarea(props) {
  const funct=()=>{
    const n =text.toUpperCase();
    newText(n);
    props.showalert("Change into UPPERCASE","success");
  }
  const funct2=()=>{
    const n =text.toLowerCase();
    newText(n);
  }
  const funct3=()=>{
    if(window.confirm("Are U sure")===true){
      const n =""
      newText(n);
    }
    else{
      const n =text
      newText(n);
    }
  }
  const fun=(e)=>{
    newText(e.target.value);
  }
  const[text,newText]=useState("");
  return (
    <>
    <div className="container" >
      <h1 className='my-4' style={{color:props.textmode==='hsl(216deg 16% 82%)'?'black':'white'}}>Enter the something here...</h1>
      <div className="textarea my-3">
     <textarea className="form-control" id="textarea" value={text}  onChange={fun} rows="10" placeholder="Type here.."  style={{backgroundColor:props.textmode==='hsl(216deg 16% 82%)'?'white':'#000000' ,border:props.textmode==='hsl(216deg 16% 82%)'?'1px solid black':'1px solid red',color:props.textmode==='hsl(216deg 16% 82%)'?'black':'white'}}></textarea>
     </div>   
  </div>
  <div className="container">
  <button type="button" className="btn btn-success my-3 " onClick={funct}>{props.bt1}</button>
     <button type="button" className="btn btn-success my-3 mx-3" onClick={funct2}>{props.bt2}</button>
     <button type="button" className="btn btn-success my-3 " onClick={funct3}>{props.bt3}</button>
  </div>
  <div className="container my-3" style={{color:props.textmode==='hsl(216deg 16% 82%)'?'black':'white'}}>
    <h1>About Text </h1>
    <p>words:{text.split(" ").length-1} Charaters:{text.length}</p>
    <p>Reading Time:{0.008*text.split(" ").length} </p>
    <h2>preview:-</h2>
    <h6>{text}</h6>
  </div>
  </>
  )
}
