import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../../components/sectionTitle/SectionTitle'
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper'
import { Icon } from '../../../../components/icon/Icon'
import { Card } from '../../../../components/card/Card'

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle value='skills' lineWidth='240px' />
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
        <FlexWrapper direction='row-reverse' wrap='wrap' gap='16px' width='590px'>
          <Card
            maxWidth='180px'
            title='Tools'
            text='VSCode Neovim Linus Figma XFCE Arch Git Font Awesome'
            titleSize='16px'
            titleBorder={true}
          />
          <Card
            maxWidth='180px'
            title='Databases'
            text='SQLite PostgreSQL Mongo'
            titleSize='16px'
            titleBorder={true}
          />
          <Card
            maxWidth='180px'
            title='Languages'
            text='TypeScript Lua Python JavaScript'
            titleSize='16px'
            titleBorder={true}
          />
          <Card
            maxWidth='180px'
            title='Frameworks'
            text='React Vue Disnake Discord.js Flask Express.js'
            titleSize='16px'
            titleBorder={true}
          />
          <Card
            maxWidth='180px'
            title='Other'
            text='HTML CSS EJS SCSS REST Jinja'
            titleSize='16px'
            titleBorder={true}
          />
        </FlexWrapper>
      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  min-height: 50vh;
`
const ElementsWrapper = styled.div`
    position: relative;
    width: 350px;
    height: 280px;
`

const ElementOne = styled.div`
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