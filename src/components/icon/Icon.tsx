import React from 'react'
import iconsSprite from '../../assets/images/icons-sprite.svg'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const Icon = (props: IconPropsType) => {
  return (
    <StyledSvg width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 50 50'} fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
    </StyledSvg>
  )
}

const StyledSvg = styled.svg`
  fill: ${theme.colors.gray};
  transition: all .2s;
`