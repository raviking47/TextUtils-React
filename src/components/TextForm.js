import React,{useState} from 'react';

export default function TextForm(props) {
  const handleUpClick=()=>{
    setText(text.toUpperCase())
    props.alert("Convert in UpperCase","Succes")
  }
  const handleLowClick=()=>{
    setText(text.toLowerCase())
    props.alert("Convert in LowerCase","Succes")
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const clearTextClick=()=>{
    setText("")
    props.alert("Clear Text","Succes")
  }
  const copyText=()=>{
      navigator.clipboard.writeText(text)
      props.alert("Copy Text","Succes")
  }
  const [text, setText] =useState("")


  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea rows="8" cols="50" className='form-control'id='exampleForControlTextarea1' value={text} onChange={handleOnChange} style={{color:props.mode==='dark'?'black':'white',backgroundColor:props.mode==='dark'?'white':'grey'}} ></textarea>
      </div>
      <button className={`btn btn-${props.mode==='light'?'light':'dark'} mx-2`} onClick={handleUpClick}>Convert To Uppercase</button>      <button className={`btn btn-${props.mode==='light'?'light':'dark'} mx-2`} onClick={handleLowClick}>Convert To LowerCase</button>
      <button className={`btn btn-${props.mode==='light'?'light':'dark'} my-2 mx-2`} onClick={clearTextClick}>Clear Text</button>
      <button className={`btn btn-${props.mode==='light'?'light':'dark'} mx-2`} onClick={copyText}>Copy Text</button>



      <div>
      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <h3> {text.split(' ').length} Words,{text.length} characters
        <br />
        {0.008*text.split(' ').length} Time Need to Read The text</h3>
        <h2>Previwe</h2>
        <p>{text}</p>
      </div>
      </div>
    </div>
  )
}
