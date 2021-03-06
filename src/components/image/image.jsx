import React from 'react';
import "./image.css"

const Image = (props) => {

    const getImage = () => {
        let randNumber = Math.random();
        let imgId;

        if (randNumber < .33) {
            imgId = 1;
        } else {
            imgId = randNumber < .66 ? 2 : 3;
        }

        return imgId ? "/images/img" + imgId + ".png" : "";
    };

    const getBorderClass = () => {
        return "box" + (Math.floor(Math.random() * 5) + 1)
    };

    return (
        <img className={getBorderClass()} src={getImage()} alt={"i'm a missing image"}/>
    )
};

export default Image
