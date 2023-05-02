import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const Container = Styled('main')`
    width:100%;
    height: 100%;
`

export const Title = Styled('h4')`
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    margin-bottom:24px;
    color: #FFFFFF;

`

export const MoreCollection = Styled('span')`
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: ${Colors.box};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    strong {
        text-decoration-line: underline;
        color: ${Colors.primary};
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`

export const FormContainer = Styled('div')`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-top:70px;

`

export const FormField = Styled('div')`
    max-width: 434px;
    display: flex;
    flex-direction: column;  

    .title {
        font-weight: 400;
        font-size: 22px;
        line-height: 22px;
        color: #FFFFFF;
        margin-bottom: 32px;
    }
`
