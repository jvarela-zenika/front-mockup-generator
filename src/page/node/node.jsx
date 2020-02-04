import React from 'react';
import "./node.css"
import { WiredButton, WiredInput } from "wired-elements"

const Node = (props) => {

    const style = {
        gridColumn: 'auto / span ' + props.col,
        gridRow: 'auto / span ' + props.row,
    };

    return (
        <div style={style} className={"node"}>
            <wired-card>
                Test
            </wired-card>
        </div>
    )
};

export default Node
