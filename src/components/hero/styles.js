import styled, { keyframes } from "styled-components"

const aniSpin = keyframes`
  0% {
    transform: rotate(0) translateZ(0);
  }
  100% {
    transform: rotate(360deg) translateZ(0);
  }
`;

const aniMoveX = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: calc(100% - 121px);
  }
`;

const aniMoveY = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: calc(100vh - 121px);
  }
`;

const aniMoveX2 = keyframes`
  0% {
    right: 0;
  }
  100% {
    right: calc(100% - 98px);
  }
`;

const aniMoveY2 = keyframes`
  0% {
    bottom: 0;
  }
  100% {
    bottom: calc(100vh - 98px);
  }
`;

const aniMoveX3 = keyframes`
  0% {
    right: 0;
  }
  100% {
    right: calc(100% - 108px);
  }
`;

const aniMoveY3 = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: calc(100vh - 108px);
  }
`;

export default {
  Header: styled.header`
    width: 100%;
    height: 100vh;
    background: #222222;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    position: relative;
    overflow: hidden;
    
    @media only screen and (min-width: 450px) {
      align-items: center;
    }
  `,
  SubTitle: styled.p`
    font-size: 1.125rem;
    font-family: 'Gilroy', sans-serif;
    font-weight: 300;
    color: #f5f5f5;
    
    @media only screen and (min-width: 450px) {
      margin-top: 0;
    }
  `,
  Title: styled.h1`
    font-size: 2.125rem;
    font-family: 'Gilroy', sans-serif;
    font-weight: 800;
    line-height: 1;
    letter-spacing: 2px;
    word-break: keep-all;
    color: #f5f5f5;
    margin-bottom: 0.25rem;
    text-align: center;
    z-index: 5;
    
    @media only screen and (min-width: 450px) {
      margin: 2px 0 6px;
    }
  `,
  Description: styled.p`
    font-size: 1.375rem;
    font-weight: normal;
    font-style: oblique;
    letter-spacing: 3px;
    color: #4affcf;
    margin-bottom: 2rem;
    z-index: 5;
  `,
  Contents: styled.p`
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.25;
    z-index: 5;
    color: #f5f5f5;
  `,
  Badge1: styled.img`
    width: 115px;
    height: 121px;
    display: block;
    position: absolute;
    will-change: top, left;
    top: 0;
    left: 0;
    z-index: 0;
    transform: translateZ(0);
    animation: ${aniMoveX} 3.5s linear 0s infinite alternate, ${aniMoveY} 4s linear 0s infinite alternate,  ${aniSpin} 6s linear 0s infinite;
     
    @media only screen and (min-width: 768px) {
      animation: ${aniMoveX} 7s linear 0s infinite alternate, ${aniMoveY} 8s linear 0s infinite alternate,  ${aniSpin} 9.5s linear 0s infinite;
    }
  `,
  Badge2: styled.img`
    width: 98px;
    height: 94px;
    display: block;
    position: absolute;
    will-change: bottom, right;
    bottom: 0;
    right: 100%;
    z-index: 10;
    transform: translateZ(0);
    animation: ${aniMoveX2} 4.5s linear 0s infinite alternate, ${aniMoveY2} 3s linear 0s infinite alternate, ${aniSpin} 6s linear 0s infinite;
     
    @media only screen and (min-width: 768px) {
      animation: ${aniMoveX2} 9s linear 0s infinite alternate, ${aniMoveY2} 7s linear 0s infinite alternate, ${aniSpin} 8s linear 0s infinite;
    }
  `,
  Badge3: styled.img`
    width: 108px;
    height: 80px;
    display: block;
    position: absolute;
    will-change: top, right;
    top: 0;
    right: 10%;
    z-index: 0;
    transform: translateZ(0);
    animation: ${aniMoveX3} 5s linear 0s infinite alternate, ${aniMoveY3} 4s linear 0s infinite alternate, ${aniSpin} 8s linear 0s infinite;
    
    @media only screen and (min-width: 768px) {
      animation: ${aniMoveX3} 10s linear 0s infinite alternate, ${aniMoveY3} 8s linear 0s infinite alternate, ${aniSpin} 11s linear 0s infinite;
    }
  `,
};

