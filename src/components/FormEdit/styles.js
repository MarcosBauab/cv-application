import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    
    display: flex;
    justify-content:center ;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.71);

    form{
        display: flex;
        justify-content:center;
        align-items: center;

        flex-direction: column;
        background-color: rgba(20, 250, 170, 0.80);

        padding: 20px;

        border-radius: 8px;
    }

    form input{
        font-family: "Fontinha";
        padding: 0 5px;
        font-size: 1rem;
    }

    form button{
        cursor: pointer;
    }

    p{
        color: white;
        font-size: 2rem;
    }

`;

export const Diver = styled.div`
    display: flex;
    padding: 10px;
`
