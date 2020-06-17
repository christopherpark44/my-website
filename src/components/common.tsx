import React from 'react';
import { BrowserRouter as Router,
         Switch,
         Route,
         Link } from "react-router-dom";
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ProjectsPage from '../pages/projectspage';

const PagesLink = styled(Link)`
    text-decoration: none;
    color: black;
`
const PagesButton = styled(Button)`

`

const TabsBar = styled(AppBar)`
    background-color: white;
`


export function GlobalTabs() {   
    return (
        <TabsBar position = "static">
            <nav>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"> 
                    <Grid xs = {2}>
                        <PagesLink to = "/"> Home </PagesLink>
                    </Grid>
                    <Grid xs = {2}>
                        <PagesLink to = "/projects"> Projects </PagesLink>
                    </Grid>
                    <Grid xs = {2}>
                        <PagesLink to = "/resume"> Resume </PagesLink>
                    </Grid>
                    <Grid xs = {2}>
                        <PagesLink to = "/contact"> Contact </PagesLink>
                    </Grid>
                    <Grid xs = {2}>
                        <PagesLink to = "/about"> About </PagesLink>
                    </Grid>
                    <Grid xs = {2}>
                        <PagesLink to = "/other"> Other </PagesLink>
                    </Grid>
                </Grid>        
            </nav>
        </TabsBar>
    )
}

