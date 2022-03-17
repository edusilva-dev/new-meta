import React, { FC } from 'react'

// Components
import Card from './components/Card'

// Styled Components
import { CardsContainer } from './styles'

// Utils
import cards from 'utils/cards'

const CardList: FC = () => {
  return (
    <CardsContainer id="services">
      {cards.map((card, index) => (
        <Card key={index} index={index} {...card} />
      ))}
    </CardsContainer>
  )
}

export default CardList
