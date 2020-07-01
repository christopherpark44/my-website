import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { HomeHead, NameHead } from './common';

const RoleHead = styled.h3`
    font-family: 'Alata';
    font-size: 18px;
`

export default function HomeHeader() {
    return (
        <HomeHead>
            <NameHead>
                Home
            </NameHead>
        </HomeHead>
    )
}