import styled from 'styled-components';
import tema from '../../../themes.json'

const Container = styled.section`
    width: 100%;

    border: 2px solid ${tema.fontColor};

    border-top: none;

    border-radius: 0 0 2px 2px;

    padding: 20px 50px 20px 50px;

    display: flex;

    p.bold{
        font-weight: bold;
    }


`;

export {Container}