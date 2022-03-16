import React, { FC, useState } from 'react'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import TextArea from './components/TextArea/TextArea'
import { FormContainer, Title } from './styles'

interface IFormProps {
  className: string
  setSubmitAnswer: (message: string) => void
}

const Form: FC<IFormProps> = ({ className, setSubmitAnswer }) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const data = {
      name,
      email,
      message
    }

    const response = await fetch('http://localhost:3040/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const answer = await response.json()
    setSubmitAnswer(answer.message)
  }

  return (
    <FormContainer className={className} onSubmit={e => handleSubmit(e)}>
      <Title>Ou envie-nos sua mensagem</Title>

      <Input
        id="name"
        name="name"
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
      />

      <Input
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
      />

      <TextArea
        id="message"
        name="message"
        value={message}
        onChange={(e: React.FormEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value)}
      />

      <Button>Enviar</Button>
    </FormContainer>
  )
}

export default Form
