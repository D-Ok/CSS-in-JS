
import styled from 'styled-components';

export const HeaderLinkStyles = styled.h1`
  font-family: Montserrat, sans-serif;

  text-decoration-style: solid;
  font-weight: 1000;
 
  padding: 0;
  margin: 0;

  font-size: 1.98818rem;
  line-height: 2.625rem;
`;

export const Link = styled.a`
  box-shadow: none;
  text-decoration: none;
  color: ${({isHeader, theme}) => isHeader ? theme.textTitle : theme.textLink}
`;
