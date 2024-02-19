import styled from 'styled-components';

export const Container = styled.div`
    margin-inline: auto;
    padding-inline: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 100vh;
    height: 100dvh;
`
export const Content = styled.div`
    width: 25rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Painel = styled.div`
    display: grid;
    height: 35rem;
    width: 100%;
    grid-template-rows: repeat(5, 15%);
    grid-template-columns: repeat(4, 22%);
    justify-content: space-evenly;
    align-content: space-evenly;
    user-select: none;
`