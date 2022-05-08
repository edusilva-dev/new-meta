import styled from 'styled-components'
import { FadeIn } from 'styles/animations'
import colors from 'styles/colors'

export const AboutContainer = styled.div`
  width: 65%;

  margin: 100px auto 0 auto;
  padding: 35px;

  opacity: 0;

  animation: ${FadeIn} 1.5s 1.5s ease forwards;

  @media screen and (max-width: 539px) {
    width: 100%;

    margin-top: 50px;
  }
`

export const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  text-align: justify;
  color: ${colors.black};

  @media screen and (max-width: 539px) {
    font-size: 16px;
  }
`

export const Separator = styled.span`
  display: block;
  margin-top: 20px;
`
