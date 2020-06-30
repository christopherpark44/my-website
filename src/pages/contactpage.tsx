import React from 'react';
import { GlobalTabs , PageHeader, Footer, IntroText, DetailText, DescriptionText } from '../components/common';

export default function ContactPage () {
    return (
        <div>
            <PageHeader PageName = "My Contacts"/>
            <GlobalTabs/>
            <br/>
            <DetailText>If you have any questions or wish to contact me, feel free to send an email</DetailText>
            <Footer/>
        </div>
    )
}