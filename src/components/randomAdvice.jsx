import React from 'react';
import styled from "styled-components"
import Mountains from "../images/mountains.jpg"

const advice = ({ advice }) => {
  return (
    <CardWrapper>
      <div className="card">
        <h1>{advice}</h1>
        <button className="submit">One advice, please!</button>
      </div>
    </CardWrapper>
  );
}

export default advice;

const CardWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Mountains});
  background-size: cover;
  background-position: center;

  .card {
    color: #fff;
    font-size: 1.2rem;
    font-style: italic;
    text-align: center;
    letter-spacing: 0.03rem;
    background: rgba(0, 0, 0, 0.4);
    width: 40vw;
    height: 20vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 0.1rem solid deepskyblue;
    border-radius: 1rem;
    padding: 2rem;
    text-shadow: 0.05rem 0.05rem 0.05rem deepskyblue;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.9);
  }
`

