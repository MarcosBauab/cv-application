import React, { useState } from 'react';

import {AiOutlineEdit} from 'react-icons/ai'
import FormEdit from '../FormEdit/FormEdit';

import { Container } from './styles';

function EditButton({ mostrar, onEdit, valorAtual, maiusculo}) {

  const [mostraForm, setMostraForm] = useState(false)

  return (
      <Container>
          <button 
            className='edit'
            style={ mostrar ? {opacity: 1} : {opacity: 0} }
            onClick={() => {

              setMostraForm(true)
              
            }}
            >

            <AiOutlineEdit />
              
          </button>

          {mostraForm && <FormEdit edit={onEdit} valor={valorAtual} mostraForm={setMostraForm} maiusculo={maiusculo}/>}

      </Container>
  );
}

export default EditButton;