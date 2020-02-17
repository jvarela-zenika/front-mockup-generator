import React from 'react';
import './App.css';
import Page from "./page";
import Node from "./page/node";
import Header from "./page/header";
import Footer from "./page/footer/footer";
import Body from "./page/body";
import Title from "./components/title";
import Text from "./components/text";
import Link from "./components/link";
import Image from "./components/image";
import Logo from "./components/logo";
import Button from "./components/button";

function App() {

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

    return (
        <Page>
            <Header>
                <Node size={{col: 1}}>
                    <Logo/>
                </Node>
                <Node size={{col: 5}} className={getPositionClasses(1, 0)}>
                    <Link/>
                    <Link/>
                    <Link/>
                </Node>
            </Header>
            <Body>
                <Node size={{row: 1, col: 6}} className={getPositionClasses(0, 0)}>
                    <Title h={1}/>
                </Node>
                <Node size={{row: 2, col: 1}}/>
                <Node size={{row: 2, col: 2}}>
                    <Image/>
                </Node>
                <Node size={{row: 1, col: 2}}>
                    <Title h={2}/>
                    <Text/>
                </Node>
                <Node size={{row: 1, col: 2}} className={getPositionClasses(1, 1)}>
                    <Button/>
                </Node>
                <Node size={{row: 2, col: 1}}/>
                <Node size={{row: 2, col: 1}}/>
                <Node size={{row: 1, col: 4}}>
                    <Title h={2}/>
                    <Text/>
                </Node>
                <Node size={{row: 1, col: 4}}>
                    <Link textWordsCount={4}/>
                </Node>
                <Node size={{row: 1, col: 1}}/>
                <Node size={{row: 1, col: 6}}/>
            </Body>
            <Footer/>
        </Page>
    );
}

export default App;
