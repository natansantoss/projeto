import React, {useEffect, useState} from 'react';

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
                    <PostStyled>
                        <UserIdStyled>Usuario: {post.userId}</UserIdStyled>
                        <PostIdStyled>Número do Post: {post.id}</PostIdStyled>
                        <DetailPostStyled href="#">Ver Detalhes Do Post</DetailPostStyled>
                    </PostStyled>
                );
            })};
        </>
    );
};

export default Post