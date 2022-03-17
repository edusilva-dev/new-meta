import React, { FC } from 'react'

// SVGs
import { ReactComponent as Phone } from 'assets/icons/phone.svg'
import { ReactComponent as Email } from 'assets/icons/email.svg'

// Styled Components
import { Text, TextContainer } from './styles'

// Interfaces
import IPort from 'interfaces/port'

interface IInformationProps extends IPort {
  phone: string
  email: string
  name: string
}

const Information: FC<IInformationProps> = ({ phone, email, name, port }) => {
  return (
    <TextContainer>
      <Text port={port}>{name}</Text>

      <Text port={port}>
        <Email />
        {email}
      </Text>

      <Text port={port}>
        <Phone />
        {phone}
      </Text>
    </TextContainer>
  )
}

export default Information
