import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const Container = Styled('header')`
    width:100%;
    padding: 48px 32px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content:center;
    z-index:100;
    background: ${Colors.background};
    transition: .3s all ease-in-out;

    .content {
        max-width: 1512px;
    }
`

export const LoginLink = Styled(Link)`
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
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
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
`
