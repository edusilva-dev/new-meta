import React, { FC } from 'react'

import { CardsContainer } from './styles'

import cards from 'utils/cards'
import Card from './components/Card'
import IPort from 'interfaces/port'

const CardList: FC<IPort> = ({ port }) => {
  return (
    <CardsContainer id="services">
      {cards.map((card, index) => (
        <Card key={index} index={index} {...card} />
      ))}
    </CardsContainer>
  )
}

export default CardList
