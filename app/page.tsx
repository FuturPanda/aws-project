import Image from "next/image";
import styles from "./page.module.css";
import {
  BackgroundImage,
  GradientBackgroundCon,
} from "@/components/quotegenerator/QuoteGeneratorElements";
import Clouds1 from "@/assets/Clouds1.png";

export default function Home() {
  return (
    <GradientBackgroundCon>
      <BackgroundImage src={Clouds1} height="300" alt="cloudy background" />
    </GradientBackgroundCon>
  );
}
