import React from 'react'

import styled from 'styled-components'



import { Logo } from '../../components/logo/Logo'
import { Navigation } from '../../components/nav/Navigation'
import { Container } from '../../components/styledComponents/Container'

export const Header = () => {
  return (
    <StyledHeader>
      <Container justify='space-between'>
        <Logo />
        <Navigation />
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    min-height: 8vh;
    padding-top: 30px;
    padding-bottom: 10px;
    
`
