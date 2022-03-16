import styled from 'styled-components'
import { FadeIn } from 'styles/animations'
import colors from 'styles/colors'

export const SloganContainer = styled.div`
  width: 100%;

  margin-top: 60px;
  padding-top: 40px;
  padding-bottom: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 600;
  text-align: center;
  color: ${colors.lightBlue};

  opacity: 0;
  transform: translateY(100px);

  animation: ${FadeIn} 1.5s ease forwards;
`

export const SloganText = styled.h2`
  font-size: 56px;
  font-weight: 400;
  text-align: center;

  margin-top: 20px;

  opacity: 0;
  transform: translateY(20px);

  animation: ${FadeIn} 1.5s 500ms ease forwards;
`
