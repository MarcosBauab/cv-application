import styled from 'styled-components';

export const Container = styled.div`

    padding: 20px 15%;

    div{
        border: 1px solid black;
        border-radius: 4px;
        transition: .2s;
        padding: 20px;
    }

    svg{
        cursor: pointer;
    }

    form{
        display: flex;
        justify-content:center;

        flex-direction: column;

        gap: 10px;

        border-radius: 8px;


        max-height: 60vh;
    }

    form input, form textarea{
        font-family: "Fontinha";
        padding: 5px 5px;
        font-size: 1rem;
        border: none;

        outline: none;
        resize: vertical;
    }
`;
