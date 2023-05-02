import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const Container = Styled('main')`
    width:100%;
    height: 100%;
    margin: 0 auto;
    padding:150px 40px 147px 40px;
`

export const SideBar = Styled('div')`
    width: 100%;
    min-height: 450px;
    background: ${Colors.grey2};
    border-radius: 10px;
    display:flex;
    align-items:center;
    flex-direction: column;
    padding: 25px 24px;
`

export const RouterContainer = Styled('div')`
    width: 100%;
    padding: 36px 0;
`

export const NavItem = Styled(Link)`
width: 100%;
    margin-bottom: 50px;
    display: flex;
    align-items: center;

    span {
        display: block;
        margin-right: 8px;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        color: #FFFFFF;
    }

    &.active span {
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: ${Colors.primary};
    }
`
