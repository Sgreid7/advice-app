import React from 'react';
import styled, { keyframes } from "styled-components"
import Mountains from "../images/mountains.jpg"
import "../App.css"

const advice = ({ advice, generateAdvice }) => {
  return (
    <CardWrapper>
      <h1>Random Advice of the Day</h1>
      <div className="card">
        <p>{advice}</p>
        <button className="submit" onClick={generateAdvice}><span>One advice, please!</span></button>
      </div>
    </CardWrapper>
  );
}

export default advice;

const rotate = keyframes`
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
`
const storm = keyframes`
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }
    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }
    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }
    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
  `

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Mountains});
  background-size: cover;
  background-position: center;
  font-family: 'Poppins', sans-serif;

  h1 {
    color: #fff;
    font-size: 3rem;
    text-shadow: 0.1rem 0.1rem 0.1rem deepskyblue;
  }
  
  .card {
    color: #fff;
    font-size: 1.2rem;
    font-style: italic;
    text-align: center;
    letter-spacing: 0.03rem;
    background: rgba(0, 0, 0, 0.4);
    width: 40vw;
    height: 30vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border: 0.1rem solid deepskyblue;
    border-radius: 1rem;
    padding: 2rem;
    text-shadow: 0.05rem 0.05rem 0.05rem deepskyblue;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.9);

    p {
      font-size: 1.7rem;
      margin-bottom: 2rem;
    }
  }

  button {
    position: relative;
    margin-top: 3rem;
    height: 4rem;
    width: 20rem;
    font-size: 1.2rem;
    cursor: pointer;
    background: transparent;
    color: #fff;
    text-shadow: 0.05rem 0.05rem 0.05rem deepskyblue;
    border: 0.1rem solid deepskyblue;
    border-radius: 3rem;
    opacity: 1;
    font-family: 'Poppins', sans-serif;
    transition: 0.3s ease;
    outline: none;

    &:hover {
      background: deepskyblue;
      color: #fff;
      border: 0.1rem solid #fff;
      text-shadow: 0.05rem 0.05rem 0.05rem #000;
      transform: translateY(-0.2rem);
      animation: ${rotate} 0.7s ease-in-out both;
      box-shadow: 0 0.5rem 0.5rem #000;

      &:hover span {
        animation: ${storm} 0.7s ease-in-out both;
        animation-delay: 0.06s;
      }
    }
  }

  @media (max-width: 600px) {
    .card {
      width: 80vw;
      height: 40vh;
    }
  } 
`
