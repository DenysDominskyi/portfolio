import styled from "styled-components";
import { theme } from "../../styles/Theme";

type ContainerPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    gap?: string,
}

export const Container = styled.div<ContainerPropsType>`
    max-width: 1140px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    padding: 0 90px;
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '0px'};

    @media ${theme.media.tablet} {
        padding: 0 30px;
    }

    @media ${theme.media.mobile} {
        padding: 0 15px;
    }
`