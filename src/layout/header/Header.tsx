import styled from 'styled-components'

import { Logo } from '../../components/logo/Logo'
import { Navigation } from '../../components/nav/Navigation'
import { Container } from '../../components/styledComponents/Container'
import { FlexWrapper } from '../../components/styledComponents/FlexWrapper'

const items = ['home', 'works', 'about-me', 'contacts']

export const Header = () => {
  return (
    <StyledHeader>
      <Container justify='space-between'>
        <Logo />
        <FlexWrapper gap='25px'>
          <Navigation menuItems={items}/>
          <div className='dropdown'>
            <input type="text" id='dropdown-input' placeholder='Select an option' autoComplete='off' />
            <div id='dropdown-content' className='dropdown-content'>
              <div className='dropdown-item'>EN</div>
              <div className='dropdown-item'>SV</div>
              <div className='dropdown-item'>UA</div>
            </div>
          </div>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 8vh;
  padding-top: 30px;
  padding-bottom: 10px;
  z-index: 999;
`
