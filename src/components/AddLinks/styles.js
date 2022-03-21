import styled from 'styled-components';

export const Container = styled.div`

    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    
    display: none;
    justify-content:center ;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.71);

    div{
        
        background-color: red;
    }

`;
