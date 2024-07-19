import styled from "styled-components";
import { theme } from "../../styles/Theme";

type TextPropsType ={
    size?: string,
}

export const Text = styled.p<TextPropsType>`
    font-weight: 400;
    font-size: ${props => props.size || '16px'};
    line-height: 25px;
    color: ${theme.colors.gray};
`