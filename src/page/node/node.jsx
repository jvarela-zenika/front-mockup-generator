import React from 'react';
import "./node.css"
import {WiredButton, WiredInput} from "wired-elements"

const Node = (props) => {

    const getStyle = () => {
        let randWidth = Math.floor(Math.random() * 3);
        let randHeight = Math.floor(Math.random() * 3);

        return {
            gridColumn: 'auto / span ' + (props.col ? props.col : 1),
            gridRow: 'auto / span ' + (props.row ? props.row : 1),
            marginLeft: randWidth + '%',
            marginTop: randHeight + '%',
            maxWidth: 100 - randWidth + '%',
            minWidth: 100 - randWidth + '%',
            maxHeight: 100 - randHeight + '%',
            minHeight: 100 - randHeight + '%',
        }
    };

    return (
        <div
            style={getStyle()}
            className={"node"}
        >
            {props.children}
        </div>
    )
};

export default Node
