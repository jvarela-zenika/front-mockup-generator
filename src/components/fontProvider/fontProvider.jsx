import React from 'react';
import "./fontProvider.css"

const FontProvider = (props) => {

    const fonts = [
        'Dancing Script',
        'Shadows Into Light',
        'Cedarville Cursive',
        'Sacramento',
        'Homemade Apple',
        'Reenie Beanie',
        'Waiting for the Sunrise',
        'La Belle Aurore',
        'Zeyada'
    ];

    const getChildren = () => {

        if (!props.children) {
            return {};
        }

        return React.cloneElement(
            props.children, {
                ...props, style: {
                    fontFamily: fonts[Math.floor(Math.random() * fonts.length)],
                }
            }
        )

    };

    return (
        <>
            {getChildren()}
        </>
    )
};

export default FontProvider
