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

    .inp{
        margin-right: 8px;
    }

    form{
        display: flex;
        justify-content:center;

        flex-direction: column;
        background-color: ${tema.fontColor};

        padding: 20px;

        border-radius: 8px;

        position: relative;

        max-height: 60vh;
    }

    form input, form textarea{
        font-family: "Fontinha";
        padding: 5px 5px;
        font-size: 1rem;
        border: none;
    }

    form button{
        cursor: pointer;
        background-color: transparent;

        border-radius: 50%;
        border: 1px solid white;
        font-weight: bold;

        padding: 10px;

        color: white;
    }

    p{
        font-family: 'Ubuntu' !important;
        color: white;
        font-size: 1.5rem !important;
        text-decoration: underline;
        font-weight: bold;
        
    }

`;

export const Diver = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    padding: 20px;
`

export const Novo = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: auto;

    div.lis{
        overflow: auto;
        div{
            display: flex;
        }
    }

    li{
        color: white;
        list-style: none;

        padding: 8px;
        margin-top: 8px;

        border: 1px solid white;
    }
`
