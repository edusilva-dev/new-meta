import React, { FC } from 'react'

// Styles
import { CardContainer, Description, Title } from './styles'

// Icons
import { ReactComponent as Gate } from 'assets/icons/gate.svg'
import { ReactComponent as Clean } from 'assets/icons/clean.svg'
import { ReactComponent as Party } from 'assets/icons/party.svg'
import { ReactComponent as Event } from 'assets/icons/event.svg'

// Interfaces
import IPort from 'interfaces/port'

interface ICardProps extends IPort {
  index: number
  title: string
  description: string
  icon: string
}

const Card: FC<ICardProps> = ({ index, title, description, icon, port }) => {
  const renderIcon = () => {
    if (icon === 'gate') return <Gate />
    if (icon === 'clean') return <Clean />
    if (icon === 'party') return <Party />
    if (icon === 'event') return <Event />
  }

  return (
    <CardContainer index={index} port={port}>
      <Title>
        {renderIcon()}
        {title}
      </Title>

      <Description>{description}</Description>
    </CardContainer>
  )
}

export default Card
