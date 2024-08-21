import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { Link } from 'react-scroll'

export const Navigation = (props: { menuItems: Array<{ title: string, href: string }> }) => {

    return (
        <StyledNav>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <NavLink
                                to={item.href}
                                smooth={true}
                                spy={true}
                                activeClass='active'
                                offset={-100}
                                duration={500}
                            >
                                {item.title}
                                <Mask>
                                    <span>{item.title}</span>
                                </Mask>
                                <Mask>
                                    <span>{item.title}</span>
                                </Mask>
                            </NavLink>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`

    @media ${theme.media.tablet} {
        display: none;
    }
    
    ul {
        display: flex;
        display: flex;
        gap: 30px;
    }
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

    &::marker{
        content: '#';
        color: ${theme.colors.primary};
    }
`

const NavLink = styled(Link)`
    font-size: 16px;
    line-height: 21px;
    font-weight: 500;
    color: transparent;
    transition: .2s;
    cursor: pointer;

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

    &:hover, &.active{
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
