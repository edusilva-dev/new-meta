import { FC } from 'react'
import { StyledInput } from './styles'

interface IInputProps {
  name: string
  id: string
  type: string
  placeholder: string
  value: string
  onChange: (event: any) => void
}

const Input: FC<IInputProps> = ({ id, name, type, placeholder, value, onChange }) => {
  return (
    <StyledInput
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
