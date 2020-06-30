import React from 'react';
import { GlobalTabs , PageHeader, Footer } from '../components/common';
import styled from 'styled-components';

const ResumeImageContainer = styled.div`
    && {
        margin: 20px;
`

export default function ResumePage () {
    return (
        <div>
            <PageHeader PageName = "My Resume"/>
            <GlobalTabs/>
            <br/>
            <ResumeImageContainer>
                <img src={require('../resources/resume.png')} alt="Cannot Load" width="1100" height="1400"/>
            </ResumeImageContainer>
            <Footer/>
        </div>
    )
}