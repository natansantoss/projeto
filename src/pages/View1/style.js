import styled from 'styled-components';

export const FooterStyled = styled.div`

    background: #22242b;

    height: 60px;

    display: flex; 
    align-items: center;
    justify-content: center;

    a:hover{
        text-decoration: underline;
    }

`
export const AuthorStyled = styled.a`

    float: right;

    cursor: pointer;

    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    text-shadow: #000 0 0 7px;
    text-decoration: none;    

`