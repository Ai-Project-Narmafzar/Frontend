import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const Container = Styled('main')`
    width: 100%;
    height: 100%;
    background: url(${(props) => props.background});
    background-size: cover;
    position: relative;

    &::before {
        position: absolute;
        content: '';
        width:100%;
        height:100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.162) 51.49%, rgba(0, 0, 0, 0.162) 58.24%, rgba(0, 0, 0, 0.54) 85.27%);
        z-index:2;
    }

    .content {
        position: absolute;
        bottom:25%;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 3;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`

export const PageTitle = Styled('h1')`
    font-weight: 400;
    font-size: 22px;
    line-height: 22px;
    color: #FFFFFF;
    text-align:center;
    margin-bottom:30px;

    & strong {
        color: ${Colors.primary};
    }
    
`
