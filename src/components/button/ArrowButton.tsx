import React from 'react'
import styled from 'styled-components';




const ArrowBtn = styled.button`
  position: relative;
  top: 40%;
  font-size: 100%;
  
  
`;

const ArrowButton: React.FC<{name: string, direction: boolean}> = (props: any) => {
  return (
    <ArrowBtn>{props.name}</ArrowBtn>
    // <ArrowBtn arrow={props.direction}>{props.name}</ArrowBtn>
  )
}

export default ArrowButton