import { Link } from 'react-router-dom'
import Styled from 'styled-components'

export const Container = Styled('header')`
    width:100%;
    padding: 48px 32px;
    max-width: 1512px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    z-index:100;
`

export const LoginLink = Styled(Link)`
    font-weight: 400;
    font-size: 27px;
    line-height: 27px;
    color: #FFFFFF;
`

export const ItemsContainer = Styled('ul')`
    padding: 0;
    list-style:none;
    display:flex;
    align-items:center;
    flex-grow:1;
`

export const NavItem = Styled('li')`
    margin-left: 48px;
    font-weight: 400;
    font-size: 25px;
    line-height: 25px;
    color: #FFFFFF;
`
