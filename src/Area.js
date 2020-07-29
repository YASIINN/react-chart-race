import React from "react";

const Area = (props) => {
    return (
        <div className="area" style={{height:props.data.length * 40}}>
            {props.children}
        </div>
    )
}

export default Area