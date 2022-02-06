
import styled from 'styled-components';

export const PostContainer = styled.article`
  padding: 0;
  margin: 0;
`;

export const Header = styled.h3`
  font-family: Montserrat, sans-serif;
  font-size: 1.75rem;

  line-height: 2.625rem;
  text-decoration-style: solid;
  font-weight: 900;

  margin-bottom: 0.4375rem;
  margin-top: 3.5rem;

`;

export const Link = styled.a`
  box-shadow: none;
  text-decoration: none;
  color: ${({isHeader, theme}) => isHeader ? theme.textTitle : theme.textLink}
`;

export const Small = styled.small`
  color: ${({theme}) => theme.textNormal};
  font-size: 14px;
`

export const Paragraph = styled.p`
  color: ${({theme}) => theme.textNormal};
  font-size: 18px;

  margin: 0 0 1.75rem 0;
`