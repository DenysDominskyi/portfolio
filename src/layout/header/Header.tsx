import styled from 'styled-components'

import { Logo } from '../../components/logo/Logo'
import { Navigation } from '../../components/nav/Navigation'
import { Container } from '../../components/styledComponents/Container'
import { FlexWrapper } from '../../components/styledComponents/FlexWrapper'
import { SocialNav } from '../../components/nav/SocialNav'
import { MobileNavigation } from '../../components/nav/MobileNavigation'
import { theme } from '../../styles/Theme'

export const Header = () => {

  const items = [
    {
      title: 'home',
      href: 'home'
    },
    {
      title: 'projects',
      href: 'projects'
    },
    {
      title: 'skills',
      href: 'skills'
    },
    {
      title: 'about-me',
      href: 'about-me'
    },
    {
      title: 'contacts',
      href: 'contacts'
    }]

  return (
    <StyledHeader>
      <SocialNav />
      <Container justify='space-between'>
        <Logo />
        <FlexWrapper justify='flex-end' gap='25px'>
          <Navigation menuItems={items}/>
          <MobileNavigation menuItems={items}/>
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
  background-color: ${theme.colors.primaryBg};
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding-top: 30px;
  padding-bottom: 10px;
  z-index: 999;

  @media ${theme.media.tablet} {
    backdrop-filter: none;
  }
`

