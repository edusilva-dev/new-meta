import React, { FC } from 'react'
import Form from './components/Form/Form'
import { ContactContainer } from './styles'
import Informations from './components/Informations/Informations'
import IPort from 'interfaces/port'

interface IContactProps extends IPort {
  scrollPosition: number
  setSubmitAnswer: (message: string) => void
}

const Contact: FC<IContactProps> = ({ scrollPosition, setSubmitAnswer, port }) => {
  return (
    <ContactContainer id="contact">
      <Informations className={scrollPosition > 223 ? 'animate' : ''} />

      <Form className={scrollPosition > 223 ? 'animate' : ''} setSubmitAnswer={setSubmitAnswer} />
    </ContactContainer>
  )
}

export default Contact
