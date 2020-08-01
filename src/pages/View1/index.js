import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Post from '../../components/Post'

import {
    AllPostsStyled,
    Container,
    PageStyled,
} from './style.js' 

function View1(){
    return(
        <>
            <Header />
            <Container>

                <PageStyled>
                    <AllPostsStyled>
                        <Post />
                    </AllPostsStyled>
                </PageStyled>
           
            </Container>
            <Footer />
        </>
    );
};

export default View1