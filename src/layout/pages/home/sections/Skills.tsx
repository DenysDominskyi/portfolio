import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper'
import { Icon } from '../../../../components/icon/Icon'
import { Card } from '../../../../components/cards/Card'
import { SectionTitle } from '../../../../components/styledComponents/SectionTitle'
import { Container } from '../../../../components/styledComponents/Container'
import { SkillsCard } from '../../../../components/cards/SkillsCard'
import { theme } from '../../../../styles/Theme'

export const Skills = () => {
  return (
    <StyledSkills>
      <Container direction='column' gap='10px'>
        <SectionTitle title='skills' lineWidth='240px'/>
        <FlexWrapper justify='center' gap='50px'>
          <ElementsWrapper >
            <ElementOne>
              <Icon iconId='frame' width='60' height='60' viewBox='0 0 63 63' />
            </ElementOne>
            <ElementTwo>
              <Icon iconId='rectangle' width='87' height='87' viewBox='0 0 87 87' />
            </ElementTwo>
            <ElementThree>
              <Icon iconId='logoPic' width='115' height='115' viewBox='0 0 115 115' />
            </ElementThree>
            <ElementFour>
              <Icon iconId='frame' width='60' height='60' viewBox='0 0 63 63' />
            </ElementFour>
            <ElementFive>
              <Icon iconId='rectangle' width='52' height='52' viewBox='0 0 87 87' />
            </ElementFive>
          </ElementsWrapper>

          <FlexWrapper direction='row-reverse' wrap='wrap' gap='16px'>
            <SkillsCard
              title='Tools'
              technology='VSCode Neovim Linus Figma XFCE Arch Git Font Awesome'
            />
            <SkillsCard
              title='Databases'
              technology='SQLite PostgreSQL Mongo'
            />
            <SkillsCard
              title='Languages'
              technology='TypeScript Lua Python JavaScript'
            />
            <SkillsCard
              title='Frameworks'
              technology='React Vue Disnake Discord.js Flask Express.js'
            />
            <SkillsCard
              title='Other'
              technology='HTML CSS EJS SCSS REST Jinja'
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  margin-bottom: 110px;

  @media ${theme.media.tablet} {
        margin-bottom: 50px;
    }

  ${FlexWrapper} {

    &:last-child{
      justify-content: center;
    }
  }
`
const ElementsWrapper = styled.div`
    position: relative;
    min-width: 350px;
    height: 280px;

    @media screen and (max-width: 1050px) {
      position: absolute;
      filter: blur(3px);
      height: 300px;
    }
    @media screen and (max-width: 406px) {
      transform: translateY(100px);
      height: 400px;
      min-width: auto;
    }
`


const ElementOne = styled.span`
  position: absolute;
  top: 10%;
  left: 0;
`
const ElementTwo = styled.div`
  position: absolute;
  top: 0;
  right: 10%;
`
const ElementThree = styled.div`
  position: absolute;
  bottom: 0;
  left: 4%;
`
const ElementFour = styled.div`
  position: absolute;
  bottom: 30%;
  right: 35%;
`
const ElementFive = styled.div`
  position: absolute;
  right: 0;
  bottom: 14%;
`