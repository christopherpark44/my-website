import React from 'react';
import styled from 'styled-components';
import HomeHeader from '../components/header';
import { GlobalTabs , Footer, LoadLogo} from '../components/common';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

const IntroText = styled.h1`
    font-family: 'Oswald';
    font-size: 50px;
    color: #ff4040;
`

const DetailText = styled.h2`
    font-family: 'Oswald';
    font-size: 30px;
    margin: 0px;
`

const DescriptionText = styled.h3`
    font-family: 'Oswald';
    font-size: 24px
`

const WorkBlock = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem
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
                    <DetailText>
                        I'm a 2nd year University of Waterloo Mathematics Program Student and Software Developer
                    </DetailText>
                    <br/>
                    <IntroText>Software Development </IntroText>
                    <LoadLogo LogoName="ReactJS"/>
                    <LoadLogo LogoName="TypeScript"/>
                    <LoadLogo LogoName="JavaScript"/>
                    <LoadLogo LogoName="NodeJS"/>
                    <LoadLogo LogoName="Python"/>
                    <LoadLogo LogoName="Java"/>                        
                    
                    <IntroText>Software QA</IntroText>
                    <LoadLogo LogoName="Mocha"/>
                    <LoadLogo LogoName="CucumberJS"/>
                    <LoadLogo LogoName="Chai"/>
                    <LoadLogo LogoName="WebdriverIO"/>
                    <LoadLogo LogoName="Jest"/>

                    <IntroText>Work Experiences</IntroText>
                    
                    <div>
                        <WorkBlock>
                            <img src={require(`../resources/SetterLogo.png`)} alt="Cannot Load" width="50" height="50"/>
                            <DetailText>Setter Home Services</DetailText>     
                                           
                        </WorkBlock>
                        <DescriptionText>Software Engineer</DescriptionText>    

                        <Divider/>

                        <WorkBlock>
                            <img src={require(`../resources/CIBCLogo.png`)} alt="Cannot Load" width="50" height="50"/>
                            <DetailText>Canadian Imperial Bank of Commerce</DetailText>
                        </WorkBlock>     
                        <DescriptionText>Software Test Analyst</DescriptionText>                   
                    </div>
                </Card>
                <br/>
                <Footer/>
            </div>
    )
}

