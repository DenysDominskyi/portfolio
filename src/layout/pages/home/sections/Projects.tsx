import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper'
import { SectionTitle } from '../../../../components/sectionTitle/SectionTitle'
import { Card } from '../../../../components/card/Card'
import project1 from '../../../../assets/images/project1.png'
import project2 from '../../../../assets/images/project2.png'
import project3 from '../../../../assets/images/project3.png'

export const Projects = () => {
  return (
    <StyledProjects>
        <FlexWrapper align='center' justify='space-between'>
            <SectionTitle value='projects' lineWidth={'510px'}/>
            <a href="/works">{'View all ~~>'}</a>
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
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  background-color: #daf7f456;
  min-height: 60vh;
`