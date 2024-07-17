import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const Navigation = (props: {menuItems: Array<string>}) => {

    return (
        <StyledNav>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="">{item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            </Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    
    ul {
        display: flex;
        display: flex;
        gap: 30px;
    }
`

const Link = styled.a`
    font-size: 16px;
    line-height: 21px;
    font-weight: 500;
    /* color: ${theme.colors.gray}; */
    color: transparent;
    transition: .2s;
/* 
    &:hover{
        color: ${theme.colors.primary};
    } */
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    color: ${theme.colors.gray};
    transition: all .2s;

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;

    &::before{
        content: '';
        display: inline-block;
        height: 1px;
        background-color: ${theme.colors.primary};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
        transition: all .2s;
    }
    
    &::marker{
        content: '#';
        color: ${theme.colors.primary};
    }

    &:hover{
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(2px);
            color: ${theme.colors.white};
            
            & + ${Mask} {
                transform: skewX(12deg) translateX(-2px);
            }
        }
    }
`