import React from 'react';
import "./page.css"
import {css} from "glamor";

const Page = (props) => {
    const getRandomWithMargin = () => {
        return Math.random() * 5 + "%"
    };

    const fonts = [
        {
            title: 'Dancing Script',
            p: {min: 1.5, max: 1.7},
            h3: {min: 1.8, max: 1.9},
            h2: {min: 2, max: 2.1},
            h1: {min: 2.4, max: 2.6},
        },
        {
            title: 'Shadows Into Light',
            p: {min: 1.1, max: 1.2},
            h3: {min: 1.3, max: 1.5},
            h2: {min: 1.7, max: 1.9},
            h1: {min: 2.3, max: 2.6},
        },
        {
            title: 'Cedarville Cursive',
            p: {min: 1, max: 1.1},
            h3: {min: 1.2, max: 1.3},
            h2: {min: 1.4, max: 1.6},
            h1: {min: 2, max: 2.1},
        },
        {
            title: 'Sacramento',
            p: {min: 1.5, max: 1.7},
            h3: {min: 1.8, max: 1.9},
            h2: {min: 2, max: 2.1},
            h1: {min: 2.5, max: 2.6},
        },
        {
            title: 'Homemade Apple',
            p: {min: .9, max: 1.1},
            h3: {min: 1.2, max: 1.3},
            h2: {min: 1.4, max: 1.6},
            h1: {min: 2, max: 2.1},
        },
        {
            title: 'Reenie Beanie',
            p: {min: 1.5, max: 1.7},
            h3: {min: 1.8, max: 1.9},
            h2: {min: 2, max: 2.1},
            h1: {min: 2.3, max: 2.5},
        },
        {
            title: 'Waiting for the Sunrise',
            p: {min: 1.1, max: 1.2},
            h3: {min: 1.3, max: 1.5},
            h2: {min: 1.7, max: 1.9},
            h1: {min: 2.3, max: 2.5},
        },
        {
            title: 'La Belle Aurore',
            p: {min: 1, max: 1.1},
            h3: {min: 1.2, max: 1.3},
            h2: {min: 1.4, max: 1.6},
            h1: {min: 2, max: 2.2},
        },
        {
            title: 'Zeyada',
            p: {min: 1.1, max: 1.2},
            h3: {min: 1.3, max: 1.5},
            h2: {min: 1.7, max: 1.9},
            h1: {min: 2.3, max: 2.5},
        }
    ];

    const getRandomRange = (min, max) => {
        return min + (Math.random() * (max-min))
    }

    const getFontStyle = () => {
        let font = fonts[Math.floor(getRandomRange(0, fonts.length))]

        return css({
            fontFamily: font.title,
            ' h1': {
                fontSize: getRandomRange(font.h1.min, font.h1.max)+'em'
            },
            ' h2': {
                fontSize:  getRandomRange(font.h2.min, font.h2.max)+'em'
            },
            ' h3': {
                fontSize:  getRandomRange(font.h3.min, font.h3.max)+'em'
            },
            ' p': {
                fontSize:  getRandomRange(font.p.min, font.p.max)+'em'
            },
            ' a': {
                fontSize:  getRandomRange(font.p.min, font.p.max)+'em'
            }
        })
    }


    return (
        <div
            className={"page"}
            style={{
                paddingLeft: getRandomWithMargin(),
                paddingRight: getRandomWithMargin(),
            }}
            {...getFontStyle()}
        >
            {props.children}
        </div>
    )
};

export default Page
