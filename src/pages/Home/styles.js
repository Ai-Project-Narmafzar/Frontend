import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const Container = Styled('main')`
    padding:217px 32px 95px 32px;
    width:100%;
    max-width:1174px;
    margin: 0 auto;
`

export const PageTitle = Styled('h1')`
    font-weight: 400;
    font-size: 28px;
    line-height: 28px;
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
        height: 65px;
        padding: 20px 32px;
        background: ${Colors.grey2};
        border-radius: 18px;
        font-weight: 400;
        font-size: 25px;
        line-height: 25px;
        margin-left: 32px;
        border: none;
        outline: none;
    }

    & input::placeholder {
        color: rgba(242, 242, 242, 0.56);
    }

    & input:focus {
        box-shadow: 0px 2px 11px 1px rgba(243,101,51,0.5);
    }
`
