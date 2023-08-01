import React from "react";
import { tvs, LinkIcon, Snippet, Logo } from "@components";

import AnimatedWave from "./animated-wave";
import GradientBG from "./gradient-bg";
import BackgroundAnimation from "./bg-animation";

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      className={tvs.box({
        class: "relative mt-12 gap-6 overflow-visible",
      })}
    >
      {/* <AnimatedWave className="absolute -z-10 md:-translate-y-44 w-[100%] h-[100%] md:h-[500px]" /> */}

      {/* <BackgroundAnimation /> */}
      {/* <GradientBG className="absolute -z-10 -translate-y-[40%] animate-[appear_1s_ease]" /> */}
      <div className={tvs.box({ class: "relative w-full z-10" })}>
        {/* <Logo height={120} /> */}
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="169.000000pt"
          height="163.000000pt"
          viewBox="0 0 169.000000 163.000000"
          preserveAspectRatio="xMidYMid meet"
          className="hidden dark:block"
        >
          <g
            transform="translate(0.000000,163.000000) scale(0.100000,-0.100000)"
            fill="#FFFFFF"
            stroke="none"
          >
            <path
              d="M1089 1279 l-54 -60 -45 10 c-208 49 -432 -63 -532 -266 -40 -81 -43
-91 -46 -188 -5 -116 11 -187 59 -270 29 -52 92 -125 106 -125 4 0 147 139
317 309 l310 310 25 -36 c76 -113 80 -294 8 -416 -32 -54 -100 -122 -153 -153
-52 -31 -175 -57 -226 -49 -21 4 -38 9 -38 12 0 2 31 39 69 81 214 239 333
375 316 362 -11 -8 -116 -103 -234 -210 -118 -107 -272 -247 -342 -310 l-127
-115 68 -3 68 -3 57 60 c53 56 58 59 88 50 56 -16 180 -10 250 11 345 107 458
561 203 809 l-36 35 -310 -315 -309 -314 -21 25 c-29 36 -60 123 -66 189 -18
166 82 338 236 409 42 20 76 27 143 30 50 3 87 0 87 -5 0 -5 -82 -101 -181
-214 -100 -112 -189 -213 -198 -224 -19 -23 99 81 284 250 72 66 195 178 273
249 78 71 142 130 142 132 0 2 -31 4 -69 4 l-68 0 -54 -61z"
            />
          </g>
        </svg>

        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="169.000000pt"
          height="163.000000pt"
          viewBox="0 0 169.000000 163.000000"
          preserveAspectRatio="xMidYMid meet"
          className="block dark:hidden"
        >
          <g
            transform="translate(0.000000,163.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M1089 1279 l-54 -60 -45 10 c-208 49 -432 -63 -532 -266 -40 -81 -43
-91 -46 -188 -5 -116 11 -187 59 -270 29 -52 92 -125 106 -125 4 0 147 139
317 309 l310 310 25 -36 c76 -113 80 -294 8 -416 -32 -54 -100 -122 -153 -153
-52 -31 -175 -57 -226 -49 -21 4 -38 9 -38 12 0 2 31 39 69 81 214 239 333
375 316 362 -11 -8 -116 -103 -234 -210 -118 -107 -272 -247 -342 -310 l-127
-115 68 -3 68 -3 57 60 c53 56 58 59 88 50 56 -16 180 -10 250 11 345 107 458
561 203 809 l-36 35 -310 -315 -309 -314 -21 25 c-29 36 -60 123 -66 189 -18
166 82 338 236 409 42 20 76 27 143 30 50 3 87 0 87 -5 0 -5 -82 -101 -181
-214 -100 -112 -189 -213 -198 -224 -19 -23 99 81 284 250 72 66 195 178 273
249 78 71 142 130 142 132 0 2 -31 4 -69 4 l-68 0 -54 -61z"
            />
          </g>
        </svg>

        <h1 className="font-[900] font-hero mt-4 text-center text-4xl md:text-5xl text-black dark:text-white">
          Strategy Taps
        </h1>
        <p className="mt-2 text-center font-medium text-lg">
          Empowering payment processing !
        </p>
      </div>
      <div className={tvs.box({ row: true, class: "gap-2 z-10" })}>
        <a className={`${tvs.button()} px-5`} href="/docs/introduction">
          Signup for free !
        </a>
        <a
          className={tvs.button({
            flat: true,
            color: "neutral",
          })}
          href="https://github.com/nextui-org/tailwind-variants"
          rel="noopener noreferrer"
          target="_blank"
          title="github homepage"
        >
          <span className={tvs.box({ row: true })}>
            Contact Us
            <LinkIcon className="ml-1" />
          </span>
        </a>
      </div>
      {/* <Snippet className="z-10" /> */}
    </section>
  );
};

export default Hero;
