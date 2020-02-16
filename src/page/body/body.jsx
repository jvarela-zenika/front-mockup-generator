import React from 'react';
import "./body.css"
import {random} from "txtgen/src/util";

const Body = (props) => {
    return (
        <div
            className={"body"}
            style={{
                ...props.style,
                ...{
                    gridColumnGap: random(1, 10) + 'px',
                    gridRowGap: random(1, 10) + 'px',
                }
            }}
        >
            {props.children}
        </div>
    )
};

export default Body
