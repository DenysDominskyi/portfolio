import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components'

export const Logo = () => {
    return (
        <StyledLogo href="#home">
            <Icon iconId='logo' width="26" height="16" viewBox="0 0 16 16"/>Elias
        </StyledLogo>
    )
}

const StyledLogo = styled.a`
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #ffffff;
`