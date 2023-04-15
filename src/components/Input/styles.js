import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const CustomInput = Styled('input')`
    width:100%;
    position:relative;
    padding:15px 24px;
    background: ${Colors.grey2};
    border-radius: 12px;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #FFFFFF;
    border: none;
    outline: none;
    text-align:right;
    transition: .3s box-shadow ease-in-out;

    &::placeholder {
        color: #a3a9b2;
    }

    &:focus {
        box-shadow: 0px 2px 11px 1px rgba(243,101,51,0.5);
    }
`