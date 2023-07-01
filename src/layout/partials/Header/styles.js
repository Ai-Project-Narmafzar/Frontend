import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const Container = Styled('header')`
    width:100%;
    padding: 32px 34px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content:center;
    z-index:100;
    background: ${(props) => props.bgEnable && Colors.background};
    transition: .3s all ease-in-out;

    .content {
        max-width: 1512px;
    }

    .profile-row {
        display:flex;
        align-items:center;
        position: relative;
    }

    .profile-row span{
        margin-left:8px;
        color: white;
    }

    .menu {
        position: absolute;
        width: 206px;
        height: 348px;
        flex-shrink: 0;
        border-radius: 16px;
        background: #3F4C5D;
        box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.25);
        left: 0;
        top: 56px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .menu-item {
        display: flex;
        align-items:center;
        color: white;
        margin-bottom: 24px;
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
