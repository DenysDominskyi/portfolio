import styled from 'styled-components'
import { Text } from '../../../../components/styledComponents/Text'
import { Button } from '../../../../components/button/Button'
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper'
import { Icon } from '../../../../components/icon/Icon'
import { SectionTitle } from '../../../../components/styledComponents/SectionTitle'
import { Container } from '../../../../components/styledComponents/Container'
import { theme } from '../../../../styles/Theme'

import photo2 from '../../../../assets/images/photo2.png'
import squareDots from '../../../../assets/images/SquareDots.svg'

export const About = () => {
    return (
        <StyledAbout id='about-me'>
            <Container direction='column' gap='20px'>
                <SectionTitle title='about-me' lineWidth='325px' />
                <FlexWrapper justify='space-between' wrap='wrap'>
                    <FlexWrapper direction='column' width='515px' gap='20px'>
                        <Text>Hello, i’m Elias!</Text>
                        <Text>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</Text>
                        <Text>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</Text>
                        <Button title='Read more ->' link='#' />
                    </FlexWrapper>
                    <PhotoBlock>
                        <img src={photo2} alt="second photo" />
                        <Icon1>
                            <Icon iconId='frame' width="84" height="84" viewBox="0 0 84 84" />
                        </Icon1>
                        <Icon2>
                            <Icon iconId='frameSm' width="105" height="56" viewBox="0 0 105 56" />
                        </Icon2>
                    </PhotoBlock>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    margin-bottom: 100px;
    overflow: hidden;
    position: relative;
    background-color: ${theme.colors.primaryBg};
    
    @media ${theme.media.tablet} {
        margin-bottom: 30px;
    }

    ${Container} {
        position: relative;

        &::before {
        content: '';
        position: absolute;
        top: 15%;
        left: -255px;
        width: 155px;
        height: 155px;
        border: 1px solid ${theme.colors.gray};
        }

        &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -190px;
        width: 105px;
        height: 105px;
        background-image: url(${squareDots});
        background-repeat: no-repeat;
        background-size: contain;
        }

        & > ${FlexWrapper} {
            justify-content: center;

            ${FlexWrapper} {
                margin-bottom: 50px;
            }
        } 
    }
`

const PhotoBlock = styled.div`
    position: relative;
    flex-grow: 1;
    top: -50px;
    max-width: 340px;
    width: 250px;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        height: 1px;
        background-color: ${theme.colors.primary};
    }

    img {
        width: 100%;
    }
`
const Icon1 = styled.div`
    position: absolute;
    top: 15%;
    left: 5%;
`
const Icon2 = styled.div`
    position: absolute;
    top: 50%;
    right: 18%;
`