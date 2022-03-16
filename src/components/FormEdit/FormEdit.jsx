import React, { useState } from 'react';

import { BiSend } from 'react-icons/bi'

import { AiFillCloseCircle } from 'react-icons/ai'

import { Container, Diver, Novo } from './styles';

function FormEdit({ edit, valor, mostraForm, maiusculo, txtarea, add }) {

  const [editado, setEditado] = useState(valor)
  const [novoValor, setNovoValor] = useState('')

  return (
    <Container>
      <form onSubmit={(e) => { e.preventDefault() }}>

        <p>Submit the new value: </p>

        {!add &&
          (<Diver>

            {txtarea ?

              (<textarea className='inp' style={{ resize: 'vertical' }} onChange={(e) => { setEditado(e.target.value) }} value={editado} name="" id="" cols="30" rows="10"></textarea>)

              :

              (<input
                className='inp'
                type="text"
                name=""
                id=""
                onChange={(e) => { setEditado(e.target.value) }} value={editado}
              />
              )

            }


            <button type="submit" onClick={() => {
              let maisc = editado
              if (maiusculo) {
                maisc = maisc.toUpperCase()
              }
              edit(maisc)
              mostraForm(false)

            }}>
              <BiSend style={{
                fill: 'white',
              }} />
            </button>



          </Diver>)}



        {add &&
          (<Novo>
            <div className="lis">
              {valor.map((individual) => {
                //id += 1
                return (

                  <div key={individual}>
                    <li>{individual}</li>
                    <AiFillCloseCircle 
                      style={{
                        fill: 'white',
                        cursor: 'pointer',
                        width: '20px',
                        height: '20px',
                        
                      }}

                      onClick={() => {
                        
                        let index = valor.indexOf(individual)
                        let arrNovo = valor
                        arrNovo.splice(index, 1)

                        edit(arrNovo)

                      }}
                    />
                  </div>
                  
                )

              })}
            </div>
            <div>
              <input type="text" name="" id="" onChange={(e) => {
                setNovoValor(e.target.value)
              }} value={novoValor}/>

              <button onClick={() => {

                if(novoValor != ''){
                  
                  let arrTeste = valor.concat(novoValor)
                  edit(arrTeste)

                }
                
                //mostraForm(false)
                setNovoValor('')

              }}>+</button>
            </div>
          </Novo>)}

        <AiFillCloseCircle style={{
          fill: 'white',
          cursor: 'pointer',
          width: '80px',
          height: '40px',
          position: 'absolute',
          right: '-40px',
          top: '-20px'
        }} onClick={() => {

          edit(valor)
          mostraForm(false)

        }} />

      </form>
    </Container>
  );
}

export default FormEdit;