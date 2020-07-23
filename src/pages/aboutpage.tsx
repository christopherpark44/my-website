import React from 'react';
import { GlobalTabs , Footer, HomeHead, IntroText, DetailText} from '../components/common';
import Slide from '@material-ui/core/Slide';

export default function AboutPage () {

    return (
        <div>
            <GlobalTabs/>            
            <HomeHead>
                <Slide direction = "right" in={true}>
                    <div>
                        <IntroText>
                            About                  
                        </IntroText> 
                        <DetailText>More About Me and This Web Site</DetailText>                            
                    </div>
                </Slide>
            </HomeHead>
            <Footer/>
        </div>
    )
}