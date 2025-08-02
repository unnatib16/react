import React from 'react';
import Styled from 'styled-components';

const StyledComponent = styled.div`
  background-color: pink;
  padding: 15px;
  border-radius: 10px;
`;

export default function StyledBoxComponent() {
  return( <StyledBox>Styled with CSS-in-JS!</StyledBox>
  );
}