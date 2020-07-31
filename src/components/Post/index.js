import React from 'react';

import {
    PostStyled,
    UserIdStyled,
    PostIdStyled,
    DetailPostStyled,
} from './style.js' 

function Post(){
    return(
        <PostStyled>
            <UserIdStyled>Usuario: 1</UserIdStyled>
            <PostIdStyled>Número do Post: 4</PostIdStyled>
            <DetailPostStyled href="#">Ver Detalhes Do Post</DetailPostStyled>
        </PostStyled>
    );
};

export default Post