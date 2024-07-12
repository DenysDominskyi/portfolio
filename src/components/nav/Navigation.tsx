import React from 'react'
import styled from 'styled-components'
import listStyleImg from '../../assets/images/#.svg'

export const Navigation = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <a href="/home">home</a>
                </li>
                <li>
                    <a href="/works">works</a>
                </li>
                <li>
                    <a href="/about-me">about-me</a>
                </li>
                <li>
                    <a href="/contacts">contacts</a>
                </li>
                {/* <div className='dropdown'>
                    <input type="text" id='dropdown-input' placeholder='Select an option' autoComplete='off' />
                    <div id='dropdown-options' className='dropdown-content'>
                        <div className='dropdown-item'>EN</div>
                        <div className='dropdown-item'>SV</div>
                        <div className='dropdown-item'>UA</div>
                    </div>
                </div> */}
                <select name="dropdown" id="dropdown">
                    <option value="EN">EN</option>
                    <option value="SV">SV</option>
                    <option value="UA">UA</option>
                </select>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    & ul {
        display: flex;
        gap: 30px;
    }

    & ul li::marker {
        content: '#';
        color: #C778DD;
    }

    & > ul > li > a {
        font-size: 16px;
        line-height: 21px;
        font-weight: 500;
        color: #ABB2BF;
    }
`