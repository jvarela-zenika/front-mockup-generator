import React from 'react';
import "./link.css"
import {WiredLink} from "wired-link"
import FontProvider from "../fontProvider/fontProvider.component";
import {random} from "txtgen/src/util";

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
                    fontSize: (1.2 + Math.random()) + 'em',
                    marginLeft: random(2, 10)+'px',
                    marginRight: random(2, 10)+'px'
                }}
                className={'link '+props.className}
            >
                <wired-link href={'#'}>
                    {getText()}
                </wired-link>
            </div>
        </FontProvider>
    )
};

export default Link
