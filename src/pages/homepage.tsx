import React from 'react';
import styled from 'styled-components';
import HomeHeader from '../components/header';
import { GlobalTabs , Footer} from '../components/common';
import Card from '@material-ui/core/Card';


const IntroText = styled.h2`
    font-family: 'Oswald';
    font-size: 50px;
`

const DescriptionText = styled.h1`
    font-family: 'Oswald';
    font-size: 30px;
`

export default function HomePage() {
    return (
            <div>
                <HomeHeader/>
                <GlobalTabs/>
                <br/>
                <Card>
                    <IntroText>
                        Hi, my name is Christopher. 
                    </IntroText>
                    <DescriptionText>
                        I'm a 2nd year University of Waterloo Mathematics Program Student and Software Developer
                    </DescriptionText>
                    <br/>
                    <IntroText>
                        Programming Languages
                    </IntroText>
                    <img src={require('../resources/ReactLogo.svg')} alt="Cannot Load" width="50" height="50"/>
                    <img src={require('../resources/TypeScriptLogo.svg')} alt="Cannot Load" width="50" height="50"/>
                    <img src={require('../resources/NodeLogo.png')} alt="Cannot Load" width="50" height="50"/>
                    <img src={require('../resources/PythonLogo.png')} alt="Cannot Load" width="50" height="50"/>
                    <img src={require('../resources/JavaLogo.png')} alt="Cannot Load" width="50" height="50"/>

                    <IntroText>
                        Work Experiences
                    </IntroText>
                    <img src={require('../resources/SetterLogo.png')} alt="Cannot Load" width="50" height="50"/>
                    <img src={require('../resources/CIBCLogo.svg')} alt="Cannot Load" width="50" height="50"/>
                </Card>
                <br/>
                <Footer/>
            </div>
    )
}

