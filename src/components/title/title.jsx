import React from 'react';
import "./title.css"
import {WiredButton, WiredInput} from "wired-elements"
import FontProvider from "../fontProvider";

const Title = (props) => {

    // const fonts = [];
    //
    // const getFont = () => {
    //     if (Math.random() )
    // };

    const textgen = require('txtgen');

    const getTitle = () => {
        let output = "";
        switch (props.h) {
            case 1:
                output = <h1>{textgen.sentence()}</h1>;
                break;
            case 2:
                output = <h2>{textgen.sentence()}</h2>;
                break;
            default:
                output = <h3>{textgen.sentence()}</h3>;
                break;
        }
        return output;
    };

    return (
        <FontProvider>
            <div
                style={{
                    ...props.style,
                    fontWeight: "bold",
                    fontSize: ((4-props.h)/2+ Math.random()) + 'em'
                }}
                 className={props.className+' '+props.className}
            >
                {getTitle()}
            </div>
        </FontProvider>
    )
};

export default Title
