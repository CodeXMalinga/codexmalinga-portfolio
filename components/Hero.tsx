import React from "react";
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {

  const [text, count] =useTypewriter({
    words: ['Hi name is Malinga de Silva', 'Guy-who-loves-Tea.tsx', '<ButAlsoLovesToCodeMore />'],
    loop: true,
    delaySpeed: 2000
  });  

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />

        <h1>
        <span>{text}</span>
        <Cursor cursorColor="#478778" />
        </h1>
    </div>

  );
};

export default Hero;
