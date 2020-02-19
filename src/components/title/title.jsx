import React from 'react';
import "./title.css"

const Title = (props) => {

    const textgen = require('txtgen');

    const getTitle = () => {
        let output = "";
        switch (props.h) {
            case 1:
                output = <h1>{getTitleText()}</h1>;
                break;
            case 2:
                output = <h2>{getTitleText()}</h2>;
                break;
            default:
                output = <h3>{getTitleText()}</h3>;
                break;
        }
        return output;
    };

    const getTitleText = () => {
        let splitedText = textgen.sentence().split(' ');
        return splitedText.splice(
            0,
            Math.floor(2 + Math.random() * 5)
        )
            .join(' ');
    }

    return (
        <>
            {getTitle()}
        </>
    )
};

export default Title
