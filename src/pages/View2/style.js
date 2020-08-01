import styled from 'styled-components';

export const PagePostStyle = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

` 
export const Container = styled.div`

    width: 100%;
    max-width: 1050px;
    height: 500px;

    padding: 20px;
    margin: 0px 20px;
    
    display: flex;
    flex-direction: column;

    position: relative;

    background: #22242b;
    border-radius: 15px;
` 
export const TitlePostStyle = styled.h1`

    font-size: 2.9rem;
    font-weight: 900;
    text-shadow: #000 0 0 7px;
    color: #fff;
` 
export const ContentpostStyle = styled.h2`

    font-size: 1.6rem;
    font-weight: 700;
    text-shadow: #000 0 0 7px;
    color: #fff;

    margin: 25px 0px;
`
export const InfoPostStyled = styled.div`

    display: flex;
    justify-content: space-between;

    font-size: 1.3rem;
    font-weight: 500;
    text-shadow: #000 0 0 7px;
    color: #fff;
    text-decoration: underline;
`
export const UserStyled = styled.h3`

    position: absolute;
    bottom: 0;
    margin: 25px;
    left: 0;
`
export const IdPostStyled = styled.h3`

    position: absolute;
    bottom: 0;
    right: 0;
    margin: 25px;
`