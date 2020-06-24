import React from 'react';
import { GlobalTabs , PageHeader } from '../components/common';
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
                <img src={require('../resources/resume.png')} alt="Cannot Load" width="800" height="1100"/>
            </ResumeImageContainer>
        </div>
    )
}