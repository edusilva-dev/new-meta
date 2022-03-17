import React, { FC } from 'react'
import { AboutContainer, Separator, Text } from './style'

const About: FC = () => {
  return (
    <AboutContainer id="about">
      <Text>
        <strong>Olá, seja bem vindo!</strong>
        <Separator />
        Nós somos a meta segurança, uma empresa especializada em portaria, limpeza e segurança.
        Atuamos em diversos setores, desde residencial ao comercial.
        <Separator />
        Nossa equipe é formada por profissionais experientes e capacitados para atuar no ramo.
        Estamos atuando desde 2019, em Porto Alegre e região, garantindo o melhor serviço e
        segurança do mercado, pois o nosso objetivo, é a qualidade.
      </Text>
    </AboutContainer>
  )
}

export default About
