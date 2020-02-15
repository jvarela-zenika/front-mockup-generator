import React from 'react';
import "./header.css"
import { WiredButton, WiredInput } from "wired-elements"

const Header = (props) => {
    const getHeaderHeight = () => {
        return .05+Math.random()/7
    };

    return (
        <div className={"header"} style={{flex: getHeaderHeight()}}>
            <wired-card>
                Header
            </wired-card>
        </div>
    );
};

export default Header
