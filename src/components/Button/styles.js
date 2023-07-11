import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const CustomButton = Styled('a')`
    width:${(props) => (props.width ? props.width : '100%')};
    height:${(props) => (props.height ? props.height : 'unset')};
    padding: 16px 12px;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    font-weight: 400;
    font-size: 16px;
    white-space: nowrap;
    line-height: 18px;
    color: ${Colors.text};
    background-color: ${({ type }) =>
      type == 'primary' ? Colors.primary : Colors.grey2};
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    transition: .3s box-shadow ease-in-out;

    &:hover {
        box-shadow: 0px 2px 11px 1px rgba(243,101,51,0.5);
    }
`
