import React from 'react'
import styled from 'styled-components'
import { Button } from '../button/Button'
import { Text } from '../styledComponents/Text'
import { Title } from '../styledComponents/Title'

type CardPropsType = {
    maxWidth?: string,
    imgSrc?: string,
    technology?: string,
    title: string,
    titleSize?: string,
    titleBorder?: boolean,
    text: string,
    button?: number,
}

type StyledCardPropsType = {
    maxWidth?: string,
}
export const Card = (props:CardPropsType ) => {
  return (
    <StyledCard maxWidth={props.maxWidth}>
        {props.imgSrc ? <img src={props.imgSrc} alt="" /> : <></>}
        
        <Text>{props.technology}</Text>
        <div>
            <Title size={props.titleSize} border={props.titleBorder}>
                {props.title}
            </Title>
            <Text>{props.text}</Text>   
            {props.button === 2 ? <div>
                <Button title='Live <~>' link='#'/>
                <Button title='Demo >' link='#'/>
            </div> : (props.button ? <Button title='Live' link='#'/> : <></>)} 
        </div>
    </StyledCard>
  )
}
    
const StyledCard = styled.div<StyledCardPropsType>`
    display: flex;
    flex-direction: column;
    height: fit-content;
    border: 1px solid #ABB2BF;
    max-width: ${props => props.maxWidth || '330px'};

    & img{
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-bottom: 1px solid #ABB2BF;
    }
`