import React, { FC } from 'react'

// Components
import Card from './components/Card'

// Styled Components
import { CardsContainer } from './styles'

// Utils
import cards from 'utils/cards'

// Interfaces
import IPort from 'interfaces/port'

const CardList: FC<IPort> = ({ port }) => {
  return (
    <CardsContainer id="services" port={port}>
      {cards.map((card, index) => (
        <Card key={index} index={index} port={port} {...card} />
      ))}
    </CardsContainer>
  )
}

export default CardList
