import styled, { css } from 'styled-components'
import { theme } from '../../styles/Theme'
import { useState } from 'react'
import { Link } from 'react-scroll'

export const MobileNavigation = (props: { menuItems: Array<{ title: string, href: string }> }) => {

    const [isOpen, setIsOpen] = useState(false)

    const burgerButtonHendler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <StyledMobileNavigation>
            <BurgerButton isOpen={isOpen} onClick={burgerButtonHendler}>
                <span></span>
            </BurgerButton>
            <MobileNavPopup isOpen={isOpen}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <NavLink
                                    to={item.href}
                                    spy={true}
                                    activeClass='active'
                                    offset={-100}
                                    onClick={burgerButtonHendler}
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
            </MobileNavPopup>
        </StyledMobileNavigation>
    )
}

const StyledMobileNavigation = styled.div`
    display: none;
    
    @media ${theme.media.tablet} {
        display: block;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 180px;
    height: 180px;
    top: -100px;
    right: -100px;
    z-index: 99999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.gray};
        position: absolute;
        left: 20px;
        bottom: 40px;
        transition: .3s;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before{
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.gray};
            position: absolute;
            transform: translateY(-10px);
            transition: .3s;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: translateY(0) rotate(-45deg);
        `}
        }

        &::after{
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.gray};
            position: absolute;
            transform: translateY(10px);
            transition: .3s;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
            width: 36px;
            transform: translateY(0) rotate(45deg);
        `}
        }
    }
`

const MobileNavPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);

    z-index: 9999;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: translateY(-100%);
    transition: .8s ease-in-out;

    ul {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: .6s ease-in-out;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);

        & ul {
            gap: 40px;
        }
    `}
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

const NavLink = styled(Link)`
    font-size: 16px;
    line-height: 21px;
    font-weight: 500;
    color: transparent;
    transition: .2s;

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


const ListItem = styled.li`
    position: relative;

    &::marker{
        content: '#';
        color: ${theme.colors.primary};
    }
`