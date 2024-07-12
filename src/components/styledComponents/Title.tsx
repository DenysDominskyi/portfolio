import styled from "styled-components";

type TitleSizePropsType = {
    size?: string,
    border?: boolean,
}

export const Title = styled.h3<TitleSizePropsType>`
    font-weight: 400;
    font-size: ${props => props.size || '24px'};
    line-height: 25px;
    color: #ffffff;
    border-bottom: ${props => props.border ? '1px solid #ABB2BF' : 'none'};
`