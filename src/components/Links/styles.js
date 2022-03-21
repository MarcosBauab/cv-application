import styled from 'styled-components';
import tema from '../../../themes.json'

export const Container = styled.div`
    width: 100%;

    border: 2px solid ${tema.fontColor};

    border-top: none;

    border-radius: 0 0 2px 2px;

    padding: 20px 50px 20px 50px;

    display: flex;

    justify-content: space-around;

    font-weight: bold;


    a{
        cursor: pointer;
        text-decoration: underline;
    }

    svg{
        cursor: pointer;
        transition: .2s;

    }
`;
