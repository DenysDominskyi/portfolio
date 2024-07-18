import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { Text } from '../../../../components/styledComponents/Text'
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper'
import { Title } from '../../../../components/styledComponents/Title'
import { SectionTitle } from '../../../../components/styledComponents/SectionTitle'

export const Contacts = () => {
    return (
        <StyledContacts>
            <Icon iconId='frame' width="103" height="103" viewBox="0 0 103 103" />
            <SectionTitle title='contacts' lineWidth='130px'/>
            <FlexWrapper justify='center'>
                <Text>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</Text>
                <ContactsCard>
                    <Title>Message me here</Title>
                    <div><Icon iconId='discord' /><Text>!Elias#3519</Text></div>
                    <div><Icon iconId='email'/><Text>elias@elias.me</Text></div>
                </ContactsCard>
            </FlexWrapper>

        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    position: relative  ;
    min-height: 40vh;

    & p{
        width: 505px;
    }
`

const ContactsCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ABB2BF;
    max-width: fit-content;

    &>div {
        display: flex;
    }
`