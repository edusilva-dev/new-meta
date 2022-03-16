import React, { FC } from 'react'

import { ReactComponent as Phone } from 'assets/icons/phone.svg'
import { ReactComponent as Email } from 'assets/icons/email.svg'
import { Text, TextContainer } from './styles'

interface IInformationProps {
  phone: string
  email: string
  name: string
}

const Information: FC<IInformationProps> = ({ phone, email, name }) => {
  return (
    <TextContainer>
      <Text>{name}</Text>

      <Text>
        <Email />
        {email}
      </Text>

      <Text>
        <Phone />
        {phone}
      </Text>
    </TextContainer>
  )
}

export default Information
