import React, { FC } from 'react'
import Information from './components/Information/Information'
import { InformationsContainer, Title } from './styles'

interface IInformationsProps {
  className: string
}

const Informations: FC<IInformationsProps> = ({ className }) => {
  return (
    <InformationsContainer className={className}>
      <Title>Se interessou? Entre em contato agora mesmo!</Title>

      <Information
        phone="(51) 9 9367-9644"
        email="eduardo.castro@metasegurancaeservicos.com.br"
        name="Eduardo Castro"
      />

      <Information
        phone="(51) 9 9367-9644"
        email="claudio.jutai@metasegurancaeservicos.com.br"
        name="Cláudio Jutai"
      />
    </InformationsContainer>
  )
}

export default Informations
