import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const HomeHead = styled(Card)`
   color: white;
   background-color: #ff4040;
   padding: 50px
` 

const NameHead = styled.h1`
    font-family: 'Comfortaa';
    font-size: 50px;
`

const RoleHead = styled.h3`
    font-family: 'Alata';
    font-size: 22px;
`



export default function HomeHeader() {
    return (
        <HomeHead>
            <Grid container spacing={0}>
                <Grid xs={12}>
                    <NameHead>
                        Christopher Park
                    </NameHead>
                </Grid>
                <Grid item xs={6}>
                    <RoleHead>
                        Full Stack Software Engineer
                    </RoleHead>
                </Grid>
                <Grid item xs={6}>
                    <RoleHead>
                        QA Engineer
                    </RoleHead>
                </Grid>
            </Grid>
        </HomeHead>
    )

}