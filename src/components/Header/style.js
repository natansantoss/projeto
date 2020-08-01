import styled, {  keyframes  } from 'styled-components';

const fade = keyframes `
    from {
        transform: scale(1)
    }to {
        transform: scale(1.1)
    }
`

export const HeaderStyled = styled.div`

    background: #22242b;

    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;
`

export const Container = styled.div`

    width: 100%;
    max-width: 1000px;

    a:hover{
        text-decoration: underline;
        animation: ${fade} 0.4s forwards; 
    }
`

export const ButtonStyled = styled.a`

    float: right;

    cursor: pointer;

    color: #fff;
    font-size: 1.0rem;
    font-weight: 400;
    text-shadow: #000 0 0 7px;
    text-decoration: none;    

`