import React, {useState} from 'react';

import { Container } from './styles';

function Link({tipo, set, valorAtual}) {

    const [valor, setValor] = useState(valorAtual)

    return (
        <Container>
            <label htmlFor={tipo}>{tipo}</label>
            <input type="text" name="" id={tipo} value={valor} 
            onChange={(e) => { 
                setValor(e.target.value)
                set(e.target.value)
            }}/>
        </Container>
    );
}

export default Link;