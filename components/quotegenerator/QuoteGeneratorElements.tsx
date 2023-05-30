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

export const BackgroundImage = styled(Image)`
  position: relative;
  z-index: 1;
  margin-left: -10px;
  margin-top: -10px;
`;
