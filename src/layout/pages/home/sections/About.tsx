import React from 'react'
import styled from 'styled-components'
import { Text } from '../../../../components/styledComponents/Text'
import { Button } from '../../../../components/button/Button'
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper'
import { Icon } from '../../../../components/icon/Icon'
import photo2 from '../../../../assets/images/photo2.png'
import { SectionTitle } from '../../../../components/styledComponents/SectionTitle'

export const About = () => {
    return (
        <StyledAbout>
            <Icon iconId='frame' width="103" height="103" viewBox="0 0 103 103" />
            <Icon iconId='rectangle' width="155" height="155" viewBox="0 0 155 155" />
            <SectionTitle title='about-me' lineWidth='325px' />
            <FlexWrapper justify='center'>
                <FlexWrapper direction='column' width='515px'>
                    <Text>Hello, i’m Elias!</Text>
                    <Text>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</Text>
                    <Text>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</Text>
                    <Button title='Read more ->' link='#' />
                </FlexWrapper>
                <div>
                    <img src={photo2} alt="second photo" />
                    <Icon iconId='frame' width="84" height="84" viewBox="0 0 84 84" />
                    <Icon iconId='frameSm' width="105" height="56" viewBox="0 0 105 56" />
                </div>
            </FlexWrapper>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    min-height: 50vh;
    background-color: #898989;
`