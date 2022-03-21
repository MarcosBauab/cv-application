import React, { useState } from 'react';
import AddLinks from '../AddLinks/AddLinks';

import { AiOutlinePlus } from 'react-icons/ai'

import { Container } from './styles';

function Links() {

  const [insta, setInsta] = useState('')
  const [face, setFace] = useState('')
  const [linked, setLinked] = useState('')
  const [github, setGithub] = useState('')
  const [hover, setHover] = useState(false)
  const [clicou, setClicou] = useState(false)

  return (
      <Container 
        onMouseEnter={() => {
          setHover(true)
        }} 
        onMouseLeave={() => {
          setHover(false)
        }}
      >
          <p>Marcos Bauab</p>
          
          {clicou && <AddLinks 
            links={[insta, face, linked, github]}
            setters={[setInsta, setFace, setLinked, setGithub]}
            fechar={setClicou}
          />}

          <a href={insta} target="_blank" style={ insta != '' ? {display: 'inline'} : {display: 'none'} }>Instagram</a>
          <a href={face} target="_blank" style={face != '' ? {display: 'inline'} : {display: 'none'}}>Facebook</a>
          <a href={linked} target="_blank" style={ linked != '' ? {display: 'inline'} : {display: 'none'}}>Linkedin</a>
          <a href={github} target="_blank" style={github != '' ? {display: 'inline'} : {display: 'none'} }>Github</a>

          <AiOutlinePlus 
            style={{
             opacity: `${hover ? 1 : 0 }`
            }}
            onClick={() => {
              setClicou(true)
            }}
          />

      </Container>
  );
}

export default Links;