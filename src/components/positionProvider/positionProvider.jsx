import React from 'react';
import "./positionProvider.css"

const PositionProvider = (props) => {

    const getPositionClasses = () => {
        let output = '';
        if (props.position.x > 0) {
            output += 'align-right '
        } else {
            output += props.position.x === 0 ? 'align-center ' : 'align-left '
        }

        if (props.position.y > 0) {
            output += 'align-bottom '
        } else {
            output += props.position.y === 0 ? 'align-middle ' : 'align-top '
        }
        return output;
    };

    const getPositionPerturbations = () => {
        return {
            marginTop: Math.floor(Math.random() * 5) + 'px',
            marginBottom: Math.floor(Math.random() * 5) + 'px',
            marginLeft: Math.floor(Math.random() * 5) + 'px',
            marginRight: Math.floor(Math.random() * 5) + 'px',
            paddingTop: Math.floor(Math.random() * 5) + 'px',
            paddingBottom: Math.floor(Math.random() * 5) + 'px',
            paddingLeft: Math.floor(Math.random() * 5) + 'px',
            paddingRight: Math.floor(Math.random() * 5) + 'px'
        }
    };

    return (
        <>
            {
                React.cloneElement(props.children, {
                    style: getPositionPerturbations(),
                    className: getPositionClasses()
                })
            }
        </>
    )
};

export default PositionProvider
