import React from 'react';
import "./link.css"
import {WiredLink} from "wired-link"
import FontProvider from "../fontProvider/fontProvider.component";

const Link = (props) => {

    const getText = () => {
        let adjs = textgen.getAdjectives();
        let nouns = textgen.getNouns();

        if (!props.textWordsCount) {
            return adjs[Math.floor(Math.random() * adjs.length)];
        }

        let output = '';

        for (let i = 0; i < props.textWordsCount - 1; i++) {
            output += adjs[Math.floor(Math.random() * adjs.length)] + ' ';
        }

        output += nouns[Math.floor(Math.random() * nouns.length)];
        return output;
    };

    const textgen = require('txtgen');

    return (
        <FontProvider>
            <div
                style={{
                    ...props.style,
                    fontSize: (1.2 + Math.random()) + 'em'
                }}
            >
                <wired-link href={'#'}>
                    {getText()}
                </wired-link>
            </div>
        </FontProvider>
    )
};

export default Link
