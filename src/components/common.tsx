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

export const HomeHead = styled.div`
    && {
        color: white;
        background-color: #ff4040;
        padding: 10rem;
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
    padding: 1rem;
    border-radius: 15px;
    &:hover {
        background-color: #d13232
    }
`

const TabsBar = styled(AppBar)`
    padding: 1rem;
    && {
        background-color: #ff4040;
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
    background-color: #ff4040
`

const LogoDesc = styled.div`
    display: inline-flex;
    margin: 2rem;
`

export const IntroText = styled.h1`
    font-family: 'Oswald';
    font-size: 50px;
`

export const DetailText = styled.h2`
    font-family: 'Oswald';
    font-size: 30px;
    margin: 0px;
`

export const DescriptionText = styled.h3`
    font-family: 'Oswald';
    font-size: 24px
`

export const WIPPage = styled.div`
    height: 900px;
`

export function GlobalTabs() {   
    return (
        <TabsBar position = "static">
            <nav>
                <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                    <DetailText> {`< Christopher Park />`} </DetailText>
                    <div>
                        <PagesLink to = "/"> Home </PagesLink>
                        <PagesLink to = "/projects"> Projects </PagesLink>
                        <PagesLink to = "/resume"> Resume </PagesLink>
                        <PagesLink to = "/contact"> Contact </PagesLink>
                        <PagesLink to = "/about"> About </PagesLink>
                        <PagesLink to = "/other"> Other </PagesLink>                          
                    </div>

                </Box> 
            </nav>
        </TabsBar>
    )
}

export function Footer() {
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

export function PageBanner ({ PageName } : HeaderProps) {
    return (
        <HomeHead>
            <NameHead>
               {PageName}
            </NameHead>
         </HomeHead>
    )
}

export function LoadLogo({ LogoName } : LoadLogoProps) {
    return (
        <LogoDesc>
            <img src={require(`../resources/${LogoName}Logo.png`)} alt="Cannot Load" width="50" height="50"/>
            <DetailText>{LogoName}</DetailText>
        </LogoDesc>
    )
}
