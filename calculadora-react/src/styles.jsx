import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:rgb(165, 165, 165);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color:rgb(241, 241, 241); 
    width: 20%;
    min-height: 450px;
    padding: 10px;
    border-radius: 10px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`