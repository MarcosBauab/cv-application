import React, { useState } from 'react';
import EditButton from '../EditButton/EditButton';
import { Container } from './Style';

function Profile() {

  const [visivel, setVisivel] = useState('')
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe velit at quae esse sed asperiores beatae, consequuntur amet! Eum itaque fugit numquam nam tempora repellendus dicta incidunt at corporis quos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam veritatis, placeat doloribus facilis repellat saepe suscipit voluptates ut aut cupiditate quibusdam ipsum veniam nostrum. Amet sed laborum architecto quod.')
  const [skills, setSkills] = useState(['React', 'Javascript', 'HTML', 'CSS'])

  let mostra = false

  return (
    <Container>

      <p className='bold'>PROFILE</p>
      <div className="profSkill">

        <div className='descp' onMouseEnter={() => setVisivel('description')} onMouseLeave={() => setVisivel('')}>

          {visivel === 'description' ? mostra = true : mostra = false}

          <EditButton 

          mostrar={mostra}

          valorAtual={description}

          txtarea={true}

          maiusculo={false}

          onEdit={(valorNovo) => {
            setDescription(valorNovo)
            setVisivel('')
          }} />

          {description}

        </div>

        <fieldset onMouseEnter={() => setVisivel('skills')} onMouseLeave={() => setVisivel('')}>

          {visivel === 'skills' ? mostra = true : mostra = false}

          <EditButton 

          mostrar={mostra}

          valorAtual={skills}

          txtarea={false}

          maiusculo={false}

          add={true}

          onEdit={(valorNovo) => {

            setSkills([...valorNovo])
            setVisivel('')

          }} />

          <legend>Skills</legend>
          <ul>
            {skills.map((skill) => {
              return (
                <li key={skill}>{skill}</li>
              )
            })}
      
          </ul>
          
        </fieldset>
      </div>

    </Container>
  );
}

export default Profile;
