import React from 'react';
import "./fontProvider.css"
import moment from 'moment';

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

    const getFontIndex = () => {
        return moment().format('ss') % fonts.length
    };

    const getChildren = () => {

        if (!props.children) {
            return {};
        }

        return React.cloneElement(
            props.children, {
                ...props, style: {
                    fontFamily: fonts[getFontIndex()],
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
