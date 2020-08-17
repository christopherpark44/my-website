import React from 'react';
import styled from 'styled-components';
import { GlobalTabs, HomeHead, Footer, LoadLogo, IntroText, DetailText, DescriptionText     } from '../components/common';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Typist from 'react-typist';
import { HeartBeat } from 'react-awesome-reveal';

const WorkBlock = styled.div`
    justify-content: center;
    margin: 2rem
`

const ScrollViewDownIcon = styled(ArrowDownwardIcon)`
    && {
        font-size: 3rem; 
        color: #d13232;
    }
    &:hover {
        transition: transform 0.3s;
        transform: scale(1.3);
    }
`

const InformationBlock = styled(Paper)`
    display: inline-grid;
    width: 85vw;
    margin: 3rem 0 3rem 0;
    padding: 2rem 1rem;
    && {
        border-radius: 40px
    }
`

const BlockDescription = styled.span`
    color: #375770;
    margin: 2rem 0
`

const BlockContent = styled.span`
    padding: 1rem;
    display: inline;
    align-content: space-evenly
`

const ScrollToButton = styled(Button)`
    border-radius: 100px; 
`
const ScrollToSkills = () => {
    const element = document.getElementById('DevSkillsElement')
    element?.scrollIntoView({behavior: 'smooth', block: 'start'});
}

const ScrollToTop = () => {
    const element = document.getElementById('GlobalTabs')
    element?.scrollIntoView({behavior: 'smooth', block: 'start'})
}

export default function HomePage() {
    return (
            <div>
                <GlobalTabs/>
                <HomeHead>
                    <div>
                        <IntroText>
                            Hi, my name is Christopher
                        </IntroText>  
                        <DetailText>
                            I'm a University of Waterloo Mathematics Student and Software Developer
                        </DetailText>                                                            
                    </div>
                    <HeartBeat duration={1000} triggerOnce style={{ paddingTop: '5vh'}}>
                        <ScrollToButton onClick={ScrollToSkills}>
                            <ScrollViewDownIcon/>                          
                        </ScrollToButton>                         
                    </HeartBeat>
                </HomeHead>
                <InformationBlock elevation={20} id="DevSkillsElement">
                    <BlockDescription>
                        <img src={require(`../resources/DeveloperIcon.png`)} alt="Cannot Load" width="100" height="100"/>
                        <IntroText>Software Development Skills</IntroText>
                        <DetailText>Languages, Frameworks, Libraries, etc.</DetailText>    
                    </BlockDescription>
                    <BlockContent>   
                        <LoadLogo LogoName="Python"/>               
                        <LoadLogo LogoName="TypeScript"/>                                                          
                        <LoadLogo LogoName="JavaScript"/>                                                         
                        <LoadLogo LogoName="ReactJS"/>                                                 
                        <LoadLogo LogoName="NodeJS"/>                         
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
                        <LoadLogo LogoName="Mocha"/>                                                      
                        <LoadLogo LogoName="WebdriverIO"/>   
                        <LoadLogo LogoName="Chai"/>                         
                        <LoadLogo LogoName="Jest"/>                          
                    </BlockContent>
                </InformationBlock>
                <InformationBlock elevation={20}>
                    <BlockDescription>
                        <img src={require(`../resources/QualityAssuranceIcon.png`)} alt="Cannot Load" width="100" height="100"/>
                        <IntroText>Database Tools</IntroText>      
                        <DetailText>Databases, Libraries, Data Languages, ORMs, GUIs</DetailText>                  
                    </BlockDescription>
                    <BlockContent>
                        <LoadLogo LogoName="PostgreSQL"/>   
                        <LoadLogo LogoName="GraphQL"/>                                                      
                        <LoadLogo LogoName="ApolloClient"/>   
                        <LoadLogo LogoName="TypeORM"/>                         
                        <LoadLogo LogoName="PSequel"/>                          
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
                    <HeartBeat duration={1000} triggerOnce style={{ transform: 'rotate(180deg)', padding: '2rem'}}>
                        <ScrollToButton onClick={ScrollToTop}>
                            <ScrollViewDownIcon/>                          
                        </ScrollToButton>                          
                    </HeartBeat> 
                </div>                            
                <Footer/>
           </div>
    )
}

