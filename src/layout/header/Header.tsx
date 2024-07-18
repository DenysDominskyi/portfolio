import styled from 'styled-components'

import { Logo } from '../../components/logo/Logo'
import { Navigation } from '../../components/nav/Navigation'
import { Container } from '../../components/styledComponents/Container'
import { FlexWrapper } from '../../components/styledComponents/FlexWrapper'
import { SocialNav } from '../../components/nav/SocialNav'

const items = ['home', 'works', 'about-me', 'contacts']

export const Header = () => {
  return (
    <StyledHeader>
      <SocialNav />
      <Container justify='space-between'>
        <Logo />
        <FlexWrapper gap='25px'>
          <Navigation menuItems={items}/>
          {/* <div className='dropdown'>
            <input type="text" id='dropdown-input' placeholder='Select an option' autoComplete='off' />
            <div id='dropdown-content' className='dropdown-content'>
              <div className='dropdown-item'>EN</div>
              <div className='dropdown-item'>SV</div>
              <div className='dropdown-item'>UA</div>
            </div>
          </div> */}
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding-top: 30px;
  padding-bottom: 10px;
  z-index: 999;
`

