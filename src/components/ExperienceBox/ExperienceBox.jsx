import React from 'react';

import { Container } from './styles';

function ExperienceBox(props) {

  return (
      <Container>
          <p className='experienceName'>{props.title}</p>
          <p className="anos">{props.periodo}</p>
          <p className="description">{props.children}</p>
      </Container>
  );
}

export default ExperienceBox;