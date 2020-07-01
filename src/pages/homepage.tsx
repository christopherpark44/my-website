import React from 'react';
import styled from 'styled-components';
import {GlobalTabs, Footer, LoadLogo, IntroText, DetailText, DescriptionText, HomeHead} from '../components/common';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CodeIcon from '@material-ui/icons/Code';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import DvrIcon from '@material-ui/icons/Dvr';
import WebIcon from '@material-ui/icons/Web';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';

const WorkBlock = styled.div`
    justify-content: center;
    margin: 2rem
`

export default function HomePage() {
    return (
            <div>
                <GlobalTabs/>
                <HomeHead>
                    <IntroText>
                        Hi, my name is Christopher. 
                    </IntroText>
                    <DetailText>
                        I'm a 2nd year University of Waterloo Mathematics Program Student and Software Developer
                    </DetailText>           
                </HomeHead>
                    <Card>
                        <IntroText>Software Development Skills</IntroText>
                        <LoadLogo LogoName="ReactJS"/>
                        <LoadLogo LogoName="TypeScript"/>
                        <LoadLogo LogoName="JavaScript"/>
                        <LoadLogo LogoName="NodeJS"/>
                        <LoadLogo LogoName="Python"/>                            
                        <LoadLogo LogoName="Java"/>                        
                        <IntroText>Software QA Skills</IntroText>
                        <LoadLogo LogoName="Mocha"/>
                        <LoadLogo LogoName="CucumberJS"/>
                        <LoadLogo LogoName="Chai"/>
                        <LoadLogo LogoName="WebdriverIO"/>                            
                        <LoadLogo LogoName="Jest"/>
                        <div>
                            <IntroText>Work Experiences</IntroText>                    
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
                <Footer/>
            </div>
    )
}

