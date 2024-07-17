import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState(""); //here text is a state and usestate helps in creating state variable
    return (
   <>
   <div className="container" style={{color: props.mode==='dark'?'white':'#043a5e'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'#043a5e'}} id="mybox" rows="8"></textarea>   {/*onChange is used to listen to the event otherwise we will be not able to write anything in text Area*/}
        </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#043a5e'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
   </>
  )
}
