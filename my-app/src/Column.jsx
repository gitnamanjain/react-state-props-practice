import React from "react";

const Column=(props)=>{
    return(
        <div>
            {/* <h1>Test</h1> */}
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
        )
}

export default Column