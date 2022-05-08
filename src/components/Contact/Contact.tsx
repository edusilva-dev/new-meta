import React, { FC } from 'react'

// Components
import Form from './components/Form/Form'
import Informations from './components/Informations/Informations'

// Styled Components
import { ContactContainer } from './styles'

interface IContactProps {
  scrollPosition: number
  setSubmitAnswer: (message: string) => void
}

const Contact: FC<IContactProps> = ({ scrollPosition, setSubmitAnswer }) => {
  return (
    <ContactContainer id="contact">
      <Informations className={scrollPosition > 1006 ? 'animate' : ''} />

      <Form className={scrollPosition > 1006 ? 'animate' : ''} setSubmitAnswer={setSubmitAnswer} />
    </ContactContainer>
  )
}

export default Contact
