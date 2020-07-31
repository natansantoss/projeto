import React from 'react';

import {
    HeaderStyled,
    Container,
    ButtonStyled,
} from './style.js'

function Header(){
    return(
        <HeaderStyled>
            <Container>
                <ButtonStyled href="/">Ir Para Posts</ButtonStyled>
            </Container>
        </HeaderStyled>
    );
};

export default Header