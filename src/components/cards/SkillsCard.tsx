import styled from "styled-components"
import { Title } from "../styledComponents/Title"
import { Text } from "../styledComponents/Text"
import { theme } from "../../styles/Theme"

type SkillsCardPropsType = {
    title: string,
    technology?: string,
}

type StyledSkillsCardPropsType = {
    maxWidth?: string,
}

export const SkillsCard = (props: SkillsCardPropsType) => {
    return (
        <StyledSkillsCard>
            <Title weight='600' size='16px' lineHeight='21px' border>
                {props.title}
            </Title>
            <Text>{props.technology}</Text>
        </StyledSkillsCard>
    )
}

const StyledSkillsCard = styled.div<StyledSkillsCardPropsType>`
    display: flex;
    flex-direction: column;
    height: fit-content;
    border: 1px solid #ABB2BF;
    max-width: 180px;

    ${Title},
    ${Text} {
        padding: 8px;
    }
`