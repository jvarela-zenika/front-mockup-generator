import React from 'react';
import "./header.css"
import { WiredButton, WiredInput } from "wired-elements"
import {random} from "txtgen/src/util";

const Header = (props) => {
    const getHeaderHeight = () => {
        return .05+Math.random()/7
    };

    const getBorderClass = () => {
        return "box"+(Math.floor(Math.random()*5)+1)
    };

    return (
        <div
            className={"header " + getBorderClass()}
             style={{
                 flex: getHeaderHeight(),
                 maxHeight: random(9,12)+'%'
             }}
        >
            {props.children}
        </div>
    );
};

export default Header
