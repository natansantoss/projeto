import React from 'react';
import {  Link  } from 'react-router-dom'

import {
    HeaderStyled,
    Container,
    ButtonStyled,
} from './style.js'

function Header(){
    return(
        <HeaderStyled>
            <Container>
                <ButtonStyled to="/" as={Link}>Ir Para Posts</ButtonStyled>
            </Container>
        </HeaderStyled>
    );
};

export default Header