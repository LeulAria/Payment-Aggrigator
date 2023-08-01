import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { tvs, Logo, NextUILogo } from "@components";

// get the package version from package.json
const pkg = require("./package.json");
const tvVersion =
  pkg?.dependencies?.["tailwind-variants"]?.replace("^", "") ?? "0.0.12";

const config: DocsThemeConfig = {
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  logo: (
    <div className="flex items-center">
      <div className="w-[50px]">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
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
          width="100%"
          height="100%"
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
      </div>
      <div className="ml-1">
      <h4 className="font-semibold hidden sm:block text-[0.85rem] mb-0">
        Strategy Taps
      </h4>
      <p className="text-xs -mt-[1px]">Creative touch</p>
      </div>
      {/* <span className={tvs.badge({ class: "hidden sm:flex" })}>
        
      </span> */}
    </div>
  ),
  head: function useHead() {
    const config = useConfig();
    const description =
      config.frontMatter.description ||
      "The power of Tailwind combined with a first-class variant API.";
    const image =
      config.frontMatter.image || "https://tailwind-variants.org/banner.png";

    // || "https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg";

    return (
      <>
        {/* Favicons, meta */}
        <link
          href="/favicon/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/favicon/site.webmanifest" rel="manifest" />
        <link
          color="#000000"
          href="/favicon/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="en" httpEquiv="Content-Language" />
        <meta content={description} name="description" />
        <meta content={description} name="og:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@nextui-org" name="twitter:site" />
        <meta content={image} name="twitter:image" />
        <meta content={`${config.title} – tailwind-variants`} name="og:title" />
        <meta content={image} name="og:image" />
        <meta content="tailwind-variants" name="apple-mobile-web-app-title" />
      </>
    );
  },
  useNextSeoProps: function SEO() {
    const router = useRouter();
    const { frontMatter } = useConfig();

    const defaultTitle = frontMatter.overrideTitle || "StrategyTaps";

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: router.pathname !== "/" ? `%s – ${defaultTitle}` : "",
    };
  },
  project: {
    link: "https://github.com/nextui-org/tailwind-variants",
  },
  chat: {
    link: "https://discord.gg/9b6yyZKmH4",
  },
  docsRepositoryBase: "https://github.com/nextui-org/tailwind-variants",
  gitTimestamp: "",
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            href="https://nextui.org?utm_source=tailwind-variants.org"
            rel="noopener noreferrer"
            target="_blank"
            title="nextui.org homepage"
          >
            <span className="mr-1">Powered by</span>
            <NextUILogo height={30} />
          </a>
        </div>
        <p className="mt-6 text-xs">
          MIT {new Date().getFullYear()} The StrategyTaps Project.
        </p>
      </div>
    ),
  },
};

export default config;
