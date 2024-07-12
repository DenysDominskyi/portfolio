import styled from "styled-components";

type ContainerPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    gap?: string,
}

export const Container = styled.div<ContainerPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '0px'};
    max-width: 1024px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`