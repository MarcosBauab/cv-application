import React, {useState} from 'react';
import Link from '../Link/Link';

import { Container } from './styles';

function AddLinks({ links, fechar, setters }) {

  return (
    <Container>

        <div>
            
            {links.map((valor, indice) => {
              return (
                <Link 
                tipo={
                  indice === 0 ? 'Instagram' : 
                  indice === 1 ? 'Facebook' : 
                  indice === 2 ? 'Linkedin' : 'Github'
                }
                set={
                  indice === 0 ? setters[0] : 
                  indice === 1 ? setters[1] : 
                  indice === 2 ? setters[2] : setters[3]
                }
                valorAtual={valor}
                />
              
              )
              
            })}

            <button onClick={() => {
              fechar(false)
            }}>Enviar!</button>

        </div>

    </Container>
  );
}

export default AddLinks;