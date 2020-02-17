import React from 'react';
import "./node.css"

const Node = (props) => {

    const getStyle = () => {
        let randWidth = Math.floor(Math.random(1,3) * 3);
        let randHeight = Math.floor(Math.random() * 3);

        return {
            gridColumn: 'auto / span ' + (props.size.col ? props.size.col : 1),
            gridRow: 'auto / span ' + (props.size.row ? props.size.row : 1),
            marginLeft: randWidth + '%',
            marginTop: randHeight + '%',
            maxWidth: 100 - randWidth + '%',
            minWidth: 100 - randWidth + '%',
            maxHeight: 100 - randHeight + '%',
            minHeight: 100 - randHeight + '%',
        }
    };

    return (
        <div
            style={getStyle()}
            className={"node" + (props.className ? ' '+props.className : '')}
        >
            {props.children}
        </div>
    )
};

export default Node
