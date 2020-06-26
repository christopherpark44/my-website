import React from 'react';
import styled from 'styled-components';
import HomeHeader from '../components/header';
import { GlobalTabs , Footer, LoadLogo} from '../components/common';
import Card from '@material-ui/core/Card';

const IntroText = styled.h2`
    font-family: 'Oswald';
    font-size: 50px;
    color: #ff4040;
`

const DescriptionText = styled.h1`
    font-family: 'Oswald';
    font-size: 30px;
    margin: 0px;
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
                        Software Development 
                    </IntroText>
                        <LoadLogo LogoName="ReactJS"/>
                        <LoadLogo LogoName="TypeScript"/>
                        <LoadLogo LogoName="JavaScript"/>
                        <LoadLogo LogoName="NodeJS"/>
                        <LoadLogo LogoName="Python"/>
                        <LoadLogo LogoName="Java"/>                        
                    
                    <IntroText>Work Experiences</IntroText>
                    
                    <LoadLogo LogoName="Setter"/>
                    <div>
                        Software Engineer
                    </div>

                    <LoadLogo LogoName="CIBC"/>
                    <div>
                        Software Test Analyst
                    </div>
                </Card>
                <br/>
                <Footer/>
            </div>
    )
}

