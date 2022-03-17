import React, { FC } from 'react'

// Components
import Information from './components/Information/Information'

// Styles
import { InformationsContainer, Title } from './styles'

// Interfaces
import IPort from 'interfaces/port'

interface IInformationsProps extends IPort {
  className: string
}

const Informations: FC<IInformationsProps> = ({ className, port }) => {
  return (
    <InformationsContainer className={className} port={port}>
      <Title>Se interessou? Entre em contato agora mesmo!</Title>

      <Information
        phone="(51) 9 9367-9644"
        email="eduardo.castro@metasegurancaeservicos.com.br"
        name="Eduardo Castro"
        port={port}
      />

      <Information
        phone="(51) 9 9367-9644"
        email="claudio.jutai@metasegurancaeservicos.com.br"
        name="Cláudio Jutai"
        port={port}
      />
    </InformationsContainer>
  )
}

export default Informations
