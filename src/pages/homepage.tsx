import React from 'react';
import styled from 'styled-components';
import HomeHeader from '../components/header';
import { GlobalTabs , Footer} from '../components/common';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';

const IntroText = styled.h2`
    font-family: 'Oswald';
    font-size: '30px;
`

const DescriptionText = styled.p`
    font-family: 'Oswald';
`


export default function HomePage() {
    return (
        <Container disableGutters>
            <HomeHeader/>
            <GlobalTabs/>
            <br/>
            <Card>
                <IntroText>
                    Hi, my name is Christopher. 
                </IntroText>
                <DescriptionText>
                    I'm a 2nd year University of Waterloo Mathematics Program Student 
                </DescriptionText>
                <DescriptionText>and Software Developer</DescriptionText>
            </Card>
            <br/>
            <Footer/>
        </Container>
    )
}

