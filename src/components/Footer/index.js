import React from 'react';

import {
    FooterStyled,
    AuthorStyled,
} from './style.js' 

function Header(){
    return(
        <FooterStyled>
            <AuthorStyled href="https://github.com/natansantoss" target="_blank">Natan.Santos</AuthorStyled>
        </FooterStyled>
    );
};

export default Header