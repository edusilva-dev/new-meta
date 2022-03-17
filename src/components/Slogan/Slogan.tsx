import React, { FC } from 'react'

// Styled Components
import { SloganContainer, SloganText, Title } from './styles'

// Interfaces
import IPort from 'interfaces/port'

const Slogan: FC<IPort> = ({ port }) => {
  return (
    <SloganContainer port={port}>
      <Title port={port}>Meta Segurança</Title>

      <SloganText port={port}>A nossa meta é a sua segurança</SloganText>
    </SloganContainer>
  )
}

export default Slogan
