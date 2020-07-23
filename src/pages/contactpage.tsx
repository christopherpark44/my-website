import React from 'react';
import { GlobalTabs ,Footer, HomeHead, IntroText} from '../components/common';
import Slide from '@material-ui/core/Slide';
import Typist from 'react-typist';
export default function ContactPage () {

    return (
        <div>
            <GlobalTabs/>            
            <HomeHead>
                <Slide direction = "right" in={true}>
                    <IntroText>
                        Contacts                
                    </IntroText>
                </Slide>
            </HomeHead>
            <Footer/>
        </div>
    )
}