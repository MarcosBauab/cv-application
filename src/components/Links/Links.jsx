import React, { useState } from 'react';
import AddLinks from '../AddLinks/AddLinks';

import { Container } from './styles';

function Links() {

  const [arrLinks, setArrLinks] = useState([])

  return (
      <Container>
          <p>Marcos Bauab</p>
          
          <AddLinks links={arrLinks} theEnd={(parm) => {
            setArrLinks(parm)
          }}/>
      </Container>
  );
}

export default Links;