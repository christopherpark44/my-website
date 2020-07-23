import React from 'react';
import { GlobalTabs, Footer, HomeHead, IntroText } from '../components/common';
import Slide from '@material-ui/core/Slide';

export default function OtherPage () {

    return (
        <div>
            <GlobalTabs/>            
            <HomeHead>
                <Slide direction = "right" in={true}>
                    <IntroText>
                        Other                    
                    </IntroText>                    
                </Slide>
            </HomeHead>
            <Footer/>
        </div>
    )
}