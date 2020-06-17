import React from 'react';
import logo from '../logo.svg';
import HomeHeader from '../components/header'
import { GlobalTabs } from '../components/common'
import Container from '@material-ui/core/Container';

export default function HomePage() {
    return (
        <Container disableGutters>
            <HomeHeader/>
            <GlobalTabs/>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
        </Container>
    )
}

