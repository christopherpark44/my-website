import React from 'react';
import { GlobalTabs , PageHeader, Footer, DetailText, WIPPage } from '../components/common';

export default function OtherPage () {
    return (
        <div>
            <PageHeader PageName = "Other"/>
            <GlobalTabs/>
            <WIPPage>
                <DetailText>This page is currently a placeholder</DetailText>
            </WIPPage>
            <Footer/>
        </div>
    )
}