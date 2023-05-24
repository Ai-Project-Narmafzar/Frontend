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

export const ArtiGlowImg = Styled('img')`
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 32px;
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

export const GenerateTitle = Styled('h2')`
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
    color: #FFFFFF;
    margin-bottom: 40px;
    margin-top:66px;
    text-align:center;
`

export const GenerateContainer = Styled('div')`
    width:100%;
    padding: 0 0 48px 0;
    display: flex;
    align-items: center;

    & input {
        flex-grow:1;
        height: 65px;
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

export const ImagePlaceholder = Styled('div')`
    width: 100%;
    aspect-ratio: 2 / 1;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background: ${Colors.grey2};
    border-radius: 18px;
    margin-bottom: 32px;

    & span {
        margin-top: 24px;
        font-weight: 400;
        font-size: 23px;
        line-height: 23px;
        color: rgba(242, 242, 242, 0.56);
    }
`