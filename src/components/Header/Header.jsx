import React, { useState } from 'react';
import EditButton from '../EditButton/EditButton';
import HeadHeader from './HeaderStyle';


function Header() {

  const [visivel, setVisivel] = useState('')
  const [numero, setNumero] = useState('60983824455')
  const [email, setEmail] = useState('youremail@hey.com')
  const [name, setName] = useState('YOUR NAME')

  let mostra = false

  return (

    <HeadHeader>
      <header>
        <span 
        onMouseEnter={() => {
          setVisivel('number')
        }}
        onMouseLeave={() => {
          setVisivel('')
        }}
        >
          {visivel === 'number' ? mostra = true : mostra = false}

          <EditButton 
          
          mostrar={mostra}

          valorAtual={numero}

          maiusculo={false}

          onEdit={(novoValor) => {
            setNumero(novoValor)
            setVisivel('')
          }} />
          {numero}
        </span>
        <a 
        onMouseEnter={() => {
          setVisivel('mail')
        }}
        onMouseLeave={() => {
          setVisivel('')
        }}>
          {visivel === 'mail' ? mostra = true : mostra = false}

          <EditButton 

          mostrar={mostra}

          valorAtual={email}

          maiusculo={false}

          onEdit={(valorNovo) => {
            setEmail(valorNovo)
            setVisivel('')
          }} />
          {email}
        </a>
      </header>

      <main>
        <span 
        onMouseEnter={() => {
          setVisivel('name')
        }}
        onMouseLeave={() => {
          setVisivel('')
        }}>
          {visivel === 'name' ? mostra = true : mostra = false}

          <EditButton 

          mostrar={mostra}

          valorAtual={name}

          maiusculo={true}

          onEdit={(valorNovo) => {
            setName(valorNovo)
            setVisivel('')
          }} />
          {name}
        </span>
      </main>
      
    </HeadHeader>

  );
}

export default Header;