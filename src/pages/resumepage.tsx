import React from 'react';
import { GlobalTabs , Footer, HomeHead, IntroText } from '../components/common';
import styled from 'styled-components';
import Slide from '@material-ui/core/Slide';
import { useLocation } from 'react-router-dom';

const ResumeImageContainer = styled.div`
    && {
        margin: 20px;
`

export default function ResumePage () {
    let location = useLocation();

    return (
        <div>
            <GlobalTabs/>
            <HomeHead>
                <Slide direction = "right" in={location.pathname === '/resume'}>
                    <IntroText>
                        Resume                    
                    </IntroText>
                </Slide>
            </HomeHead>
            <br/>
            <ResumeImageContainer>
                <img src={require('../resources/resume.png')} alt="Cannot Load" width="1100" height="1400"/>
            </ResumeImageContainer>
            <Footer/>
        </div>
    )
}