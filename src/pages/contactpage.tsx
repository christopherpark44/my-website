import React from 'react';
import { GlobalTabs ,Footer, HomeHead, IntroText} from '../components/common';
import Slide from '@material-ui/core/Slide';
import { useLocation } from 'react-router-dom';

export default function ContactPage () {
    let location = useLocation();

    return (
        <div>
            <GlobalTabs/>            
                <HomeHead>
                    <Slide direction = "right" in={location.pathname === '/contact'}>
                        <IntroText>
                            Contacts                
                        </IntroText>
                    </Slide>
                </HomeHead>
            <Footer/>
        </div>
    )
}