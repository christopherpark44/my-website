import React from 'react';
import { GlobalTabs ,Footer, HomeHead, IntroText, DetailText} from '../components/common';
import Slide from '@material-ui/core/Slide';

export default function ProjectPage() {
    
    return (
            <div>
                <GlobalTabs/>            
                <HomeHead>
                    <Slide direction = "right" in={true}> 
                        <div>
                            <IntroText>
                                Projects                 
                            </IntroText>  
                            <DetailText>Page is WIP. Check my Github instead!</DetailText>                              
                        </div>
                    </Slide>
                </HomeHead>
                <Footer/>
            </div>             
    )
}