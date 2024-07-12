import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper'

export const Quote = () => {
  return (
    <StyledQuote>
        <div>commas</div>
        <h3>With great power comes great electricity bill</h3>
        <div>commas</div>
        <p>- Dr.Who</p>
    </StyledQuote>
  )
}

const StyledQuote = styled.section`
  background-color: #daedf75d;
  min-height: 20vh;
`