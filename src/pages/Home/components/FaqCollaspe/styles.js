import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const Container = Styled('div')`
    width:100%;
    margin-bottom: 24px;

    .header {
        display:flex;
        align-items:center;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        color: #FFFFFF;
        background: ${Colors.grey2};
        padding: 20px 24px;
        border-radius: 18px;
        transition: .3s all ease-in-out;
    }

    .header.open {
        background: transparent;
        border: 1px solid ${Colors.grey2};
    }

    .body {
        margin-top: 32px;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        color: rgba(242, 242, 242, 0.56);
    }

`
