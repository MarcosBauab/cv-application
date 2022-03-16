import React, { useState } from 'react';

import {AiOutlineEdit} from 'react-icons/ai'
import FormEdit from '../FormEdit/FormEdit';

import { Container } from './styles';

function EditButton({ mostrar, onEdit, valorAtual, maiusculo, txtarea, add}) {

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

          {mostraForm && <FormEdit txtarea={txtarea} edit={onEdit} valor={valorAtual} mostraForm={setMostraForm} maiusculo={maiusculo} add={add}/>}

      </Container>
  );
}

export default EditButton;