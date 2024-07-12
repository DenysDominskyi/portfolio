import React from 'react'
import styled from 'styled-components'

type ButtonPropsType = {
    title: string,
    link: string,
}

export const Button = (props: ButtonPropsType) => {
  return (
    <StyledButton><a href={props.link}>{props.title}</a></StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  max-width: fit-content;
  border: 1px solid #C778DD;
  padding: 8px 16px;
  & a {
      color: #FFFFFF;
      font-weight: 500;
      size: 16px;
      line-height: 21px;
  }
`