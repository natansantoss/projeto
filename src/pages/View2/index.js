import React, {useEffect, useState} from 'react';
import {  useParams  } from 'react-router-dom';


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

    const [posts, setPosts] = useState([])
    const {  id  } = useParams()

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            let data = await response.json();

            setPosts(data)
        };
        getData();
    }, []);

    return(
        <>
            <Header />
            
            <PagePostStyle key={posts.id}>
                <Container>
                    <TitlePostStyle>{posts.title}</TitlePostStyle>
                    <ContentpostStyle>{posts.body}</ContentpostStyle>
                    <InfoPostStyled>
                        <UserStyled>Usuario: {posts.userId}</UserStyled>
                        <IdPostStyled>Número do Post: {posts.id}</IdPostStyled>
                    </InfoPostStyled>
                </Container>
            </PagePostStyle>

            <Footer />
        </>
    );
};

export default View2