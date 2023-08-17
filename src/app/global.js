"use client"
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,300;1,400&display=swap');
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-inter: Inter;

/* font sizes */
--font-size-base: 1rem;
--font-size-13xl: 2rem;
--font-size-25xl: 2.75rem;
--font-size-3xl-9: 1.2rem;
--font-size-8xl-8: 1.74rem;
--font-size-9xl: 1.75rem;
--font-size-10xl-9: 1.87rem;
--font-size-29xl: 3rem;
--font-size-xs: 0.75rem;
--font-size-mini-6: 0.91rem;
--font-size-xs-8: 0.74rem;
--font-size-mini-4: 0.9rem;
--font-size-smi-9: 0.81rem;
--font-size-xl-9: 1.31rem;
--font-size-11xl-9: 1.93rem;
--font-size-8xl: 1.69rem;

/* Colors */
--color_white: #fff;
--color_black: #000;
--color_mediumblue: #1c40fe;
--color_royalblue: #1c76fe;
--color_gray-100: #fefefe;
--color_gray-200: #fafafa;
--color_gray-300: rgba(255, 255, 255, 0.38);
--color_gray-400: rgba(255, 255, 255, 0.23);
--color_powderblue: #cde7eb;
--color_snow-100: #fffcfc;
--color_snow-200: #fffbfb;

/* Gaps */
--gap-6xl: 1.56rem;

/* Paddings */
--padding-5xs-1: 0.44rem;
--padding-xl: 1.25rem;

/* border radiuses */
--br-xs: 12px;
--br-5xs-9: 7.9px;
--br-18xl-9: 37.9px;
--br-67xl-6: 86.6px;
--br-mini-9: 14.9px;
--br-2xs: 11px;

}
`;
