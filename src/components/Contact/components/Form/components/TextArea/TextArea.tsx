import { FC } from 'react'

// Styled Components
import { StyledTextArea } from './styles'

interface ITextAreaProps {
  name: string
  id: string
  value: string
  onChange: (event: any) => void
}

const TextArea: FC<ITextAreaProps> = ({ name, id, value, onChange }) => {
  return (
    <StyledTextArea
      id={id}
      name={name}
      placeholder="Digite sua mensagem"
      value={value}
      onChange={onChange}
    />
  )
}

export default TextArea
