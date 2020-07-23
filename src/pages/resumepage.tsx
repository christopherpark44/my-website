import React from 'react';
import { GlobalTabs , Footer, HomeHead, IntroText, DetailText} from '../components/common';
import styled from 'styled-components';
import Slide from '@material-ui/core/Slide';
import ResumePDF from '../resources/resume2020.pdf';

const ResumeImageContainer = styled.div`
    && {
        margin: 20px;
`

const LinkToPDF = styled.a`
    color: inherit
`

export default function ResumePage () {
    return (
        <div>
            <GlobalTabs/>
            <HomeHead>
                <Slide direction = "right" in={true}>
                    <div>
                        <IntroText>
                            Resume                    
                        </IntroText>  
                        <DetailText>
                            <LinkToPDF href = {ResumePDF} target = "_blank">Check out my resume here!</LinkToPDF>
                        </DetailText>                     
                    </div>
                </Slide>
            </HomeHead>
            <br/>
            <Footer/>
        </div>
    )
}