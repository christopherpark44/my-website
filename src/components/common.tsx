import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export function GlobalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };

    return (
        <AppBar position = "static">
            <Tabs 
            value={value}
            onChange={handleChange}
            centered>
                <Tab label = "Home"/>
                <Tab label = "Projects"/>
                <Tab label = "Contact"/>
                <Tab label = "Other"/>
            </Tabs>
        </AppBar>
    )
}

