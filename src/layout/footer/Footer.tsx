import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Text } from '../../components/styledComponents/Text'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/styledComponents/FlexWrapper'
import { Container } from '../../components/styledComponents/Container'
import { theme } from '../../styles/Theme'
import { Title } from '../../components/styledComponents/Title'

export const Footer = () => {
    return (
        <StyledFooter>
            <Container direction='column' align='center' gap='45px'>
                <FlexWrapper align='center'>
                    <FlexWrapper direction='column' gap='15px'>
                        <LogoMailBox><Logo /><a href='mailto:elias@elias-dev.ml'>elias@elias-dev.ml</a></LogoMailBox>
                        <Title weight='400' size='16px' lineHeight='21px'>Web designer and front-end developer</Title>
                    </FlexWrapper>
                    <div>
                        <Title>Media</Title>
                        <ul>
                            <li>
                                <a href=""><Icon iconId='github' width="32" height="32" viewBox="0 0 32 32" fill={theme.colors.gray}/></a></li>
                            <li>
                                <a href=""><Icon iconId='figma' width="32" height="32" viewBox="0 0 32 32" fill={theme.colors.gray}/></a></li>
                            <li>
                                <a href=""><Icon iconId='discord' width="32" height="32" viewBox="0 0 32 32" fill={theme.colors.gray}/></a></li>
                        </ul>
                    </div>
                </FlexWrapper>
                <Text>© Copyright 2022. Made by Elias</Text>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    border-top: 1px solid #ABB2BF;
    padding: 30px 0;

    & ul{
        display: flex;
    }

    & ${Container} > ${FlexWrapper} {
        width: 100%;
        justify-content: space-between;
    }
`

const LogoMailBox = styled.div`
    & > a:last-child {
        color: ${theme.colors.gray};
        margin-left: 25px;
    }
`