import IPort from 'interfaces/port'
import React, { FC } from 'react'
import { SloganContainer, SloganText, Title } from './styles'

const Slogan: FC<IPort> = ({ port }) => {
  return (
    <SloganContainer>
      <Title>Meta Segurança</Title>

      <SloganText>A nossa meta é a sua segurança</SloganText>
    </SloganContainer>
  )
}

export default Slogan
