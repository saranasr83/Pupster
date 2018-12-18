import React from "react";

const Alert = props => (
    <div 
    className={`alert alert-${props.type}`} 
    role="alert"
    style={{ width: "80%", margin: "0 auto", marginTop: 18, ...props.style }}
    >
        {props.children}
    </div>
)

export default Alert;




