"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundCon = styled.div`
  background-size: 400% 400%;
  background-image: linear-gradient(to right, #44a08d, #093637);
  animation: gradient 6s ease infinite;
  height: 100vh;
  width: 100vw;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const BackgroundImage1 = styled(Image)`
  position: fixed;
  z-index: 1;
  margin-left: -30px;
  margin-top: -50px;
`;
export const BackgroundImage2 = styled(Image)`
  position: fixed;
  z-index: 1;
  right: -80px;
  bottom: 0px;
`;

export const FooterCon = styled.div`
  width: 100vw;
  height: 50px;
  text-align: center;
  font-family: "Roboto", monospace;
  font-size: 15px;
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 10;
`;

export const FooterLink = styled(Link)`
  color: white;
`;

export const QuoteGeneratorCon = styled.div`
  position: absolute;
  min-height: 100px;
  min-width: 100px;
  height: 70vh;
  width: 70vw;
  border: 2px solid #ffffff22;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  background: rgba(165, 255, 213, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0.5px);
  -webkit-backdrop-filter: blur(0.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const QuoteGeneratorInnerCon = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
`;
export const QuoteGeneratorTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  color: white;
  padding: 0 20px 0 20px;
  position: relative;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;
export const QuoteGeneratorSubTitle = styled.h2`
  color: white;
  font-size: 35px;
  position: relative;
  width: 100%;
  text-align: center;
  padding: 0 20px 0 20px;
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;
export const QuoteGeneratorBtn = styled.button`
  height: 100px;
  width: 300px;

  position: relative;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  top: 20px;
  margin: auto;
  left: 50%;
  transform: translate(-50%,0);

  background: rgba(0, 0, 70, 0.3);
  box-shadow: 0 8px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur() (20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media only screen and (max-width: 600px) {
    height: 80px;
    width: 200px;
  }
  &:hover {
    filter:brightness(3);
    transition:0.2s all ease-in-out; 
    transform:scale(1.1)
    transform-origin: center; 
  }
`;

export const QuoteGeneratorBtnText = styled.div`
  color: white;
  font-size: 25px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
`;
