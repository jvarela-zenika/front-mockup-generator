import React from 'react';
import "./link.css"
import {WiredLink} from "wired-link"
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
            <div
                style={{
                    marginLeft: random(20, 20)+'px',
                    marginRight: random(20, 20)+'px'
                }}
                className={'link'}
            >
                <wired-link href={'#'}>
                    {getText()}
                </wired-link>
            </div>
    )
};

export default Link
