import Code from "@/components/code";
import Layout from "@/components/layout";
import { getCategories } from "lib/categories";
import { getSortedPostsData } from "lib/posts";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { HiMiniArrowRight } from "react-icons/hi2";

const testing = `
<html data-theme="light" style="color-scheme: light;"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicon.ico"><link href="styles/prism.css" rel="stylesheet"><link href="styles/prism-theme.css" rel="stylesheet"><meta name="description" content="Learn how to build a personal website using Next.js"><meta property="og:image" content="https://og-image.vercel.app/Next.js%20Sample%20Website.png?theme=light&amp;md=0&amp;fontSize=75px&amp;images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"><meta name="og:title" content="Next.js Sample Website"><meta name="twitter:card" content="summary_large_image"><meta name="next-head-count" content="11"><link data-next-font="" rel="preconnect" href="/" crossorigin="anonymous"><noscript data-n-css=""></noscript><script defer="" nomodule="" src="/_next/static/chunks/polyfills.js?ts=1689180513467"></script><script src="/_next/static/chunks/webpack.js?ts=1689180513467" defer=""></script><script src="/_next/static/chunks/main.js?ts=1689180513467" defer=""></script><script src="/_next/static/chunks/pages/_app.js?ts=1689180513467" defer=""></script><script src="/_next/static/chunks/pages/index.js?ts=1689180513467" defer=""></script><script src="/_next/static/development/_buildManifest.js?ts=1689180513467" defer=""></script><script src="/_next/static/development/_ssgManifest.js?ts=1689180513467" defer=""></script><style>/*
! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */
  tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
}

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}


code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.container {
  width: 100%;
}

@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}

.z-10 {
  z-index: 10;
}

.z-50 {
  z-index: 50;
}

.m-auto {
  margin: auto;
}

.mx-5 {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.mb-7 {
  margin-bottom: 1.75rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mb-9 {
  margin-bottom: 2.25rem;
}

.mb-\[64px\] {
  margin-bottom: 64px;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-20 {
  margin-left: 5rem;
}

.ml-8 {
  margin-left: 2rem;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mr-16 {
  margin-right: 4rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mt-16 {
  margin-top: 4rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-20 {
  margin-top: 5rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-\[10px\] {
  margin-top: 10px;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}

.hidden {
  display: none;
}

.h-full {
  height: 100%;
}

.min-h-screen {
  min-height: 100vh;
}

.w-96 {
  width: 24rem;
}

.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}

.w-full {
  width: 100%;
}

.min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content;
}

.max-w-6xl {
  max-width: 72rem;
}

.cursor-pointer {
  cursor: pointer;
}

.grid-flow-row {
  grid-auto-flow: row;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.flex-row-reverse {
  flex-direction: row-reverse;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-1 {
  gap: 0.25rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-sky-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 242 254 / var(--tw-bg-opacity));
}

.bg-slate-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.px-12 {
  padding-left: 3rem;
  padding-right: 3rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py-1\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.py-24 {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.pb-14 {
  padding-bottom: 3.5rem;
}

.pb-16 {
  padding-bottom: 4rem;
}

.pt-16 {
  padding-top: 4rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pt-5 {
  padding-top: 1.25rem;
}

.font-logo {
  font-family: Itim, cursive;
}

.font-rubik {
  font-family: Rubik, sans-serif;
}

.font-wotfard {
  font-family: Wotfard Regular, sans-serif;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-\[15px\] {
  font-size: 15px;
}

.text-\[17px\] {
  font-size: 17px;
}

.text-\[22px\] {
  font-size: 22px;
}

.text-\[38px\] {
  font-size: 38px;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-bold {
  font-weight: 700;
}

.font-medium {
  font-weight: 500;
}

.font-normal {
  font-weight: 400;
}

.uppercase {
  text-transform: uppercase;
}

.capitalize {
  text-transform: capitalize;
}

.leading-7 {
  line-height: 1.75rem;
}

.leading-8 {
  line-height: 2rem;
}

.leading-snug {
  line-height: 1.375;
}

.tracking-widest {
  letter-spacing: 0.1em;
}

.text-\[\#0a0c10\] {
  --tw-text-opacity: 1;
  color: rgb(10 12 16 / var(--tw-text-opacity));
}

.text-amber-400 {
  --tw-text-opacity: 1;
  color: rgb(251 191 36 / var(--tw-text-opacity));
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.text-gray-950 {
  --tw-text-opacity: 1;
  color: rgb(3 7 18 / var(--tw-text-opacity));
}

.text-neutral-900 {
  --tw-text-opacity: 1;
  color: rgb(23 23 23 / var(--tw-text-opacity));
}

.text-pink-500 {
  --tw-text-opacity: 1;
  color: rgb(236 72 153 / var(--tw-text-opacity));
}

.text-sky-700 {
  --tw-text-opacity: 1;
  color: rgb(3 105 161 / var(--tw-text-opacity));
}

.text-sky-900 {
  --tw-text-opacity: 1;
  color: rgb(12 74 110 / var(--tw-text-opacity));
}

.text-slate-400 {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.text-slate-50 {
  --tw-text-opacity: 1;
  color: rgb(248 250 252 / var(--tw-text-opacity));
}

.text-slate-500 {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
}

.text-slate-700 {
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}

.text-slate-900 {
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-200 {
  transition-duration: 200ms;
}

.hover\:text-gray-400:hover {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.hover\:text-sky-700:hover {
  --tw-text-opacity: 1;
  color: rgb(3 105 161 / var(--tw-text-opacity));
}

.group:hover .group-hover\:block {
  display: block;
}

.group:hover .group-hover\:text-sky-700 {
  --tw-text-opacity: 1;
  color: rgb(3 105 161 / var(--tw-text-opacity));
}

:is(.dark .dark\:bg-gray-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

:is(.dark .dark\:bg-slate-700) {
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}

:is(.dark .dark\:bg-slate-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

:is(.dark .dark\:text-gray-50) {
  --tw-text-opacity: 1;
  color: rgb(249 250 251 / var(--tw-text-opacity));
}

:is(.dark .dark\:text-slate-400) {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

:is(.dark .dark\:text-white) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

@media (min-width: 640px) {

  .sm\:h-72 {
    height: 18rem;
  }

  .sm\:pt-32 {
    padding-top: 8rem;
  }

  .sm\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .sm\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 1024px) {

  .lg\:block {
    display: block;
  }

  .lg\:max-w-6xl {
    max-width: 72rem;
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzIiwiPG5vIHNvdXJjZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjLEVBQWQsTUFBYztFQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsNE5BQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsY0FBYztFQUFkLGNBQWM7RUFBZCxrQkFBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7RUFBQSxXQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0VBQWQseUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7RUFBQSxvQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQsU0FBYyxFQUFkLE1BQWM7RUFBZCxVQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG9CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxZQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsNkJBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLGFBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxrQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBYztBQUFBOztBQUFkO0VBQUEsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7O0VBQUEsZ0JBQWM7RUFBZCxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0VBQWQsWUFBYztBQUFBOztBQUFkLHdFQUFjO0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7RUFBQSx3QkFBYztFQUFkLHdCQUFjO0VBQWQsbUJBQWM7RUFBZCxtQkFBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGVBQWM7RUFBZCxlQUFjO0VBQWQsYUFBYztFQUFkLGFBQWM7RUFBZCxrQkFBYztFQUFkLHNDQUFjO0VBQWQsOEJBQWM7RUFBZCw2QkFBYztFQUFkLDRCQUFjO0VBQWQsZUFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQsa0JBQWM7RUFBZCwyQkFBYztFQUFkLDRCQUFjO0VBQWQsc0NBQWM7RUFBZCxrQ0FBYztFQUFkLDJCQUFjO0VBQWQsc0JBQWM7RUFBZCw4QkFBYztFQUFkLFlBQWM7RUFBZCxrQkFBYztFQUFkLGdCQUFjO0VBQWQsaUJBQWM7RUFBZCxrQkFBYztFQUFkLGNBQWM7RUFBZCxnQkFBYztFQUFkLGFBQWM7RUFBZCxtQkFBYztFQUFkLHFCQUFjO0VBQWQsMkJBQWM7RUFBZCx5QkFBYztFQUFkLDBCQUFjO0VBQWQsMkJBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQseUJBQWM7RUFBZDtBQUFjOztBQUFkO0VBQUEsd0JBQWM7RUFBZCx3QkFBYztFQUFkLG1CQUFjO0VBQWQsbUJBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxlQUFjO0VBQWQsZUFBYztFQUFkLGFBQWM7RUFBZCxhQUFjO0VBQWQsa0JBQWM7RUFBZCxzQ0FBYztFQUFkLDhCQUFjO0VBQWQsNkJBQWM7RUFBZCw0QkFBYztFQUFkLGVBQWM7RUFBZCxvQkFBYztFQUFkLHNCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLGtCQUFjO0VBQWQsMkJBQWM7RUFBZCw0QkFBYztFQUFkLHNDQUFjO0VBQWQsa0NBQWM7RUFBZCwyQkFBYztFQUFkLHNCQUFjO0VBQWQsOEJBQWM7RUFBZCxZQUFjO0VBQWQsa0JBQWM7RUFBZCxnQkFBYztFQUFkLGlCQUFjO0VBQWQsa0JBQWM7RUFBZCxjQUFjO0VBQWQsZ0JBQWM7RUFBZCxhQUFjO0VBQWQsbUJBQWM7RUFBZCxxQkFBYztFQUFkLDJCQUFjO0VBQWQseUJBQWM7RUFBZCwwQkFBYztFQUFkLDJCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLHlCQUFjO0VBQWQ7QUFBYzs7QUFFZDtFQUFBO0FBQW9COztBQUFwQjs7RUFBQTtJQUFBO0VBQW9CO0FBQUE7O0FBQXBCOztFQUFBO0lBQUE7RUFBb0I7QUFBQTs7QUFBcEI7O0VBQUE7SUFBQTtFQUFvQjtBQUFBOztBQUFwQjs7RUFBQTtJQUFBO0VBQW9CO0FBQUE7O0FBQXBCOztFQUFBO0lBQUE7RUFBb0I7QUFBQTs7QUFFcEI7RUFBQTtBQUFtQjs7QUFBbkI7RUFBQTtBQUFtQjs7QUFBbkI7RUFBQTtBQUFtQjs7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQTtBQUFtQjs7QUFBbkI7RUFBQSwyQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUEsZUFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7O0FBQW5CO0VBQUEsZ0tBQW1CO0VBQW5CLHdKQUFtQjtFQUFuQixpTEFBbUI7RUFBbkIsd0RBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBO0FBQW1COztBQUpuQjtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBO0NDQUE7O0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxtQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxtQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxtQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7O0FEQUE7O0VBQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBLG1CQ0FBO0lEQUE7R0NBQTs7RURBQTtJQUFBLG9CQ0FBO0lEQUE7R0NBQTtDQUFBOztBREFBOztFQUFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkB0YWlsd2luZCBiYXNlO1xuXG5AdGFpbHdpbmQgY29tcG9uZW50cztcblxuQHRhaWx3aW5kIHV0aWxpdGllcztcbiIsbnVsbF0sInNvdXJjZVJvb3QiOiIifQ== */</style><style>@import url("https://fonts.googleapis.com/css2?family=Itim&family=Leckerli+One&family=Pacifico&family=Patrick+Hand&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

/*
! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
5. Use the user's configured `sans` font-feature-settings by default.
6. Use the user's configured `sans` font-variation-settings by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured `mono` font family by default.
2. Correct the odd `em` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*,
  *::before,
  *::after {
    box-sizing{
    box-sizing: border-box;
  }
    -webkit-font-smoothing{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  }

* {
    margin{
    margin: 0px;
  }
  }

html {
    scroll-behavior: smooth;
  }

body {
    line-height{
    line-height: 1.5;
  }

    min-height{
    min-height: 100vh;
  }
  }

img,
  picture,
  video,
  canvas,
  svg {
    display{
    display: block;
  }
    max-width{
    max-width: 100%;
  }
  }

p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap{
    overflow-wrap: break-word;
  }
  }

h2 {
    font-size{
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
    font-weight{
    font-weight: 700;
  }
    color{
    --tw-text-opacity: 1;
    color: rgb(3 105 161 / var(--tw-text-opacity));
  }
    margin-top{
    margin-top: 4rem;
  }
    margin-bottom{
    margin-bottom: 2rem;
  }
  }

ul {
    list-style-type{
    list-style-type: disc;
  }
  }

*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.container{
  width: 100%;
}
@media (min-width: 640px){

  .container{
    max-width: 640px;
  }
}
@media (min-width: 768px){

  .container{
    max-width: 768px;
  }
}
@media (min-width: 1024px){

  .container{
    max-width: 1024px;
  }
}
@media (min-width: 1280px){

  .container{
    max-width: 1280px;
  }
}
@media (min-width: 1536px){

  .container{
    max-width: 1536px;
  }
}
.z-10{
  z-index: 10;
}
.z-50{
  z-index: 50;
}
.m-auto{
  margin: auto;
}
.mx-5{
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}
.mx-auto{
  margin-left: auto;
  margin-right: auto;
}
.mb-1{
  margin-bottom: 0.25rem;
}
.mb-12{
  margin-bottom: 3rem;
}
.mb-2{
  margin-bottom: 0.5rem;
}
.mb-3{
  margin-bottom: 0.75rem;
}
.mb-4{
  margin-bottom: 1rem;
}
.mb-5{
  margin-bottom: 1.25rem;
}
.mb-7{
  margin-bottom: 1.75rem;
}
.mb-8{
  margin-bottom: 2rem;
}
.mb-9{
  margin-bottom: 2.25rem;
}
.mb-\[64px\]{
  margin-bottom: 64px;
}
.ml-2{
  margin-left: 0.5rem;
}
.ml-20{
  margin-left: 5rem;
}
.ml-8{
  margin-left: 2rem;
}
.mr-1{
  margin-right: 0.25rem;
}
.mr-16{
  margin-right: 4rem;
}
.mr-2{
  margin-right: 0.5rem;
}
.mt-16{
  margin-top: 4rem;
}
.mt-2{
  margin-top: 0.5rem;
}
.mt-20{
  margin-top: 5rem;
}
.mt-4{
  margin-top: 1rem;
}
.mt-\[10px\]{
  margin-top: 10px;
}
.flex{
  display: flex;
}
.grid{
  display: grid;
}
.hidden{
  display: none;
}
.h-full{
  height: 100%;
}
.min-h-screen{
  min-height: 100vh;
}
.w-96{
  width: 24rem;
}
.w-fit{
  width: -moz-fit-content;
  width: fit-content;
}
.w-full{
  width: 100%;
}
.min-w-fit{
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-6xl{
  max-width: 72rem;
}
.cursor-pointer{
  cursor: pointer;
}
.grid-flow-row{
  grid-auto-flow: row;
}
.grid-cols-1{
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.flex-row-reverse{
  flex-direction: row-reverse;
}
.flex-col{
  flex-direction: column;
}
.flex-wrap{
  flex-wrap: wrap;
}
.items-end{
  align-items: flex-end;
}
.items-center{
  align-items: center;
}
.justify-end{
  justify-content: flex-end;
}
.justify-center{
  justify-content: center;
}
.justify-between{
  justify-content: space-between;
}
.gap-1{
  gap: 0.25rem;
}
.rounded-lg{
  border-radius: 0.5rem;
}
.bg-gray-100{
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.bg-sky-100{
  --tw-bg-opacity: 1;
  background-color: rgb(224 242 254 / var(--tw-bg-opacity));
}
.bg-slate-800{
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}
.bg-white{
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.px-12{
  padding-left: 3rem;
  padding-right: 3rem;
}
.px-3{
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-8{
  padding-left: 2rem;
  padding-right: 2rem;
}
.py-1{
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\.5{
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-2{
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-20{
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.py-24{
  padding-top: 6rem;
  padding-bottom: 6rem;
}
.pb-14{
  padding-bottom: 3.5rem;
}
.pb-16{
  padding-bottom: 4rem;
}
.pt-16{
  padding-top: 4rem;
}
.pt-4{
  padding-top: 1rem;
}
.pt-5{
  padding-top: 1.25rem;
}
.font-logo{
  font-family: Itim, cursive;
}
.font-rubik{
  font-family: Rubik, sans-serif;
}
.font-wotfard{
  font-family: Wotfard Regular, sans-serif;
}
.text-2xl{
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-3xl{
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-4xl{
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.text-\[15px\]{
  font-size: 15px;
}
.text-\[17px\]{
  font-size: 17px;
}
.text-\[22px\]{
  font-size: 22px;
}
.text-\[38px\]{
  font-size: 38px;
}
.text-base{
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg{
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm{
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl{
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.font-bold{
  font-weight: 700;
}
.font-medium{
  font-weight: 500;
}
.font-normal{
  font-weight: 400;
}
.uppercase{
  text-transform: uppercase;
}
.capitalize{
  text-transform: capitalize;
}
.leading-7{
  line-height: 1.75rem;
}
.leading-8{
  line-height: 2rem;
}
.leading-snug{
  line-height: 1.375;
}
.tracking-widest{
  letter-spacing: 0.1em;
}
.text-\[\#0a0c10\]{
  --tw-text-opacity: 1;
  color: rgb(10 12 16 / var(--tw-text-opacity));
}
.text-amber-400{
  --tw-text-opacity: 1;
  color: rgb(251 191 36 / var(--tw-text-opacity));
}
.text-black{
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-gray-900{
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.text-gray-950{
  --tw-text-opacity: 1;
  color: rgb(3 7 18 / var(--tw-text-opacity));
}
.text-neutral-900{
  --tw-text-opacity: 1;
  color: rgb(23 23 23 / var(--tw-text-opacity));
}
.text-pink-500{
  --tw-text-opacity: 1;
  color: rgb(236 72 153 / var(--tw-text-opacity));
}
.text-sky-700{
  --tw-text-opacity: 1;
  color: rgb(3 105 161 / var(--tw-text-opacity));
}
.text-sky-900{
  --tw-text-opacity: 1;
  color: rgb(12 74 110 / var(--tw-text-opacity));
}
.text-slate-400{
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}
.text-slate-50{
  --tw-text-opacity: 1;
  color: rgb(248 250 252 / var(--tw-text-opacity));
}
.text-slate-500{
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
}
.text-slate-700{
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}
.text-slate-900{
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
}
.text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.transition{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-200{
  transition-duration: 200ms;
}
img,
  picture,
  video,
  canvas,
  svg {
    font: inherit;
  }
#root,
  #__next {
    isolation: isolate;
  }

.categories-page {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 32px;
}

.category-box {
  background: white;
  padding: 32px;
  border-radius: 8px;
}

.toc {
  position: sticky;
  top: 148px;
  max-height: calc(100vh - 148px);
  overflow: auto;
  padding-bottom: 16px;
  margin-left: 70px;
  margin-top: 4px;
}

.blog-post h2 {
}

ul,
li {
  list-style-type: none;
}
body *{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

main p {
  margin-bottom: 30px;
}

main ul,
main li {
  list-style-type: disc;
}

main li {
  margin-left: 20px;
  margin-bottom: 15px;
}

@media (max-width: 563px) {
  .categories-page {
    grid-template-columns: 1fr;
  }
}

.hover\:text-gray-400:hover{
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.hover\:text-sky-700:hover{
  --tw-text-opacity: 1;
  color: rgb(3 105 161 / var(--tw-text-opacity));
}

.group:hover .group-hover\:block{
  display: block;
}

.group:hover .group-hover\:text-sky-700{
  --tw-text-opacity: 1;
  color: rgb(3 105 161 / var(--tw-text-opacity));
}

:is(.dark .dark\:bg-gray-900){
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

:is(.dark .dark\:bg-slate-700){
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}

:is(.dark .dark\:bg-slate-800){
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

:is(.dark .dark\:text-gray-50){
  --tw-text-opacity: 1;
  color: rgb(249 250 251 / var(--tw-text-opacity));
}

:is(.dark .dark\:text-slate-400){
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

:is(.dark .dark\:text-white){
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

@media (min-width: 640px){

  .sm\:h-72{
    height: 18rem;
  }

  .sm\:pt-32{
    padding-top: 8rem;
  }

  .sm\:text-4xl{
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .sm\:text-lg{
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 1024px){

  .lg\:block{
    display: block;
  }

  .lg\:max-w-6xl{
    max-width: 72rem;
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3MiLCI8bm8gc291cmNlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0T0FBNE87O0FBRTVPOztDQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCw0TkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0VBQWQsWUFBYztBQUFBOztBQUFkLHdFQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOzs7SUFBQTtJQUFBO0VBQWM7SUFBZDtJQUFBLG1DQUFjO0lBQWQ7RUFBYztFQUFBOztBQUFkO0lBQUE7SUFBQTtFQUFjO0VBQUE7O0FBQWQ7SUFBQSx1QkFBYztFQUFBOztBQUFkO0lBQUE7SUFBQTtFQUFjOztJQUFkO0lBQUE7RUFBYztFQUFBOztBQUFkOzs7OztJQUFBO0lBQUE7RUFBYztJQUFkO0lBQUE7RUFBYztFQUFBOztBQUFkOzs7Ozs7O0lBQUE7SUFBQTtFQUFjO0VBQUE7O0FBQWQ7SUFBQTtJQUFBLG1CQUFjO0lBQWQ7RUFBYztJQUFkO0lBQUE7RUFBYztJQUFkO0lBQUEsb0JBQWM7SUFBZDtFQUFjO0lBQWQ7SUFBQTtFQUFjO0lBQWQ7SUFBQTtFQUFjO0VBQUE7O0FBQWQ7SUFBQTtJQUFBO0VBQWM7RUFBQTs7QUFBZDtFQUFBLHdCQUFjO0VBQWQsd0JBQWM7RUFBZCxtQkFBYztFQUFkLG1CQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsZUFBYztFQUFkLGVBQWM7RUFBZCxhQUFjO0VBQWQsYUFBYztFQUFkLGtCQUFjO0VBQWQsc0NBQWM7RUFBZCw4QkFBYztFQUFkLDZCQUFjO0VBQWQsNEJBQWM7RUFBZCxlQUFjO0VBQWQsb0JBQWM7RUFBZCxzQkFBYztFQUFkLHVCQUFjO0VBQWQsd0JBQWM7RUFBZCxrQkFBYztFQUFkLDJCQUFjO0VBQWQsNEJBQWM7RUFBZCxzQ0FBYztFQUFkLGtDQUFjO0VBQWQsMkJBQWM7RUFBZCxzQkFBYztFQUFkLDhCQUFjO0VBQWQsWUFBYztFQUFkLGtCQUFjO0VBQWQsZ0JBQWM7RUFBZCxpQkFBYztFQUFkLGtCQUFjO0VBQWQsY0FBYztFQUFkLGdCQUFjO0VBQWQsYUFBYztFQUFkLG1CQUFjO0VBQWQscUJBQWM7RUFBZCwyQkFBYztFQUFkLHlCQUFjO0VBQWQsMEJBQWM7RUFBZCwyQkFBYztFQUFkLHVCQUFjO0VBQWQsd0JBQWM7RUFBZCx5QkFBYztFQUFkO0FBQWM7O0FBQWQ7RUFBQSx3QkFBYztFQUFkLHdCQUFjO0VBQWQsbUJBQWM7RUFBZCxtQkFBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGVBQWM7RUFBZCxlQUFjO0VBQWQsYUFBYztFQUFkLGFBQWM7RUFBZCxrQkFBYztFQUFkLHNDQUFjO0VBQWQsOEJBQWM7RUFBZCw2QkFBYztFQUFkLDRCQUFjO0VBQWQsZUFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQsa0JBQWM7RUFBZCwyQkFBYztFQUFkLDRCQUFjO0VBQWQsc0NBQWM7RUFBZCxrQ0FBYztFQUFkLDJCQUFjO0VBQWQsc0JBQWM7RUFBZCw4QkFBYztFQUFkLFlBQWM7RUFBZCxrQkFBYztFQUFkLGdCQUFjO0VBQWQsaUJBQWM7RUFBZCxrQkFBYztFQUFkLGNBQWM7RUFBZCxnQkFBYztFQUFkLGFBQWM7RUFBZCxtQkFBYztFQUFkLHFCQUFjO0VBQWQsMkJBQWM7RUFBZCx5QkFBYztFQUFkLDBCQUFjO0VBQWQsMkJBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQseUJBQWM7RUFBZDtBQUFjO0FBQ2Q7RUFBQTtBQUFvQjtBQUFwQjs7RUFBQTtJQUFBO0VBQW9CO0FBQUE7QUFBcEI7O0VBQUE7SUFBQTtFQUFvQjtBQUFBO0FBQXBCOztFQUFBO0lBQUE7RUFBb0I7QUFBQTtBQUFwQjs7RUFBQTtJQUFBO0VBQW9CO0FBQUE7QUFBcEI7O0VBQUE7SUFBQTtFQUFvQjtBQUFBO0FBQ3BCO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsdUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSwyQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsZUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxnS0FBbUI7RUFBbkIsd0pBQW1CO0VBQW5CLGlMQUFtQjtFQUFuQix3REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQXdEakI7Ozs7O0lBS0UsYUFBYTtFQUNmO0FBRUE7O0lBRUUsa0JBQWtCO0VBQ3BCOztBQWpFRjtFQUNFLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBRUU7RUFBQSwrRkFBcUM7RUFBckMsd0RBQXFDO0VBQXJDO0FBQXFDOztBQUd2QztFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUF6REE7RUFBQSxxQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQTtDQ0FBOztBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsbUJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsbUJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsbUJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBOztBREFBOztFQUFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQSxtQkNBQTtJREFBO0dDQUE7O0VEQUE7SUFBQSxvQkNBQTtJREFBO0dDQUE7Q0FBQTs7QURBQTs7RUFBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXRpbSZmYW1pbHk9TGVja2VybGkrT25lJmZhbWlseT1QYWNpZmljbyZmYW1pbHk9UGF0cmljaytIYW5kJmZhbWlseT1SdWJpazppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwXCIpO1xuXG5AdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllcztcblxuLmNhdGVnb3JpZXMtcGFnZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgZ2FwOiAzMnB4O1xufVxuXG4uY2F0ZWdvcnktYm94IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnRvYyB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTQ4cHg7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDhweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmJsb2ctcG9zdCBoMiB7XG59XG5cbnVsLFxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5ib2R5ICoge1xuICBAYXBwbHkgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwO1xufVxuXG5tYWluIHAge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5tYWluIHVsLFxubWFpbiBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbn1cblxubWFpbiBsaSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTYzcHgpIHtcbiAgLmNhdGVnb3JpZXMtcGFnZSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuQGxheWVyIHV0aWxpdGllcyB7XG4gIGltZyxcbiAgcGljdHVyZSxcbiAgdmlkZW8sXG4gIGNhbnZhcyxcbiAgc3ZnIHtcbiAgICBmb250OiBpbmhlcml0O1xuICB9XG5cbiAgI3Jvb3QsXG4gICNfX25leHQge1xuICAgIGlzb2xhdGlvbjogaXNvbGF0ZTtcbiAgfVxufVxuXG5AbGF5ZXIgYmFzZSB7XG4gICosXG4gICo6OmJlZm9yZSxcbiAgKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmcge1xuICAgICAgQGFwcGx5IGJveC1ib3JkZXI7XG4gICAgfVxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmcge1xuICAgICAgQGFwcGx5IGFudGlhbGlhc2VkO1xuICAgIH1cbiAgfVxuICAqIHtcbiAgICBtYXJnaW4ge1xuICAgICAgQGFwcGx5IG0tMDtcbiAgICB9XG4gIH1cbiAgaHRtbCB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIH1cbiAgYm9keSB7XG4gICAgbGluZS1oZWlnaHQge1xuICAgICAgQGFwcGx5IGxlYWRpbmctbm9ybWFsO1xuICAgIH1cblxuICAgIG1pbi1oZWlnaHQge1xuICAgICAgQGFwcGx5IG1pbi1oLXNjcmVlbjtcbiAgICB9XG4gIH1cblxuICBpbWcsXG4gIHBpY3R1cmUsXG4gIHZpZGVvLFxuICBjYW52YXMsXG4gIHN2ZyB7XG4gICAgZGlzcGxheSB7XG4gICAgICBAYXBwbHkgYmxvY2s7XG4gICAgfVxuICAgIG1heC13aWR0aCB7XG4gICAgICBAYXBwbHkgbWF4LXctZnVsbDtcbiAgICB9XG4gIH1cblxuICBwLFxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBvdmVyZmxvdy13cmFwIHtcbiAgICAgIEBhcHBseSBicmVhay13b3JkcztcbiAgICB9XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplIHtcbiAgICAgIEBhcHBseSB0ZXh0LTN4bDtcbiAgICB9XG4gICAgZm9udC13ZWlnaHQge1xuICAgICAgQGFwcGx5IGZvbnQtYm9sZDtcbiAgICB9XG4gICAgY29sb3Ige1xuICAgICAgQGFwcGx5IHRleHQtc2t5LTcwMDtcbiAgICB9XG4gICAgbWFyZ2luLXRvcCB7XG4gICAgICBAYXBwbHkgbXQtMTY7XG4gICAgfVxuICAgIG1hcmdpbi1ib3R0b20ge1xuICAgICAgQGFwcGx5IG1iLTg7XG4gICAgfVxuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZSB7XG4gICAgICBAYXBwbHkgbGlzdC1kaXNjO1xuICAgIH1cbiAgfVxufVxuIixudWxsXSwic291cmNlUm9vdCI6IiJ9 */</style><style>/* #### Generated By: http://www.cufonfonts.com #### */

    @font-face {
    font-family: 'Wotfard Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Wotfard Regular'), url(/_next/static/media/Wotfard-Regular.88256e34.woff) format('woff');
    }
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb250cy93b3RmYXJkLWN1Zm9uZm9udHMtd2ViZm9udC9zdHlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0RBQXNEOztJQUVsRDtJQUNBLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFGQUF5RTtJQUN6RSIsInNvdXJjZXNDb250ZW50IjpbIi8qICMjIyMgR2VuZXJhdGVkIEJ5OiBodHRwOi8vd3d3LmN1Zm9uZm9udHMuY29tICMjIyMgKi9cblxuICAgIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnV290ZmFyZCBSZWd1bGFyJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBzcmM6IGxvY2FsKCdXb3RmYXJkIFJlZ3VsYXInKSwgdXJsKCdXb3RmYXJkLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9 */</style><style>.theme-toggle.theme-toggle--reversed .theme-toggle__around{transform:scaleX(-1)}.theme-toggle{--theme-toggle__around--duration:.5s}.theme-toggle__around *{transform-origin:center;transition:transform calc(var(--theme-toggle__around--duration) * .6) ease}.theme-toggle__around>g g circle{transition-duration:calc(var(--theme-toggle__around--duration) * .2)}.theme-toggle__around>g g :nth-child(1){transition-delay:calc(var(--theme-toggle__around--duration)*.253)}.theme-toggle__around>g g :nth-child(2){transition-delay:calc(var(--theme-toggle__around--duration)*.348)}.theme-toggle__around>g g :nth-child(3){transition-delay:calc(var(--theme-toggle__around--duration)*.443)}.theme-toggle__around>g g :nth-child(4){transition-delay:calc(var(--theme-toggle__around--duration)*.538)}.theme-toggle__around>g g :nth-child(5){transition-delay:calc(var(--theme-toggle__around--duration)*.633)}.theme-toggle__around>g g :nth-child(6){transition-delay:calc(var(--theme-toggle__around--duration)*.728)}.theme-toggle__around>:first-child path{transition-property:transform,d}.theme-toggle--toggled.theme-toggle .theme-toggle__around *{transition-delay:0s;transition-duration:var(--theme-toggle__around--duration)}.theme-toggle--toggled.theme-toggle .theme-toggle__around>g>circle{transform:scale(1.4)}.theme-toggle--toggled.theme-toggle .theme-toggle__around>g g circle{transform:scale(0);transition-duration:calc(var(--theme-toggle__around--duration) * .4)}.theme-toggle--toggled.theme-toggle .theme-toggle__around>:first-child{transform:rotate(-90deg)}.theme-toggle--toggled.theme-toggle .theme-toggle__around>:first-child path{d:path("M-12-14h42v30a1 1 0 00-16 13H0Z")}@supports not (d:path("")){.theme-toggle--toggled.theme-toggle .theme-toggle__around:first-child path{transform:translate3d(-12px,-14px,0)}}.theme-toggle{border:none;background:0 0;cursor:pointer}@media (prefers-reduced-motion:reduce){.theme-toggle:not(.theme-toggle--force-motion) *{transition:none!important}}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvQHRoZW1lLXRvZ2dsZXMvcmVhY3QvY3NzL0Fyb3VuZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQTJELG9CQUFvQixDQUFDLGNBQWMsb0NBQW9DLENBQUMsd0JBQXdCLHVCQUF1QixDQUFDLDBFQUEwRSxDQUFDLGlDQUFpQyxvRUFBb0UsQ0FBQyx3Q0FBd0MsaUVBQWlFLENBQUMsd0NBQXdDLGlFQUFpRSxDQUFDLHdDQUF3QyxpRUFBaUUsQ0FBQyx3Q0FBd0MsaUVBQWlFLENBQUMsd0NBQXdDLGlFQUFpRSxDQUFDLHdDQUF3QyxpRUFBaUUsQ0FBQyx3Q0FBd0MsK0JBQStCLENBQUMsNERBQTRELG1CQUFtQixDQUFDLHlEQUF5RCxDQUFDLG1FQUFtRSxvQkFBb0IsQ0FBQyxxRUFBcUUsa0JBQWtCLENBQUMsb0VBQW9FLENBQUMsdUVBQXVFLHdCQUF3QixDQUFDLDRFQUE0RSx5Q0FBeUMsQ0FBQywyQkFBMkIsMkVBQTJFLG9DQUFvQyxDQUFDLENBQUMsY0FBYyxXQUFXLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyx1Q0FBdUMsaURBQWlELHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLnRoZW1lLXRvZ2dsZS50aGVtZS10b2dnbGUtLXJldmVyc2VkIC50aGVtZS10b2dnbGVfX2Fyb3VuZHt0cmFuc2Zvcm06c2NhbGVYKC0xKX0udGhlbWUtdG9nZ2xley0tdGhlbWUtdG9nZ2xlX19hcm91bmQtLWR1cmF0aW9uOi41c30udGhlbWUtdG9nZ2xlX19hcm91bmQgKnt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2l0aW9uOnRyYW5zZm9ybSBjYWxjKHZhcigtLXRoZW1lLXRvZ2dsZV9fYXJvdW5kLS1kdXJhdGlvbikgKiAuNikgZWFzZX0udGhlbWUtdG9nZ2xlX19hcm91bmQ+ZyBnIGNpcmNsZXt0cmFuc2l0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tdGhlbWUtdG9nZ2xlX19hcm91bmQtLWR1cmF0aW9uKSAqIC4yKX0udGhlbWUtdG9nZ2xlX19hcm91bmQ+ZyBnIDpudGgtY2hpbGQoMSl7dHJhbnNpdGlvbi1kZWxheTpjYWxjKHZhcigtLXRoZW1lLXRvZ2dsZV9fYXJvdW5kLS1kdXJhdGlvbikqLjI1Myl9LnRoZW1lLXRvZ2dsZV9fYXJvdW5kPmcgZyA6bnRoLWNoaWxkKDIpe3RyYW5zaXRpb24tZGVsYXk6Y2FsYyh2YXIoLS10aGVtZS10b2dnbGVfX2Fyb3VuZC0tZHVyYXRpb24pKi4zNDgpfS50aGVtZS10b2dnbGVfX2Fyb3VuZD5nIGcgOm50aC1jaGlsZCgzKXt0cmFuc2l0aW9uLWRlbGF5OmNhbGModmFyKC0tdGhlbWUtdG9nZ2xlX19hcm91bmQtLWR1cmF0aW9uKSouNDQzKX0udGhlbWUtdG9nZ2xlX19hcm91bmQ+ZyBnIDpudGgtY2hpbGQoNCl7dHJhbnNpdGlvbi1kZWxheTpjYWxjKHZhcigtLXRoZW1lLXRvZ2dsZV9fYXJvdW5kLS1kdXJhdGlvbikqLjUzOCl9LnRoZW1lLXRvZ2dsZV9fYXJvdW5kPmcgZyA6bnRoLWNoaWxkKDUpe3RyYW5zaXRpb24tZGVsYXk6Y2FsYyh2YXIoLS10aGVtZS10b2dnbGVfX2Fyb3VuZC0tZHVyYXRpb24pKi42MzMpfS50aGVtZS10b2dnbGVfX2Fyb3VuZD5nIGcgOm50aC1jaGlsZCg2KXt0cmFuc2l0aW9uLWRlbGF5OmNhbGModmFyKC0tdGhlbWUtdG9nZ2xlX19hcm91bmQtLWR1cmF0aW9uKSouNzI4KX0udGhlbWUtdG9nZ2xlX19hcm91bmQ+OmZpcnN0LWNoaWxkIHBhdGh7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sZH0udGhlbWUtdG9nZ2xlLS10b2dnbGVkLnRoZW1lLXRvZ2dsZSAudGhlbWUtdG9nZ2xlX19hcm91bmQgKnt0cmFuc2l0aW9uLWRlbGF5OjBzO3RyYW5zaXRpb24tZHVyYXRpb246dmFyKC0tdGhlbWUtdG9nZ2xlX19hcm91bmQtLWR1cmF0aW9uKX0udGhlbWUtdG9nZ2xlLS10b2dnbGVkLnRoZW1lLXRvZ2dsZSAudGhlbWUtdG9nZ2xlX19hcm91bmQ+Zz5jaXJjbGV7dHJhbnNmb3JtOnNjYWxlKDEuNCl9LnRoZW1lLXRvZ2dsZS0tdG9nZ2xlZC50aGVtZS10b2dnbGUgLnRoZW1lLXRvZ2dsZV9fYXJvdW5kPmcgZyBjaXJjbGV7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zaXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS10aGVtZS10b2dnbGVfX2Fyb3VuZC0tZHVyYXRpb24pICogLjQpfS50aGVtZS10b2dnbGUtLXRvZ2dsZWQudGhlbWUtdG9nZ2xlIC50aGVtZS10b2dnbGVfX2Fyb3VuZD46Zmlyc3QtY2hpbGR7dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpfS50aGVtZS10b2dnbGUtLXRvZ2dsZWQudGhlbWUtdG9nZ2xlIC50aGVtZS10b2dnbGVfX2Fyb3VuZD46Zmlyc3QtY2hpbGQgcGF0aHtkOnBhdGgoXCJNLTEyLTE0aDQydjMwYTEgMSAwIDAwLTE2IDEzSDBaXCIpfUBzdXBwb3J0cyBub3QgKGQ6cGF0aChcIlwiKSl7LnRoZW1lLXRvZ2dsZS0tdG9nZ2xlZC50aGVtZS10b2dnbGUgLnRoZW1lLXRvZ2dsZV9fYXJvdW5kOmZpcnN0LWNoaWxkIHBhdGh7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMnB4LC0xNHB4LDApfX0udGhlbWUtdG9nZ2xle2JvcmRlcjpub25lO2JhY2tncm91bmQ6MCAwO2N1cnNvcjpwb2ludGVyfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpyZWR1Y2Upey50aGVtZS10b2dnbGU6bm90KC50aGVtZS10b2dnbGUtLWZvcmNlLW1vdGlvbikgKnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fX1cbiJdLCJzb3VyY2VSb290IjoiIn0= */</style><style>pre[class*="language-"].line-numbers {
	position: relative;
	padding-left: 3.8em;
	counter-reset: linenumber;
}

pre[class*="language-"].line-numbers > code {
	position: relative;
	white-space: inherit;
}

.line-numbers .line-numbers-rows {
	position: absolute;
	pointer-events: none;
	top: 0;
	font-size: 100%;
	left: -3.8em;
	width: 3em; /* works for line-numbers below 1000 lines */
	letter-spacing: -1px;
	border-right: 1px solid #999;

	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;

}

	.line-numbers-rows > span {
		display: block;
		counter-increment: linenumber;
	}

		.line-numbers-rows > span:before {
			content: counter(linenumber);
			color: #999;
			display: block;
			padding-right: 0.8em;
			text-align: right;
		}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixNQUFNO0NBQ04sZUFBZTtDQUNmLFlBQVk7Q0FDWixVQUFVLEVBQUUsNENBQTRDO0NBQ3hELG9CQUFvQjtDQUNwQiw0QkFBNEI7O0NBRTVCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FFdEIsaUJBQWlCOztBQUVsQjs7Q0FFQztFQUNDLGNBQWM7RUFDZCw2QkFBNkI7Q0FDOUI7O0VBRUM7R0FDQyw0QkFBNEI7R0FDNUIsV0FBVztHQUNYLGNBQWM7R0FDZCxvQkFBb0I7R0FDcEIsaUJBQWlCO0VBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsicHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXS5saW5lLW51bWJlcnMge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmctbGVmdDogMy44ZW07XG5cdGNvdW50ZXItcmVzZXQ6IGxpbmVudW1iZXI7XG59XG5cbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ubGluZS1udW1iZXJzID4gY29kZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5saW5lLW51bWJlcnMgLmxpbmUtbnVtYmVycy1yb3dzIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0dG9wOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGxlZnQ6IC0zLjhlbTtcblx0d2lkdGg6IDNlbTsgLyogd29ya3MgZm9yIGxpbmUtbnVtYmVycyBiZWxvdyAxMDAwIGxpbmVzICovXG5cdGxldHRlci1zcGFjaW5nOiAtMXB4O1xuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5O1xuXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cbn1cblxuXHQubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjb3VudGVyLWluY3JlbWVudDogbGluZW51bWJlcjtcblx0fVxuXG5cdFx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbjpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogY291bnRlcihsaW5lbnVtYmVyKTtcblx0XHRcdGNvbG9yOiAjOTk5O1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiAwLjhlbTtcblx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */</style><style>/**
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */

code[class*="language-"],
pre[class*="language-"] {
	color: #f8f8f2;
	background: none;
	text-shadow: 0 1px rgba(0, 0, 0, 0.3);
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #8292a2;
}

.token.punctuation {
	color: #f8f8f2;
}

.token.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: #f92672;
}

.token.boolean,
.token.number {
	color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
	color: #e6db74;
}

.token.keyword {
	color: #66d9ef;
}

.token.regex,
.token.important {
	color: #fd971f;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvcHJpc21qcy90aGVtZXMvcHJpc20tb2thaWRpYS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTs7QUFFRjs7Q0FFQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLHFDQUFxQztDQUNyQyxzRUFBc0U7Q0FDdEUsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZ0JBQWdCOztDQUVoQixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLFdBQVc7O0NBRVgscUJBQXFCO0NBR3JCLGFBQWE7QUFDZDs7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGNBQWM7Q0FDZCxvQkFBb0I7QUFDckI7O0FBRUE7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBLGdCQUFnQjtBQUNoQjtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCOztBQUVBOzs7O0NBSUMsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBOzs7OztDQUtDLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQyxjQUFjO0FBQ2Y7O0FBRUE7Ozs7OztDQU1DLGNBQWM7QUFDZjs7QUFFQTs7Ozs7O0NBTUMsY0FBYztBQUNmOztBQUVBOzs7O0NBSUMsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBOztDQUVDLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQyxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7QUFDYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogb2thaWRpYSB0aGVtZSBmb3IgSmF2YVNjcmlwdCwgQ1NTIGFuZCBIVE1MXG4gKiBMb29zZWx5IGJhc2VkIG9uIE1vbm9rYWkgdGV4dG1hdGUgdGhlbWUgYnkgaHR0cDovL3d3dy5tb25va2FpLm5sL1xuICogQGF1dGhvciBvY29kaWFcbiAqL1xuXG5jb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRjb2xvcjogI2Y4ZjhmMjtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0dGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0Zm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcblx0Zm9udC1zaXplOiAxZW07XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHdoaXRlLXNwYWNlOiBwcmU7XG5cdHdvcmQtc3BhY2luZzogbm9ybWFsO1xuXHR3b3JkLWJyZWFrOiBub3JtYWw7XG5cdHdvcmQtd3JhcDogbm9ybWFsO1xuXHRsaW5lLWhlaWdodDogMS41O1xuXG5cdC1tb3otdGFiLXNpemU6IDQ7XG5cdC1vLXRhYi1zaXplOiA0O1xuXHR0YWItc2l6ZTogNDtcblxuXHQtd2Via2l0LWh5cGhlbnM6IG5vbmU7XG5cdC1tb3otaHlwaGVuczogbm9uZTtcblx0LW1zLWh5cGhlbnM6IG5vbmU7XG5cdGh5cGhlbnM6IG5vbmU7XG59XG5cbi8qIENvZGUgYmxvY2tzICovXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcblx0cGFkZGluZzogMWVtO1xuXHRtYXJnaW46IC41ZW0gMDtcblx0b3ZlcmZsb3c6IGF1dG87XG5cdGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRiYWNrZ3JvdW5kOiAjMjcyODIyO1xufVxuXG4vKiBJbmxpbmUgY29kZSAqL1xuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRwYWRkaW5nOiAuMWVtO1xuXHRib3JkZXItcmFkaXVzOiAuM2VtO1xuXHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4udG9rZW4uY29tbWVudCxcbi50b2tlbi5wcm9sb2csXG4udG9rZW4uZG9jdHlwZSxcbi50b2tlbi5jZGF0YSB7XG5cdGNvbG9yOiAjODI5MmEyO1xufVxuXG4udG9rZW4ucHVuY3R1YXRpb24ge1xuXHRjb2xvcjogI2Y4ZjhmMjtcbn1cblxuLnRva2VuLm5hbWVzcGFjZSB7XG5cdG9wYWNpdHk6IC43O1xufVxuXG4udG9rZW4ucHJvcGVydHksXG4udG9rZW4udGFnLFxuLnRva2VuLmNvbnN0YW50LFxuLnRva2VuLnN5bWJvbCxcbi50b2tlbi5kZWxldGVkIHtcblx0Y29sb3I6ICNmOTI2NzI7XG59XG5cbi50b2tlbi5ib29sZWFuLFxuLnRva2VuLm51bWJlciB7XG5cdGNvbG9yOiAjYWU4MWZmO1xufVxuXG4udG9rZW4uc2VsZWN0b3IsXG4udG9rZW4uYXR0ci1uYW1lLFxuLnRva2VuLnN0cmluZyxcbi50b2tlbi5jaGFyLFxuLnRva2VuLmJ1aWx0aW4sXG4udG9rZW4uaW5zZXJ0ZWQge1xuXHRjb2xvcjogI2E2ZTIyZTtcbn1cblxuLnRva2VuLm9wZXJhdG9yLFxuLnRva2VuLmVudGl0eSxcbi50b2tlbi51cmwsXG4ubGFuZ3VhZ2UtY3NzIC50b2tlbi5zdHJpbmcsXG4uc3R5bGUgLnRva2VuLnN0cmluZyxcbi50b2tlbi52YXJpYWJsZSB7XG5cdGNvbG9yOiAjZjhmOGYyO1xufVxuXG4udG9rZW4uYXRydWxlLFxuLnRva2VuLmF0dHItdmFsdWUsXG4udG9rZW4uZnVuY3Rpb24sXG4udG9rZW4uY2xhc3MtbmFtZSB7XG5cdGNvbG9yOiAjZTZkYjc0O1xufVxuXG4udG9rZW4ua2V5d29yZCB7XG5cdGNvbG9yOiAjNjZkOWVmO1xufVxuXG4udG9rZW4ucmVnZXgsXG4udG9rZW4uaW1wb3J0YW50IHtcblx0Y29sb3I6ICNmZDk3MWY7XG59XG5cbi50b2tlbi5pbXBvcnRhbnQsXG4udG9rZW4uYm9sZCB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRva2VuLml0YWxpYyB7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnRva2VuLmVudGl0eSB7XG5cdGN1cnNvcjogaGVscDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */</style><noscript id="__next_css__DO_NOT_USE__"></noscript><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700,900);</style><style type="text/css">.huntr-ext-add-job-container .add-job-container {
  padding: 25px 25px 100px 25px;
  max-height: 550px;
}
.huntr-ext-add-job-container .save-job-footer {
  width: 300px;
  position: absolute;
  bottom: 22px;
  background-color: #f3f1f5;
  border-top: 1px solid rgba(0,0,0,0.1);
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
.huntr-ext-add-job-container .btn {
  margin-left: auto !important;
  margin-right: auto !important;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  width: 150px !important;
}
.huntr-ext-add-job-container .btn.waiting {
  pointer-events: none;
  cursor: not-allowed;
}
.huntr-ext-add-job-container .list-item {
  text-transform: capitalize;
}
.huntr-ext-parsed-jobs-container .no-results {
  font-size: 14px !important;
  color: rgba(25,4,69,0.7) !important;
  padding: 40px;
  text-align: center;
}
.huntr-ext-parsed-jobs-container .job-result {
  padding: 20px 25px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  cursor: pointer;
}
.huntr-ext-parsed-jobs-container .job-result:hover {
  background-color: rgba(25,4,69,0.1);
}
.huntr-ext-parsed-jobs-container .job-title {
  font-size: 14px !important;
  font-weight: bold !important;
  color: #190445 !important;
  margin-bottom: 3px !important;
}
.huntr-ext-parsed-jobs-container .job-company,
.huntr-ext-parsed-jobs-container .job-location {
  max-width: 100px !important;
}
.huntr-ext-parsed-jobs-container .job-company {
  margin-right: 10px !important;
  font-weight: bold;
  color: rgba(25,4,69,0.9);
}
.huntr-ext-parsed-jobs-container .job-location {
  color: rgba(25,4,69,0.7);
}
.huntr-ext-parsed-jobs-container .job-description {
  color: rgba(25,4,69,0.4);
}
.huntr-ext-parsed-jobs-container .job-company,
.huntr-ext-parsed-jobs-container .job-description,
.huntr-ext-parsed-jobs-container .job-location {
  font-size: 13px;
}
.huntr-ext-parsed-jobs-container p {
  line-height: 15px !important;
  margin: 0 !important;
}
.huntr-ext-parsed-jobs-container span {
  margin: 0 !important;
  max-width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}
.huntr-capitalize {
  text-transform: capitalize;
}
.huntr-error-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  background-color: #ff3569;
  padding: 15px;
  font-size: 12px;
  color: #fff;
  border-top: 1px solid rgba(0,0,0,0.1);
  text-align: center;
  font-family: Lato, sans-serif;
}
.huntr-ext-add-job-success-container {
  padding: 30px;
  text-align: center;
}
.huntr-ext-add-job-success-container .message {
  height: 180px !important;
  margin-top: 20px !important;
  border-bottom: 1px solid #eaeaea !important;
}
.huntr-ext-add-job-success-container .message p {
  font-size: 22px !important;
  line-height: 50px !important;
  text-align: center !important;
}
.huntr-ext-add-job-success-container .message .huntr-icon {
  font-size: 45px !important;
  color: rgba(74,74,74,0.2) !important;
}
.huntr-ext-add-job-success-container .huntr-footer {
  margin-top: 30px;
}
.huntr-ext-add-job-success-container .huntr-footer a.btn {
  color: #fff !important;
  width: 200px;
}
.huntr-ext-add-job-success-container .huntr-footer .btn img {
  position: absolute;
  left: 8px;
  top: 7px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
}
.huntr-ext-settings-container {
  margin-top: 25px;
  font-family: 'Lato', sans-serif !important;
  font-size: 16px;
  text-align: center;
  color: #4a4a4a;
  height: 140px;
  margin-top: 50px;
}
.huntr-ext-settings-container p {
  line-height: 18px;
}
.huntr-ext-time-to-upgrade {
  padding: 35px;
  text-align: center;
  color: #6a4feb;
}
.huntr-ext-time-to-upgrade .huntr-icon {
  margin: 10px 0 40px 0;
  font-size: 60px;
  color: rgba(106,79,235,0.1);
}
#huntr-react-container-2 {
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  display: block !important;
  font-family: 'Lato', sans-serif;
}
#huntr-react-container-2 a,
#huntr-react-container-2 p,
#huntr-react-container-2 span,
#huntr-react-container-2 div {
  font-family: 'Lato', sans-serif !important;
}
#huntr-react-container-2 form {
  margin: 0;
  padding: 0;
}
#huntr-react-container-2 ::-webkit-scrollbar-button {
  width: 0px !important;
  height: 0px !important;
}
#huntr-react-container-2 ::-webkit-scrollbar-track {
  box-shadow: none !important;
  background-color: "white" !important;
}
#huntr-react-container-2 ::-webkit-scrollbar-thumb {
  background-color: rgba(24,0,69,0.15) !important;
  border: 3px solid #fff !important;
  border-radius: 100px !important;
}
#huntr-react-container-2 ::-webkit-scrollbar-thumb:hover {
  background-color: rgba(24,0,69,0.2) !important;
}
#huntr-react-container-2 ::-webkit-scrollbar-thumb:active {
  background-color: rgba(24,0,69,0.2) !important;
}
#huntr-react-container-2 ::-webkit-scrollbar {
  width: 10px !important;
  height: 20px !important;
}
#huntr-react-container-2 .huntr-title {
  font-size: 22px;
  font-weight: regular;
  color: #190445 !important;
}
#huntr-react-container-2 .huntr-description {
  font-size: 15px;
  font-weight: regular;
  color: rgba(25,4,69,0.7) !important;
}
#huntr-react-container-2 a {
  cursor: pointer;
}
#huntr-react-container-2 .centered {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
#huntr-react-container-2 .field {
  position: relative;
}
#huntr-react-container-2 .field-container .huntr-icon {
  position: absolute;
  right: 11px;
  bottom: 11px;
  font-size: 16px;
  color: rgba(24,0,69,0.5);
  cursor: pointer;
}
#huntr-react-container-2 .field-container .input-image {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 7px;
  bottom: 8px;
  border-radius: 100%;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.1);
}
#huntr-react-container-2 .hide {
  visibility: hidden;
}
#huntr-react-container-2 .btn {
  font-family: 'Lato', sans-serif !important;
  border-radius: 4px !important;
  font-size: 14px;
  display: block !important;
  cursor: pointer !important;
  text-transform: capitalize !important;
  font-weight: 400 !important;
  letter-spacing: 0.2px !important;
  position: relative;
  transition: all 0.4s ease-out !important;
  text-align: center !important;
  box-shadow: none !important;
  border: none !important;
  padding: 0 !important;
  background-image: none !important;
  background-repeat: no-repeat !important;
  text-shadow: none !important;
  line-height: 37px;
  box-sizing: border-box !important;
}
#huntr-react-container-2 .btn .huntr-icon {
  position: absolute;
  right: 15px;
  top: 13px;
  color: rgba(255,255,255,0.4);
  font-size: 16px;
}
#huntr-react-container-2 .btn-purple {
  color: #fff;
  text-shadow: 0px 1px 4px rgba(0,0,0,0.1);
  background-color: #6a4feb;
}
#huntr-react-container-2 .btn-purple:hover {
  background-color: #8c35ff;
}
#huntr-react-container-2 .btn-purple:disabled {
  cursor: not-allowed;
  color: rgba(25,4,69,0.4) !important;
  background-color: rgba(25,4,69,0.2) !important;
}
#huntr-react-container-2 ul {
  margin: 0px;
  padding: 0px;
}
#huntr-react-container-2 ul li {
  list-style: none;
}
#huntr-react-container-2 .location-search .huntr-drop-down-menu span {
  font-size: 11px;
  display: inline-block;
}
#huntr-react-container-2 .truncate {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
#huntr-react-container-2 .huntr-drop-down-menu {
  color: #4a4a4a;
  font-family: 'Lato', sans-serif;
  background-color: #fff;
  position: absolute;
  width: 100%;
  border-radius: 4px;
  font-size: 13px;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.1);
  z-index: 1;
  border: 1px solid #ddd;
  max-height: 250px;
  overflow-y: auto;
}
#huntr-react-container-2 .huntr-drop-down-menu .huntr-ddmenu-footer {
  padding: 10px 10px;
  border-bottom: 1px solid #eee;
  text-align: left;
  cursor: pointer;
}
#huntr-react-container-2 .huntr-drop-down-menu .huntr-ddmenu-footer .huntr-icon {
  margin-right: 10px;
}
#huntr-react-container-2 .huntr-logo img {
  width: 16px;
  position: relative;
  top: -5px;
}
#huntr-react-container-2 .huntr-ext-nav-menu {
  width: 100%;
  position: relative;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
#huntr-react-container-2 .huntr-ext-nav-menu .nav-tooltip {
  display: none;
  position: absolute;
  background-color: #7f7b92;
  color: #fff;
  left: -45px;
  font-size: 11px;
  width: 90px;
  line-height: 30px;
  padding: 0px 15px;
  border-radius: 20px;
  top: -25px;
  text-align: center;
}
#huntr-react-container-2 .huntr-ext-nav-menu .nav-tooltip:before {
  content: '';
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #7f7b92;
  top: 30px;
  left: 45px;
}
#huntr-react-container-2 .huntr-ext-nav-menu ul li {
  position: relative;
  padding: 0px;
  cursor: pointer;
  margin: 0px 31px 0px 0px;
  font-size: 17px;
  display: inline-block;
  color: #b5b5b5;
}
#huntr-react-container-2 .huntr-ext-nav-menu ul li a,
#huntr-react-container-2 .huntr-ext-nav-menu ul li span {
  line-height: 50px;
  vertical-align: middle;
}
#huntr-react-container-2 .huntr-ext-nav-menu ul li:first-child {
  margin-left: 20px;
}
#huntr-react-container-2 .huntr-ext-nav-menu ul li:last-child {
  margin: 0px;
}
#huntr-react-container-2 .huntr-ext-nav-menu ul li:hover {
  color: rgba(0,0,0,0.8);
}
#huntr-react-container-2 .huntr-ext-nav-menu ul li:hover .nav-tooltip {
  display: inline-block;
}
#huntr-react-container-2 .huntr-ext-top-menu {
  background-color: #f3f1f5;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  position: relative;
  width: 100%;
  color: rgba(0,0,0,0.25);
}
#huntr-react-container-2 .huntr-ext-top-menu img {
  max-width: 60px;
  box-sizing: content-box;
  padding: 12px 0px 10px 12px;
}
#huntr-react-container-2 p,
#huntr-react-container-2 span {
  text-shadow: none;
}
#huntr-react-container-2 p.huntr-icon,
#huntr-react-container-2 span.huntr-icon {
  font-family: 'simple-line-icons' !important;
}
#huntr-react-container-2 p.huntr-icon:before,
#huntr-react-container-2 span.huntr-icon:before {
  font-family: 'simple-line-icons' !important;
}
#huntr-react-container-2 h1 {
  font-family: 'Lato', sans-serif !important;
  text-transform: uppercase !important;
  color: #4a4a4a !important;
  letter-spacing: 5px !important;
  font-size: 16px !important;
  font-weight: 900;
}
#huntr-react-container-2 .huntr-ext-app-container {
  position: fixed;
  right: 30px;
  top: 30px;
  z-index: 100000;
  max-height: 600px;
  min-height: 300px;
}
#huntr-react-container-2 .huntr-ext-app-container .inner-container {
  height: 100%;
  background-color: #fff;
  width: 300px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  outline: 1px solid rgba(0,0,0,0.1);
}
#huntr-react-container-2 .huntr-ext-minimize {
  position: absolute;
  right: 10px;
  top: 0px;
  font-size: 35px;
  font-family: 'Lato', sans-serif;
  line-height: normal;
  transform: rotate(45deg);
  cursor: pointer;
  color: rgba(74,74,74,0.2);
  font-weight: 400;
  z-index: 1;
}
#huntr-react-container-2 .huntr-ext-minimize:hover {
  color: rgba(74,74,74,0.7);
}
#huntr-react-container-2 .editable-text-field {
  width: 100%;
}
#huntr-react-container-2 .huntr-ext-app-mini {
  background-color: #6a4feb;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: fixed;
  z-index: 10000;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
}
#huntr-react-container-2 .huntr-ext-app-mini:after {
  content: 'h';
}
#huntr-react-container-2 .huntr-ext-component-container h1 {
  text-align: center;
  margin: 60px 0px;
}
#huntr-react-container-2 .huntr-ext-component-container .drop-down-button {
  font-family: 'Lato', sans-serif !important;
  -webkit-appearance: none !important;
  outline: 0 !important;
  border-radius: 2px !important;
  box-sizing: border-box !important;
  font-family: 'Lato', sans-serif !important;
  width: 100% !important;
  padding: 12px 12px !important;
  font-size: 14px !important;
  color: rgba(74,74,74,0.9) !important;
  margin-bottom: 14px !important;
  font-weight: 400 !important;
  background-color: #fafafa !important;
  border: 1px solid #dcdcdc !important;
  transition: none !important;
  text-align: left !important;
  cursor: pointer !important;
}
#huntr-react-container-2 .huntr-ext-component-container .dropdown-search-field input {
  padding: 0 33px 0 10px !important;
}
#huntr-react-container-2 .huntr-ext-component-container input {
  font-size: 14px !important;
  height: 35px;
}
#huntr-react-container-2 .huntr-ext-component-container input::-webkit-input-placeholder {
  font-size: 14px !important;
  font-weight: 400 !important;
  font-family: 'Lato', sans-serif !important;
  color: rgba(24,0,69,0.3) !important;
}
#huntr-react-container-2 .huntr-ext-component-container textarea {
  font-size: 14px !important;
  height: 130px;
}
#huntr-react-container-2 .huntr-ext-component-container textarea::-webkit-input-placeholder {
  font-size: 14px !important;
  font-weight: 400 !important;
  font-family: 'Lato', sans-serif !important;
  color: rgba(24,0,69,0.3) !important;
}
#huntr-react-container-2 .huntr-ext-component-container input,
#huntr-react-container-2 .huntr-ext-component-container textarea {
  box-shadow: rgba(24,0,69,0.1) 0px 0px 0px 1px, rgba(24,0,69,0.05) 0px 4px 10px !important;
  background-color: #fff;
  background-image: none !important;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif !important;
  letter-spacing: 0px;
  width: 100%;
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: none !important;
  font-weight: 400 !important;
  margin: 0px !important;
  color: rgba(25,4,69,0.7) !important;
  border-radius: 6px !important;
  line-height: normal !important;
  padding: 0 10px !important;
}
#huntr-react-container-2 .huntr-ext-component-container input:focus,
#huntr-react-container-2 .huntr-ext-component-container textarea:focus {
  box-shadow: #8c35ff 0px 0px 0px 2px, rgba(140,53,255,0.1) 0px 4px 10px !important;
  outline: 1px solid #8c35ff;
}
#huntr-react-container-2 .huntr-ext-component-container input.clean,
#huntr-react-container-2 .huntr-ext-component-container textarea.clean {
  box-shadow: none !important;
  border: none !important;
  height: 100%;
  padding: 0 !important;
}
#huntr-react-container-2 .huntr-ext-component-container input.clean:focus,
#huntr-react-container-2 .huntr-ext-component-container textarea.clean:focus,
#huntr-react-container-2 .huntr-ext-component-container input.clean::selection,
#huntr-react-container-2 .huntr-ext-component-container textarea.clean::selection {
  box-shadow: none !important;
  border-bottom: none !important;
}
#huntr-react-container-2 .huntr-ext-component-container input:focus,
#huntr-react-container-2 .huntr-ext-component-container textarea:focus,
#huntr-react-container-2 .huntr-ext-component-container input::selection,
#huntr-react-container-2 .huntr-ext-component-container textarea::selection {
  outline: 0;
  border-bottom: none !important;
  background-color: #fff !important;
}
#huntr-react-container-2 .huntr-ext-component-container input::selection,
#huntr-react-container-2 .huntr-ext-component-container textarea::selection {
  background-color: #8c35ff !important;
  color: #fff;
}
.huntr-loader ::after,
.huntr-loader ::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.huntr-loader {
  display: block;
  height: 50px;
  width: 50px;
  animation: huntr-loader-1 3s linear infinite;
  -webkit-animation: huntr-loader-1 3s linear infinite;
}
@-webkit-keyframes huntr-loader-1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.huntr-loader span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 50px;
  width: 50px;
  clip: rect(0px, 50px, 50px, 0);
  -webkit-animation: huntr-loader-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  animation: huntr-loader-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}
@-webkit-keyframes huntr-loader-2 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.huntr-loader span::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 50px;
  width: 50px;
  border: 4px solid transparent;
  border-top: 4px solid #6a4feb;
  border-radius: 50%;
  -webkit-animation: huntr-loader-3 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  animation: huntr-loader-3 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}
@-webkit-keyframes huntr-loader-3 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.huntr-loader span::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 50px;
  width: 50px;
  border: 4px solid rgba(106,79,235,0.2);
  border-radius: 50%;
}
.react-datepicker-wrapper,
.react-datepicker__input-container {
  display: block !important;
}
.huntr-date-picker-popper {
  font-size: 0.8rem;
}
.huntr-date-picker-popper .react-datepicker {
  font-family: "Lato", Helvetica, Arial, sans-serif !important;
  background-color: #fff !important;
  color: #180045 !important;
  border: 1px solid rgba(24,0,69,0.1) !important;
  border-radius: 8px !important;
  box-shadow: 0px 3px 7px -1px rgba(24,0,69,0.1) !important;
}
.huntr-date-picker-popper .react-datepicker__header {
  background-color: #fafafb !important;
  border-bottom: 1px solid rgba(24,0,69,0.1) !important;
}
.huntr-date-picker-popper .react-datepicker__day {
  color: rgba(24,0,69,0.6) !important;
}
.huntr-date-picker-popper .react-datepicker__day-name {
  color: rgba(24,0,69,0.7) !important;
}
.huntr-date-picker-popper .react-datepicker__day--disabled {
  color: rgba(24,0,69,0.21) !important;
}
.huntr-date-picker-popper .react-datepicker__day--keyboard-selected,
.huntr-date-picker-popper .react-datepicker__day--selected {
  background-color: #8c35ff !important;
  color: #fff !important;
}
.huntr-date-picker-popper .react-datepicker__today-button {
  background-color: rgba(24,0,69,0.02) !important;
  border-top: 1px solid rgba(24,0,69,0.1) !important;
}
.huntr-date-picker-popper .react-datepicker__time-container--with-today-button {
  right: -96px !important;
  border: 1px solid rgba(24,0,69,0.1) !important;
  border-radius: 8px !important;
  box-shadow: 0px 3px 7px -1px rgba(24,0,69,0.1) !important;
}
.huntr-date-picker-popper .react-datepicker__time-list-item {
  color: rgba(24,0,69,0.7) !important;
  height: 18px !important;
}
.huntr-date-picker-popper .react-datepicker__time-list-item::hover {
  background-color: #fafafb !important;
}
.huntr-date-picker-popper .react-datepicker__time-list-item--selected {
  background-color: #8c35ff !important;
  color: #fff;
}
.huntr-date-picker {
  display: block;
}
.react-datepicker__close-icon {
  width: auto !important;
}
.react-datepicker__close-icon::after {
  background-color: #180045 !important;
  width: 12px !important;
  height: 12px !important;
}
@-moz-keyframes huntr-loader-1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes huntr-loader-1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-o-keyframes huntr-loader-1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes huntr-loader-1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-moz-keyframes huntr-loader-2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes huntr-loader-2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-o-keyframes huntr-loader-2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes huntr-loader-2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-moz-keyframes huntr-loader-3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes huntr-loader-3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-o-keyframes huntr-loader-3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes huntr-loader-3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style><style type="text/css">/*!
 * Quill Editor v1.3.0
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
#huntr-react-container-2 .ql-container span,
#huntr-react-container-2 .ql-container li,
#huntr-react-container-2 .ql-container ul,
#huntr-react-container-2 .ql-container div,
#huntr-react-container-2 .ql-container strong,
#huntr-react-container-2 .ql-container b,
#huntr-react-container-2 .ql-container h1,
#huntr-react-container-2 .ql-container h2,
#huntr-react-container-2 .ql-container h3,
#huntr-react-container-2 .ql-container p  {
  font-size: 14px;
  font-family: Lato, Arial, sans-serif !important;
  color: #180045 !important;
}

#huntr-react-container-2 .ql-container {
  box-sizing: border-box;
  font-family: Lato, Arial, sans-serif;
  font-size: 13px;
  height: 100%;
  margin: 0px;
  position: relative;
}
#huntr-react-container-2 .ql-container.ql-disabled .ql-tooltip {
  visibility: hidden;
}
#huntr-react-container-2 .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
  pointer-events: none;
}
#huntr-react-container-2 .ql-clipboard {
  left: -100000px;
  height: 1px;
  overflow-y: hidden;
  position: absolute;
  top: 50%;
}
#huntr-react-container-2 .ql-clipboard p {
  margin: 0;
  padding: 0;
}
#huntr-react-container-2 .ql-editor {
  box-sizing: border-box;
  line-height: 1.42;
  height: 100% !important;
  outline: none;
  overflow-y: auto;
  padding: 12px 18px;
  tab-size: 4;
  -moz-tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
}
#huntr-react-container-2 .ql-editor > * {
  cursor: text;
}
#huntr-react-container-2 .ql-editor p,
#huntr-react-container-2 .ql-editor ol,
#huntr-react-container-2 .ql-editor ul,
#huntr-react-container-2 .ql-editor pre,
#huntr-react-container-2 .ql-editor blockquote,
#huntr-react-container-2 .ql-editor h1,
#huntr-react-container-2 .ql-editor h2,
#huntr-react-container-2 .ql-editor h3,
#huntr-react-container-2 .ql-editor h4,
#huntr-react-container-2 .ql-editor h5,
#huntr-react-container-2 .ql-editor h6 {
  margin: 0;
  padding: 0;
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
#huntr-react-container-2 .ql-editor ol,
#huntr-react-container-2 .ql-editor ul {
  padding-left: 1.5em;
}
#huntr-react-container-2 .ql-editor ol > li,
#huntr-react-container-2 .ql-editor ul > li {
  list-style-type: none;
}
#huntr-react-container-2 .ql-editor ul > li::before {
  content: '\2022';
}
#huntr-react-container-2 .ql-editor ul[data-checked=true],
#huntr-react-container-2 .ql-editor ul[data-checked=false] {
  pointer-events: none;
}
#huntr-react-container-2 .ql-editor ul[data-checked=true] > li *,
#huntr-react-container-2 .ql-editor ul[data-checked=false] > li * {
  pointer-events: all;
}
#huntr-react-container-2 .ql-editor ul[data-checked=true] > li::before,
#huntr-react-container-2 .ql-editor ul[data-checked=false] > li::before {
  color: #777;
  cursor: pointer;
  pointer-events: all;
}
#huntr-react-container-2 .ql-editor ul[data-checked=true] > li::before {
  content: '\2611';
}
#huntr-react-container-2 .ql-editor ul[data-checked=false] > li::before {
  content: '\2610';
}
#huntr-react-container-2 .ql-editor li::before {
  display: inline-block;
  white-space: nowrap;
  width: 1.2em;
}
#huntr-react-container-2 .ql-editor li:not(.ql-direction-rtl)::before {
  margin-left: -1.5em;
  margin-right: 0.3em;
  text-align: right;
}
#huntr-react-container-2 .ql-editor li.ql-direction-rtl::before {
  margin-left: 0.3em;
  margin-right: -1.5em;
}
#huntr-react-container-2 .ql-editor ol li:not(.ql-direction-rtl),
#huntr-react-container-2 .ql-editor ul li:not(.ql-direction-rtl) {
  padding-left: 1.5em;
}
#huntr-react-container-2 .ql-editor ol li.ql-direction-rtl,
#huntr-react-container-2 .ql-editor ul li.ql-direction-rtl {
  padding-right: 1.5em;
}
#huntr-react-container-2 .ql-editor ol li {
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  counter-increment: list-0;
}
#huntr-react-container-2 .ql-editor ol li:before {
  content: counter(list-0, decimal) '. ';
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-1 {
  counter-increment: list-1;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-1:before {
  content: counter(list-1, lower-alpha) '. ';
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-1 {
  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-2 {
  counter-increment: list-2;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-2:before {
  content: counter(list-2, lower-roman) '. ';
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-2 {
  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-3 {
  counter-increment: list-3;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-3:before {
  content: counter(list-3, decimal) '. ';
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-3 {
  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-4 {
  counter-increment: list-4;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-4:before {
  content: counter(list-4, lower-alpha) '. ';
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-4 {
  counter-reset: list-5 list-6 list-7 list-8 list-9;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-5 {
  counter-increment: list-5;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-5:before {
  content: counter(list-5, lower-roman) '. ';
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-5 {
  counter-reset: list-6 list-7 list-8 list-9;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-6 {
  counter-increment: list-6;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-6:before {
  content: counter(list-6, decimal) '. ';
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-6 {
  counter-reset: list-7 list-8 list-9;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-7 {
  counter-increment: list-7;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-7:before {
  content: counter(list-7, lower-alpha) '. ';
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-7 {
  counter-reset: list-8 list-9;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-8 {
  counter-increment: list-8;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-8:before {
  content: counter(list-8, lower-roman) '. ';
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-8 {
  counter-reset: list-9;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-9 {
  counter-increment: list-9;
}
#huntr-react-container-2 .ql-editor ol li.ql-indent-9:before {
  content: counter(list-9, decimal) '. ';
}
#huntr-react-container-2 .ql-editor .ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 3em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 4.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 3em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 4.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 6em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 7.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 6em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 7.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 9em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 10.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 9em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 10.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 12em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 13.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 12em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 13.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 15em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 16.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 15em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 16.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 18em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 19.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 18em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 19.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 21em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 22.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 21em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 22.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 24em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 25.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 24em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 25.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 27em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 28.5em;
}
#huntr-react-container-2 .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 27em;
}
#huntr-react-container-2 .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 28.5em;
}
#huntr-react-container-2 .ql-editor .ql-video {
  display: block;
  max-width: 100%;
}
#huntr-react-container-2 .ql-editor .ql-video.ql-align-center {
  margin: 0 auto;
}
#huntr-react-container-2 .ql-editor .ql-video.ql-align-right {
  margin: 0 0 0 auto;
}
#huntr-react-container-2 .ql-editor .ql-bg-black {
  background-color: #000;
}
#huntr-react-container-2 .ql-editor .ql-bg-red {
  background-color: #e60000;
}
#huntr-react-container-2 .ql-editor .ql-bg-orange {
  background-color: #f90;
}
#huntr-react-container-2 .ql-editor .ql-bg-yellow {
  background-color: #ff0;
}
#huntr-react-container-2 .ql-editor .ql-bg-green {
  background-color: #008a00;
}
#huntr-react-container-2 .ql-editor .ql-bg-blue {
  background-color: #06c;
}
#huntr-react-container-2 .ql-editor .ql-bg-purple {
  background-color: #93f;
}
#huntr-react-container-2 .ql-editor .ql-color-white {
  color: #fff;
}
#huntr-react-container-2 .ql-editor .ql-color-red {
  color: #e60000;
}
#huntr-react-container-2 .ql-editor .ql-color-orange {
  color: #f90;
}
#huntr-react-container-2 .ql-editor .ql-color-yellow {
  color: #ff0;
}
#huntr-react-container-2 .ql-editor .ql-color-green {
  color: #008a00;
}
#huntr-react-container-2 .ql-editor .ql-color-blue {
  color: #06c;
}
#huntr-react-container-2 .ql-editor .ql-color-purple {
  color: #93f;
}
#huntr-react-container-2 .ql-editor .ql-font-serif {
  font-family: Georgia, Times New Roman, serif;
}
#huntr-react-container-2 .ql-editor .ql-font-monospace {
  font-family: Monaco, Courier New, monospace;
}
#huntr-react-container-2 .ql-editor .ql-size-small {
  font-size: 0.75em;
}
#huntr-react-container-2 .ql-editor .ql-size-large {
  font-size: 1.5em;
}
#huntr-react-container-2 .ql-editor .ql-size-huge {
  font-size: 2.5em;
}
#huntr-react-container-2 .ql-editor .ql-direction-rtl {
  direction: rtl;
  text-align: inherit;
}
#huntr-react-container-2 .ql-editor .ql-align-center {
  text-align: center;
}
#huntr-react-container-2 .ql-editor .ql-align-justify {
  text-align: justify;
}
#huntr-react-container-2 .ql-editor .ql-align-right {
  text-align: right;
}
#huntr-react-container-2 .ql-editor .ql-embed-selected {
  border: 1px solid #777;
  user-select: none;
}
#huntr-react-container-2 .ql-editor.ql-blank::before {
  color: rgba(25,4,69,0.4);
  content: attr(data-placeholder);
  font-style: normal;
  pointer-events: none;
  position: absolute;
}
#huntr-react-container-2 .ql-snow.ql-toolbar:after,
#huntr-react-container-2 .ql-snow .ql-toolbar:after {
  clear: both;
  content: '';
  display: table;
}
#huntr-react-container-2 .ql-snow.ql-toolbar button,
#huntr-react-container-2 .ql-snow .ql-toolbar button {
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  float: left;
  height: 24px;
  padding: 3px 5px;
  width: 28px;
  box-shadow: none;
  min-height: 1em;
}
#huntr-react-container-2 .ql-snow.ql-toolbar button svg,
#huntr-react-container-2 .ql-snow .ql-toolbar button svg {
  float: left;
  height: 100%;
}
#huntr-react-container-2 .ql-snow.ql-toolbar button:active:hover,
#huntr-react-container-2 .ql-snow .ql-toolbar button:active:hover {
  outline: none;
}
#huntr-react-container-2 .ql-snow.ql-toolbar input.ql-image[type=file],
#huntr-react-container-2 .ql-snow .ql-toolbar input.ql-image[type=file] {
  display: none;
}
#huntr-react-container-2 .ql-snow.ql-toolbar button:hover,
#huntr-react-container-2 .ql-snow .ql-toolbar button:hover,
#huntr-react-container-2 .ql-snow.ql-toolbar button:focus,
#huntr-react-container-2 .ql-snow .ql-toolbar button:focus,
#huntr-react-container-2 .ql-snow.ql-toolbar button.ql-active,
#huntr-react-container-2 .ql-snow .ql-toolbar button.ql-active,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label:hover,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label:hover,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label.ql-active,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label.ql-active,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item:hover,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item:hover,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
  color: #06c;
}
#huntr-react-container-2 .ql-snow.ql-toolbar button:hover .ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar button:hover .ql-fill,
#huntr-react-container-2 .ql-snow.ql-toolbar button:focus .ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar button:focus .ql-fill,
#huntr-react-container-2 .ql-snow.ql-toolbar button.ql-active .ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar button.ql-active .ql-fill,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
#huntr-react-container-2 .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
#huntr-react-container-2 .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
#huntr-react-container-2 .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
  fill: #06c;
}
#huntr-react-container-2 .ql-snow.ql-toolbar button:hover .ql-stroke,
#huntr-react-container-2 .ql-snow .ql-toolbar button:hover .ql-stroke,
#huntr-react-container-2 .ql-snow.ql-toolbar button:focus .ql-stroke,
#huntr-react-container-2 .ql-snow .ql-toolbar button:focus .ql-stroke,
#huntr-react-container-2 .ql-snow.ql-toolbar button.ql-active .ql-stroke,
#huntr-react-container-2 .ql-snow .ql-toolbar button.ql-active .ql-stroke,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
#huntr-react-container-2 .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
#huntr-react-container-2 .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
#huntr-react-container-2 .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
#huntr-react-container-2 .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
#huntr-react-container-2 .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
#huntr-react-container-2 .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
#huntr-react-container-2 .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
#huntr-react-container-2 .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
  stroke: #06c;
}
@media (pointer: coarse) {
  .ql-snow.ql-toolbar button:hover:not(.ql-active),
  .ql-snow .ql-toolbar button:hover:not(.ql-active) {
    color: #444;
  }
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
    fill: #444;
  }
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
    stroke: #444;
  }
}
#huntr-react-container-2 .ql-snow {
  box-sizing: border-box;
}
#huntr-react-container-2 .ql-snow * {
  box-sizing: border-box;
}
#huntr-react-container-2 .ql-snow .ql-hidden {
  display: none;
}
#huntr-react-container-2 .ql-snow .ql-out-bottom,
#huntr-react-container-2 .ql-snow .ql-out-top {
  visibility: hidden;
}
#huntr-react-container-2 .ql-snow .ql-tooltip {
  position: absolute;
  transform: translateY(10px);
}
#huntr-react-container-2 .ql-snow .ql-tooltip a {
  cursor: pointer;
  text-decoration: none;
}
#huntr-react-container-2 .ql-snow .ql-tooltip.ql-flip {
  transform: translateY(-10px);
}
#huntr-react-container-2 .ql-snow .ql-formats {
  display: inline-block;
  vertical-align: middle;
}
#huntr-react-container-2 .ql-snow .ql-formats:after {
  clear: both;
  content: '';
  display: table;
}
#huntr-react-container-2 .ql-snow .ql-stroke {
  fill: none;
  stroke: #444;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}
#huntr-react-container-2 .ql-snow .ql-stroke-miter {
  fill: none;
  stroke: #444;
  stroke-miterlimit: 10;
  stroke-width: 2;
}
#huntr-react-container-2 .ql-snow .ql-fill,
#huntr-react-container-2 .ql-snow .ql-stroke.ql-fill {
  fill: #444;
}
#huntr-react-container-2 .ql-snow .ql-empty {
  fill: none;
}
#huntr-react-container-2 .ql-snow .ql-even {
  fill-rule: evenodd;
}
#huntr-react-container-2 .ql-snow .ql-thin,
#huntr-react-container-2 .ql-snow .ql-stroke.ql-thin {
  stroke-width: 1;
}
#huntr-react-container-2 .ql-snow .ql-transparent {
  opacity: 0.4;
}
#huntr-react-container-2 .ql-snow .ql-direction svg:last-child {
  display: none;
}
#huntr-react-container-2 .ql-snow .ql-direction.ql-active svg:last-child {
  display: inline;
}
#huntr-react-container-2 .ql-snow .ql-direction.ql-active svg:first-child {
  display: none;
}
#huntr-react-container-2 .ql-snow .ql-editor h1 {
  font-size: 2em;
}
#huntr-react-container-2 .ql-snow .ql-editor h2 {
  font-size: 1.5em;
}
#huntr-react-container-2 .ql-snow .ql-editor h3 {
  font-size: 1.17em;
}
#huntr-react-container-2 .ql-snow .ql-editor h4 {
  font-size: 1em;
}
#huntr-react-container-2 .ql-snow .ql-editor h5 {
  font-size: 0.83em;
}
#huntr-react-container-2 .ql-snow .ql-editor h6 {
  font-size: 0.67em;
}
#huntr-react-container-2 .ql-snow .ql-editor a {
  text-decoration: underline;
}
#huntr-react-container-2 .ql-snow .ql-editor blockquote {
  border-left: 4px solid #ccc;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 16px;
}
#huntr-react-container-2 .ql-snow .ql-editor code,
#huntr-react-container-2 .ql-snow .ql-editor pre {
  background-color: #f0f0f0;
  border-radius: 3px;
}
#huntr-react-container-2 .ql-snow .ql-editor pre {
  white-space: pre-wrap;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 10px;
}
#huntr-react-container-2 .ql-snow .ql-editor code {
  font-size: 85%;
  padding-bottom: 2px;
  padding-top: 2px;
}
#huntr-react-container-2 .ql-snow .ql-editor code:before,
#huntr-react-container-2 .ql-snow .ql-editor code:after {
  content: "\A0";
  letter-spacing: -2px;
}
#huntr-react-container-2 .ql-snow .ql-editor pre.ql-syntax {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible;
}
#huntr-react-container-2 .ql-snow .ql-editor img {
  max-width: 100%;
}
#huntr-react-container-2 .ql-snow .ql-picker {
  color: #444;
  display: inline-block;
  float: left;
  font-size: 14px;
  font-weight: 500;
  height: 24px;
  position: relative;
  vertical-align: middle;
}
#huntr-react-container-2 .ql-snow .ql-picker-label {
  cursor: pointer;
  display: inline-block;
  height: 100%;
  padding-left: 8px;
  padding-right: 2px;
  position: relative;
  width: 100%;
}
#huntr-react-container-2 .ql-snow .ql-picker-label::before {
  display: inline-block;
  line-height: 22px;
}
#huntr-react-container-2 .ql-snow .ql-picker-options {
  background-color: #fff;
  display: none;
  min-width: 100%;
  padding: 4px 8px;
  position: absolute;
  white-space: nowrap;
}
#huntr-react-container-2 .ql-snow .ql-picker-options .ql-picker-item {
  cursor: pointer;
  display: block;
  padding-bottom: 5px;
  padding-top: 5px;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-expanded .ql-picker-label {
  color: #ccc;
  z-index: 2;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
  fill: #ccc;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
  stroke: #ccc;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-expanded .ql-picker-options {
  display: block;
  margin-top: -1px;
  top: 100%;
  z-index: 1;
}
#huntr-react-container-2 .ql-snow .ql-color-picker,
#huntr-react-container-2 .ql-snow .ql-icon-picker {
  width: 28px;
}
#huntr-react-container-2 .ql-snow .ql-color-picker .ql-picker-label,
#huntr-react-container-2 .ql-snow .ql-icon-picker .ql-picker-label {
  padding: 2px 4px;
}
#huntr-react-container-2 .ql-snow .ql-color-picker .ql-picker-label svg,
#huntr-react-container-2 .ql-snow .ql-icon-picker .ql-picker-label svg {
  right: 4px;
}
#huntr-react-container-2 .ql-snow .ql-icon-picker .ql-picker-options {
  padding: 4px 0px;
}
#huntr-react-container-2 .ql-snow .ql-icon-picker .ql-picker-item {
  height: 24px;
  width: 24px;
  padding: 2px 4px;
}
#huntr-react-container-2 .ql-snow .ql-color-picker .ql-picker-options {
  padding: 3px 5px;
  width: 152px;
}
#huntr-react-container-2 .ql-snow .ql-color-picker .ql-picker-item {
  border: 1px solid transparent;
  float: left;
  height: 16px;
  margin: 2px;
  padding: 0px;
  width: 16px;
}
#huntr-react-container-2 .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
  position: absolute;
  margin-top: -9px;
  right: 0;
  top: 50%;
  width: 18px;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
  content: attr(data-label);
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header {
  width: 98px;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: 'Normal';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: 'Heading 1';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: 'Heading 2';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: 'Heading 3';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: 'Heading 4';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: 'Heading 5';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: 'Heading 6';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  font-size: 2em;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  font-size: 1.5em;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  font-size: 1.17em;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  font-size: 1em;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  font-size: 0.83em;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  font-size: 0.67em;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-font {
  width: 108px;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-label::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: 'Sans Serif';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
  content: 'Serif';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
  content: 'Monospace';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
  font-family: Georgia, Times New Roman, serif;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
  font-family: Monaco, Courier New, monospace;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-size {
  width: 98px;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-label::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: 'Normal';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
  content: 'Small';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
  content: 'Large';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
  content: 'Huge';
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
  font-size: 10px;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
  font-size: 18px;
}
#huntr-react-container-2 .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
  font-size: 32px;
}
#huntr-react-container-2 .ql-snow .ql-color-picker.ql-background .ql-picker-item {
  background-color: #fff;
}
#huntr-react-container-2 .ql-snow .ql-color-picker.ql-color .ql-picker-item {
  background-color: #000;
}
#huntr-react-container-2 .ql-toolbar.ql-snow {
  border-bottom: 1px solid #ECE9F2;
  border-top: none;
  border-left: none;
  border-right: none;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  padding: 8px;
}
#huntr-react-container-2 .ql-toolbar.ql-snow .ql-formats {
  margin-right: 15px;
}
#huntr-react-container-2 .ql-toolbar.ql-snow .ql-picker-label {
  border: 1px solid transparent;
}
#huntr-react-container-2 .ql-toolbar.ql-snow .ql-picker-options {
  border: 1px solid transparent;
  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;
}
#huntr-react-container-2 .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  border-color: #ccc;
}
#huntr-react-container-2 .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  border-color: #ccc;
}
#huntr-react-container-2 .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
#huntr-react-container-2 .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
  border-color: #000;
}
#huntr-react-container-2 .ql-toolbar.ql-snow + .ql-container.ql-snow {
  border: none;
  padding-bottom: 40px;
}
#huntr-react-container-2 .ql-snow .ql-tooltip {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 5px #ddd;
  color: #444;
  padding: 5px 12px;
  white-space: nowrap;
}
#huntr-react-container-2 .ql-snow .ql-tooltip::before {
  content: "Visit URL:";
  line-height: 26px;
  margin-right: 8px;
}
#huntr-react-container-2 .ql-snow .ql-tooltip input[type=text] {
  display: none;
  border: 1px solid #ccc;
  font-size: 13px;
  height: 26px;
  margin: 0px;
  padding: 3px 5px;
  width: 170px;
}
#huntr-react-container-2 .ql-snow .ql-tooltip a.ql-preview {
  display: inline-block;
  max-width: 200px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}
#huntr-react-container-2 .ql-snow .ql-tooltip a.ql-action::after {
  border-right: 1px solid #ccc;
  content: 'Edit';
  margin-left: 16px;
  padding-right: 8px;
}
#huntr-react-container-2 .ql-snow .ql-tooltip a.ql-remove::before {
  content: 'Remove';
  margin-left: 8px;
}
#huntr-react-container-2 .ql-snow .ql-tooltip a {
  line-height: 26px;
}
#huntr-react-container-2 .ql-snow .ql-tooltip.ql-editing a.ql-preview,
#huntr-react-container-2 .ql-snow .ql-tooltip.ql-editing a.ql-remove {
  display: none;
}
#huntr-react-container-2 .ql-snow .ql-tooltip.ql-editing input[type=text] {
  display: inline-block;
}
#huntr-react-container-2 .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0px;
  content: 'Save';
  padding-right: 0px;
}
#huntr-react-container-2 .ql-snow .ql-tooltip[data-mode=link]::before {
  content: "Enter link:";
}
#huntr-react-container-2 .ql-snow .ql-tooltip[data-mode=formula]::before {
  content: "Enter formula:";
}
#huntr-react-container-2 .ql-snow .ql-tooltip[data-mode=video]::before {
  content: "Enter video:";
}
#huntr-react-container-2 .ql-snow a {
  color: #06c;
}
</style><style type="text/css">.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow {
  margin-left: -8px;
  position: absolute;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before,
.react-datepicker__month-year-read-view--down-arrow::before {
  box-sizing: content-box;
  position: absolute;
  border: 8px solid transparent;
  height: 0;
  width: 1px;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before,
.react-datepicker__month-year-read-view--down-arrow::before {
  content: "";
  z-index: -1;
  border-width: 8px;
  left: -8px;
  border-bottom-color: #aeaeae;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
  top: 0;
  margin-top: -8px;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
  border-top: none;
  border-bottom-color: #f0f0f0;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
  top: -1px;
  border-bottom-color: #aeaeae;
}

.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow {
  bottom: 0;
  margin-bottom: -8px;
}

.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before,
.react-datepicker__month-year-read-view--down-arrow::before {
  border-bottom: none;
  border-top-color: #fff;
}

.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before,
.react-datepicker__month-year-read-view--down-arrow::before {
  bottom: -1px;
  border-top-color: #aeaeae;
}

.react-datepicker-wrapper {
  display: inline-block;
  padding: 0;
  border: 0;
}

.react-datepicker {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  display: inline-block;
  position: relative;
}

.react-datepicker--time-only .react-datepicker__triangle {
  left: 35px;
}

.react-datepicker--time-only .react-datepicker__time-container {
  border-left: 0;
}

.react-datepicker--time-only .react-datepicker__time,
.react-datepicker--time-only .react-datepicker__time-box {
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.react-datepicker__triangle {
  position: absolute;
  left: 50px;
}

.react-datepicker-popper {
  z-index: 1;
}

.react-datepicker-popper[data-placement^="bottom"] {
  margin-top: 10px;
}

.react-datepicker-popper[data-placement="bottom-end"] .react-datepicker__triangle, .react-datepicker-popper[data-placement="top-end"] .react-datepicker__triangle {
  left: auto;
  right: 50px;
}

.react-datepicker-popper[data-placement^="top"] {
  margin-bottom: 10px;
}

.react-datepicker-popper[data-placement^="right"] {
  margin-left: 8px;
}

.react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {
  left: auto;
  right: 42px;
}

.react-datepicker-popper[data-placement^="left"] {
  margin-right: 8px;
}

.react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
  left: 42px;
  right: auto;
}

.react-datepicker__header {
  text-align: center;
  background-color: #f0f0f0;
  border-bottom: 1px solid #aeaeae;
  border-top-left-radius: 0.3rem;
  padding-top: 8px;
  position: relative;
}

.react-datepicker__header--time {
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

.react-datepicker__header--time:not(.react-datepicker__header--time--only) {
  border-top-left-radius: 0;
}

.react-datepicker__header:not(.react-datepicker__header--has-time-select) {
  border-top-right-radius: 0.3rem;
}

.react-datepicker__year-dropdown-container--select,
.react-datepicker__month-dropdown-container--select,
.react-datepicker__month-year-dropdown-container--select,
.react-datepicker__year-dropdown-container--scroll,
.react-datepicker__month-dropdown-container--scroll,
.react-datepicker__month-year-dropdown-container--scroll {
  display: inline-block;
  margin: 0 2px;
}

.react-datepicker__current-month,
.react-datepicker-time__header,
.react-datepicker-year-header {
  margin-top: 0;
  color: #000;
  font-weight: bold;
  font-size: 0.944rem;
}

.react-datepicker-time__header {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.react-datepicker__navigation {
  background: none;
  line-height: 1.7rem;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 10px;
  width: 0;
  padding: 0;
  border: 0.45rem solid transparent;
  z-index: 1;
  height: 10px;
  width: 10px;
  text-indent: -999em;
  overflow: hidden;
}

.react-datepicker__navigation--previous {
  left: 10px;
  border-right-color: #ccc;
}

.react-datepicker__navigation--previous:hover {
  border-right-color: #b3b3b3;
}

.react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {
  border-right-color: #e6e6e6;
  cursor: default;
}

.react-datepicker__navigation--next {
  right: 10px;
  border-left-color: #ccc;
}

.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
  right: 95px;
}

.react-datepicker__navigation--next:hover {
  border-left-color: #b3b3b3;
}

.react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {
  border-left-color: #e6e6e6;
  cursor: default;
}

.react-datepicker__navigation--years {
  position: relative;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.react-datepicker__navigation--years-previous {
  top: 4px;
  border-top-color: #ccc;
}

.react-datepicker__navigation--years-previous:hover {
  border-top-color: #b3b3b3;
}

.react-datepicker__navigation--years-upcoming {
  top: -4px;
  border-bottom-color: #ccc;
}

.react-datepicker__navigation--years-upcoming:hover {
  border-bottom-color: #b3b3b3;
}

.react-datepicker__month-container {
  float: left;
}

.react-datepicker__year {
  margin: 0.4rem;
  text-align: center;
}

.react-datepicker__year-wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 180px;
}

.react-datepicker__year .react-datepicker__year-text {
  display: inline-block;
  width: 4rem;
  margin: 2px;
}

.react-datepicker__month {
  margin: 0.4rem;
  text-align: center;
}

.react-datepicker__month .react-datepicker__month-text,
.react-datepicker__month .react-datepicker__quarter-text {
  display: inline-block;
  width: 4rem;
  margin: 2px;
}

.react-datepicker__input-time-container {
  clear: both;
  width: 100%;
  float: left;
  margin: 5px 0 10px 15px;
  text-align: left;
}

.react-datepicker__input-time-container .react-datepicker-time__caption {
  display: inline-block;
}

.react-datepicker__input-time-container .react-datepicker-time__input-container {
  display: inline-block;
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {
  display: inline-block;
  margin-left: 10px;
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {
  width: auto;
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-inner-spin-button,
.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"] {
  -moz-appearance: textfield;
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {
  margin-left: 5px;
  display: inline-block;
}

.react-datepicker__time-container {
  float: right;
  border-left: 1px solid #aeaeae;
  width: 85px;
}

.react-datepicker__time-container--with-today-button {
  display: inline;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  position: absolute;
  right: -72px;
  top: 0;
}

.react-datepicker__time-container .react-datepicker__time {
  position: relative;
  background: white;
  border-bottom-right-radius: 0.3rem;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
  width: 85px;
  overflow-x: hidden;
  margin: 0 auto;
  text-align: center;
  border-bottom-right-radius: 0.3rem;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
  list-style: none;
  margin: 0;
  height: calc(195px + (1.7rem / 2));
  overflow-y: scroll;
  padding-right: 0px;
  padding-left: 0px;
  width: 100%;
  box-sizing: content-box;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
  height: 30px;
  padding: 5px 10px;
  white-space: nowrap;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
  cursor: pointer;
  background-color: #f0f0f0;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
  background-color: #216ba5;
  color: white;
  font-weight: bold;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
  background-color: #216ba5;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {
  color: #ccc;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {
  cursor: default;
  background-color: transparent;
}

.react-datepicker__week-number {
  color: #ccc;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}

.react-datepicker__week-number.react-datepicker__week-number--clickable {
  cursor: pointer;
}

.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}

.react-datepicker__day-names,
.react-datepicker__week {
  white-space: nowrap;
}

.react-datepicker__day-name,
.react-datepicker__day,
.react-datepicker__time-name {
  color: #000;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}

.react-datepicker__month--selected, .react-datepicker__month--in-selecting-range, .react-datepicker__month--in-range,
.react-datepicker__quarter--selected,
.react-datepicker__quarter--in-selecting-range,
.react-datepicker__quarter--in-range {
  border-radius: 0.3rem;
  background-color: #216ba5;
  color: #fff;
}

.react-datepicker__month--selected:hover, .react-datepicker__month--in-selecting-range:hover, .react-datepicker__month--in-range:hover,
.react-datepicker__quarter--selected:hover,
.react-datepicker__quarter--in-selecting-range:hover,
.react-datepicker__quarter--in-range:hover {
  background-color: #1d5d90;
}

.react-datepicker__month--disabled,
.react-datepicker__quarter--disabled {
  color: #ccc;
  pointer-events: none;
}

.react-datepicker__month--disabled:hover,
.react-datepicker__quarter--disabled:hover {
  cursor: default;
  background-color: transparent;
}

.react-datepicker__day,
.react-datepicker__month-text,
.react-datepicker__quarter-text,
.react-datepicker__year-text {
  cursor: pointer;
}

.react-datepicker__day:hover,
.react-datepicker__month-text:hover,
.react-datepicker__quarter-text:hover,
.react-datepicker__year-text:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}

.react-datepicker__day--today,
.react-datepicker__month-text--today,
.react-datepicker__quarter-text--today,
.react-datepicker__year-text--today {
  font-weight: bold;
}

.react-datepicker__day--highlighted,
.react-datepicker__month-text--highlighted,
.react-datepicker__quarter-text--highlighted,
.react-datepicker__year-text--highlighted {
  border-radius: 0.3rem;
  background-color: #3dcc4a;
  color: #fff;
}

.react-datepicker__day--highlighted:hover,
.react-datepicker__month-text--highlighted:hover,
.react-datepicker__quarter-text--highlighted:hover,
.react-datepicker__year-text--highlighted:hover {
  background-color: #32be3f;
}

.react-datepicker__day--highlighted-custom-1,
.react-datepicker__month-text--highlighted-custom-1,
.react-datepicker__quarter-text--highlighted-custom-1,
.react-datepicker__year-text--highlighted-custom-1 {
  color: magenta;
}

.react-datepicker__day--highlighted-custom-2,
.react-datepicker__month-text--highlighted-custom-2,
.react-datepicker__quarter-text--highlighted-custom-2,
.react-datepicker__year-text--highlighted-custom-2 {
  color: green;
}

.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,
.react-datepicker__month-text--selected,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--selected,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--selected,
.react-datepicker__year-text--in-selecting-range,
.react-datepicker__year-text--in-range {
  border-radius: 0.3rem;
  background-color: #216ba5;
  color: #fff;
}

.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,
.react-datepicker__month-text--selected:hover,
.react-datepicker__month-text--in-selecting-range:hover,
.react-datepicker__month-text--in-range:hover,
.react-datepicker__quarter-text--selected:hover,
.react-datepicker__quarter-text--in-selecting-range:hover,
.react-datepicker__quarter-text--in-range:hover,
.react-datepicker__year-text--selected:hover,
.react-datepicker__year-text--in-selecting-range:hover,
.react-datepicker__year-text--in-range:hover {
  background-color: #1d5d90;
}

.react-datepicker__day--keyboard-selected,
.react-datepicker__month-text--keyboard-selected,
.react-datepicker__quarter-text--keyboard-selected,
.react-datepicker__year-text--keyboard-selected {
  border-radius: 0.3rem;
  background-color: #2a87d0;
  color: #fff;
}

.react-datepicker__day--keyboard-selected:hover,
.react-datepicker__month-text--keyboard-selected:hover,
.react-datepicker__quarter-text--keyboard-selected:hover,
.react-datepicker__year-text--keyboard-selected:hover {
  background-color: #1d5d90;
}

.react-datepicker__day--in-selecting-range ,
.react-datepicker__month-text--in-selecting-range ,
.react-datepicker__quarter-text--in-selecting-range ,
.react-datepicker__year-text--in-selecting-range {
  background-color: rgba(33, 107, 165, 0.5);
}

.react-datepicker__month--selecting-range .react-datepicker__day--in-range , .react-datepicker__month--selecting-range
.react-datepicker__month-text--in-range , .react-datepicker__month--selecting-range
.react-datepicker__quarter-text--in-range , .react-datepicker__month--selecting-range
.react-datepicker__year-text--in-range {
  background-color: #f0f0f0;
  color: #000;
}

.react-datepicker__day--disabled,
.react-datepicker__month-text--disabled,
.react-datepicker__quarter-text--disabled,
.react-datepicker__year-text--disabled {
  cursor: default;
  color: #ccc;
}

.react-datepicker__day--disabled:hover,
.react-datepicker__month-text--disabled:hover,
.react-datepicker__quarter-text--disabled:hover,
.react-datepicker__year-text--disabled:hover {
  background-color: transparent;
}

.react-datepicker__month-text.react-datepicker__month--selected:hover, .react-datepicker__month-text.react-datepicker__month--in-range:hover, .react-datepicker__month-text.react-datepicker__quarter--selected:hover, .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,
.react-datepicker__quarter-text.react-datepicker__month--selected:hover,
.react-datepicker__quarter-text.react-datepicker__month--in-range:hover,
.react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,
.react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {
  background-color: #216ba5;
}

.react-datepicker__month-text:hover,
.react-datepicker__quarter-text:hover {
  background-color: #f0f0f0;
}

.react-datepicker__input-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.react-datepicker__year-read-view,
.react-datepicker__month-read-view,
.react-datepicker__month-year-read-view {
  border: 1px solid transparent;
  border-radius: 0.3rem;
}

.react-datepicker__year-read-view:hover,
.react-datepicker__month-read-view:hover,
.react-datepicker__month-year-read-view:hover {
  cursor: pointer;
}

.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {
  border-top-color: #b3b3b3;
}

.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow {
  border-top-color: #ccc;
  float: right;
  margin-left: 20px;
  top: 8px;
  position: relative;
  border-width: 0.45rem;
}

.react-datepicker__year-dropdown,
.react-datepicker__month-dropdown,
.react-datepicker__month-year-dropdown {
  background-color: #f0f0f0;
  position: absolute;
  width: 50%;
  left: 25%;
  top: 30px;
  z-index: 1;
  text-align: center;
  border-radius: 0.3rem;
  border: 1px solid #aeaeae;
}

.react-datepicker__year-dropdown:hover,
.react-datepicker__month-dropdown:hover,
.react-datepicker__month-year-dropdown:hover {
  cursor: pointer;
}

.react-datepicker__year-dropdown--scrollable,
.react-datepicker__month-dropdown--scrollable,
.react-datepicker__month-year-dropdown--scrollable {
  height: 150px;
  overflow-y: scroll;
}

.react-datepicker__year-option,
.react-datepicker__month-option,
.react-datepicker__month-year-option {
  line-height: 20px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.react-datepicker__year-option:first-of-type,
.react-datepicker__month-option:first-of-type,
.react-datepicker__month-year-option:first-of-type {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}

.react-datepicker__year-option:last-of-type,
.react-datepicker__month-option:last-of-type,
.react-datepicker__month-year-option:last-of-type {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.react-datepicker__year-option:hover,
.react-datepicker__month-option:hover,
.react-datepicker__month-year-option:hover {
  background-color: #ccc;
}

.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,
.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,
.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {
  border-bottom-color: #b3b3b3;
}

.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,
.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,
.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {
  border-top-color: #b3b3b3;
}

.react-datepicker__year-option--selected,
.react-datepicker__month-option--selected,
.react-datepicker__month-year-option--selected {
  position: absolute;
  left: 15px;
}

.react-datepicker__close-icon {
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  padding: 0px 6px 0px 0px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: table-cell;
  vertical-align: middle;
}

.react-datepicker__close-icon::after {
  cursor: pointer;
  background-color: #216ba5;
  color: #fff;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  padding: 2px;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  content: "\D7";
}

.react-datepicker__today-button {
  background: #f0f0f0;
  border-top: 1px solid #aeaeae;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  padding: 5px 0;
  clear: left;
}

.react-datepicker__portal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 2147483647;
}

.react-datepicker__portal .react-datepicker__day-name,
.react-datepicker__portal .react-datepicker__day,
.react-datepicker__portal .react-datepicker__time-name {
  width: 3rem;
  line-height: 3rem;
}

@media (max-width: 400px), (max-height: 550px) {
  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__time-name {
    width: 2rem;
    line-height: 2rem;
  }
}

.react-datepicker__portal .react-datepicker__current-month,
.react-datepicker__portal .react-datepicker-time__header {
  font-size: 1.44rem;
}

.react-datepicker__portal .react-datepicker__navigation {
  border: 0.81rem solid transparent;
}

.react-datepicker__portal .react-datepicker__navigation--previous {
  border-right-color: #ccc;
}

.react-datepicker__portal .react-datepicker__navigation--previous:hover {
  border-right-color: #b3b3b3;
}

.react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {
  border-right-color: #e6e6e6;
  cursor: default;
}

.react-datepicker__portal .react-datepicker__navigation--next {
  border-left-color: #ccc;
}

.react-datepicker__portal .react-datepicker__navigation--next:hover {
  border-left-color: #b3b3b3;
}

.react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {
  border-left-color: #e6e6e6;
  cursor: default;
}
</style><style type="text/css">@font-face { font-family: 'simple-line-icons'; src: url('chrome-extension://mihdfbecejheednfigjpdacgeilhlmnf/assets/fonts/Simple-Line-Icons.ttf') format('truetype'); }</style><title></title></head><body style=""><div id="__next"><script>!function(){try{var d=document.documentElement,n='data-theme',s='setAttribute';var e=localStorage.getItem('theme');if('system'===e||(!e&&true)){var t='(prefers-color-scheme: dark)',m=window.matchMedia(t);if(m.media!==t||m.matches){d.style.colorScheme = 'dark';d[s](n,'dark')}else{d.style.colorScheme = 'light';d[s](n,'light')}}else if(e){d[s](n,e|| '')}if(e==='light'||e==='dark')d.style.colorScheme=e}catch(e){}}()</script><div class="smooth-scroll dark-mode min-h-screen font-rubik transition duration-200 dark:bg-gray-900 flex flex-col bg-white"><header class="w-full flex flex-col text-slate-50 bg-slate-800"><div class="py-2 flex items-end justify-between pt-5 text-4xl text-gray-900 mb-4 bg-slate-800 z-50 max-w-6xl mx-auto w-full px-12"><div class="text-3xl font-logo min-w-fit text-white"><a href="/">Sara Dunlop</a></div><button type="button" class="theme-toggle theme-toggle--toggled   text-amber-400" aria-label="Toggle theme" title="Toggle theme" style="--theme-toggle__around--duration: 750ms;"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="1em" height="1em" fill="currentColor" class="theme-toggle__around" viewBox="0 0 32 32"><clipPath id="theme-toggle__around__cutout"><path d="M0 0h42v30a1 1 0 00-16 13H0Z"></path></clipPath><g clip-path="url(#theme-toggle__around__cutout)"><circle cx="16" cy="16" r="8.4"></circle><g><circle cx="16" cy="3.3" r="2.3"></circle><circle cx="27" cy="9.7" r="2.3"></circle><circle cx="27" cy="22.3" r="2.3"></circle><circle cx="16" cy="28.7" r="2.3"></circle><circle cx="5" cy="22.3" r="2.3"></circle><circle cx="5" cy="9.7" r="2.3"></circle></g></g></svg></button></div><div class="mx-auto max-w-6xl sm:h-72 flex flex-col justify-end"><img alt="Me" loading="lazy" width="2000" height="1180" decoding="async" data-nimg="1" class="w-96 mx-auto" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.2ad55e47.png&amp;w=2048&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.2ad55e47.png&amp;w=3840&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar2.2ad55e47.png&amp;w=3840&amp;q=75" style="color: transparent;"></div></header><main class="bg-white dark:bg-gray-900"><main class="container px-12 py-24 font-sans flex flex-col min-h-screen h-full lg:max-w-6xl w-full m-auto"><h2 class="uppercase text-lg font-medium tracking-widest text-pink-500 mb-9">Categories</h2><div class="flex flex-wrap mb-[64px]"><a href="/categories/personal"><div class="flex justify-center items-center mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-sky-100 dark:bg-slate-700 dark:text-white w-fit px-3 py-1.5 cursor-pointer">Personal</div></a><a href="/categories/tutorial"><div class="flex justify-center items-center mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-sky-100 dark:bg-slate-700 dark:text-white w-fit px-3 py-1.5 cursor-pointer">Tutorial</div></a></div><section class="mr-16"><h2 class="uppercase text-lg font-medium tracking-widest text-pink-500 mb-7">Latest and Greatest</h2><div class="grid grid-cols-1 gap-1 grid-flow-row"><a href="/posts/pre-rendering"><div class="container py-2 mb-12 group cursor-pointer"><h3 class="text-xl font-bold leading-8 text-gray-950 group-hover:text-sky-700 dark:text-gray-50">Two Forms of Pre-rendering</h3><div class="text-slate-500 text-base leading-8 font-medium dark:text-slate-400">I am testing my subtitle, hooray</div><div class="mt-4 font-normal text-gray-900 text-base leading-7 dark:text-gray-50"></div><div class="mt-4 font-bold text-neutral-900 text-base flex items-center dark:text-gray-50"><span class="mr-1">Read more</span><span class="text-lg text-sky-700 hidden group-hover:block dark:text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg></span></div></div></a><a href="/posts/first-post"><div class="container py-2 mb-12 group cursor-pointer"><h3 class="text-xl font-bold leading-8 text-gray-950 group-hover:text-sky-700 dark:text-gray-50">Cloning Reddit's Live Chat Feature</h3><div class="text-slate-500 text-base leading-8 font-medium dark:text-slate-400">Using WebSockets to create Reddit's live messaging feature.</div><div class="mt-4 font-normal text-gray-900 text-base leading-7 dark:text-gray-50">In today's fast-paced online community landscape, real-time interaction has become the lifeblood of user engagement. As the creator and developer of Ribbit, a comprehensive and pixel-perfect replica of Reddit, I knew that the app couldn't be complete until I had at least captured the captivating experience of live communication offered by the popular platform. My long-standing ambition of integrating a live chat feature within Ribbit finally came to fruition just last week, and I am excited to break down and discuss this process in detail. Join me as we take a deep dive into the code that powers Ribbit's live chat feature and discuss the project in its entirety, from the initial planning stages all the way to its completion.</div><div class="mt-4 font-bold text-neutral-900 text-base flex items-center dark:text-gray-50"><span class="mr-1">Read more</span><span class="text-lg text-sky-700 hidden group-hover:block dark:text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg></span></div></div></a><a href="/posts/01-whoami"><div class="container py-2 mb-12 group cursor-pointer"><h3 class="text-xl font-bold leading-8 text-gray-950 group-hover:text-sky-700 dark:text-gray-50">whoami</h3><div class="text-slate-500 text-base leading-8 font-medium dark:text-slate-400"></div><div class="mt-4 font-normal text-gray-900 text-base leading-7 dark:text-gray-50">Hello! I'm Sara, and this is a little introduction to me, the author of this here blog.</div><div class="mt-4 font-bold text-neutral-900 text-base flex items-center dark:text-gray-50"><span class="mr-1">Read more</span><span class="text-lg text-sky-700 hidden group-hover:block dark:text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg></span></div></div></a><a href="/posts/ssg-ssr"><div class="container py-2 mb-12 group cursor-pointer"><h3 class="text-xl font-bold leading-8 text-gray-950 group-hover:text-sky-700 dark:text-gray-50">When to Use Static Generation v.s. Server-side Rendering</h3><div class="text-slate-500 text-base leading-8 font-medium dark:text-slate-400"></div><div class="mt-4 font-normal text-gray-900 text-base leading-7 dark:text-gray-50"></div><div class="mt-4 font-bold text-neutral-900 text-base flex items-center dark:text-gray-50"><span class="mr-1">Read more</span><span class="text-lg text-sky-700 hidden group-hover:block dark:text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg></span></div></div></a><div class="Code"><h2> Code Syntax Block javascript</h2><button data-copy-state="copy">Copy</button><pre class="language-javascript" tabindex="0"><code class="language-javascript" data-prismjs-copy="copy">
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">getStaticProps</span><span class="token operator">:</span> <span class="token function-variable function">GetStaticProps</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> allPostsData <span class="token operator">=</span> <span class="token function">getSortedPostsData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> categories <span class="token operator">=</span> <span class="token function">getCategories</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      allPostsData<span class="token punctuation">,</span>
      categories<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></div></section></main></main></div></div><script src="/_next/static/chunks/react-refresh.js?ts=1689180513467"></script><script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{"allPostsData":[{"id":"pre-rendering","title":"Two Forms of Pre-rendering","date":"2020-01-01","subtitle":"I am testing my subtitle, hooray","slug":"pre-rendering","category":"personal"},{"id":"first-post","title":"Cloning Reddit's Live Chat Feature","subtitle":"Using WebSockets to create Reddit's live messaging feature.","date":"06/30/23","preview":"In today's fast-paced online community landscape, real-time interaction has become the lifeblood of user engagement. As the creator and developer of Ribbit, a comprehensive and pixel-perfect replica of Reddit, I knew that the app couldn't be complete until I had at least captured the captivating experience of live communication offered by the popular platform. My long-standing ambition of integrating a live chat feature within Ribbit finally came to fruition just last week, and I am excited to break down and discuss this process in detail. Join me as we take a deep dive into the code that powers Ribbit's live chat feature and discuss the project in its entirety, from the initial planning stages all the way to its completion.","category":"Tutorial","toc":"Tech Stack and Tools/Initial Planning and Research","slug":"first-post"},{"id":"01-whoami","title":"whoami","date":"06/20/23","preview":"Hello! I'm Sara, and this is a little introduction to me, the author of this here blog.","category":"Personal","slug":"01-whoami"},{"id":"ssg-ssr","title":"When to Use Static Generation v.s. Server-side Rendering","date":"01-02-2020","category":"tutorial","slug":"ssg-ssr"}],"categories":[{"params":{"id":"personal","postId":"01-whoami"}},{"params":{"id":"tutorial","postId":"first-post"}},{"params":{"id":"personal","postId":"pre-rendering"}},{"params":{"id":"tutorial","postId":"ssg-ssr"}}]},"__N_SSG":true},"page":"/","query":{},"buildId":"development","isFallback":false,"gsp":true,"scriptLoader":[]}</script><div id="__next-build-watcher" style="position: fixed; bottom: 10px; right: 20px; width: 0px; height: 0px; z-index: 99999;"></div><next-route-announcer><p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;">/</p></next-route-announcer><script src="/_next/static/chunks/pages/posts/%5Bid%5D.js"></script></body><div id="huntr-react-container-2"></div></html>
`;

