import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import Colors from 'utils/Colors'

export const Container = Styled('div')`
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
    bottom: calc(50% - 18px);
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
    left:  7%;
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
