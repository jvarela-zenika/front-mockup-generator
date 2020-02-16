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
import PositionProvider from "./components/positionProvider";
import Image from "./components/image";
import FontProvider from "./components/fontProvider";
import Logo from "./components/logo";

function App() {
    return (
        <Page>
            <Header>
                <Node col={1}>
                    <PositionProvider position={{x: -1, y: -1}}>
                        <Logo/>
                    </PositionProvider>
                </Node>
                <Node col={1}>
                    <PositionProvider position={{x: 1, y: 1}}>
                        <Link/>
                    </PositionProvider>
                </Node>
                <Node col={1}>
                    <PositionProvider position={{x: 1, y: 1}}>
                        <Link/>
                    </PositionProvider>
                </Node>
                <Node col={1}>
                    <PositionProvider position={{x: 1, y: 1}}>
                        <Link/>
                    </PositionProvider>
                </Node>
            </Header>
            <Body>
                <Node col={6} row={1}>
                    <PositionProvider position={{x: 0, y: 0}}>
                        <Title h={1}/>
                    </PositionProvider>
                </Node>
                <Node col={1} row={2}/>
                <Node col={2} row={2}>
                    <PositionProvider position={{x: 0, y: 0}}>
                        <Image/>
                    </PositionProvider>
                </Node>
                <Node col={2} row={2}>
                    <PositionProvider position={{x: -1, y: -1}}>
                        <Title h={2}/>
                    </PositionProvider>
                    <PositionProvider position={{x: -1, y: -1}}>
                        <Text/>
                    </PositionProvider>
                </Node>
                <Node col={1} row={2}/>
                <Node col={1} row={2}/>
                <Node col={4} row={1}>
                    <PositionProvider position={{x: -1, y: -1}}>
                        <Title h={2}/>
                    </PositionProvider>
                    <PositionProvider position={{x: -1, y: -1}}>
                        <Text/>
                    </PositionProvider>
                </Node>
                <Node col={1} row={2}/>
                <Node col={4} row={1}>
                    <PositionProvider position={{x: 1, y: 1}}>
                        <Link textWordsCount={4}/>
                    </PositionProvider>
                </Node>
                <Node col={1} row={1}/>
            </Body>
            <Footer/>
        </Page>
    );
}

export default App;
