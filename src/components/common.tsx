import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

interface HeaderProps {
    PageName: string;
}

interface LoadLogoProps {
    LogoName: string
}

export const PageBackground = styled.div`
    background-color: white;
`

export const HomeHead = styled.div`
    && {
        color: white;
        background-color: #121f29;
        padding: 20vh 1rem 70vh 1rem
    }
` 

export const NameHead = styled.h1`
    font-family: 'Comfortaa';
    font-size: 60px;
`

const PagesLink = styled(Link)`
    font-size: 22px;
    text-decoration: none;
    color: white;
    padding: 0 1rem 0 1rem;
    border-radius: 15px;
    &:hover {
        background-color: #d13232
    }
`

const TabsBar = styled(AppBar)`
    padding: 1rem;
    && {
        background-color: #121f29;
    }
`

const SocialMediaLink = styled.a`
    display: inline-flex;
    text-decoration: none;
    padding: 1rem;
    margin: 2rem;
    color: white;
`

const FooterStyle = styled.div`
    background-color: #121f29;
`

const LogoBlock = styled.div`
    justify-content: center;
    display: inline-flex;
`

export const IntroText = styled.h1`
    font-family: 'Rubik';
    font-size: 60px;
`

export const DetailText = styled.h2`
    font-family: 'Roboto Condensed';
    font-size: 30px;
    font-weight: 100;
    margin: 0;
`

export const DescriptionText = styled.h3`
    font-family: 'Roboto Condensed';
    font-size: 30px;
    margin: 2%
`

export const WIPPage = styled.div`
    height: 900px;
`

export const GlobalTabs = () => {   
    return (
        <TabsBar position = "static">
            <nav>
                <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                    <DetailText> {`< Christopher Park />`} </DetailText>
                    <div>
                        <PagesLink to = "/">Home</PagesLink>
                        <PagesLink to = "/projects">Projects</PagesLink>
                        <PagesLink to = "/resume">Resume</PagesLink>
                        <PagesLink to = "/contact">Contact</PagesLink>
                        <PagesLink to = "/about">About</PagesLink>
                        <PagesLink to = "/other">Other</PagesLink>                          
                    </div>
                </Box> 
            </nav>
        </TabsBar>
    )
}

export const Footer = () => {
    return (
            <FooterStyle>
                <SocialMediaLink href="https://github.com/christopherpark88">
                <GitHubIcon/>GitHub</SocialMediaLink>
                <SocialMediaLink href="https://www.linkedin.com/in/christopher-park-1160b0164/">
                <LinkedInIcon/>LinkedIn</SocialMediaLink>
                <SocialMediaLink href="mailto:cj2park@uwaterloo.ca">
                <MailOutlineIcon/>Email</SocialMediaLink>
            </FooterStyle>
    )
}

export const LoadLogo = ({ LogoName } : LoadLogoProps) => {
    return (
        <LogoBlock>
            <img src={require(`../resources/${LogoName}Logo.png`)} alt="Cannot Load" width="50" height="50"/>
            <DescriptionText>{LogoName}</DescriptionText>
        </LogoBlock>
    )
}
