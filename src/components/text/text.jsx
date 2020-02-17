import React from 'react';
import "./text.css"

const Text = (props) => {

    const textgen = require('txtgen');

    const getText = () => {
        let paragraphArray = textgen.paragraph().split(' ');
        return paragraphArray.splice(
            0,
            paragraphArray.length/3
        ).join(' ')
    }

    return (
        <p
            style={props.style}
            className={props.className}
        >
            {getText()}
        </p>
    )
};

export default Text
