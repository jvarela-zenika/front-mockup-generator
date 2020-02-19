import React from 'react';
import "./footer.css"

const Footer = (props) => {
    const getHeight = () => {
        return .05 + Math.random() / 7
    };

    const getBorderClass = () => {
        return "box" + (Math.floor(Math.random() * 5) + 1)
    };

    return (
        <div className={"footer " + getBorderClass()} style={{flex: getHeight()}}>
        </div>
    )
};

export default Footer
