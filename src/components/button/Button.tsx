import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'

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
  border: 1px solid ${theme.colors.primary};
  padding: 8px 16px;
  & a {
      color: ${theme.colors.white};
      font-weight: 500;
      size: 16px;
      line-height: 21px;
  }
`