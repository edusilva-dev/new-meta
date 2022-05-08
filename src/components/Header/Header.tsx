import React, { FC, useState } from 'react'

// Images
import logoImage from 'assets/images/logo.png'

// Styled Components
import { HeaderContainer, LogoImage, MenuItem, MenuList } from './styles'

const Header: FC = () => {
  const windowHeight: number = window.innerHeight
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  return (
    <HeaderContainer>
      <LogoImage
        src={logoImage}
        alt="Logo da Meta Segurança"
        className={scrollPosition > windowHeight ? 'grow' : ''}
      />

      <MenuList>
        <MenuItem href="#about">Sobre</MenuItem>
        <MenuItem href="#services">Serviços</MenuItem>
        <MenuItem href="#contact">Contato</MenuItem>
      </MenuList>
    </HeaderContainer>
  )
}

export default Header
