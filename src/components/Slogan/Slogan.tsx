import React, { FC } from 'react'

// Styled Components
import { SloganContainer, SloganText, Title } from './styles'

const Slogan: FC = () => {
  return (
    <SloganContainer>
      <Title>Meta Segurança</Title>

      <SloganText>
        A nossa <mark>meta</mark> é a sua segurança
      </SloganText>
    </SloganContainer>
  )
}

export default Slogan
