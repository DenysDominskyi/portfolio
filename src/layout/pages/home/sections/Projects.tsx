import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper'
import { Card } from '../../../../components/cards/Card'
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
            technology='HTML SCSS Pyton Flask'
            title='ChertNodes'
            text='About this project'
            button={2}
          />
          <Card
            imgSrc={project2}
            technology='React Express Discord.js Node.js HTML SCSS Pyton Flask'
            title='ProjectX'
            text='About this project'
            button={1}
          />
          <Card
            imgSrc={project3}
            technology='CSS Express Node.js'
            title='Kahoot Answers Viewer'
            text='About this project'
            button={1}
          />
        </FlexWrapper>
      </Container>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  margin-bottom: 105px;
  overflow: hidden;

  ${Container} {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: -265px;
      width: 155px;
      height: 155px;
      border: 1px solid ${theme.colors.gray};
    }

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