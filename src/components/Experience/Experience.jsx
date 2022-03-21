import React, {useState} from 'react';
import AddEducation from '../AddEducation/AddEducation';
import ExperienceBox from '../ExperienceBox/ExperienceBox';

import { Container } from './Styles';

function Experience() {

  const [estadoInicial, setEstadoInicial ] = useState(true)

  return (
      <Container>

        <p className="bold">EDUCATION</p>

        <div>

          {estadoInicial && 
          <ExperienceBox title="Master at UNIFESP SJC" periodo="April 2021 - January 2022">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ex fugiat repellendus aliquam non impedit enim repellat officia laboriosam ab inventore nemo, debitis, deleniti qui nihil! Cum, nostrum mollitia. Ab!
          </ExperienceBox>}

          <AddEducation setter={setEstadoInicial} />

        </div>

      </Container>
  );
}

export default Experience;