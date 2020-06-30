import React from 'react';
import { GlobalTabs , PageHeader, Footer, DetailText, WIPPage} from '../components/common';

export default function ProjectPage() {
    return (
        <div>
            <PageHeader PageName = "My Projects"/>
            <GlobalTabs/>
            <WIPPage>
                <DetailText>Check My Github!</DetailText>                
            </WIPPage>
            <Footer/>
        </div>
    )
}