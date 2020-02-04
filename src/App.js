import React from 'react';
import './App.css';
import Page from "./page";
import Node from "./page/node";
import Header from "./components/header";
import Footer from "./components/footer/footer";
import Body from "./page/body";

function App() {
    return (
        <Page>
            <Header/>
            <Body>
                <Node col={6} row={2}/>
                <Node col={6} row={1}/>
                <Node col={6} row={1}/>
                <Node col={6} row={1}/>
                <Node col={6} row={1}/>
                <Node col={6} row={1}/>
                <Node col={6} row={1}/>
            </Body>
            <Footer/>
        </Page>
    );
}

export default App;
