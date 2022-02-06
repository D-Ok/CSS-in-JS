
import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
  
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + span:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
`;

export const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-color: ${({theme}) => theme.headerColor};
  background-color: ${({theme}) => theme.headerColor};
  -webkit-transition: .3s;
  transition: .3s;
  border-radius: 22px;
  
  :before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 2px;
    bottom: 2px;
    background-color: ${({theme}) => theme.bg};
    background-color: ${({theme}) => theme.bg};
    -webkit-transition: .3s;
    transition: .3s;
    border-radius: 50%;
  }
  
`;
