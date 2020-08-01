import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    justify-content: center;

`

export const PageStyled = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
`

export const AllPostsStyled = styled.ul`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    li{
        list-style: none;
    }

`