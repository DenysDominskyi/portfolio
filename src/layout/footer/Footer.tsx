import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Text } from '../../components/styledComponents/Text'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/styledComponents/FlexWrapper'

export const Footer = () => {
  return (
    <StyledFooter>
        <FlexWrapper direction='column' align='center'>
            <FlexWrapper align='spase-between' justify='spase-between'>
                <FlexWrapper direction='column'>
                    <div><Logo /><a href='mailto:elias@elias-dev.ml'>elias@elias-dev.ml</a></div>
                    <Text>Web designer and front-end developer</Text>
                </FlexWrapper>
                <div>
                    <h4>Media</h4>
                    <ul>
                        <li>
                            <a href=""><Icon iconId='github' width="32" height="32" viewBox="0 0 32 32"/></a></li>
                        <li>
                            <a href=""><Icon iconId='figma' width="32" height="32" viewBox="0 0 32 32"/></a></li>
                        <li>
                            <a href=""><Icon iconId='discord' width="32" height="32" viewBox="0 0 32 32"/></a></li>
                    </ul>
                </div>
            </FlexWrapper>
            <small>© Copyright 2022. Made by Elias</small>
        </FlexWrapper>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    min-height: 20vh;
    background-color: #373737;
    border-top: 1px solid #ABB2BF;

    & ul{
        display: flex;
    }
`