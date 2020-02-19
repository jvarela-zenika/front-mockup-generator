import React, {useEffect, useState} from 'react';
import './App.css';
import Page from "./page";
import Node from "./page/node";
import Header from "./page/header";
import Footer from "./page/footer/footer";
import Title from "./components/title";
import Text from "./components/text";
import Link from "./components/link";
import Image from "./components/image";
import Button from "./components/button";
import Logo from "./components/logo";
import Body from "./page/body";

function App() {
    const [structure, setStructure] = useState("");

    const getPositionClasses = (x, y) => {
        let output = '';
        if (x > 0) {
            output += 'align-right '
        } else {
            output += x === 0 ? 'align-center ' : 'align-left '
        }

        if (y > 0) {
            output += 'align-bottom '
        } else {
            output += y === 0 ? 'align-middle ' : 'align-top '
        }
        return output;
    };

    useEffect(() => {
        let currentKeyIndex = 0;

        function getNode(elementType, nodeJSON) {
            let components = [];
            nodeJSON.components.forEach(componentJSON => {
                components.push(getComponent(elementType, componentJSON));
            });

            return React.createElement(
                Node,
                {
                    key: getUniqueKey(),
                    size: {
                        row: nodeJSON.xcapacity,
                        col: nodeJSON.ycapacity
                    }
                },
                components
            );
        }

        function getUniqueKey() {
            currentKeyIndex++;
            return currentKeyIndex;
        }

        function getComponent(elementType, componentJSON) {
            let xPosition;

            switch (componentJSON.position) {
                case 'LEFT':
                    xPosition = -1;
                    break;
                case 'CENTER':
                    xPosition = 0;
                    break;
                case 'RIGHT':
                    xPosition = 1;
                    break;
                default:
                    xPosition = -1;
            }

            let componentType;
            switch (componentJSON.type) {
                case 'LINK':
                    componentType = Link;
                    break;
                case 'IMAGE':
                    componentType = elementType === 'HEADER' ? Logo : Image;
                    break;
                case 'TEXT':
                    componentType = Text;
                    break;
                case 'BUTTON':
                    componentType = Button;
                    break;
                case 'TITLE':
                    return React.createElement(
                        Title,
                        {
                            key: getUniqueKey(),
                            className: getPositionClasses(xPosition, 0),
                            h: 1
                        });
                case 'SUBTITLE':
                    return React.createElement(
                        Title,
                        {
                            key: getUniqueKey(),
                            className: getPositionClasses(xPosition, 0),
                            h: 2
                        });
            }
            return React.createElement(
                componentType,
                {
                    key: getUniqueKey(),
                    className: getPositionClasses(xPosition, 0),
                });
        }


        async function fetchData() {
            fetch("http://localhost:8080/api/page-generator")
                .then((response) => {
                    response.json().then(pageJSON => {

                        let header, body, footer = '';

                        pageJSON.elements.forEach(element => {

                            if (element.type === 'FOOTER') {
                                footer = React.createElement(Footer, {key: getUniqueKey()});
                            }

                            let childrens = [];
                            element.nodes.forEach(nodeJSON => {
                                childrens.push(getNode(element.type, nodeJSON));
                            });

                            switch (element.type) {
                                case 'HEADER':
                                    header = React.createElement(Header, {key: getUniqueKey()}, [...childrens]);
                                    break;
                                case 'BODY':
                                    body = React.createElement(Body, {key: getUniqueKey()}, [...childrens]);
                                    break;
                            }

                        });

                        let page = React.createElement(Page, {key: getUniqueKey()}, [header, body, footer]);
                        console.log(pageJSON.childToString);
                        setStructure(page)
                    });
                })
        }

        fetchData();
    }, []);

    return (
        <>
            {structure}
        </>
    );
}

export default App;
