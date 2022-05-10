import React, { FC } from 'react'

// SVGs
import { ReactComponent as Phone } from 'assets/icons/phone.svg'
import { ReactComponent as Email } from 'assets/icons/email.svg'

// Styled Components
import { Text, TextContainer } from './styles'

interface IInformationProps {
  phone: string
  email: string
}

const Information: FC<IInformationProps> = ({ phone, email }) => {
  return (
    <TextContainer>
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
