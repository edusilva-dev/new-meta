import React, { FC } from 'react'

// Components
import Form from './components/Form/Form'
import Informations from './components/Informations/Informations'

// Styled Components
import { ContactContainer } from './styles'

// Interfaces
import IPort from 'interfaces/port'

interface IContactProps extends IPort {
  scrollPosition: number
  setSubmitAnswer: (message: string) => void
}

const Contact: FC<IContactProps> = ({ scrollPosition, setSubmitAnswer, port }) => {
  return (
    <ContactContainer id="contact" port={port}>
      <Informations className={scrollPosition > 223 ? 'animate' : ''} port={port} />

      <Form
        className={scrollPosition > 223 ? 'animate' : ''}
        setSubmitAnswer={setSubmitAnswer}
        port={port}
      />
    </ContactContainer>
  )
}

export default Contact
