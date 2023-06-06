import React, { useState } from "react";


export default function TextForm(props) {
  const [text, setText] = useState(" ");

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };

  const handleUpClick = () => {
    // console.log("up is used");
    const a = text.toUpperCase();
    setText(a);
    props.showAlert("converted to uppercase!","success")
  };
  const handleClearClick = () => {
    const a = " ";
    setText(a);
    props.showAlert("text Cleared!","success")
  };
  const handleLoClick = () => {
    // console.log("up is used");
    const a = text.toLowerCase();
    setText(a);
    props.showAlert("converted to lowercase!","success")
  };

  const handleColorClick = () => {
    console.log("hi ");
    var a = text.charAt(0).toUpperCase() + text.slice(1);
    setText(a);
    props.showAlert("Converted to a Sentence case!","success")
  };
  const handleCopy = () => {
    // console.log("hi ")
    var text = document.getElementById("textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success")
  };
  const handleSpace = () => {
    // console.log("hi ")
    let a = text.split(/[ ]+/);
    setText(a.join(" "));
    props.showAlert("Removed extra spaces!","success")
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3 className='mb-2'>{props.heading}</h3>
        <div className="mb-8 row-8">
          <textarea
            className="form-control "
            value={text}
            onChange={handleOnChange}
            id="textarea"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0}
          type="button"
          className="btn btn-primary my-1 mx-1"
          onClick={handleUpClick}
        >
        
          UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-secondary mx-1   my-1" onClick={handleLoClick}>
      
          LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          
          Clear
        </button>
        <button disabled={text.length===0}  className="btn btn-secondary mx-1  my-1" onClick={handleColorClick}>
          sentence case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy text
        </button>
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleSpace}>
          Remove space
        </button>
      </div>
      <div
        className="container mx-6"
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h4>Know the length </h4>
        <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} Words
             and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length === 0 ? "Nothing to Preview!" : text}</p>
      </div>
    </>
  );
}


