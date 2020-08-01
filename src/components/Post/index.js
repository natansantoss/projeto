import React, {useEffect, useState} from 'react';
import {  Link  } from 'react-router-dom';

import {
    PostStyled,
    UserIdStyled,
    PostIdStyled,
    DetailPostStyled,
} from './style.js' 


function Post(){

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let data = await response.json();

            setPosts(data)
        };
        getData();
    }, []);

    return(
        <>
            {posts.map((post) => {

                return(
                    <PostStyled key={post.id}>
                        <UserIdStyled>Usuario: {post.userId}</UserIdStyled>
                        <PostIdStyled>Número do Post: {post.id}</PostIdStyled>
                        <DetailPostStyled to={`/post/${post.id}`} as={Link}>Ver Detalhes Do Post</DetailPostStyled>
                    </PostStyled>
                );
            })};
        </>
    );
};

export default Post