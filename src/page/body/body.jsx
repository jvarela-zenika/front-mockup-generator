import React from 'react';
import "./body.css"

const Body = (props) => {
    return (
        <div className={"body"}>
            {props.children}
        </div>
    )
};

export default Body
