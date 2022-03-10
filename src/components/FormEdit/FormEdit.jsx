import React, { useState } from 'react';

import { BiSend } from 'react-icons/bi'

import { Container, Diver } from './styles';

function FormEdit({edit, valor, mostraForm, maiusculo}) {

  const [editado, setEditado] = useState(valor)

  return (
    <Container>
      <form onSubmit={(e)=>{e.preventDefault()}}>

        <p>Submit the new value: </p>

        <Diver>

          <button type='submit' onClick={() => {
            
            edit(valor)
            mostraForm(false)

          }}>X</button>

          <input type="text" name="" id="" onChange={(e) => {

            setEditado(e.target.value)

          }} value={editado}/>

          <button type="submit" onClick={() => {
            let maisc = editado
            if(maiusculo){
              maisc = maisc.toUpperCase()
            }
            edit(maisc)
            mostraForm(false)

          }}>
            <BiSend />
          </button>

        </Diver>
      </form>
    </Container>
  );
}

export default FormEdit;