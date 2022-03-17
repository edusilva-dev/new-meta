import React, { FC } from 'react'

// Images
import logoImage from 'assets/images/logo.png'

// Styled Components
import { HeaderContainer, Logo, LogoImage, MenuItem, MenuList } from './styles'

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Logo>Meta Segurança</Logo>

      <LogoImage src={logoImage} alt="Logo da Meta Segurança" />

      <MenuList>
        <MenuItem href="#about">Sobre</MenuItem>
        <MenuItem href="#services">Serviços</MenuItem>
        <MenuItem href="#contact">Contato</MenuItem>
      </MenuList>
    </HeaderContainer>
  )
}

export default Header
