import React from 'react'
import styled from 'styled-components'

type TitlePropsType = {
    value: string,
    lineWidth?: string,
}

type StyledLinePropsType = {
    widthLine: string,
}

export const SectionTitle = (props: TitlePropsType) => {

    return (
        <StyledTitle >
            <h2><span>#</span>{props.value}</h2>
            {props.lineWidth ? 
            <StyledLine widthLine={props.lineWidth}/>
            : <></>}
        </StyledTitle>
    )
}

const StyledTitle = styled.div`
    display: flex;
    align-items: center;

    h2{
        font-weight: 500;
        font-size: 32px;
        color: #fff;
    }

    span{
        font-weight: 600;
        font-size: 32px;
        color: #C778DD;
    }
`

const StyledLine = styled.div<StyledLinePropsType>`
    width: ${props => props.widthLine};
    height: 1px;
    margin-left: 15px;
    background-color: #C778DD;
`