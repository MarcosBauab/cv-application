import styled from 'styled-components';
import tema from '../../../themes.json'

export const Container = styled.section`
    width: 100%;

    border: 2px solid ${tema.fontColor};

    border-top: none;

    padding: 20px 50px 20px 50px;

    display: flex;

    p.bold{
        font-weight: bold;
        padding-top: 4px;
    }

    div.profSkill{
        padding: 0 15%;

        display: flex;
        flex-direction: column;
        gap: 20px;

        p{
            font-family: 'Fontinha';
            font-size: 1.5rem;
        }

        fieldset{
            border: 1px solid ${tema.fontColor};
            border-radius: 3px;
            padding: 10px 20px 10px 20px;

            width: 100%;
        }

        ul{
            display: grid;
            
            grid-template-columns: 1fr 1fr 1fr;

            gap: 10px;

            li{
                list-style: inside square;
            }

        }
    }

`;
