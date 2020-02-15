import React from 'react';
import "./page.css"
import FontProvider from "../components/fontProvider";

const Page = (props) => {
    const getRandomWithMargin = () => {
        return Math.random() * 5 + "%"
    };
    const getRandomHeightMargin = () => {
        return Math.random() * 5 + "%"
    };



    return (
        <div
            className={"page"}
            style={{
                paddingLeft: getRandomWithMargin(),
                paddingRight: getRandomWithMargin(),
            }}
        >
                {props.children}
        </div>
    )
};

export default Page
