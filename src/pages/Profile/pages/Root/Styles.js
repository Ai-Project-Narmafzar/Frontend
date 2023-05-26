import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const Container = Styled('main')`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const FormContainer = Styled('div')`
    width:100%;
    max-width:370px;
    display:flex;
    flex-direction:column;
    align-items:center;

    .form-label {
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        color: #FFFFFF;
        margin-bottom: 24px;
        display: block;
    }
`
export const Title = Styled('h2')`
    font-weight: 400;
    font-size: 19px;
    line-height: 19px;
    color: ${Colors.text};
    margin-bottom:16px;
`

export const Desc = Styled('p')`
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: ${Colors.box};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom:56px;
`

export const ActionLink = Styled('a')`
    width:100%;
    display:block;
    text-align:right;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: ${Colors.text2};

    & strong {
        color: ${Colors.text};
    }
`

export const ORSection = Styled('div')`
    width:100%;
    display:flex;
    align-items:center;
    margin-bottom:40px;
    
    & div {
        flex-grow:1;
        height:1px;
        background:white;
    }

    & span {
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #FFFFFF;
        margin: 0 9px;
    }
`
