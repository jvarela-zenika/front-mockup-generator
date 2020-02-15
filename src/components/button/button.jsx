import React from 'react';
import "./button.css"
import { WiredButton, WiredInput } from "wired-elements"

const Button = (props) => {

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

export default Button
