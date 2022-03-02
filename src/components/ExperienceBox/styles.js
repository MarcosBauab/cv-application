import styled from 'styled-components';
import tema from '../../../themes.json'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    padding: 0 15%;

    p.experienceName{
        font-size: 1.5rem;
    }
    p.anos{
        font-size: .9rem;
        color: gray;
    }
    p.description{
        padding-top: 20px;
    }
`;
