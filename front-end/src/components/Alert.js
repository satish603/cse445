import React from 'react'

function Alert(props) {
  const capitalKaro=(word)=>{
    if(word==="danger"){word="error"}
    let lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  // important to set height in alert otherwise website layout will shift once alert pop-ups
  return (
    <div style={{height: '40px'}}>   
       {props.alert && <div>                   {/* this syntax is used as and condition */}
        <div className="alert alert-primary" role="alert">
            <strong>{capitalKaro(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    </div>}
    </div>
  )
}

export default Alert