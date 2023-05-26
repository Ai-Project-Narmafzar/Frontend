import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const Container = Styled('div')`
    width:100%;
    max-width: 1176px;
    margin: 0 auto;
    height:100%;

    .name-title {
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;
        color: #FFFFFF;
        margin-bottom: 24px;
        text-align: center;
    }

    .tabs-con {
        margin: 0 auto;
        max-width:570px;
        display:flex;
        justify-content: space-between;
        align-items:center;
        margin-bottom: 46px;
    }

    .info-col {
        display:flex;
        flex-direction:column;
        align-items:center;
    }

    .info-col h6 {
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        color: #FFFFFF;
        margin-bottom:24px;
    }

    .info-col span {
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        color: #FFFFFF;
    }

    .tab {
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;
        color: #FFFFFF;
        display: flex;
        align-items:center;
        padding: 14px 8px 11px 9px;
    }

    .tab.active {
        background: ${Colors.grey2};
        border-radius: 8px;
    }
`

export const Divider = Styled('div')`
    width: ${(props) => props.width};
    height: 1px;
    background: white;
    margin: 0 auto;
`


export const ArtiGlowImg = Styled('div')`
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 32px;
    overflow:hidden;
    position: relative;
    background: ${(props) => {
      return `url(${props.src})`
    }};
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
