import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const Container = Styled('main')`
    padding:144px 32px 95px 32px;
    width:100%;
    max-width:1174px;
    margin: 0 auto;
`

export const PageTitle = Styled('h1')`
    font-weight: 400;
    font-size: 22px;
    line-height: 22px;
    color: #FFFFFF;
    text-align:center;
    margin-bottom:40px;

    & strong {
        color: ${Colors.primary};
    }
    
`

export const SearchBarContainer = Styled('div')`
    width:100%;
    padding: 0 98px 48px 98px;
    display: flex;
    align-items: center;

    & input {
        flex-grow:1;
        height: 56px;
        padding: 20px 32px;
        background: ${Colors.grey2};
        border-radius: 18px;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        margin-left: 32px;
        border: none;
        outline: none;
        color: white;
        transition: .3s all ease-in-out;
    }

    & input::placeholder {
        color: rgba(242, 242, 242, 0.56);
    }

    & input:focus {
        box-shadow: 0px 2px 11px 1px rgba(243,101,51,0.5);
    }
`

export const ArtiGlowImg = Styled('div')`
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 32px;
    overflow:hidden;
    position: relative;
    background: ${(props) => { return `url(${props.src})`}};
    background-size: cover;

    & .content {
        opacity: 0;
        position: absolute;
        background: rgba(7, 7, 7, 0.66);
        box-shadow: 9px 9px 6px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        transition: .3s all ease-in-out;
        width: 100%;
        height: 100%;
    } 

    & .title {
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        color: #FFFFFF;
        position: absolute;
        bottom: 37%;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
    }

    & .name {
        position: absolute;
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        color: white;
        bottom: 6%;
        left:  16%;
    }

    & .like-con {
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        right: 7%;
        top: 6%;
        position: absolute;
    }

    &:hover .content {
        opacity: 1;
    }
`

export const MoreLink = Styled(Link)`
    display:flex;
    flex-direction:column;
    align-items:center;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: rgba(242, 242, 242, 0.56);
`