import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper'
import { Card } from '../../../../components/card/Card'
import project1 from '../../../../assets/images/project1.png'
import project2 from '../../../../assets/images/project2.png'
import project3 from '../../../../assets/images/project3.png'
import { Container } from '../../../../components/styledComponents/Container'
import { theme } from '../../../../styles/Theme'
import { SectionTitle } from '../../../../components/styledComponents/SectionTitle'

export const Projects = () => {
  return (
    <StyledProjects>
      <Container direction='column' justify='center' align='center' gap='50px'>
        <FlexWrapper align='center' justify='space-between'>
            <SectionTitle title='projects' lineWidth='510px'
            />
          <ViewAll href="/works">{'View all ~~>'}</ViewAll>
        </FlexWrapper>
        <FlexWrapper gap='15px'>
          <Card
            imgSrc={project1}
            technology='HTML SCSS JavaScript TypeScript React Redux'
            title='Project1'
            text='About this project'
            button={2}
          />
          <Card
            imgSrc={project2}
            technology='HTML SCSS JavaScript TypeScript React Redux'
            title='Project2'
            text='About this project'
            button={1}
          />
          <Card
            imgSrc={project3}
            technology='HTML SCSS JavaScript TypeScript React Redux'
            title='Project3'
            text='About this project'
            button={1}
          />
        </FlexWrapper>
      </Container>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  height: 80vh;

  ${Container} {
    ${FlexWrapper}:first-child{
      width: 100%;
    }
  }
`

const ViewAll = styled.a`
  color: ${theme.colors.white};
  font-weight: 500;
  font-size: 16px;
`