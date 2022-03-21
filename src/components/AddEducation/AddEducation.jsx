import React, { useState } from 'react';

import { Container } from './styles';

import { AiOutlinePlus } from 'react-icons/ai'

import ExperienceBox from '../ExperienceBox/ExperienceBox';

function AddEducation({setter}) {
  
  const [hover, setHover] = useState(false)
  const [etapas, setEtapas] = useState(1)
  const [titulo, setTitulo] = useState('Master at UNIFESP SJC')
  const [periodo, setPeriodo] = useState('April 2021 - January 2022')
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ex fugiat repellendus aliquam non impedit enim repellat officia laboriosam ab inventore nemo, debitis, deleniti qui nihil! Cum, nostrum mollitia. Ab!')

  return (
    etapas != 3 ? 
    (<Container>
      {etapas === 1 && (
        <div 
          onMouseEnter={() => {
            setHover(true)
          }} 
          onMouseLeave={() => {
            setHover(false)
          }}
          style={{
            opacity: `${hover ? 1 : 0 }`
          }}
        >
          <AiOutlinePlus onClick={() => {
            setEtapas(2)
          }}/>
        </div>
      )}
      {etapas === 2 && (
        <form onSubmit={(event) => {
          event.preventDefault()
        }}>
          <label htmlFor="titulo">Title:</label>
          <input type="text" name="titulo" id="titulo" 
            onChange={(e) => {
              setTitulo(e.target.value)
            }}
            value={titulo}
            required
          />
          <label htmlFor="periodo">Period:</label>
          <input type="text" name="periodo" id="periodo" 
            onChange={(e) => {
              setPeriodo(e.target.value)
            }}
            value={periodo}
            required
          />
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description" cols="30" rows="10"
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            value={description}
            required
          ></textarea>
          <button type='submit' onClick={() => {
            if(description.length > 0) {
              setEtapas(3)
              setter(false)
            }
          }}>Enviar!</button>
          <button type='submit' onClick={() => {
  
              setEtapas(1)
            
          }}>Cancelar!</button>
        </form>
      )}

    </Container>) : 
    
    ( <div>
        <ExperienceBox title={titulo} periodo={periodo}>
          {description}
        </ExperienceBox>
        <AddEducation />
      </div> )
  ); 
}

export default AddEducation;