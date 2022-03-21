import styled from 'styled-components';
import tema from '../../../themes.json'

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

    div{
        label{
            color: white;
        }

        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;

        border-radius: 8px;

        background-color: ${tema.fontColor};

    }

`;
