import React from 'react';
import "./button.css"
import {WiredButton} from "wired-elements"

const Button = (props) => {

    const textgen = require('txtgen');

    const getText = () => {
        let splitedText = textgen.sentence().split(' ');
        return splitedText.splice(
            0,
            Math.floor(2 + Math.random() * 2)
        )
            .join(' ');
    };

    return (
        <div
            className={"button" + (props.className ? ' ' + props.className : '')}
        >
            <wired-button>
                {getText()}
            </wired-button>
        </div>
    )
};

export default Button
