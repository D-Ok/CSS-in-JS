
import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100% ;
  height: 100%;
  
  background-color: ${(props) => props.theme.bg};
`

export const AppStyles = styled.div`
  width: 100% ;
  min-height: calc(100vh - 2.625rem * 2);

  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
  
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.textNormal};
  
  *{
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
`;
