import styled from 'styled-components'
import { Button } from '../button/Button'
import { Text } from '../styledComponents/Text'
import { Title } from '../styledComponents/Title'
import { theme } from '../../styles/Theme'

type CardPropsType = {
    maxWidth?: string,
    imgSrc?: string,
    technology?: string,
    title: string,
    titleSize?: string,
    text: string,
    button?: number,
}

type StyledCardPropsType = {
    maxWidth?: string,
}

export const Card = (props:CardPropsType ) => {
  return (
    <StyledCard maxWidth={props.maxWidth}>
        {props.imgSrc ? <img src={props.imgSrc} alt="" /> : null}
        
        {props.technology ? <Text>{props.technology}</Text> : null}
        
        <div>
            <Title>
                {props.title}
            </Title>
            <Text>{props.text}</Text>   
            {props.button === 2 ? <div>
                <Button title='Live <~>' link='#'/>
                <Button title='Demo &gt;=' link='#'/>
            </div> : (props.button ? <Button title='Live <~>' link='#'/> : <></>)} 
        </div>
    </StyledCard>
  )
}
    
const StyledCard = styled.div<StyledCardPropsType>`
    display: flex;
    flex-direction: column;
    height: fit-content;
    border: 1px solid #ABB2BF;
    max-width: ${props => props.maxWidth || '310px'};


    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-bottom: 1px solid #ABB2BF;
    }

    & > ${Text} {
        padding: 10px;
    }

    div{
        padding: 15px;
    }

    & > div:first-of-type {
        display: flex;
        flex-direction: column;
        gap: 15px;
       border-top: 1px solid ${theme.colors.gray} ;
    }

    div > div {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        padding: 0;
    }
`