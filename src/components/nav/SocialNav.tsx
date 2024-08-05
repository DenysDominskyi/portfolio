import styled from 'styled-components'
import { Icon } from '../icon/Icon'
import { theme } from '../../styles/Theme'

export const SocialNav = () => {
  return (
    <StyledSocialNav>
        <a href="#"><Icon iconId='github' viewBox='0 0 30 30' width='30' height='30' fill={theme.colors.gray}/></a>
        <a href="#"><Icon iconId='dribble' viewBox='0 0 32 32' width='32' height='30' fill={theme.colors.gray}/></a>
        <a href="#"><Icon iconId='figma' viewBox='0 0 32 32' width='32' height='30' fill={theme.colors.gray}/></a>
    </StyledSocialNav>
  )
}

const StyledSocialNav = styled.nav`
    position: absolute;
    top: 150px;
    left: 20px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    padding: 10px;
    
    &::before{
        content: '';
        position: absolute;
        top: -8px;
        transform: rotate(180deg);
        transform-origin: top;
        width: 1px;
        height: 150px;
        background-color: ${theme.colors.gray};
    }
    
    a {
        &:hover{
            svg{
                fill: ${theme.colors.primary};
                transform: scale(1.1);
            }
        }
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`