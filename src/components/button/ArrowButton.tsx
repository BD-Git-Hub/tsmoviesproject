import React from 'react'
import styled from 'styled-components';


const ArrowBtn = styled.button`
  position: relative;
  top: 40%;
  font-size: 100%;
  float: left;
  margin: 0;
`;

const ArrowButton: React.FC<{name: string}> = (children: any) => {
  return (
    <ArrowBtn>{children.name}</ArrowBtn>
  )
}

export default ArrowButton