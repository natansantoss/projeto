import styled from 'styled-components';

export const PostStyled = styled.li `

    background: #1e1f25;

    width: 200px;

    padding: 10px 8px;

    a:hover{
        text-decoration: underline;;
    }
`
export const UserIdStyled = styled.h1 `

    color: #fff;
    font-size: 1.3rem;
    font-weight: 900;
    text-shadow: #000 0 0 7px;
    text-transform: uppercase;
    text-decoration: underline;

    text-align: center;
    margin-bottom: 10px;

`
export const PostIdStyled = styled.h2 `

    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    text-shadow: #000 0 0 7px;

    margin-bottom: 50px;
    
`
export const DetailPostStyled = styled.a `

    color: #1997c6;
    font-size: 1.1rem;
    font-weight: 500;
    text-shadow: #000 0 0 7px;
    text-decoration: none;
    
    display: flex;
    text-align: right;

`