export default function Home({
  allPostsData,
  categories,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    subtitle: string;
    preview: string;
  }[];
  categories: {
    params: {
      id: string;
    };
  }[];
}) {
  let categoriesList: any = {};
  for (let category of categories) {
    if (categoriesList[category.params.id] == 0) {
      categoriesList[category.params.id] += 1;
    } else {
      categoriesList[category.params.id] = 0;
    }
  }

  let categoriesSet = new Set(Object.keys(categoriesList));

  console.log(Array.from(categoriesSet));

  console.log("list:", categoriesList);

  return (
    <Layout home>
      <main className="container px-12 py-24 font-sans flex flex-col min-h-screen h-full lg:max-w-6xl w-full m-auto">
        <h2 className="uppercase text-lg font-medium tracking-widest text-pink-500 mb-9">
          Categories
        </h2>
        <div className="flex flex-wrap mb-[64px]">
          {Array.from(categoriesSet).map((category) => (
            <Link href={`/categories/${category}`}>
              <div className="flex justify-center items-center mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-sky-100 dark:bg-slate-700 dark:text-white w-fit px-3 py-1.5 cursor-pointer">
                {category.slice(0, 1).toUpperCase() + category.slice(1)}
              </div>
            </Link>
          ))}
        </div>
        <section className="mr-16">
          <h2 className="uppercase text-lg font-medium tracking-widest text-pink-500 mb-7">
            Latest and Greatest
          </h2>
          <div className="grid grid-cols-1 gap-1 grid-flow-row">
            {allPostsData.map(({ id, date, title, subtitle, preview }) => (
              <Link href={`/posts/${id}`}>
                <div
                  key={id}
                  className="container py-2 mb-12 group cursor-pointer"
                >
                  <h3 className="text-xl font-bold leading-8 text-gray-950 group-hover:text-sky-700 dark:text-gray-50">
                    {title}
                  </h3>
                  {subtitle !== "No subtitle given" && (
                    <div className="text-slate-500 text-base leading-8 font-medium dark:text-slate-400">
                      {subtitle}
                    </div>
                  )}

                  {preview !== "No description given" && (
                    <div className="mt-4 font-normal text-gray-900 text-base leading-7 dark:text-gray-50">
                      {preview}
                    </div>
                  )}
                  <div className="mt-4 font-bold text-neutral-900 text-base flex items-center dark:text-gray-50">
                    <span className="mr-1">Read more</span>
                    <span className="text-lg text-sky-700 hidden group-hover:block dark:text-white">
                      <HiMiniArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            <Code code={testing} language="html" />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const categories = getCategories();
  return {
    props: {
      allPostsData,
      categories,
    },
  };
};
