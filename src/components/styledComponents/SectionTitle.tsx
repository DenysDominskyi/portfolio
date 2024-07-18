import styled from "styled-components";
import { theme } from "../../styles/Theme";

type SectionTitlePropsType = {
    title: string,
    lineWidth?: string,
}

type LinePropsType = {
    width?: string,
}

export const SectionTitle: React.FC<SectionTitlePropsType>= ({title, lineWidth}) => {
  return (
    <StyledTitle>
        <h2><span>#</span>{title}</h2>
        <Line width={lineWidth} />
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
    display: flex;
    flex-grow: 0.8;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    max-width: 500px;

    h2{
        font-weight: 500;
        font-size: 32px;
        color: ${theme.colors.white};
    }
        

    span{
        font-weight: 600;
        font-size: 32px;
        color: ${theme.colors.primary};
    }
`

const Line = styled.div<LinePropsType>`
    width: 100%;
    max-width: ${props => props.width};
    min-width: 100px;
    border: 1px solid ${theme.colors.primary};
`