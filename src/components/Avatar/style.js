
import styled from 'styled-components';

export const AvatarStyles = styled.div`
  display: flex;
  margin-bottom: 3.5rem;
`;

export const Image = styled.img`
  margin-right: 0.875rem;
  margin-bottom: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`

export const Text = styled.p`
  max-width: 310px;
  font-family: Georgia, sans-serif;
  padding: 0;
  margin: 0;
  font-size: 18px;
`


export const Link = styled.a`
  box-shadow: 0 1px 0 0 currentColor;
  color: ${({theme}) => theme.textLink};
  text-decoration: none;
`