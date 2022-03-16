import React, { FC, useEffect } from 'react'

import { ReactComponent as Check } from 'assets/icons/check.svg'
import { ToastContainer } from './styles'

interface IToastProps {
  message: string
  setSubmitAnswer: (message: string) => void
}

const Toast: FC<IToastProps> = ({ message, setSubmitAnswer }) => {
  const handleClose = () => {
    setSubmitAnswer('')
  }

  useEffect(() => {
    if (!message) return

    setTimeout(() => {
      setSubmitAnswer('')
    }, 3000)
  }, [message])

  return (
    <ToastContainer onClick={handleClose}>
      <Check />

      {message}
    </ToastContainer>
  )
}

export default Toast
