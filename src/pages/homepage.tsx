import React from 'react';
import styled from 'styled-components';
import {PageBackground, GlobalTabs, HomeHead, Footer, LoadLogo, IntroText, DetailText, DescriptionText} from '../components/common';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import Typist from 'react-typist';

const WorkBlock = styled.div`
    justify-content: center;
    margin: 2rem
`

const ScrollViewDownIcon = styled(ArrowDropDownCircleOutlinedIcon)`
    && {
        font-size: 4rem;
        padding: 2rem;   
        color: #d13232     
    }
`

const InformationBlock = styled(Paper)`
    display: inline-flex;
    width: 95vw;
    margin: 3rem 0 3rem 0;
    padding: 2rem 1rem 2rem 1rem;
    && {
        border-radius: 40px
    }
`

const BlockDescription = styled.span`
    padding: 3rem;
    width: 60%;
    text-align: start;
    color: #375770
`

const BlockContent = styled.span`
    padding: 1rem;
    width: 40%;
    display: grid;
    align-content: space-evenly
`

const ScrollElement = () => {
    const element = document.getElementById("DevSkillsElement")
    element?.scrollIntoView({behavior: 'smooth'});
}

export default function HomePage() {
    return (
            <PageBackground>
                <GlobalTabs/>
                <HomeHead>
                    <div>
                        <Typist cursor={{show: false}} avgTypingDelay={20}>
                            <IntroText>
                                Hi, my name is Christopher. 
                            </IntroText>  
                            <DetailText>
                                I'm a 2nd year University of Waterloo Mathematics Program Student and Software Developer
                            </DetailText>                                                               
                        </Typist>
                    </div>
                    <Button onClick={ScrollElement}>
                        <ScrollViewDownIcon/>                          
                    </Button> 
                </HomeHead>
                <InformationBlock elevation={20} id="DevSkillsElement">
                    <BlockDescription>
                        <img src={require(`../resources/DeveloperIcon.png`)} alt="Cannot Load" width="100" height="100"/>
                        <IntroText>Software Development Skills</IntroText>
                        <DetailText>Development Languages, Frameworks, Libraries, Runtimes, etc.</DetailText>                        
                    </BlockDescription>
                    <BlockContent>
                        <LoadLogo LogoName="TypeScript"/>
                        <LoadLogo LogoName="JavaScript"/>
                        <LoadLogo LogoName="ReactJS"/>
                        <LoadLogo LogoName="NodeJS"/>
                        <LoadLogo LogoName="Python"/>                            
                        <LoadLogo LogoName="Java"/>                         
                    </BlockContent>                    
                </InformationBlock>
                <InformationBlock elevation={20}>
                    <BlockDescription>
                        <img src={require(`../resources/QualityAssuranceIcon.png`)} alt="Cannot Load" width="100" height="100"/>
                        <IntroText>Software QA Skills</IntroText>      
                        <DetailText>Software QA Frameworks, Libraries, Tools, etc.</DetailText>                  
                    </BlockDescription>
                    <BlockContent>
                        <LoadLogo LogoName="CucumberJS"/>
                        <LoadLogo LogoName="WebdriverIO"/>   
                        <LoadLogo LogoName="Mocha"/>                        
                        <LoadLogo LogoName="Chai"/>                         
                        <LoadLogo LogoName="Jest"/>                          
                    </BlockContent>
                </InformationBlock>
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
                <Footer/>
            </PageBackground>
    )
}

