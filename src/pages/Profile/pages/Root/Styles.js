import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const Container = Styled('main')`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction:column;
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

export const NoMedia = Styled('div')`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        margin: 24px 0 32px 0;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        color: ${Colors.box};
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`
