import { FC } from 'react'
import { StyledButton } from './styles'

const Button: FC = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button
