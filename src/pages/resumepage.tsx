import React from 'react';
import { GlobalTabs , PageHeader } from '../components/common';
import styled from 'styled-components';

const ResumeImage = styled.img`
    margin: 10px;
`

export default function ResumePage () {
    return (
        <div>
            <PageHeader PageName = "My Resume"/>
            <GlobalTabs/>
            <ResumeImage src={require('../resources/resume.png')} alt="Cannot Load" width="800" height="1100"/>
        </div>
    )
}