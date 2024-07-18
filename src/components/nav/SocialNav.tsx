import styled from 'styled-components'
import { Icon } from '../icon/Icon'
import { theme } from '../../styles/Theme'

export const SocialNav = () => {
  return (
    <StyledSocialNav>
        <a href="#"><Icon iconId='github' viewBox='32' width='30' height='30'/></a>
        <a href="#"><Icon iconId='dribble' viewBox='50' width='32' height='30'/></a>
        <a href="#"><Icon iconId='figma' viewBox='32' width='32' height='30'/></a>
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
`