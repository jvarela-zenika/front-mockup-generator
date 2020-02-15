import React from 'react';
import "./body.css"

const Body = (props) => {
    const getRandomWithMargin = () => {
        return Math.random() * 8 + "%"
    };
    const getRandomHeightMargin = () => {
        return Math.random() + "%"
    };
    return (
        <div
            className={"body"}
            style={{
                marginLeft: getRandomWithMargin(),
                marginRight: getRandomWithMargin(),
                marginTop: getRandomHeightMargin(),
                marginBottom: getRandomHeightMargin()
            }}
        >
            {props.children}
        </div>
    )
};

export default Body
