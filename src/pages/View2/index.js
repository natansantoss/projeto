import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import {
    PagePostStyle,
    Container,
    TitlePostStyle,
    ContentpostStyle,
    InfoPostStyled,
    UserStyled,
    IdPostStyled,
} from './style.js' 

function View2(){
    return(
        <>
            <Header />
                <PagePostStyle>
                    <Container>
                        <TitlePostStyle>qui est esse</TitlePostStyle>
                        <ContentpostStyle>delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi</ContentpostStyle>
                        <InfoPostStyled>
                            <UserStyled>Usúario: 2</UserStyled>
                            <IdPostStyled>Número do Post: 5</IdPostStyled>
                        </InfoPostStyled>
                    </Container>
                </PagePostStyle>
            <Footer />
        </>
    );
};

export default View2