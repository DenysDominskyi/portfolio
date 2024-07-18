import styled from 'styled-components'
import photo from '../../../../assets/images/photo.png'
import { Text } from '../../../../components/styledComponents/Text'
import { Container } from '../../../../components/styledComponents/Container'
import { Button } from '../../../../components/button/Button'

import logoImg1 from '../../../../assets/images/Logo.png'
import logoImg2 from '../../../../assets/images/Dots.png'
import { theme } from '../../../../styles/Theme'

export const Main = () => {
  return (
    <StyledMain>
      <Container align='center'>
        <div>
          <h1>Elias is a <span>web designer</span> and <span>front-end developer</span></h1>
          <Text>He crafts responsive websites where technologies meet creativity</Text>
          <Button title='Contact me' link='#' />
        </div>

        <div>
          <Photo>
            <img src={photo} alt="my photo" />
          </Photo>
          <StatusBox>
            <Square></Square>
            <Text>Currently working on <span>Portfolio</span></Text>
          </StatusBox>
        </div>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  min-height: 75vh;
  display: flex;
  padding-top: 60px;

  & > div > :nth-child(1){
    max-width: 540px;
    width: 100%;
  }

  & h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    color: ${theme.colors.white};
    margin-bottom: 32px;
  }
  & h1 span {
    color: ${theme.colors.primary};
  }

  & div p{
    margin-bottom: 24px;
  }
`

const Photo = styled.div`
  position: relative;
  width: 460px;
  height: 390px;
  overflow: hidden;

  &::before{
    content: '';
    position: absolute;
    top: 28%;
    left: 0;
    width: 155px;
    height: 155px;
    background-image: url(${logoImg1});
    background-size: cover;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 65%;
    right: 5%;
    width: 85px;
    height: 85px;
    background-image: url(${logoImg2});
    background-size: cover;
  }

  & img {
    object-fit: contain;
    position: absolute;
    top: -10%;
    left: -20%;
    width: 130%;
  }
`
const StatusBox = styled.div`
  max-width: 85%;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid ${theme.colors.gray};
  padding: 5px;
  margin: 0 auto;

  ${Text} {
    margin-bottom: 0;

    span {
      font-weight: 600;
      color: ${theme.colors.white};
    }
  }
`

const Square = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${theme.colors.primary};
`