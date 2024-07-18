import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper'
import { Container } from '../../../../components/styledComponents/Container'
import { theme } from '../../../../styles/Theme'
import quotes from '../../../../assets/images/quotes.svg'

export const Quote = () => {
  return (
    <StyledQuote>
      <Container justify='center'>
        <FlexWrapper direction='column' align='flex-end'>
          <span>
            <p>With great power comes great electricity bill</p>
          </span>
          <span>
            <p>- Dr. Who</p>
          </span>
        </FlexWrapper>
      </Container>
    </StyledQuote>
  )
}

const StyledQuote = styled.section`
  min-height: 25vh;
  overflow: hidden;
  padding-top: 40px;

  ${Container} {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 10px;
      right: -250px;
      width: 90px;
      height: 90px;
      border: 1px solid ${theme.colors.gray};
    }
  }

  span{
    position: relative;
    width: fit-content;
    padding: 30px;
    border: 1px solid ${theme.colors.gray};

    &::before{
      content: '';
      position: absolute;
      top: -10px;
      left: 10px;
      width: 40px;
      height: 20px;
      background: ${theme.colors.primaryBg};
      background-image: url(${quotes});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    p{
      font-weight: 500;
      font-size: 24px;
      color: ${theme.colors.white};
    }
  }

  span + span {
    padding: 15px;
    border-top: none;

    &::before{
      left: 100px;
    }

    p{
      font-weight: 400;
    }
  }
`