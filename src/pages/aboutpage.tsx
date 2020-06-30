import React from 'react';
import { GlobalTabs , PageHeader, Footer, DetailText, WIPPage } from '../components/common';

export default function AboutPage () {
    return (
        <div>
            <PageHeader PageName = "About"/>
            <GlobalTabs/>
            <WIPPage>
                <DetailText>This website was made with React, TypeScript, MaterialUI and NodeJS. It is hosted on Github Pages</DetailText>
            </WIPPage>
            <Footer/>
        </div>
    )
}