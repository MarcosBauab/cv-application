import React from 'react';
import ExperienceBox from '../ExperienceBox/ExperienceBox';

import { Container } from './Styles';

function Experience() {
  return (
      <Container>
        <p className="bold">EDUCATION</p>
        <ExperienceBox />
      </Container>
  );
}

export default Experience;