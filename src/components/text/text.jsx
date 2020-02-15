import React from 'react';
import "./text.css"
import FontProvider from "../fontProvider/fontProvider.component";

const Text = (props) => {

    const textgen = require('txtgen');

    return (
        <FontProvider>
            <p
                style={{
                    ...props.style,
                    fontSize: (1.2 + Math.random()) + 'em'
                }}
                className={props.className}
            >
                {textgen.paragraph()}
            </p>
        </FontProvider>
    )
};

export default Text
