import React from 'react';
import styled from "styled-components"

const advice = ({ advice }) => {
  return (
    <Card>
      <h1>{advice}</h1>
    </Card>
  );
}

export default advice;

const Card = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`