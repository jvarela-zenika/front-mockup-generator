import React from 'react';
import "./node.css"
import { WiredButton, WiredInput } from "wired-elements"

const Node = (props) => {


    return (
        <div
            style={{
                gridColumn: 'auto / span ' + props.col,
                gridRow: 'auto / span ' + props.row,
            }}
            className={"node"}
        >
               {props.children}
        </div>
    )
};

export default Node
