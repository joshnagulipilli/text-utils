import React from 'react';

 function About(props)
{

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black  " ,
     backgroundColor :  props.mode === "dark" ? "black" : "white ",
     border:'1px solid ',
     borderColor: props.mode === "dark" ? "white ": "black"
    
  }

    return (
         <div className="accordion " id="accordionExample" style={{color : props.mode === "dark" ? "white" : "black"}}>
          <h2>About Us</h2>
        <div className={`accordion-item bg-${props.mode}`}>
          <h2 className="accordion-header" id="headingOne">
            <button className={`accordion-button bg-${props.mode}` } type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
            <strong> Analyze your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <p>
                Text utils gives you a way to analyze your text quickly and efficiently . Be it word count , character count 
              </p>
            </div>
          </div>
        </div>
        <div className={`accordion-item bg-${props.mode}`} >
          <h2 className="accordion-header" id="headingTwo">
            <button className={`accordion-button collapsed bg-${props.mode} ` }  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            <strong>Free To Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={myStyle} >
            <p>TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters . Thus it is suitable for writing text with word / character  limit</p>
            </div>
          </div>
        </div>
        <div className={`accordion-item bg-${props.mode}`} >
          <h2 className="accordion-header" id="headingThree">
            <button className={`accordion-button collapsed bg-${props.mode} ` }  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle} >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle} >
          <p>
            This word counter software works in any web browsers such as Chrome ,Firefox , Internet Explorer , Safari ,Opera . It suits to count characters in facebook , n=blog , books , excel document , pdf document , essays ,etc.
          </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About;


