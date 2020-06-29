import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

interface HeaderProps {
    PageName: string;
}

interface LoadLogoProps {
    LogoName: string
}

const HomeHead = styled(Card)`
    && {
        color: white;
        background-color: #ff4040;
        padding: 3.1rem;
    }
` 

const NameHead = styled.h1`
    font-family: 'Comfortaa';
    font-size: 60px;
`

const PagesLink = styled(Link)`
    text-decoration: none;
    color: black;
    width: 15rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    &:hover {
        background-color: #ff4040;
        color: white;
    }
`

const TabsBar = styled(AppBar)`
    && {
        background-color: white;
    }
`

const SocialMediaLink = styled.a`
    text-decoration: none;
    padding: 1rem;
    margin: 2rem;
    color: white;
    background-color: #4287f5;
    border: 2px solid #4287f5;
    border-radius: 25px;
`

const LogoDesc = styled.div`
    display: inline-flex;
    margin: 2rem;
`

const DetailText = styled.h1`
    font-family: 'Oswald';
    font-size: 30px;
    margin: 0px;
`

export function GlobalTabs() {   
    return (
        <TabsBar position = "sticky">
            <nav>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                    <PagesLink to = "/"> Home </PagesLink>
                    <PagesLink to = "/projects"> Projects </PagesLink>
                    <PagesLink to = "/resume"> Resume </PagesLink>
                    <PagesLink to = "/contact"> Contact </PagesLink>
                    <PagesLink to = "/about"> About </PagesLink>
                    <PagesLink to = "/other"> Other </PagesLink>  
                </Box> 
            </nav>
        </TabsBar>
    )
}

export function Footer() {
    return (
        <Box display="inline-block">
            <span>
                <SocialMediaLink href="https://github.com/christopherpark88">
                <GitHubIcon/>GitHub</SocialMediaLink>
            </span>
            <span>
                <SocialMediaLink href="https://www.linkedin.com/in/christopher-park-1160b0164/">
                <LinkedInIcon/>LinkedIn</SocialMediaLink>
            </span>
        </Box>
    )
}

export function PageHeader ({ PageName } : HeaderProps) {
    return (
        <HomeHead>
            <NameHead>
               {PageName}
            </NameHead>
         </HomeHead>
    )
}

export function LoadLogo({ LogoName } : LoadLogoProps) {
    console.log(`../resources/${LogoName}Logo.png`)
    return (
        <LogoDesc>
            <img src={require(`../resources/${LogoName}Logo.png`)} alt="Cannot Load" width="50" height="50"/>
            <DetailText>{LogoName}</DetailText>
        </LogoDesc>
    )
}
