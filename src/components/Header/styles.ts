import styled from 'styled-components'

// Colors
import colors from 'styles/colors'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 72px;

  padding: 0 35px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.lightGray};

  box-shadow: 0 0 20px 2px ${colors.lightGray};

  z-index: 10;
  position: relative;

  @media screen and (max-width: 539px) {
    padding: 0 15px;
  }
`

export const LogoImage = styled.img`
  height: 75%;
  object-fit: contain;

  transition: all 2s ease;
`

export const MenuList = styled.nav`
  display: flex;
  align-items: center;
`

export const MenuItem = styled.a`
  color: ${colors.black};

  border-bottom: 2px solid transparent;

  outline: none;

  transition: all 0.2s ease;

  &:hover {
    opacity: 0.5;
  }

  &:focus {
    border-color: ${colors.black};
  }

  &:not(:first-child) {
    margin-left: 15px;
  }

  @media screen and (max-width: 539px) {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
`
