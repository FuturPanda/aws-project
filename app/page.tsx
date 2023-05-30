"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  BackgroundImage1,
  BackgroundImage2,
  GradientBackgroundCon,
  FooterCon,
  FooterLink,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorTitle,
  QuoteGeneratorSubTitle,
  QuoteGeneratorBtn,
  QuoteGeneratorBtnText,
} from "@/components/quotegenerator/QuoteGeneratorElements";
import Clouds1 from "@/assets/cloud-and-thunder.png";
import Clouds2 from "@/assets/cloudy-weather.png";
import { useState } from "react";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <GradientBackgroundCon>
      <QuoteGeneratorCon>
        <QuoteGeneratorInnerCon>
          <QuoteGeneratorTitle>Code generator</QuoteGeneratorTitle>
          <QuoteGeneratorSubTitle>
            You need a little splash of inspiration for your day ? Powered by
            Zenquotes.
          </QuoteGeneratorSubTitle>
          <QuoteGeneratorBtn>
            <QuoteGeneratorBtnText>Make a Quote</QuoteGeneratorBtnText>
          </QuoteGeneratorBtn>
        </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>

      <BackgroundImage1 src={Clouds1} height="300" alt="cloudy background" />
      <BackgroundImage2 src={Clouds2} height="200" alt="sunny background" />
      <FooterCon>
        <>
          Quotes Generated: {numberOfQuotes}
          <br />
          Developed with ❤️ by{" "}
          <FooterLink
            href="https://github.com/FuturPanda"
            target="_blank"
            rel="noopener noreferrer"
          >
            @HoareauSteevy
          </FooterLink>
        </>
      </FooterCon>
    </GradientBackgroundCon>
  );
}
