import React, { FC } from 'react'

// Images
import logoImage from 'assets/images/logo.png'

// Styled Components
import { HeaderContainer, Logo, LogoImage, MenuItem, MenuList } from './styles'

// Enums && Interfaces
import IPort from 'interfaces/port'
import Ports from 'enums/ports'

const Header: FC<IPort> = ({ port }) => {
  return (
    <HeaderContainer>
      {port !== Ports.SMALL_SIZE && <Logo>Meta Segurança</Logo>}

      <LogoImage src={logoImage} alt="Logo da Meta Segurança" />

      <MenuList>
        <MenuItem href="#services">Serviços</MenuItem>
        <MenuItem href="#contact">Contato</MenuItem>
      </MenuList>
    </HeaderContainer>
  )
}

export default Header
