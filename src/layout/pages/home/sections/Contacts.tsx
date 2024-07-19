import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { Text } from '../../../../components/styledComponents/Text'
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper'
import { Title } from '../../../../components/styledComponents/Title'
import { SectionTitle } from '../../../../components/styledComponents/SectionTitle'
import { Container } from '../../../../components/styledComponents/Container'
import { theme } from '../../../../styles/Theme'

import squareDots from '../../../../assets/images/SquareDots.svg'

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container direction='column' gap='45px'>
                <SectionTitle title='contacts' lineWidth='130px' />
                <FlexWrapper justify='space-between'  wrap='wrap'>
                    <Text>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</Text>
                    <ContactsCard>
                        <Title weight='600' size='16px' lineHeight='21px'>Message me here</Title>
                        <ul>
                            <li>
                                <span>
                                    <Icon iconId='discord' width='32' height='28' viewBox='0 0 32 32' fill={theme.colors.gray} />
                                </span>
                                <Text>!Elias#3519</Text>
                            </li>
                            <li>
                                <span>
                                    <Icon iconId='email' width='32' height='28' viewBox='0 0 32 32' fill={theme.colors.gray} />
                                </span>
                                <Text>elias@elias.me</Text>
                            </li>
                        </ul>
                    </ContactsCard>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    position: relative;
    margin-bottom: 110px;

    & p{
        width: 505px;
    }

    ${Container} {
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 45%;
            left: -255px;
            width: 105px;
            height: 105px;
            background-image: url(${squareDots});
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
`

const ContactsCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid #ABB2BF;
    max-width: 205px;
    padding: 15px;

    & > ul {
        & > li {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }
`