import React, { FC } from 'react'

// Components
import Information from './components/Information/Information'

// Styles
import { InformationsContainer, Title } from './styles'

interface IInformationsProps {
  className: string
}

const Informations: FC<IInformationsProps> = ({ className }) => {
  return (
    <InformationsContainer className={className}>
      <Title>Se interessou? Entre em contato agora mesmo!</Title>

      <Information phone="(51) 9 9367-9644" email="contato@metasegurancaltda.com.br" />
    </InformationsContainer>
  )
}

export default Informations
