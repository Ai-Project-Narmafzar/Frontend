import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const Container = Styled('div')`
    width:100%;
    height:100%;
    padding: 32px 40px;
    
    .modal-img {
        width: 100%;
        height: 100%;
        filter: drop-shadow(3px 2px 3px rgba(0, 0, 0, 0.25));
        border-radius: 16px;
        object-fit: cover;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 48px;
    }

    .header .name {
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #FFFFFF;
        margin-right: 32px;
    }

    .header .avatar {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        margin-right: 8px;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .desc {
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        color: #FFFFFF;
        margin-bottom: 50px;
    }

    .comment-title {
        font-weight: 400;
        font-size: 17px;
        line-height: 17px;
        color: #FFFFFF;
        margin-bottom: 15px;
    }

    .comment-card {
        margin-bottom: 16px;
        background: #3F4C5D;
        border-radius: 8px;
        padding: 8px 16px;
        display: flex;
        align-items:flex-start;
    }

    .comment-card #avatar {
        border-radius: 16px;
        width: 32px;
        height: 32px;
        margin-left: 8px;
    }

    .comment-card #name {
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        color: #FFFFFF;
        margin-bottom: 4px;
    }

    .comment-card #comment {
        font-weight: 400;
        font-size: 13px;
        line-height: 13px;
        color: #96989C;
    }
`
