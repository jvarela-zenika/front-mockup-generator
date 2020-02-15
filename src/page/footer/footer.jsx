import React from 'react';
import "./footer.css"
import { WiredButton, WiredInput } from "wired-elements"

const Footer = (props) => {
    const getHeight = () => {
        return .05+Math.random()/7
    };

    return (
        <div className={"footer"} style={{flex: getHeight()}}>
            <wired-card>
                Footer
            </wired-card>
        </div>
    )
};

export default Footer
