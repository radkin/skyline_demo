import styled from 'styled-components';

const  Progress  =  styled.div`
  position:  fixed;
  background:  linear-gradient(
    to right,
    rgba(47,79,79, .8) ${props => props.scroll},
    transparent  0);
  width:  100%;
  height:  4px;
  z-index:  3;
`;

export  default  Progress;

//     rgba(250, 224, 66, .8) ${props => props.scroll},
