import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const HomeHead = styled(Card)`
   color: white;
   background-color: #ff4040;
   padding: 50px
` 

const NameHead = styled.h1`
    font-family: 'Comfortaa';
    font-size: 60px;
`

const RoleHead = styled.h3`
    font-family: 'Alata';
    font-size: 18px;
`

export default function HomeHeader() {
    return (
        <HomeHead>
            <NameHead>
                Christopher Park
            <Grid container direction="row" justify="center" alignItems="flex-start">
                <Grid xs={4}>
                    <RoleHead>University of Waterloo Math 2nd Year Student</RoleHead>
                </Grid>
                <Grid xs={4}>
                    <RoleHead>Full Stack Software Developer</RoleHead>
                </Grid>
                <Grid xs={4}>
                    <RoleHead>Software QA Engineer</RoleHead>
                </Grid>
            </Grid>
            </NameHead>
        </HomeHead>
    )

}