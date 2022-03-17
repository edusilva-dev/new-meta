import { FC } from 'react'

// Styled Components
import { StyledButton } from './styles'

const Button: FC = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button
