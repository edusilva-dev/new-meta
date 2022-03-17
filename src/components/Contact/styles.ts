import styled from 'styled-components'

// Colors
import colors from 'styles/colors'

export const ContactContainer = styled.div`
  width: 100%;

  margin-top: 150px;

  display: flex;
  flex-wrap: wrap;

  box-shadow: 0 0 5px 1px ${colors.lightGray};

  @media screen and (max-width: 539px) {
    margin-top: 80px;
  }
`
