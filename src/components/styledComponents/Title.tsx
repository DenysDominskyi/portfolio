import styled from "styled-components";
import { theme } from "../../styles/Theme";

type TitleSizePropsType = {
    weight?: string,
    size?: string,
    lineHeight?: string,
    border?: boolean,
}

export const Title = styled.h3<TitleSizePropsType>`
    font-weight: ${props => props.weight || '500'};
    font-size: ${props => props.size || '24px'};
    line-height: ${props => props.lineHeight || '32px'};
    color: ${theme.colors.white};
    border-bottom: ${props => props.border ? `1px solid ${theme.colors.gray}` : 'none'};
`