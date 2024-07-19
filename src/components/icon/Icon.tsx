import iconsSprite from '../../assets/images/icons-sprite.svg'
import styled from 'styled-components'

type IconPropsType = {
    iconId: string,
    fill?: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const Icon = (props: IconPropsType) => {
  return (
    <StyledSvg width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 50 50'} fill={props.fill ? props.fill : 'none'} xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
    </StyledSvg>
  )
}

const StyledSvg = styled.svg`
  transition: all .2s;
`