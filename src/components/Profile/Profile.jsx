import React from 'react';
import { Container } from './Style';

function Profile() {
  return (
    <Container>

      <p className='bold'>PROFILE</p>
      <div className="profSkill">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe velit at quae esse sed asperiores beatae, consequuntur amet! Eum itaque fugit numquam nam tempora repellendus dicta incidunt at corporis quos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam veritatis, placeat doloribus facilis repellat saepe suscipit voluptates ut aut cupiditate quibusdam ipsum veniam nostrum. Amet sed laborum architecto quod.</p>
        <fieldset>

          <legend>Skills</legend>
          <ul>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Elixir</li>
            <li>React-native</li>
      
          </ul>
          
        </fieldset>
      </div>

    </Container>
  );
}

export default Profile;
