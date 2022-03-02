import styled from 'styled-components'
import tema from '../../../themes.json'

const HeadHeader = styled.section`
    width: 100%;

    border: 2px solid ${tema.fontColor};
    border-radius: 2px 2px 0 0;

    padding: 20px 50px 20px 50px;


    header{
        display: flex;
        justify-content: space-between;


        a{
            text-decoration: none;
        }
    }

    main{
        display: flex;
        width: 50%;
        height: 90%;


        align-items: center;

    }
    main p{
        padding-top: 10px;
        font-family: 'Fontinha';
        font-size: 5rem;
        font-weight: bold;
    }
`
export default HeadHeader
