"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundCon = styled.div`
  background-size: 400% 400%;
  background-image: linear-gradient(to right, #e66465, #9198e5);
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
export const QuoteGeneratorInnerCon = styled.div``;
export const QuoteGeneratorTitle = styled.h1``;
export const QuoteGeneratorSubTitle = styled.h2``;
export const QuoteGeneratorBtn = styled.button``;
export const QuoteGeneratorBtnText = styled.p``;
