// import app from "next/app";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

<style jsx global>{`
@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap);
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Rubik", "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

.styles_scroll-to-top__2A70v {
    background-color: white;
    right: 40px;
    bottom: 40px;
    position: fixed;
    z-index: 2;
    cursor: pointer;
    border-radius: 7px;
    width: 40px;
    height: 40px;
    transition: opacity 1s ease-in-out;
    box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);
    border: none;
    outline: none;
}

.styles_scroll-to-top__2A70v:active {
    transform: matrix(0.95, 0, 0, 0.95, 0, 0);
}

:root {
    --toastify-color-light: #fff;
    --toastify-color-dark: #121212;
    --toastify-color-info: #3498db;
    --toastify-color-success: #07bc0c;
    --toastify-color-warning: #f1c40f;
    --toastify-color-error: #e74c3c;
    --toastify-color-transparent: hsla(0, 0%, 100%, 0.7);
    --toastify-icon-color-info: var(--toastify-color-info);
    --toastify-icon-color-success: var(--toastify-color-success);
    --toastify-icon-color-warning: var(--toastify-color-warning);
    --toastify-icon-color-error: var(--toastify-color-error);
    --toastify-toast-width: 320px;
    --toastify-toast-background: #fff;
    --toastify-toast-min-height: 64px;
    --toastify-toast-max-height: 800px;
    --toastify-font-family: sans-serif;
    --toastify-z-index: 9999;
    --toastify-text-color-light: #757575;
    --toastify-text-color-dark: #fff;
    --toastify-text-color-info: #fff;
    --toastify-text-color-success: #fff;
    --toastify-text-color-warning: #fff;
    --toastify-text-color-error: #fff;
    --toastify-spinner-color: #616161;
    --toastify-spinner-color-empty-area: #e0e0e0;
    --toastify-color-progress-light: linear-gradient( 90deg, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
    --toastify-color-progress-dark: #bb86fc;
    --toastify-color-progress-info: var(--toastify-color-info);
    --toastify-color-progress-success: var(--toastify-color-success);
    --toastify-color-progress-warning: var(--toastify-color-warning);
    --toastify-color-progress-error: var(--toastify-color-error);
}

.Toastify__toast-container {
    box-sizing: border-box;
    color: #fff;
    padding: 4px;
    position: fixed;
    -webkit-transform: translate3d(0, 0, 9999 px);
    -webkit-transform: translate3d(0, 0, var(--toastify-z-index) px);
    width: 320px;
    width: var(--toastify-toast-width);
    z-index: 9999;
    z-index: var(--toastify-z-index);
}

.Toastify__toast-container--top-left {
    left: 1em;
    top: 1em;
}

.Toastify__toast-container--top-center {
    left: 50%;
    top: 1em;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}

.Toastify__toast-container--top-right {
    right: 1em;
    top: 1em;
}

.Toastify__toast-container--bottom-left {
    bottom: 1em;
    left: 1em;
}

.Toastify__toast-container--bottom-center {
    bottom: 1em;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}

.Toastify__toast-container--bottom-right {
    bottom: 1em;
    right: 1em;
}

@media only screen and (max-width: 480px) {
    .Toastify__toast-container {
        left: 0;
        margin: 0;
        padding: 0;
        width: 100vw;
    }
    .Toastify__toast-container--top-center,
    .Toastify__toast-container--top-left,
    .Toastify__toast-container--top-right {
        top: 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    .Toastify__toast-container--bottom-center,
    .Toastify__toast-container--bottom-left,
    .Toastify__toast-container--bottom-right {
        bottom: 0;
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    .Toastify__toast-container--rtl {
        left: auto;
        right: 0;
    }
}

.Toastify__toast {
    border-radius: 4px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    cursor: pointer;
    direction: ltr;
    display: flex;
    font-family: sans-serif;
    font-family: var(--toastify-font-family);
    justify-content: space-between;
    margin-bottom: 1rem;
    max-height: 800px;
    max-height: var(--toastify-toast-max-height);
    min-height: 64px;
    min-height: var(--toastify-toast-min-height);
    overflow: hidden;
    padding: 8px;
    position: relative;
}

.Toastify__toast--rtl {
    direction: rtl;
}

.Toastify__toast-body {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    margin: auto 0;
    padding: 6px;
}

.Toastify__toast-body>div:last-child {
    flex: 1 1;
}

.Toastify__toast-icon {
    -webkit-margin-end: 10px;
    display: flex;
    flex-shrink: 0;
    margin-inline-end: 10px;
    width: 20px;
}

.Toastify--animate {
    -webkit-animation-duration: 0.7s;
    animation-duration: 0.7s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.Toastify--animate-icon {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

@media only screen and (max-width: 480px) {
    .Toastify__toast {
        border-radius: 0;
        margin-bottom: 0;
    }
}

.Toastify__toast-theme--dark {
    background: #121212;
    background: var(--toastify-color-dark);
    color: #fff;
    color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--colored.Toastify__toast--default,
.Toastify__toast-theme--light {
    background: #fff;
    background: var(--toastify-color-light);
    color: #757575;
    color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
    background: #3498db;
    background: var(--toastify-color-info);
    color: #fff;
    color: var(--toastify-text-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
    background: #07bc0c;
    background: var(--toastify-color-success);
    color: #fff;
    color: var(--toastify-text-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
    background: #f1c40f;
    background: var(--toastify-color-warning);
    color: #fff;
    color: var(--toastify-text-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
    background: #e74c3c;
    background: var(--toastify-color-error);
    color: #fff;
    color: var(--toastify-text-color-error);
}

.Toastify__progress-bar-theme--light {
    background: linear-gradient( 90deg, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
    background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
    background: #bb86fc;
    background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
    background: #3498db;
    background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
    background: #07bc0c;
    background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
    background: #f1c40f;
    background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
    background: #e74c3c;
    background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning {
    background: hsla(0, 0%, 100%, 0.7);
    background: var(--toastify-color-transparent);
}

.Toastify__close-button {
    align-self: flex-start;
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    opacity: 0.7;
    outline: none;
    padding: 0;
    transition: 0.3s ease;
}

.Toastify__close-button--light {
    color: #000;
    opacity: 0.3;
}

.Toastify__close-button>svg {
    fill: currentColor;
    height: 16px;
    width: 14px;
}

.Toastify__close-button:focus,
.Toastify__close-button:hover {
    opacity: 1;
}

@-webkit-keyframes Toastify__trackProgress {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
    to {
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
    }
}

@keyframes Toastify__trackProgress {
    0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
    to {
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
    }
}

.Toastify__progress-bar {
    bottom: 0;
    height: 5px;
    left: 0;
    opacity: 0.7;
    position: absolute;
    -webkit-transform-origin: left;
    transform-origin: left;
    width: 100%;
    z-index: 9999;
    z-index: var(--toastify-z-index);
}

.Toastify__progress-bar--animated {
    -webkit-animation: Toastify__trackProgress linear 1 forwards;
    animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
    transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    transition: transform 0.2s, -webkit-transform 0.2s;
}

.Toastify__progress-bar--rtl {
    left: auto;
    right: 0;
    -webkit-transform-origin: right;
    transform-origin: right;
}

.Toastify__spinner {
    -webkit-animation: Toastify__spin 0.65s linear infinite;
    animation: Toastify__spin 0.65s linear infinite;
    border: 2px solid #e0e0e0;
    border-color: var(--toastify-spinner-color-empty-area);
    border-radius: 100%;
    border-right: 2px solid var(--toastify-spinner-color);
    box-sizing: border-box;
    height: 20px;
    width: 20px;
}

@-webkit-keyframes Toastify__bounceInRight {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0);
    }
    75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
    }
    90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0);
    }
    to {
        -webkit-transform: none;
        transform: none;
    }
}

@keyframes Toastify__bounceInRight {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(3000px, 0, 0);
        transform: translate3d(3000px, 0, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(-25px, 0, 0);
        transform: translate3d(-25px, 0, 0);
    }
    75% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
    }
    90% {
        -webkit-transform: translate3d(-5px, 0, 0);
        transform: translate3d(-5px, 0, 0);
    }
    to {
        -webkit-transform: none;
        transform: none;
    }
}

@-webkit-keyframes Toastify__bounceOutRight {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
    }
}

@keyframes Toastify__bounceOutRight {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(2000px, 0, 0);
        transform: translate3d(2000px, 0, 0);
    }
}

@-webkit-keyframes Toastify__bounceInLeft {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0);
    }
    75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
    }
    90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0);
    }
    to {
        -webkit-transform: none;
        transform: none;
    }
}

@keyframes Toastify__bounceInLeft {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0);
    }
    75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
    }
    90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0);
    }
    to {
        -webkit-transform: none;
        transform: none;
    }
}

@-webkit-keyframes Toastify__bounceOutLeft {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
    }
}

@keyframes Toastify__bounceOutLeft {
    20% {
        opacity: 1;
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(-2000px, 0, 0);
        transform: translate3d(-2000px, 0, 0);
    }
}

@-webkit-keyframes Toastify__bounceInUp {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 3000px, 0);
        transform: translate3d(0, 3000px, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
    }
    75% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
    }
    90% {
        -webkit-transform: translate3d(0, -5px, 0);
        transform: translate3d(0, -5px, 0);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}

@keyframes Toastify__bounceInUp {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 3000px, 0);
        transform: translate3d(0, 3000px, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
    }
    75% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
    }
    90% {
        -webkit-transform: translate3d(0, -5px, 0);
        transform: translate3d(0, -5px, 0);
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}

@-webkit-keyframes Toastify__bounceOutUp {
    20% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
    }
}

@keyframes Toastify__bounceOutUp {
    20% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0);
    }
}

@-webkit-keyframes Toastify__bounceInDown {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -3000px, 0);
        transform: translate3d(0, -3000px, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, 25px, 0);
        transform: translate3d(0, 25px, 0);
    }
    75% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
    }
    90% {
        -webkit-transform: translate3d(0, 5px, 0);
        transform: translate3d(0, 5px, 0);
    }
    to {
        -webkit-transform: none;
        transform: none;
    }
}

@keyframes Toastify__bounceInDown {
    0%,
    60%,
    75%,
    90%,
    to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -3000px, 0);
        transform: translate3d(0, -3000px, 0);
    }
    60% {
        opacity: 1;
        -webkit-transform: translate3d(0, 25px, 0);
        transform: translate3d(0, 25px, 0);
    }
    75% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
    }
    90% {
        -webkit-transform: translate3d(0, 5px, 0);
        transform: translate3d(0, 5px, 0);
    }
    to {
        -webkit-transform: none;
        transform: none;
    }
}

@-webkit-keyframes Toastify__bounceOutDown {
    20% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
    }
}

@keyframes Toastify__bounceOutDown {
    20% {
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
        opacity: 1;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
    }
    to {
        opacity: 0;
        -webkit-transform: translate3d(0, 2000px, 0);
        transform: translate3d(0, 2000px, 0);
    }
}

.Toastify__bounce-enter--bottom-left,
.Toastify__bounce-enter--top-left {
    -webkit-animation-name: Toastify__bounceInLeft;
    animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--bottom-right,
.Toastify__bounce-enter--top-right {
    -webkit-animation-name: Toastify__bounceInRight;
    animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
    -webkit-animation-name: Toastify__bounceInDown;
    animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
    -webkit-animation-name: Toastify__bounceInUp;
    animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--bottom-left,
.Toastify__bounce-exit--top-left {
    -webkit-animation-name: Toastify__bounceOutLeft;
    animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--bottom-right,
.Toastify__bounce-exit--top-right {
    -webkit-animation-name: Toastify__bounceOutRight;
    animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
    -webkit-animation-name: Toastify__bounceOutUp;
    animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
    -webkit-animation-name: Toastify__bounceOutDown;
    animation-name: Toastify__bounceOutDown;
}

@-webkit-keyframes Toastify__zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
        opacity: 1;
    }
}

@keyframes Toastify__zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
        opacity: 1;
    }
}

@-webkit-keyframes Toastify__zoomOut {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
        opacity: 0;
    }
}

@keyframes Toastify__zoomOut {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
        opacity: 0;
    }
}

.Toastify__zoom-enter {
    -webkit-animation-name: Toastify__zoomIn;
    animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
    -webkit-animation-name: Toastify__zoomOut;
    animation-name: Toastify__zoomOut;
}

@-webkit-keyframes Toastify__flipIn {
    0% {
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
        -webkit-transform: perspective(400px) rotateX(90deg);
        transform: perspective(400px) rotateX(90deg);
    }
    40% {
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) rotateX(-20deg);
        transform: perspective(400px) rotateX(-20deg);
    }
    60% {
        opacity: 1;
        -webkit-transform: perspective(400px) rotateX(10deg);
        transform: perspective(400px) rotateX(10deg);
    }
    80% {
        -webkit-transform: perspective(400px) rotateX(-5deg);
        transform: perspective(400px) rotateX(-5deg);
    }
    to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
}

@keyframes Toastify__flipIn {
    0% {
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
        -webkit-transform: perspective(400px) rotateX(90deg);
        transform: perspective(400px) rotateX(90deg);
    }
    40% {
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) rotateX(-20deg);
        transform: perspective(400px) rotateX(-20deg);
    }
    60% {
        opacity: 1;
        -webkit-transform: perspective(400px) rotateX(10deg);
        transform: perspective(400px) rotateX(10deg);
    }
    80% {
        -webkit-transform: perspective(400px) rotateX(-5deg);
        transform: perspective(400px) rotateX(-5deg);
    }
    to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
}

@-webkit-keyframes Toastify__flipOut {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
    30% {
        opacity: 1;
        -webkit-transform: perspective(400px) rotateX(-20deg);
        transform: perspective(400px) rotateX(-20deg);
    }
    to {
        opacity: 0;
        -webkit-transform: perspective(400px) rotateX(90deg);
        transform: perspective(400px) rotateX(90deg);
    }
}

@keyframes Toastify__flipOut {
    0% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
    30% {
        opacity: 1;
        -webkit-transform: perspective(400px) rotateX(-20deg);
        transform: perspective(400px) rotateX(-20deg);
    }
    to {
        opacity: 0;
        -webkit-transform: perspective(400px) rotateX(90deg);
        transform: perspective(400px) rotateX(90deg);
    }
}

.Toastify__flip-enter {
    -webkit-animation-name: Toastify__flipIn;
    animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
    -webkit-animation-name: Toastify__flipOut;
    animation-name: Toastify__flipOut;
}

@-webkit-keyframes Toastify__slideInRight {
    0% {
        -webkit-transform: translate3d(110%, 0, 0);
        transform: translate3d(110%, 0, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}

@keyframes Toastify__slideInRight {
    0% {
        -webkit-transform: translate3d(110%, 0, 0);
        transform: translate3d(110%, 0, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}

@-webkit-keyframes Toastify__slideInLeft {
    0% {
        -webkit-transform: translate3d(-110%, 0, 0);
        transform: translate3d(-110%, 0, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}

@keyframes Toastify__slideInLeft {
    0% {
        -webkit-transform: translate3d(-110%, 0, 0);
        transform: translate3d(-110%, 0, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}

@-webkit-keyframes Toastify__slideInUp {
    0% {
        -webkit-transform: translate3d(0, 110%, 0);
        transform: translate3d(0, 110%, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}

@keyframes Toastify__slideInUp {
    0% {
        -webkit-transform: translate3d(0, 110%, 0);
        transform: translate3d(0, 110%, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}

@-webkit-keyframes Toastify__slideInDown {
    0% {
        -webkit-transform: translate3d(0, -110%, 0);
        transform: translate3d(0, -110%, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}

@keyframes Toastify__slideInDown {
    0% {
        -webkit-transform: translate3d(0, -110%, 0);
        transform: translate3d(0, -110%, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}

@-webkit-keyframes Toastify__slideOutRight {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        -webkit-transform: translate3d(110%, 0, 0);
        transform: translate3d(110%, 0, 0);
        visibility: hidden;
    }
}

@keyframes Toastify__slideOutRight {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        -webkit-transform: translate3d(110%, 0, 0);
        transform: translate3d(110%, 0, 0);
        visibility: hidden;
    }
}

@-webkit-keyframes Toastify__slideOutLeft {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        -webkit-transform: translate3d(-110%, 0, 0);
        transform: translate3d(-110%, 0, 0);
        visibility: hidden;
    }
}

@keyframes Toastify__slideOutLeft {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        -webkit-transform: translate3d(-110%, 0, 0);
        transform: translate3d(-110%, 0, 0);
        visibility: hidden;
    }
}

@-webkit-keyframes Toastify__slideOutDown {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        -webkit-transform: translate3d(0, 500px, 0);
        transform: translate3d(0, 500px, 0);
        visibility: hidden;
    }
}

@keyframes Toastify__slideOutDown {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        -webkit-transform: translate3d(0, 500px, 0);
        transform: translate3d(0, 500px, 0);
        visibility: hidden;
    }
}

@-webkit-keyframes Toastify__slideOutUp {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        -webkit-transform: translate3d(0, -500px, 0);
        transform: translate3d(0, -500px, 0);
        visibility: hidden;
    }
}

@keyframes Toastify__slideOutUp {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        -webkit-transform: translate3d(0, -500px, 0);
        transform: translate3d(0, -500px, 0);
        visibility: hidden;
    }
}

.Toastify__slide-enter--bottom-left,
.Toastify__slide-enter--top-left {
    -webkit-animation-name: Toastify__slideInLeft;
    animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--bottom-right,
.Toastify__slide-enter--top-right {
    -webkit-animation-name: Toastify__slideInRight;
    animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
    -webkit-animation-name: Toastify__slideInDown;
    animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
    -webkit-animation-name: Toastify__slideInUp;
    animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--bottom-left,
.Toastify__slide-exit--top-left {
    -webkit-animation-name: Toastify__slideOutLeft;
    animation-name: Toastify__slideOutLeft;
}

.Toastify__slide-exit--bottom-right,
.Toastify__slide-exit--top-right {
    -webkit-animation-name: Toastify__slideOutRight;
    animation-name: Toastify__slideOutRight;
}

.Toastify__slide-exit--top-center {
    -webkit-animation-name: Toastify__slideOutUp;
    animation-name: Toastify__slideOutUp;
}

.Toastify__slide-exit--bottom-center {
    -webkit-animation-name: Toastify__slideOutDown;
    animation-name: Toastify__slideOutDown;
}

@-webkit-keyframes Toastify__spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
    }
}

@keyframes Toastify__spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
    }
}

.NavAuth_wrapper__PcJEB {
    font-family: Rubik, sans-serif !important;
    height: 90px;
}

@media (min-width: 768px) {
    .NavAuth_wrapper__PcJEB {
        padding-left: 5%;
        padding-right: 14%;
    }
}

@media (min-width: 1400px) {
    .NavAuth_wrapper__PcJEB {
        padding: 0 10% 0 5% !important;
    }
}

.NavAuth_brand__qLxqV {
    display: flex;
}

.NavAuth_brand__qLxqV>span {
    color: #0b132a;
    font-size: 20px;
    font-weight: 700;
    padding-left: 15px;
}

.NavAuth_btn_gold__v0HAz {
    background-color: #ffba33 !important;
    border-radius: 50px !important;
    box-shadow: 1px 6px 20px rgba(255, 186, 51, 0.4);
    color: #6a4029 !important;
    font-size: 15px !important;
    font-weight: 500 !important;
    height: 45px;
    width: 150px;
}

.NavAuth_btn_gold__v0HAz:hover {
    background-color: #6a4029 !important;
    box-shadow: 0 6px 20px rgba(106, 64, 41, 0.65) !important;
    color: #fff !important;
    font-weight: bolder !important;
}

.Footer_bg__PZz\+N {
    background-color: #f8f8f8;
    font-family: Rubik, sans-serif !important;
}

.Footer_wrapper__9iaCt {
    padding: 0 30px !important;
}

.Footer_card__jhDaL {
    background-color: #fff;
    border-radius: 10px !important;
    -webkit-filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.22)) !important;
    filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.22)) !important;
    height: 180px !important;
    margin-bottom: -30px;
    padding: 30px 50px !important;
    position: relative;
    top: -90px;
}

.Footer_card_box__VDNxw {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
}

.Footer_card_side__iXq6T:first-child {
    display: flex;
    flex-direction: column !important;
    height: 100%;
    justify-content: space-between;
}

.Footer_card_side__iXq6T>h5 {
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
}

.Footer_card_side__iXq6T>span {
    color: #4f5665;
}

.Footer_card_side__iXq6T>button {
    background: #ffba33 !important;
    border: none;
    border-radius: 10px !important;
    box-shadow: 0 15px 20px rgba(255, 186, 51, 0.3);
    color: #6a4029 !important;
    font-weight: 700 !important;
    height: 50px;
    width: 220px;
}

.Footer_main__cUox8 {
    display: flex;
    justify-content: space-between;
    padding: 70px 0;
}

.Footer_main_other__UYZix {
    display: flex;
    justify-content: space-between;
    padding: 0 0 70px;
}

.Footer_left__PriZE {
    display: flex;
    flex-direction: column;
}

.Footer_brand__b-OTr {
    display: flex;
    margin-bottom: 20px;
    width: -webkit-min-content;
    width: min-content;
}

.Footer_brand__b-OTr>span {
    color: #0b132a;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    margin-left: 15px;
}

.Footer_desc__P1q\+B {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    font-size: 16px;
}

.Footer_desc__P1q\+B>p {
    color: #4f5665;
    font-weight: 500;
    line-height: 30px;
}

.Footer_desc__P1q\+B>div {
    margin-bottom: 25px;
}

.Footer_desc__P1q\+B>span {
    color: #afb5c0;
}

.Footer_btn_share__cnR1A {
    background: #6a4029;
    border-radius: 50%;
    box-shadow: 0 6px 20px hsla(0, 0%, 77%, 0.67);
    margin-right: 20px;
}

.Footer_right__OiGAy {
    display: flex;
    justify-content: space-between;
    padding-left: 70px !important;
}

.Footer_section__neUAB {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.Footer_title__0jtDI {
    color: #0b132a;
    display: block;
    font-size: 18px;
    margin-bottom: 15px;
}

.Footer_section__neUAB span {
    color: #4f5665;
    font-size: 16px;
}

.ScrollTop_btn__GpxG5 {
    align-items: center;
    background-color: #ffba33 !important;
    border-radius: 50% !important;
    bottom: 0;
    color: #6a4029 !important;
    display: flex;
    -webkit-filter: drop-shadow(0 6px 15px rgba(106, 64, 41, 0.9));
    filter: drop-shadow(0 6px 15px rgba(106, 64, 41, 0.9));
    height: 50px;
    justify-content: center;
    margin: 50px 30px;
    position: fixed;
    right: 0;
    width: 50px;
    z-index: 10 !important;
}

.ScrollTop_btn__GpxG5:hover {
    background: #0b132a !important;
    color: #ffba33 !important;
}

p:hover {
    color: #ffba33 !important;
}

.InputAuth_box__SHTUc>label {
    color: rgba(105, 111, 121, 1);
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 30px;
}

.InputAuth_box__SHTUc>input {
    border: 1px solid #4f5665;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 18px;
    width: 426px;
    height: 64px;
    margin-bottom: 30px;
}

.InputAuth_box__SHTUc_checkbox {
    font-size: 18px;
    left: 40%;
    height: 50px;
    margin-bottom: 10px;
}

.InputAuth_box__SHTUc_checkbox label {
    left: 5% !important;
    position: relative;
}

.forgot-pass-control {
    text-decoration: none;
}


/* I agree to terms & conditions */

.check_rectangle {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */
    display: flex;
    align-items: center;
    color: #696f79;
}

.SignUp_container__GbpqC {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: Rubik, sans-serif !important;
    justify-content: center;
}

@media (min-width: 768px) {
    .SignUp_container__GbpqC {
        height: calc(100vh - 87px);
    }
}

@media (min-width: 1400px) {
    .SignUp_container__GbpqC {
        height: calc(100vh - 180px);
    }
}

.SignUp_form__L0A32 {
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 70%;
}

@media (min-width: 1400px) {
    .SignUp_form__L0A32 {
        height: 70%;
        width: 60%;
    }
}

.SignUp_form__L0A32>span {
    color: #6a4029;
    font-size: 27px;
    font-weight: 700;
    margin-bottom: 5%;
    text-align: center;
}

.SignUp_form__L0A32>div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}

@media (min-width: 1400px) {
    .SignUp_form__L0A32>span {
        margin-bottom: 10%;
    }
    .SignUp_form__L0A32>div {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
}

.SignUp_btn_gold__FPHnh {
    background-color: #ffba33 !important;
    border-radius: 10px !important;
    box-shadow: 1px 6px 20px rgba(255, 186, 51, 0.4);
    color: #6a4029 !important;
    font-size: 17px !important;
    font-weight: 700 !important;
    height: 50px;
    margin-top: 20px !important;
    width: 100%;
}

.SignUp_btn_gold__FPHnh:hover {
    background-color: #6a4029 !important;
    box-shadow: 0 6px 20px rgba(106, 64, 41, 0.63) !important;
    color: #fff !important;
}

.SignIn_container__k8cC9 {
    margin-top: -20%;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: Rubik, sans-serif !important;
    justify-content: center;
}

@media (min-width: 768px) {
    .SignIn_container__k8cC9 {
        height: calc(100vh - 87px);
    }
}

@media (min-width: 1400px) {
    .SignIn_container__k8cC9 {
        height: calc(100vh - 180px);
    }
}

.SignIn_form__ZAIHo {
    display: flex;
    flex-direction: column;
    height: 80%;
    margin-top: 30%;
    width: 426px;
}

@media (min-width: 1400px) {
    .SignIn_form__ZAIHo {
        height: 60%;
        width: 60%;
    }
}

.SignIn_form__ZAIHo>span {
    color: rgba(239, 200, 26, 1);
    font-size: 27px;
    font-weight: 700;
    margin-bottom: 0%;
    width: 80%;
    text-align: center;
}

.SignIn_form__ZAIHo>p {
    font-size: 14px;
    color: rgba(134, 146, 166, 1);
    font-weight: 200;
    margin-bottom: 10%;
    width: 80%;
    text-align: center;
}

.SignIn_form__ZAIHo>div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}

.btn_down {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    margin-top: 10px;
}

.SignIn_form__ZAIHo>.fp {
    display: flex;
    flex-direction: column;
    margin-top: 30%;
    height: 0%;
    justify-content: space-between;
}

.SignIn_form__ZAIHo>.fu {
    display: flex;
    flex-direction: column;
    margin-top: 0%;
    height: 0%;
    justify-content: space-between;
}

.SignIn_btn_gold__YVLeP {
    background-color: #efc81a !important;
    border-radius: 10px !important;
    box-shadow: 1px 6px 20px rgba(255, 186, 51, 0.4);
    color: #ffffff !important;
    font-size: 17px !important;
    font-weight: 500 !important;
    height: 64px;
    width: 426px;
    margin-top: 20px !important;
}

.SignIn_btn_gold__YVLeP:hover {
    background-color: rgba(239, 200, 26, 1) !important;
    box-shadow: 0 6px 20px rgba(239, 200, 26, 1) !important;
    color: #fff !important;
}


/* Vector */

.vector_play {
    /* play */
    position: absolute;
    width: 72px;
    height: 72px;
    margin-left: 18%;
    margin-top: 20%;
    background-repeat: no-repeat;
}

.Auth_container__YZEJ- {
    height: 100vh !important;
}

@media (min-width: 768px) {
    .Auth_upper__6LgZK {
        height: 115vh !important;
    }
}

@media (min-width: 1400px) {
    .Auth_upper__6LgZK {
        height: 100vh !important;
    }
}


/* Line 19 */

.line19 {
    position: absolute;
    width: 895px;
    height: 0px;
    left: 208px;
    top: 812.46px;
    border: 4px solid #ff0000;
    transform: rotate(0.03deg);
}

.Auth_bg__o9fLW {
    position: relative;
    background-image: url(./Assets/76c7e3577554580136d5f65222046a21.png);
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
}

.LandingPage_gambar1 {
    /* Rectangle 313 */
    position: absolute;
    width: 700px;
    height: 700px;
    left: 1085px;
    top: 276px;
    background: url(./Assets/4da51338c06dd21688b82eae3bc9dfa6.jpg), #c4c4c4;
    background-size: cover;
    border-radius: 15px;
}

.Auth_bg__o9fLW_Register {
    background-image: url(./Assets/76c7e3577554580136d5f65222046a21.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;
    height: 120%;
}


/* Group */

.group_icon {
    position: absolute;
    width: 182px;
    height: 182px;
    left: 389px;
    top: 702px;
}

.mask_bg {
    position: absolute;
    height: inherit;
    left: -1px;
    width: 70%;
    opacity: 0.7;
    background-color: #efc81a;
}

.mask_bg_register {
    position: absolute;
    height: 120%;
    left: -14px;
    width: 36%;
    opacity: 0.7;
    background-color: #efc81a;
}


/* barbecue 1 */

.background_register_logo {
    position: absolute;
    width: 182px;
    height: 182px;
    left: 259px;
    top: 362px;
}


/* barbecue 1 */

.background_login_logo {
    position: absolute;
    width: 182px;
    height: 182px;
    left: 259px;
    top: 362px;
}

@media (max-width: 900px) {
    .background_login_logo>img {
        width: 0px;
        height: 0px;
    }
}


/* Rectangle 90 */

.Rectangle90 {
    position: absolute;
    width: 319px;
    height: 160px;
    left: 1393px;
    top: 244px;
    border-radius: 5px;
}


/* HanaLohana - 3 month ago */

.text_hana {
    position: absolute;
    width: inherit;
    height: inherit;
    left: 1393px;
    top: 464px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 13px;
    /* identical to box height */
    letter-spacing: -0.3px;
    color: #aaaaaa;
}


/* HanaLohana - 3 month ago */

.text_hana2 {
    position: absolute;
    width: inherit;
    height: inherit;
    left: 1393px;
    top: 737px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 13px;
    /* identical to box height */
    letter-spacing: -0.3px;
    color: #aaaaaa;
}


/* HanaLohana - 3 month ago */

.text_hana3 {
    position: absolute;
    width: inherit;
    height: inherit;
    left: 1393px;
    top: 1010px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 13px;
    /* identical to box height */
    letter-spacing: -0.3px;
    color: #aaaaaa;
}


/* Rectangle 91 */

.Rectangle91 {
    position: absolute;
    width: 319px;
    height: 160px;
    left: 1393px;
    top: 517px;
    border-radius: 5px;
}


/* Rectangle 334 */

.Rectangle_detailvideo {
    position: absolute;
    width: 70px;
    height: 1090px;
    left: 0px;
    top: 0px;
    background: #efc81a;
}


/* Rectangle 330 */

.Rectangle330_videodetail {
    position: absolute;
    width: 319px;
    height: 160px;
    left: 1393px;
    top: 790px;
    border-radius: 5px;
}


/* [Step 5] */

.text_step5 {
    position: absolute;
    width: 107px;
    height: 21px;
    left: 1403px;
    top: 254px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */
    letter-spacing: -0.3px;
    color: #f8f8f8;
}


/* [Step 6] */

.text_step6 {
    position: absolute;
    width: 103px;
    height: 21px;
    left: 1403px;
    top: 527px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */
    letter-spacing: -0.3px;
    color: #f8f8f8;
}


/* [Step 7] */

.text_step7 {
    position: absolute;
    width: 103px;
    height: 21px;
    left: 1403px;
    top: 800px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */
    letter-spacing: -0.3px;
    color: #f8f8f8;
}


/* Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown */

.text_beef_steak {
    position: absolute;
    width: 400px;
    height: 42px;
    left: 1393px;
    top: 418px;
    font-family: "Poppins";
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #000000;
}


/* Airbnb Cereal App Fonts */

@font-face {
    font-family: 'Airbnb Cereal App Bold';
    src: local('AirbnbCerealBold'), url("./fonts/AirbnbCerealBold.woff") format('woff');
}

@font-face {
    font-family: 'Airbnb Cereal App Light';
    src: local('AirbnbCerealLight'), url("./fonts/AirbnbCerealLight.woff") format('woff');
}

@font-face {
    font-family: 'Airbnb Cereal App Medium';
    src: local('AirbnbCerealMedium'), url("./fonts/AirbnbCerealMedium.woff") format('woff');
}


/* Beef Steak with Curry Sauce - [Step 6] Roast beef until it’s medium rare */

.text_beef_steak2 {
    position: absolute;
    width: 319px;
    height: 42px;
    left: 1393px;
    top: 691px;
    font-family: "Poppins";
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #000000;
}


/* Beef Steak with Curry Sauce - [Step 7] Roast beef until it’s medium rare */

.text_beef_steak3 {
    position: absolute;
    width: 319px;
    height: 42px;
    left: 1393px;
    top: 964px;
    font-family: "Poppins";
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #000000;
}


/* Next */

.text_next {
    position: absolute;
    width: 55px;
    height: 31px;
    left: 1407px;
    top: 193px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    letter-spacing: -0.3px;
    color: #000000;
}


/* 3 month ago */

.text_3month {
    position: absolute;
    width: 220px;
    height: 31px;
    left: 208px;
    top: 947px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    letter-spacing: -0.3px;
    color: #aaaaaa;
}


/* Beef Steak with Curry Sauce - [Step 4] Cut the condiment and then mix it */

.text_detail_video {
    position: absolute;
    width: 1120px;
    height: 84px;
    left: 208px;
    top: 853px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -0.3px;
    color: #000000;
}


/* Rectangle 329 */

@media screen and (max-width: 900px) {
    .Rectangle329_video_recipe {
        width: 200px;
    }
    .Rectangle330_add {
        width: 200px;
    }
    .Rectangle313 {
        width: 300px;
    }
}

@media screen and (max-width: 991px) {
    .LandingPage_gambar1 {
        width: 250px;
    }
    .DiscoverRecipe {
        font-size: 50px !important;
    }
    .Rectangle3 input[type="search"] {
        margin-left: 250px;
        width: 300px !important;
    }
    .Rectangle313 {
        width: 240px;
    }
}

@media screen and (max-width: 767px) {
    .LandingPage_gambar1 {
        width: 150px;
    }
    .DiscoverRecipe {
        font-size: 30px !important;
    }
    .Rectangle3 input[type="search"] {
        margin-left: 150px;
        width: 200px !important;
    }
    .Rectangle313 {
        width: 200px;
    }
}

@media screen and (max-width: 450px) {
    .LandingPage_gambar1 {
        width: 50px;
    }
    .DiscoverRecipe {
        font-size: 20px !important;
    }
    .Rectangle3 input[type="search"] {
        width: 100px !important;
        margin-left: 50px;
    }
}

.Rectangle329_video_recipe {
    position: absolute;
    width: 1120px;
    height: 620px;
    left: 208px;
    top: 193px;
}


/* Mama Recipe. */

.text_background_register {
    width: inherit;
    height: inherit;
    margin-top: 10%;
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #ffffff;
}

.Auth_thumb_vertical__xd4Pj {
    background-color: #6a4029;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16) !important;
    z-index: 1;
}

.Auth_card__aYJPe {
    background-color: #fff !important;
    border: 1px solid #000;
    bottom: 90px;
    height: 180px;
    margin: 0 100px;
    position: relative;
}

.PartCenter_center__ywVtI {
    justify-content: space-between;
}

.PartCenter_page__yhyNb {
    color: #4f5665 !important;
    font-size: 16px;
}

.PartCenter_page__yhyNb:hover {
    border-bottom: 3px solid #6a4029;
    color: #0b132a !important;
    padding-bottom: 3px;
}

.PartCenter_page__yhyNb:active {
    color: #6a4029 !important;
}

.PartCenter_page_on__KPw5h {
    color: #6a4029 !important;
    font-weight: bolder !important;
}

.PartCenter_page_on__KPw5h:hover {
    border-bottom: 3px solid #0b132a;
    color: #0b132a !important;
    padding-bottom: 3px;
}

.PartRight_right__yLRbt {
    align-items: center;
    display: flex;
    justify-content: flex-end;
}

.PartRight_search_bar__jM9Wd {
    margin-right: 35px;
    max-width: 200px;
}

.PartRight_search_bar__jM9Wd:hover {
    border-radius: 30px;
    outline: 2px solid #6a4029 !important;
}

.PartRight_icon__zuVUW {
    background: #efeeee !important;
    border-radius: 30px 0 0 30px !important;
}

.PartRight_search__B3yYx {
    border-radius: 0 30px 30px 0 !important;
    padding-left: 0 !important;
}

.PartRight_search__B3yYx,
.PartRight_search__B3yYx:focus {
    background: #efeeee !important;
}

.PartRight_login__\+DiKm {
    color: #0b132a !important;
    font-weight: 500 !important;
    margin-right: 35px;
}

.PartRight_login__\+DiKm:hover {
    border-bottom: 3px solid #6a4029;
    color: #6a4029 !important;
    padding-bottom: 3px;
}

.PartRight_login__\+DiKm:active {
    color: #0b132a !important;
}

.PartRight_profile__kpE-q {
    height: 35px;
    width: 35px;
}

.PartRight_profile__kpE-q>img {
    border-radius: 50%;
    height: 100%;
    object-fit: cover;
    outline: 1px solid #4f5665;
    width: 100%;
}

.PartRight_profile__kpE-q>img:hover {
    -webkit-filter: drop-shadow(0 6px 20px rgba(106, 64, 41, 0.8));
    filter: drop-shadow(0 6px 20px rgba(106, 64, 41, 0.8));
    outline: 3px solid #6a4029;
}

.PartRight_profile_on__xHFas {
    height: 35px;
    width: 35px;
}

.PartRight_profile_on__xHFas>img {
    border-radius: 50%;
    -webkit-filter: drop-shadow(0 6px 20px rgba(106, 64, 41, 0.8));
    filter: drop-shadow(0 6px 20px rgba(106, 64, 41, 0.8));
    height: 100%;
    object-fit: cover;
    outline: 3px solid #6a4029 !important;
    width: 100%;
}

.PartRight_btn_gold__Zj4Ju {
    background-color: #ffba33 !important;
    border-radius: 50px !important;
    box-shadow: 1px 6px 20px rgba(255, 186, 51, 0.4);
    color: #6a4029 !important;
    font-size: 15px !important;
    font-weight: 500 !important;
    height: 45px;
    width: 150px;
}

.PartRight_btn_gold__Zj4Ju:hover {
    background-color: #6a4029 !important;
    box-shadow: 0 6px 20px rgba(106, 64, 41, 0.65) !important;
    color: #fff !important;
    font-weight: bolder !important;
}

.NavBar_nav__ipV93 {
    border-bottom: 0.5px solid #9f9f9f !important;
    font-family: Rubik, sans-serif !important;
    height: 90px;
    position: -webkit-sticky;
    position: sticky !important;
    top: 0 !important;
    z-index: 2;
}

.NavBar_container__59Tao {
    display: flex;
    justify-content: space-between;
    padding: 0 30px !important;
}

.NavBar_brand__ophzh {
    display: flex;
}

.NavBar_brand__ophzh>span {
    color: #0b132a !important;
    font-size: 20px;
    font-weight: 700;
    margin-left: 15px;
}

.SectionUpper_container__qXMXy {
    background-image: url();
    background-size: cover;
    font-family: Rubik, sans-serif !important;
    height: 645px !important;
}

@media (min-width: 768px) {
    .SectionUpper_container__qXMXy {
        height: calc(100vh - 90px) !important;
    }
}

@media (min-width: 1400px) {
    .SectionUpper_container__qXMXy {
        height: 645px !important;
    }
}

.SectionUpper_main__domwI {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 65px 30px 0 !important;
}

.SectionUpper_content__5TnoD>h1 {
    font-weight: 600 !important;
    line-height: 55px !important;
}

.SectionUpper_content__5TnoD>p {
    font-weight: 500 !important;
    line-height: 25px !important;
}

.SectionUpper_btn_gold__2DEdK {
    background: #ffba33 !important;
    border-radius: 10px !important;
    color: #6a4029 !important;
    font-weight: 700 !important;
    height: 50px;
    margin-top: 15px;
    width: 220px;
}

.SectionUpper_btn_gold__2DEdK:hover {
    background-color: #6a4029 !important;
    box-shadow: 0 10px 20px rgba(137, 85, 55, 0.4) !important;
    color: #fff !important;
}

.SectionUpper_card__cXOBe {
    background-color: #fff;
    border-radius: 10px !important;
    bottom: -90px;
    -webkit-filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.22)) !important;
    filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.22)) !important;
    height: 180px;
    padding: 30px 50px;
    position: relative;
}

.SectionUpper_card_row__H1QFQ {
    display: flex !important;
    flex-direction: row !important;
    height: 100%;
    justify-content: space-between !important;
}

.SectionUpper_card_part__Res00 {
    align-items: center;
    display: flex;
    justify-content: center;
}

.SectionUpper_line__fWuoQ {
    border-left: 2px solid #eeeff2;
    border-right: 2px solid #eeeff2;
}

.SectionUpper_icon__nkqnx {
    align-items: center;
    background-color: #ffba33;
    border-radius: 50%;
    display: flex;
    height: 50px;
    justify-content: center;
    margin-right: 30px;
    width: 50px;
}

.SectionUpper_text__kLGO2>h6 {
    font-size: 25px;
    font-weight: 900;
    margin-bottom: 0;
}

.SectionUpper_text__kLGO2>span {
    color: #4f5665;
    font-size: 20px;
}

.SectionLower_container__1H8up {
    align-items: center;
    display: flex;
    font-family: Rubik, sans-serif !important;
    height: 115vh !important;
    justify-content: center;
}

@media (min-width: 1400px) {
    .SectionLower_container__1H8up {
        height: calc(100vh - 87px) !important;
    }
}

.SectionLower_main__jk2z- {
    align-items: center;
    display: flex;
    height: 400px;
    justify-content: space-between;
    margin: auto 30px;
}

.SectionLower_side_left__ylMMm {
    display: flex;
    height: 400px;
}

.SectionLower_side_right__57OZv {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
}

.SectionLower_side_right__57OZv>div>h3 {
    color: #0b132a;
    font-size: 35px;
    line-height: 50px;
    margin-bottom: 15px;
}

.SectionLower_side_right__57OZv>div>span {
    color: #4f5665;
    line-height: 30px;
}

.SectionLower_list__u3J8K {
    display: flex;
    flex-direction: column;
    max-height: 100%;
}

.SectionLower_list__u3J8K>div {
    margin-top: 15px;
}

.SectionLower_list__u3J8K>div>span {
    color: #4f5665;
    font-size: 14px;
    margin-left: 10px;
}

.SideLeft_wrapper__p-DWp {
    font-family: Rubik, sans-serif !important;
    height: calc(100vh - 90px);
}

.SideLeft_container__SoEjR {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 30px 20px 40px 40px !important;
}

.SideLeft_header__zyY-r {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.SideLeft_header__zyY-r>h4 {
    color: #6a4029;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 40px;
}

.SideLeft_header__zyY-r>span {
    font-family: Poppins, sans-serif !important;
    font-size: 12px;
    text-align: center;
}

.SideLeft_coupon__77Vbf {
    align-items: center;
    background-color: #c59378;
    border-radius: 20px !important;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    justify-content: center;
    padding: 15px 0;
}

.SideLeft_coupon__77Vbf>h4 {
    font-weight: bolder;
}

.SideLeft_coupon__77Vbf>span {
    color: #fff;
    text-align: center;
}

.SideLeft_terms__uLsJU {
    align-items: flex-start;
    color: #4f5665;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin-top: auto;
}

.SideLeft_terms__uLsJU>li {
    list-style: none;
}

.ModalConfirm_modal__dn3Y8 {
    font-family: Poppins, sans-serif !important;
}

.ModalConfirm_border-radius__ZOZMz div {
    border-radius: 20px !important;
}

.ModalConfirm_modal_box__\+mkly {
    height: 220px;
    justify-content: center !important;
}

.ModalConfirm_modal_body__lMhaB {
    align-items: center;
    display: flex;
    font-size: 20px;
    height: 60%;
    justify-content: center;
    text-align: center;
}

.ModalConfirm_modal_footer__Wglq6 {
    align-items: center;
    display: flex;
    justify-content: space-around;
}

.ModalConfirm_modal_footer__Wglq6>button {
    border-radius: 10px !important;
    font-size: 17px;
    font-weight: 700;
    height: 55px;
    width: 130px;
}

.ModalConfirm_btn__yQwte:hover {
    background-color: #ffba33 !important;
    border: none !important;
    box-shadow: 0 6px 20px rgba(106, 64, 41, 0.65) !important;
    color: #0b132a !important;
}

.ModalConfirm_btn_white__h1fO- {
    border: 3px solid #6a4029 !important;
    color: #6a4029 !important;
}

.ModalConfirm_btn_brown__lmayJ {
    background-color: #6a4029 !important;
    color: #fff !important;
}

.CardProduct_container__PNuGY {
    align-items: center;
    border-radius: 20px !important;
    box-shadow: 0 30px 60px rgba(57, 57, 57, 0.3);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: Poppins, sans-serif !important;
    height: 210px;
    justify-content: center;
    margin: 40px 0;
    padding: 5px;
    width: 170px;
}

.CardProduct_container__PNuGY:hover {
    background-color: #ffba33;
    box-shadow: 0 6px 20px rgba(106, 64, 41, 0.65) !important;
    color: #fff !important;
    outline: 3px solid #6a4029 !important;
}

.CardProduct_container__PNuGY:hover>.CardProduct_body__Q3Xdk>span {
    color: #0b132a !important;
}

.CardProduct_content__k8grk {
    align-items: center;
    border-radius: 20px !important;
    box-shadow: 0 30px 60px rgba(57, 57, 57, 0.3);
    display: flex;
    flex-direction: column;
    font-family: Poppins, sans-serif !important;
    height: 210px;
    justify-content: center;
    margin: 40px 0;
    padding: 5px;
    width: 170px;
}

.CardProduct_image__sIV0B {
    height: 140px;
    position: absolute;
    top: -40px;
    width: 140px;
}

.CardProduct_image__sIV0B>img {
    border-radius: 100% !important;
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.CardProduct_body__Q3Xdk {
    align-items: center !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 60% !important;
    width: 100%;
}

.CardProduct_body__Q3Xdk>h5 {
    font-size: 20px;
    font-weight: 900;
    text-transform: lowercase;
}

.CardProduct_body__Q3Xdk>h5:first-letter {
    text-transform: capitalize;
}

.CardProduct_body__Q3Xdk>span {
    color: #6a4029;
    font-size: 15px;
    font-weight: 700;
}

.CardProduct_btn_delete__fYxMT {
    background-color: #6a4029 !important;
    border-radius: 50% !important;
    height: 35px;
    padding: 0 !important;
    width: 35px;
}

.CardProduct_btn_delete__fYxMT:hover {
    background-color: #ffba33 !important;
    outline: 3px solid #6a4029;
}

.CardProduct_btn_edit__w-Xqa {
    background-color: #6a4029 !important;
    border-radius: 50% !important;
    height: 35px;
    padding: 0 !important;
    width: 35px;
}

.CardProduct_btn_edit__w-Xqa:hover {
    background-color: #ffba33 !important;
    outline: 3px solid #6a4029;
}

.CardProduct_btn_edit__w-Xqa>img {
    height: 50% !important;
    width: 50% !important;
}

.Pagination_pagination__SCbAp {
    align-items: flex-end !important;
    border-radius: 10px !important;
    box-shadow: 0 30px 60px rgba(57, 57, 57, 0.3) !important;
    display: flex !important;
    font-family: Rubik, sans-serif !important;
    font-size: 17px !important;
    font-weight: bolder !important;
    justify-content: center !important;
    list-style: none !important;
    margin: 0 !important;
    outline: none !important;
    padding: 0 0 13px !important;
    position: static !important;
}

.Pagination_pagination__SCbAp>li>a,
.Pagination_pagination__SCbAp>li>span {
    background-color: #6a4029 !important;
    border: 3px solid #6a4029 !important;
    color: #ffba33 !important;
    cursor: pointer !important;
    outline: none !important;
    padding: 15px 20px !important;
}

.Pagination_pagination__SCbAp>li>a:hover,
.Pagination_pagination__SCbAp>li>span:hover {
    background-color: #fff !important;
    border: 3px solid #fff !important;
    color: #6a4029 !important;
}

.Pagination_pagination__SCbAp>li:first-child>a,
.Pagination_pagination__SCbAp>li:first-child>span {
    background-color: #bcbaba !important;
    border: 3px solid #bcbaba !important;
    border-radius: 10px 0 0 10px !important;
    color: #6a4029 !important;
    text-decoration: none !important;
}

.Pagination_pagination__SCbAp>li:first-child>a:hover,
.Pagination_pagination__SCbAp>li:first-child>span:hover {
    background-color: #fff !important;
    border: 3px solid #6a4029 !important;
    color: #6a4029 !important;
}

.Pagination_pagination__SCbAp>li:last-child>a,
.Pagination_pagination__SCbAp>li:last-child>span {
    background-color: #bcbaba !important;
    border: 3px solid #bcbaba !important;
    border-radius: 0 10px 10px 0 !important;
    color: #6a4029 !important;
    text-decoration: none !important;
}

.Pagination_pagination__SCbAp>li:last-child>a:hover,
.Pagination_pagination__SCbAp>li:last-child>span:hover {
    background-color: #fff !important;
    border: 3px solid #6a4029 !important;
    color: #6a4029 !important;
}

.Pagination_pagination__SCbAp>.Pagination_active__IDbtC>a,
.Pagination_pagination__SCbAp>.Pagination_active__IDbtC>a:focus,
.Pagination_pagination__SCbAp>.Pagination_active__IDbtC>span,
.Pagination_pagination__SCbAp>.Pagination_active__IDbtC>span:focus {
    background-color: #ffba33 !important;
    border-color: #ffba33 !important;
    color: #6a4029 !important;
}

.Pagination_pagination__SCbAp>.Pagination_active__IDbtC>a:hover,
.Pagination_pagination__SCbAp>.Pagination_active__IDbtC>span:hover {
    background-color: #fff !important;
    border: 3px solid #fff !important;
}

.TabsBar_wrapper__6\+fiH {
    align-items: center;
    display: flex;
    font-family: Rubik, sans-serif !important;
    height: 90px;
    justify-content: space-around;
    margin-bottom: 30px !important;
}

.TabsBar_tabs__-Mskk {
    cursor: pointer;
}

.TabsBar_tabs__-Mskk>span {
    color: #9f9f9f;
    font-size: 20px;
}

.TabsBar_tabs__-Mskk>span:hover {
    color: #0b132a;
}

.TabsBar_tabs_on__gDhrJ>span {
    border-bottom: 3px solid #6a4029;
    color: #6a4029 !important;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
}

.TabsBar_tabs_on__gDhrJ>span:hover {
    border-bottom: 3px solid #0b132a;
    color: #0b132a !important;
}

.SideRight_wrapper__pk6AN {
    border-left: 0.5px solid #9f9f9f !important;
    min-height: calc(100vh - 90px);
}

.SideRight_container__SjjYa {
    margin: 0 11.5% 0 80px !important;
    padding-bottom: 80px !important;
}

.SideRight_card_box__pNXsh {
    min-height: calc(100vh - 329px);
}

.SideRight_loading__7sUA\+ {
    align-items: center;
    display: flex;
    justify-content: space-around;
    min-height: calc(100vh - 259px);
}

.SideRight_empty__2QswA {
    align-items: center !important;
    display: flex;
    justify-content: center !important;
    min-height: calc(100vh - 259px);
}

.SideRight_empty__2QswA>h1 {
    color: #0b132a !important;
}

.SideRight_card__eALrB {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.SideRight_card__eALrB>div {
    display: flex;
    justify-content: center;
}

.SideRight_page__RDxWT {
    align-items: flex-end !important;
    display: flex !important;
    height: 70px;
    justify-content: center !important;
}

.SideRight_btn_create__-jTEn {
    background-color: #6a4029 !important;
    border-radius: 15px !important;
    font-family: Poppins, sans-serif !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    height: 70px;
    margin-top: 50px;
    width: 100%;
}

.SideRight_btn_create__-jTEn:hover {
    background-color: #ffba33 !important;
    color: #6a4029 !important;
}

.Product_container__LROKu,
.Product_main__PfjTH {
    min-height: calc(100vh - 90px) !important;
}

.NotFound_body__G7TFr {
    background-color: #bcbaba;
    color: #0b132a;
    display: flex;
    flex-direction: column;
    font-family: Rubik, sans-serif !important;
    height: calc(100vh - 90px);
    justify-content: center;
}

.NotFound_body__G7TFr>h1 {
    font-size: 50px;
}

.NotFound_body__G7TFr>h2 {
    color: #fff;
    font-size: 80px;
    margin: 30px 0;
}

.SideLeft_section__wMLe6 {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.SideLeft_img__Kwkzm {
    background-color: gray;
    display: flex;
    height: 750px;
    justify-content: center;
    width: 520px;
}

.SideLeft_img__Kwkzm>img {
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.SideLeft_btn__tQhii {
    align-items: center !important;
    border-radius: 50% !important;
    display: flex !important;
    height: 40px;
    justify-content: center !important;
    width: 40px;
}

.SideLeft_btn__tQhii:hover {
    -webkit-filter: drop-shadow(0 6px 10px rgba(106, 64, 41, 0.8));
    filter: drop-shadow(0 6px 10px rgba(106, 64, 41, 0.8));
}

.SideLeft_btn_select__olT\+j {
    background-color: #6a4029 !important;
    margin-right: 25px;
    margin-top: 25px;
    outline: 5px solid #ffba33;
}

.SideLeft_btn_select__olT\+j>img {
    height: 120%;
    width: 120%;
}

.SideLeft_btn_select__olT\+j:hover {
    background-color: #ffba33 !important;
    outline: 5px solid #6a4029;
}

.SideLeft_btn_reset__6YXKJ {
    background-color: #fff !important;
    margin-right: 25px;
    margin-top: 90px;
    outline: 5px solid #ffba33;
}

.SideLeft_btn_reset__6YXKJ>i {
    color: #6a4029;
}

.SideLeft_btn_reset__6YXKJ:hover {
    background-color: #ffba33 !important;
    outline: 5px solid #6a4029;
}

.SideLeft_btn_reset__6YXKJ:hover>i {
    color: #fff;
}

.SideLeft_text__ZHzGv {
    font-family: Poppins, sans-serif !important;
    font-size: 20px;
    margin-top: 25px;
}

.SideRight_section__GQmfL {
    display: flex;
    flex-direction: column;
    font-family: Poppins, sans-serif !important;
    height: 100%;
}

.SideRight_detail__dyDhT {
    margin-bottom: 55px;
}

.SideRight_title__B3UOr {
    font-size: 50px;
    font-weight: 900;
    line-height: 50px;
    text-transform: uppercase;
}

.SideRight_detail__dyDhT>h3 {
    margin-bottom: 30px;
    margin-top: 15px;
}

.SideRight_desc__pTOvG {
    word-wrap: break-word;
    font-size: 20px;
    text-align: justify;
    text-justify: inter-word;
}

.SideRight_option__GRK\+e {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: flex-start;
}

.SideRight_dropdown__aG-B7 {
    border: 1px solid #9f9f9f !important;
    border-radius: 10px !important;
    color: #9f9f9f !important;
    height: 60px;
    padding-left: 20px !important;
}

.SideRight_amount__eMYNG {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.SideRight_counter__xym0G {
    border: 1px solid #9f9f9f !important;
    border-radius: 10px;
    height: 60px;
}

.SideRight_counter__xym0G>button {
    color: #9f9f9f;
    font-size: 20px;
    font-weight: 900;
}

.SideRight_counter__xym0G>button:hover {
    background-color: #ffba33 !important;
    color: #6a4029 !important;
    outline: 3px solid #6a4029 !important;
}

.SideRight_counter__xym0G>button:first-child {
    border-radius: 10px 0 0 10px !important;
}

.SideRight_counter__xym0G>button:last-child {
    border-radius: 0 10px 10px 0 !important;
}

.SideRight_counter__xym0G>div {
    align-items: center;
    cursor: default;
    display: flex;
    font-size: 20px;
    justify-content: center;
}

.SideRight_btn__BD94z {
    border-radius: 15px !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    height: 60px;
}

.SideRight_btn__BD94z:hover {
    background-color: #0b132a !important;
    box-shadow: 0 6px 20px rgba(106, 64, 41, 0.65) !important;
    color: #ffba33 !important;
}

.SideRight_btn_gold__fwoWG {
    background-color: #ffba33 !important;
    box-shadow: 0 6px 20px rgba(255, 186, 51, 0.29);
    color: #6a4029 !important;
}

.SideRight_btn_brown__0szNG {
    background-color: #6a4029 !important;
    color: #fff !important;
    width: 100%;
}

.SideEdit_section__b8vfB {
    display: flex;
    flex-direction: column;
    font-family: Poppins, sans-serif !important;
    height: 100%;
}

.SideEdit_section__b8vfB>div {
    margin-bottom: 30px !important;
}

.SideEdit_field_edit__8Q\+89>label {
    color: #9f9f9f;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500 !important;
}

.SideEdit_field_edit__8Q\+89>input {
    height: 60px;
}

.SideEdit_field_edit__8Q\+89>input,
.SideEdit_field_edit__8Q\+89>textarea {
    border: 1px solid #9f9f9f;
    border-radius: 10px !important;
    font-weight: 500 !important;
    padding-left: 20px !important;
}

.SideEdit_dropdown__\+bjdY {
    border: 1px solid #9f9f9f !important;
    border-radius: 10px !important;
    cursor: pointer;
    font-weight: 500 !important;
    height: 60px;
    padding-left: 20px !important;
}

.SideEdit_btn__-pfVT {
    border-radius: 10px !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    height: 60px;
    width: 100%;
}

.SideEdit_btn__-pfVT:hover {
    background-color: #0b132a !important;
    box-shadow: 0 6px 20px rgba(106, 64, 41, 0.65) !important;
    color: #ffba33 !important;
}

.SideEdit_btn_yellow__YdE4j {
    background-color: #ffba33 !important;
    color: #6a4029 !important;
}

.SideEdit_btn_brown__HsYb- {
    background-color: #6a4029 !important;
    color: #fff !important;
}

.Detail_container__oPXlC {
    height: 100% !important;
}

.Detail_content__ABKSt {
    padding: 25px 30px 50px !important;
}

.Detail_crumb__AJ2gq {
    color: #4f5665;
    font-family: Rubik, sans-serif !important;
    font-size: 20px;
    margin-bottom: 40px;
}

.Detail_crumb_page__j8AN0:hover {
    border-bottom: 3px solid #6a4029 !important;
    color: #0b132a !important;
    padding-bottom: 3px !important;
}

.Detail_crumb_active__09Cw3 {
    --bs-breadcrumb-divider: ">";
    color: #6a4029;
    font-weight: 700;
}

.Detail_section__Bd6wd {
    display: flex;
    justify-content: space-between;
}

.SideLeft_wrapper__5osDu {
    font-family: Rubik, sans-serif !important;
}

.SideLeft_img__XEZT7,
.SideLeft_wrapper__5osDu {
    align-items: center;
    display: flex;
    flex-direction: column;
}

.SideLeft_img__XEZT7 {
    height: 300px;
    margin-bottom: 30px;
    width: 300px;
}

.SideLeft_preview__J2oku {
    border-radius: 50%;
    height: 100%;
    object-fit: cover;
    outline: 5px solid #6a4029;
    width: 100%;
}

.SideLeft_blank__bBwcN {
    align-items: center;
    background-color: #e7e7e7;
    border-radius: 50%;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
}

.SideLeft_btn__0ZTiQ {
    background-color: #0b132a !important;
    border-radius: 20px !important;
    color: #fff !important;
    font-size: 20px !important;
    font-weight: bolder !important;
    height: 70px;
    width: 350px;
}

.SideLeft_btn__0ZTiQ:hover {
    background-color: #ffba33 !important;
    box-shadow: 0 6px 20px rgba(106, 64, 41, 0.4) !important;
    color: #6a4029 !important;
}

.SideRight_wrapper__Z1cxw {
    font-family: Rubik, sans-serif !important;
}

.SideRight_wrapper__Z1cxw>div {
    margin-bottom: 60px !important;
}

.SideRight_field_edit__PPhFO>label {
    color: #6a4029;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700 !important;
}

.SideRight_field_edit__PPhFO>input {
    font-size: 15px;
    height: 60px;
}

.SideRight_field_edit__PPhFO>input,
.SideRight_field_edit__PPhFO>textarea {
    border: 1px solid #9f9f9f;
}

.SideRight_dropdown__Vpl9F,
.SideRight_field_edit__PPhFO>input,
.SideRight_field_edit__PPhFO>textarea {
    border-radius: 15px !important;
    color: #9f9f9f !important;
    font-weight: 500 !important;
    padding-left: 20px !important;
}

.SideRight_dropdown__Vpl9F {
    border: 1px solid #9f9f9f !important;
    cursor: pointer;
    height: 60px;
}

.SideRight_btn__p020O {
    border-radius: 15px !important;
    font-family: Poppins, sans-serif !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    height: 70px;
    width: 100%;
}

.SideRight_btn__p020O:hover {
    background-color: #ffba33 !important;
    box-shadow: 0 6px 20px rgba(106, 64, 41, 0.65) !important;
    color: #6a4029 !important;
}

.SideRight_btn_brown__optaz {
    background-color: #6a4029 !important;
    color: #fff !important;
}

.SideRight_btn_grey__XWYW8 {
    background-color: #e7e7e7 !important;
    color: #4f5665 !important;
}

.Create_wrapper__9kcvS {
    min-height: calc(100vh - 90px);
}

.Create_container__PhK-S {
    flex-direction: column;
    padding: 25px 30px 80px !important;
}

.Create_content__fBJYw {
    display: flex;
    justify-content: space-between;
}

.Create_crumb__B7Y5m {
    color: #4f5665;
    font-family: Rubik, sans-serif !important;
    font-size: 20px;
    margin-bottom: 40px;
}

.Create_crumb_page__l0lcZ:hover {
    border-bottom: 3px solid #6a4029 !important;
    color: #0b132a !important;
    padding-bottom: 3px !important;
}

.Create_crumb_active__uMrgH {
    --bs-breadcrumb-divider: ">";
    color: #6a4029;
    font-weight: 700;
}

.Create_container__PhK-S {
    display: flex;
}

.SideLeft_container__Z7ncf {
    border-radius: 15px !important;
    color: #362115;
    padding: 70px 50px 50px;
}

.SideLeft_title__gDyuq {
    font-weight: bolder;
    margin-bottom: 50px;
}

.SideLeft_empty_box__E9l-U {
    align-items: center;
    background-color: #88b788;
    border-radius: 15px !important;
    display: flex;
    height: 100px;
    justify-content: center;
}

.SideLeft_empty_box__E9l-U>h4 {
    color: #fff !important;
    font-weight: 700 !important;
    margin: 0;
}

.SideLeft_list__W8TL7 {
    display: flex;
    flex-direction: column;
}

.SideLeft_items_list__rPpEe {
    align-items: center;
    border-radius: 15px !important;
    display: flex;
    margin: 10px 0 5px;
    padding: 10px;
}

.SideLeft_items_list__rPpEe:hover {
    box-shadow: 0 10px 20px rgba(137, 85, 55, 0.4);
    font-weight: 700 !important;
    outline: 3px solid #6a4029 !important;
}

.SideLeft_items_list__rPpEe>span {
    font-size: 18px !important;
}

.SideLeft_img__mPyXp {
    height: 80px !important;
    margin-right: 30px;
    width: 80px !important;
}

.SideLeft_img__mPyXp>img {
    border-radius: 15px !important;
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.SideLeft_text__92y\+Z {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 110px);
}

.SideLeft_amount__O9f1j {
    color: #000 !important;
    display: flex;
    flex-direction: column;
    width: 65%;
}

.SideLeft_text__92y\+Z>span {
    align-items: center;
    display: flex;
    font-size: 18px !important;
    justify-content: flex-end;
}

.SideLeft_btn_delete__6W6Ic {
    align-items: center !important;
    background-color: #6a4029 !important;
    border-radius: 50% !important;
    display: flex !important;
    height: 40px;
    justify-content: center !important;
}

.SideLeft_items_list__rPpEe:hover>.SideLeft_btn_delete__6W6Ic {
    background-color: #ffba33 !important;
}

.SideLeft_items_list__rPpEe:hover>.SideLeft_btn_delete__6W6Ic:hover {
    background-color: #6a4029 !important;
    outline: 3px solid #ffba33 !important;
}

.SideLeft_btn_delete__6W6Ic>i,
.SideLeft_items_list__rPpEe:hover>.SideLeft_btn_delete__6W6Ic:hover>i {
    color: #fff !important;
}

.SideLeft_items_list__rPpEe:hover>.SideLeft_btn_delete__6W6Ic>i {
    color: #6a4029 !important;
}

.SideLeft_detail__v3k9j {
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    margin-bottom: 5px;
}

.SideLeft_null__1kGgW {
    display: none !important;
}

.SideLeft_total__0x5Vm {
    margin-top: 30px;
}

.SideLeft_total__0x5Vm>h4 {
    font-weight: bolder !important;
}

.SideRight_container__on\+Yi {
    height: 100%;
}

.SideRight_section__m1u8B {
    display: flex;
    flex-direction: column;
}

.SideRight_title__m-B0U {
    display: flex;
    justify-content: space-between;
    padding-right: 30px;
}

.SideRight_title__m-B0U>h4 {
    font-weight: 700;
    margin-bottom: 15px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.8);
}

.SideRight_title__m-B0U>span {
    color: #fff;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
}

.SideRight_title__m-B0U>span:hover {
    color: #ffba33;
}

.SideRight_section__m1u8B>h4 {
    font-weight: 700;
    margin-bottom: 15px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.8);
}

.SideRight_card__ngz5y {
    border-radius: 20px !important;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    padding: 20px 40px;
}

.SideRight_card__ngz5y>ul>li {
    padding-left: 0;
}

.SideRight_address__R9vzG {
    word-wrap: break-word;
    text-align: justify;
    text-justify: inter-word;
}

.SideRight_payment__Paosl {
    margin-top: 40px;
}

.SideRight_pay_method__ZSiXf {
    align-items: center !important;
    display: flex !important;
    margin-left: 20px !important;
    padding-left: 0 !important;
}

.SideRight_pay_method__ZSiXf>input:hover {
    cursor: pointer;
}

.SideRight_pay_method__ZSiXf>input:checked {
    background: #6a4029 !important;
    border: 4px solid #fff;
    outline: 1px solid #6a4029;
}

.SideRight_pay_method__ZSiXf>input:checked+label {
    color: #6a4029 !important;
    font-weight: 700 !important;
}

.SideRight_pay_method__ZSiXf>input:checked+label:hover {
    color: #0b132a !important;
}

.SideRight_pay_method__ZSiXf>label:hover {
    color: #0b132a !important;
    cursor: pointer !important;
    font-weight: 700 !important;
}

.SideRight_icon_pay__8RMW7 {
    border-radius: 10px !important;
    cursor: pointer;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
    width: 40px;
}

.SideRight_icon_card__efjg1 {
    background-color: #f47b0a !important;
    padding: 10px !important;
}

.SideRight_icon_bank__N\+c1C {
    background-color: #895537 !important;
    padding: 10px !important;
}

.SideRight_icon_cash__NdnFc {
    background-color: #ffba33 !important;
    padding: 7px !important;
}

.SideRight_btn_brown__\+7vn1 {
    background-color: #6a4029 !important;
    border-radius: 15px !important;
    box-shadow: 0 10px 20px rgba(137, 85, 55, 0.4);
    color: #fff !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    height: 60px;
    margin-top: 40px;
    width: 100%;
}

.SideRight_btn_brown__\+7vn1:hover {
    background-color: #ffba33 !important;
    color: #6a4029 !important;
}

.Cart_container__nM\+KQ {
    min-height: 100vh !important;
}

.Cart_main__zONZH {
    background-image: url();
    background-size: cover;
    font-family: Rubik, sans-serif !important;
}

.Cart_content__vvtXS {
    padding: 50px 30px 80px !important;
}

.Cart_title__MJfvv>h2 {
    font-weight: 500;
    margin-bottom: 30px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.8);
}

.Cart_section__t4X6K {
    display: flex;
    font-family: Poppins, sans-serif !important;
    justify-content: space-between;
}

.CardHistory_wrapper__CXMRU {
    align-items: center !important;
    border-radius: 15px !important;
    display: flex !important;
    flex-direction: row !important;
    font-family: Poppins, sans-serif !important;
    justify-content: center !important;
    margin-bottom: 40px !important;
    padding: 20px !important;
    width: 100%;
}

.CardHistory_wrapper__CXMRU:hover {
    background-color: #ffba33;
}

.CardHistory_img_body__M7OZD {
    align-items: center;
    display: flex;
    height: 75px;
    justify-content: center;
    width: 75px;
}

.CardHistory_img__ZgDAq {
    border-radius: 50%;
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.CardHistory_text__TVIG1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    padding: 0 !important;
    width: calc(100% - 95px);
}

.CardHistory_text__TVIG1>h5 {
    color: #000;
    font-size: 21px;
    font-weight: bolder !important;
    text-transform: lowercase;
}

.CardHistory_text__TVIG1>h5:first-letter {
    text-transform: capitalize;
}

.CardHistory_wrapper__CXMRU:hover>.CardHistory_text__TVIG1>h5 {
    color: #fff;
}

.CardHistory_text__TVIG1>span {
    color: #6a4029;
}

.CardHistory_wrapper__CXMRU:hover>.CardHistory_text__TVIG1>span {
    color: #0b132a;
    font-weight: 700 !important;
}

.History_container__QJ0iO {
    background-image: url();
    background-position: 50%;
    background-size: cover;
    min-height: calc(100vh - 90px) !important;
}

.History_content__22jzH {
    min-height: calc(100vh - 90px) !important;
    padding: 0 0 70px !important;
}

.History_header__cbf-F {
    align-items: center;
    display: flex;
    font-family: Rubik, sans-serif !important;
    height: 180px;
    justify-content: center;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.8);
}

.History_header__cbf-F>h2 {
    font-weight: 700;
}

.History_header__cbf-F>p {
    font-size: 18px;
}

.History_main__MNNk9 {
    min-height: calc(100vh - 440px);
}

.History_loading__kt27v {
    justify-content: space-around;
}

.History_empty__sApoX,
.History_loading__kt27v {
    align-items: center;
    display: flex;
    min-height: calc(100vh - 340px);
}

.History_empty__sApoX {
    justify-content: center;
}

.History_empty__sApoX>h1 {
    color: #ffba33;
    font-size: 45px;
    font-weight: 700;
}

.History_section__9NTZ\+ {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.History_card_item__4mpxV {
    display: flex;
    justify-content: center;
}

.History_page__1CUse {
    align-items: flex-end !important;
    display: flex !important;
    height: 100px;
    justify-content: center !important;
}

.SideLeft_container__1igeH,
.SideLeft_section__dNkca {
    align-items: center;
    display: flex;
    flex-direction: column;
}

.SideLeft_section__dNkca {
    text-align: center;
}

.SideLeft_img_box__NjsFL {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.SideLeft_img__KbSqm {
    height: 185px;
    margin-bottom: 10px;
    width: 185px;
}

.SideLeft_img__KbSqm>img {
    border-radius: 50%;
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.SideLeft_img_box__NjsFL span:nth-child(2) {
    font-size: 20px;
    font-weight: bolder;
    text-transform: capitalize !important;
}

.SideLeft_img_box__NjsFL span {
    color: #000;
    font-weight: 500;
}

.SideLeft_section__dNkca button:nth-child(2) {
    margin-bottom: 15px;
}

.SideLeft_section__dNkca:nth-child(2) {
    margin-top: 30px;
}

.SideLeft_section__dNkca:nth-child(2) span {
    color: #6a4029;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 35px;
}

.SideLeft_section__dNkca:nth-child(2) button:nth-child(2) {
    margin-bottom: 25px;
}

.SideLeft_btn_sm__08gQi {
    border-radius: 10px !important;
    font-size: 15px !important;
    font-weight: bolder !important;
    height: 45px;
    width: 200px;
}

.SideLeft_btn_md__BGoiy {
    border-radius: 15px !important;
    font-size: 18px !important;
    font-weight: 700 !important;
    height: 60px;
    width: 200px;
}

.SideLeft_btn__P9iJe:hover {
    background-color: #0b132a !important;
    box-shadow: 0 6px 20px rgba(106, 64, 41, 0.65) !important;
    color: #ffba33 !important;
}

.SideLeft_btn_gold__4GLti {
    background-color: #ffba33 !important;
    color: #6a4029 !important;
}

.SideLeft_btn_brown__VPWzM {
    background-color: #6a4029 !important;
    color: #fff !important;
}

.SideLeft_btn_white__wMw8a {
    background-color: #fff !important;
    color: #6a4029 !important;
    margin-top: 45px;
    outline: 1px solid #9f9f9f !important;
}

.react-calendar {
    background: #fff;
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    max-width: 100%;
    width: 350px;
}

.react-calendar--doubleView {
    width: 700px;
}

.react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
}

.react-calendar--doubleView .react-calendar__viewContainer>* {
    margin: 0.5em;
    width: 50%;
}

.react-calendar,
.react-calendar *,
.react-calendar :after,
.react-calendar :before {
    box-sizing: border-box;
}

.react-calendar button {
    border: 0;
    margin: 0;
    outline: none;
}

.react-calendar button:enabled:hover {
    cursor: pointer;
}

.react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
}

.react-calendar__navigation button {
    background: none;
    min-width: 44px;
}

.react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
}

.react-calendar__navigation button:enabled:focus,
.react-calendar__navigation button:enabled:hover {
    background-color: #e6e6e6;
}

.react-calendar__month-view__weekdays {
    font-size: 0.75em;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
}

.react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
}

.react-calendar__month-view__weekNumbers .react-calendar__tile {
    align-items: center;
    display: flex;
    font-size: 0.75em;
    font-weight: 700;
    justify-content: center;
}

.react-calendar__month-view__days__day--weekend {
    color: #d10000;
}

.react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
}

.react-calendar__century-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__year-view .react-calendar__tile {
    padding: 2em 0.5em;
}

.react-calendar__tile {
    background: none;
    line-height: 16px;
    max-width: 100%;
    padding: 10px 6.6667px;
    text-align: center;
}

.react-calendar__tile:disabled {
    background-color: #f0f0f0;
}

.react-calendar__tile:enabled:focus,
.react-calendar__tile:enabled:hover {
    background-color: #e6e6e6;
}

.react-calendar__tile--now {
    background: #ffff76;
}

.react-calendar__tile--now:enabled:focus,
.react-calendar__tile--now:enabled:hover {
    background: #ffffa9;
}

.react-calendar__tile--hasActive {
    background: #76baff;
}

.react-calendar__tile--hasActive:enabled:focus,
.react-calendar__tile--hasActive:enabled:hover {
    background: #a9d4ff;
}

.react-calendar__tile--active {
    background: #006edc;
    color: #fff;
}

.react-calendar__tile--active:enabled:focus,
.react-calendar__tile--active:enabled:hover {
    background: #1087ff;
}

.react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
}

.react-date-picker {
    display: inline-flex;
    position: relative;
}

.react-date-picker,
.react-date-picker *,
.react-date-picker :after,
.react-date-picker :before {
    box-sizing: border-box;
}

.react-date-picker--disabled {
    background-color: #f0f0f0;
    color: #6d6d6d;
}

.react-date-picker__wrapper {
    border: thin solid gray;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
}

.react-date-picker__inputGroup {
    box-sizing: content-box;
    flex-grow: 1;
    min-width: calc(12px + 4.754em);
    padding: 0 2px;
}

.react-date-picker__inputGroup__divider {
    padding: 1px 0;
    white-space: pre;
}

.react-date-picker__inputGroup__input {
    -moz-appearance: textfield;
    background: none;
    border: 0;
    box-sizing: content-box;
    font: inherit;
    height: 100%;
    min-width: 0.54em;
    padding: 0 1px;
    position: relative;
}

.react-date-picker__inputGroup__input::-webkit-inner-spin-button,
.react-date-picker__inputGroup__input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.react-date-picker__inputGroup__input:invalid {
    background: rgba(255, 0, 0, 0.1);
}

.react-date-picker__inputGroup__input--hasLeadingZero {
    margin-left: -0.54em;
    padding-left: calc(1px + 0.54em);
}

.react-date-picker__button {
    background: transparent;
    border: 0;
    padding: 4px 6px;
}

.react-date-picker__button:enabled {
    cursor: pointer;
}

.react-date-picker__button:enabled:focus .react-date-picker__button__icon,
.react-date-picker__button:enabled:hover .react-date-picker__button__icon {
    stroke: #0078d7;
}

.react-date-picker__button:disabled .react-date-picker__button__icon {
    stroke: #6d6d6d;
}

.react-date-picker__button svg {
    display: inherit;
}

.react-date-picker__calendar {
    left: 0;
    max-width: 100vw;
    position: absolute;
    top: 100%;
    width: 350px;
    z-index: 1;
}

.react-date-picker__calendar--closed {
    display: none;
}

.react-date-picker__calendar .react-calendar {
    border-width: thin;
}

.SideRight_container__U4LbP {
    background-color: #fff;
    border-bottom: 10px solid #6a4029;
    border-radius: 10px;
    box-shadow: 0 7px 10px rgba(106, 64, 41, 0.7);
    -webkit-filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.22));
    filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.22));
    height: auto;
    padding: 20px 20px 50px 30px !important;
}

.SideRight_title__qwrDJ {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.SideRight_title__qwrDJ h3 {
    color: #4f5665;
    font-weight: 700;
}

.SideRight_section__L00IE {
    display: flex;
    justify-content: space-between;
    margin: 0 50px 40px 0;
}

.SideRight_section__L00IE>.SideRight_col__VOhOS {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.SideRight_section__L00IE:nth-child(2) {
    height: 29%;
}

.SideRight_section__L00IE:nth-child(4) {
    height: 35%;
}

.SideRight_section__L00IE:nth-child(5) {
    align-items: center;
    height: 10%;
    justify-content: space-evenly;
    margin-right: 0;
}

.SideRight_input_box__G\+UIb {
    display: flex;
    flex-direction: column;
}

.SideRight_input_label__fw84n {
    color: #9f9f9f;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
}

.SideRight_input_area__LJYVT {
    background: #f8f8f8 !important;
    border: 0 !important;
    border-bottom: 1px solid #000 !important;
    border-radius: 5px 5px 0 0 !important;
    font-weight: 500 !important;
    padding: 10px;
}

.SideRight_input_area__LJYVT>div {
    border: none;
}

.SideRight_input_sm__mZrzo {
    height: 40px;
}

.SideRight_input_md__Ry5OW {
    height: 70px;
    line-height: 25px;
}

.SideRight_check_box__fr7RR {
    cursor: pointer;
}

.SideRight_check__5NTK1 {
    border: 4px solid #9f9f9f !important;
    cursor: pointer;
    height: 25px !important;
    margin-right: 10px;
    width: 25px !important;
}

.SideRight_check__5NTK1:checked {
    background: #ffba33 !important;
    border: 5px solid #6a4029 !important;
}

.SideRight_check__5NTK1:checked+.SideRight_input_label__fw84n {
    color: #6a4029;
    font-weight: 700;
}

.Profile_container__qxk2L {
    min-height: 100vh !important;
}

.Profile_main__slZVc {
    background-image: url();
    background-size: cover;
    font-family: Rubik, sans-serif !important;
}

.Profile_content__BKmlY {
    padding: 50px 30px 80px !important;
}

.Profile_title__rz\+fL>h2 {
    font-weight: 500;
    margin-bottom: 30px;
    text-shadow: 0 6px 8px hsla(0, 0%, 100%, 0.26);
}

.Profile_section__UPepS {
    background-color: #f8f8f8 !important;
    border-radius: 20px !important;
    display: flex;
    flex-direction: row !important;
    font-family: Poppins, sans-serif !important;
    justify-content: space-between !important;
    margin: 0 !important;
    padding: 50px;
}

.Slider {
    position: absolute;
    width: 1920px;
    height: 1284px;
    left: 0px;
    top: -74px;
}


/* Home */

.Home {
    position: fixed;
    left: 110px;
    top: 67px;
    text-decoration: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #2e266f;
    z-index: 9999;
}

.Recipe {
    position: fixed;
    text-decoration: none;
    left: 262px;
    top: 67px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #2e266f;
    z-index: 9999;
}

.Profile {
    position: fixed;
    text-decoration: none;
    left: 460px;
    top: 67px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #2e266f;
    z-index: 9999;
}


/* Rectangle 313 */

.Rectangle313 {
    position: absolute;
    border-radius: 15px;
    height: 830px;
    width: 830px;
    left: 135px;
    top: 308px;
}


/* Rectangle 28 */

.rectangle28 {
    position: absolute;
    width: 200px;
    height: 64px;
    left: 1215px;
    top: 3128px;
    background: #efc81a;
    border-radius: 8px;
}


/* Learn More */

.text_learn2 {
    position: absolute;
    left: 1268px;
    top: 3149px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */
    letter-spacing: 0.07em;
    color: #ffffff;
}


/* Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right! */

.text_quickeasy2 {
    position: absolute;
    left: 1215px;
    top: 3014px;
    font-family: "Poppins";
    font-size: 24px;
    line-height: 32px;
    /* or 133% */
    letter-spacing: 0.04em;
    color: #3f3a3a;
}


/* Line 16 */

.line16 {
    position: absolute;
    width: 100px;
    height: 0px;
    left: 1215px;
    top: 2977px;
    border: 2px solid #6f6a40;
}


/* Healthy Bone Broth Ramen (Quick & Easy) */

.text_healthy2 {
    position: absolute;
    width: 690px;
    height: 146px;
    left: 1215px;
    top: 2807px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 56px;
    line-height: 73px;
    color: #3f3a3a;
}


/* Rectangle 2 */

.Rectangle2_recipe {
    position: absolute;
    width: 514px;
    height: 820px;
    left: 0px;
    top: 2579px;
    background: #efc81a;
}


/* Rectangle 314 */

.Rectangle314_detail {
    position: absolute;
    width: 411.27px;
    height: 93.01px;
    left: 306px;
    top: 1873.43px;
    background: linear-gradient(0deg, #efc81a, #efc81a), url(./Assets/572da9a89bc5f8fe0da12c9a18c352e7.jpg), #c4c4c4;
    border: 5px solid #efc81a;
    box-sizing: border-box;
    border-radius: 15px;
}


/* Vector */

.vector_play {
    position: absolute;
    width: inherit;
    height: inherit;
    left: 20.83%;
    right: 20.83%;
    top: 12.5%;
    bottom: 12.5%;
    background-image: url(./Assets/play-solid.svg);
}


/* Vector */

.vector_play2 {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background-image: url(./Assets/play-solid.svg);
}


/* Vector */

.vector_play3 {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background-image: url(./Assets/play-solid.svg);
}


/* Vector */

.vector_play4 {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background-image: url(./Assets/play-solid.svg);
}


/* Rectangle 317 */

.Rectangle317_detail {
    position: absolute;
    width: 410.72px;
    height: 93.01px;
    left: 306px;
    top: 2012.95px;
    background: linear-gradient(0deg, #efc81a, #efc81a), url(./Assets/572da9a89bc5f8fe0da12c9a18c352e7.jpg), #c4c4c4;
    border: 5px solid #efc81a;
    box-sizing: border-box;
    border-radius: 15px;
}


/* Rectangle 318 */

.Rectangle318_detail {
    position: absolute;
    width: 411.27px;
    height: 93.01px;
    left: 306px;
    top: 2152.47px;
    background: linear-gradient(0deg, #efc81a, #efc81a), url(./Assets/572da9a89bc5f8fe0da12c9a18c352e7.jpg), #c4c4c4;
    border: 5px solid #efc81a;
    box-sizing: border-box;
    border-radius: 15px;
}


/* Rectangle 319 */

.Rectangle319_detail {
    position: absolute;
    width: 410.72px;
    height: 93.01px;
    left: 306px;
    top: 2291.99px;
    background: linear-gradient(0deg, #efc81a, #efc81a), url(./Assets/572da9a89bc5f8fe0da12c9a18c352e7.jpg), #c4c4c4;
    border: 5px solid #efc81a;
    box-sizing: border-box;
    border-radius: 15px;
}


/* Rectangle 331 */

.Rectangle331_detail {
    position: absolute;
    width: 1300px;
    height: 380px;
    left: 327px;
    top: 2525px;
    background: #f6f5f4;
    border-radius: 15px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    text-align: left;
}


/* Rectangle 27 */

.Rectangle27_detail {
    position: absolute;
    width: 426px;
    height: 64px;
    left: 717px;
    top: 2945px;
    background: #efc81a;
    border-radius: 6px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    text-align: center;
    color: #ffffff;
}


/* Ellipse 128 */

.ellipse128_detail {
    position: absolute;
    width: 64px;
    height: 64px;
    left: 327px;
    top: 3162px;
    border-radius: 50%;
}


/* Rectangle 329 */

.Rectangle329 {
    position: absolute;
    width: 1300px;
    height: 480px;
    left: 310px;
    top: 268px;
    background: #f6f5f4;
    border-radius: 15px;
}


/* Add image */

.text_addimage {
    position: absolute;
    width: 191px;
    height: 31px;
    left: 869px;
    top: 534px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    color: #666666;
}


/* image */

.image_add {
    left: 620px;
    top: 174px;
    position: relative;
    width: 64px;
    height: 64px;
}


/* Rectangle 330 */

.Rectangle330_add {
    position: absolute;
    width: 1300px;
    height: 100px;
    left: 310px;
    top: 788px;
    text-indent: 60px;
    background: #f6f5f4;
    border-radius: 15px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    color: #666666;
}


/* Rectangle 331 */

.Rectangle331_add {
    position: absolute;
    width: 1300px;
    height: 380px;
    left: 310px;
    top: 928px;
    background: #f6f5f4;
    border-radius: 15px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    color: #666666;
}


/* Rectangle 27 */

.btnrectangle27 {
    position: absolute;
    width: 426px;
    height: 64px;
    left: 748px;
    top: 1548px;
    background: #efc81a;
    border-radius: 6px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    text-align: center;
    color: #ffffff;
}


/* Rectangle 26 */

.Rectangle26_add {
    position: absolute;
    width: 1920px;
    height: 685px;
    left: 0px;
    top: 1712px;
    background: #efc81a;
}


/* Rectangle 332 */

.Rectangle332_add {
    position: absolute;
    width: 1300px;
    height: 100px;
    text-indent: 60px;
    left: 311px;
    top: 1348px;
    background: #f6f5f4;
    border-radius: 15px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    color: #666666;
}


/* Ellipse 127 */

.ellipse127 {
    position: absolute;
    width: 172px;
    height: 202px;
    left: 874px;
    top: 244px;
    border-radius: 50%;
}

.ellipse126 {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 1042px;
    top: 392px;
    border-radius: 50%;
}

.rectangle329_profile {
    position: absolute;
    width: 370px;
    height: 250px;
    left: 800px;
    top: 170px;
    border-radius: 10px;
}


/* Bomb Chicken */

.text_bombchicken_2 {
    position: absolute;
    width: 108px;
    top: 240px;
    padding-right: 90px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    text-transform: capitalize;
    color: #ffffff;
}

.text_bombchicken_3 {
    position: absolute;
    width: 108px;
    height: 72px;
    left: 140px;
    top: 353px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    text-align: left;
    display: flex;
    text-transform: capitalize;
    color: #ffffff;
}


/* Product Company Learn more Get in touch */

.Rectangle26_2 .text_productcompany2 {
    left: 743px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    /* or 150% */
    text-transform: capitalize;
}


/* edit-3 */

.logo_pencil {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 1022px;
    top: 432px;
}


/* Rectangle 70 */

.Rectangle70_btn {
    position: absolute;
    width: 319px;
    height: 80px;
    left: 800px;
    top: 470px;
    background: #e7e7e7;
    border-radius: 15px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.03em;
    color: #3f3a3a;
}


/* Rectangle 26 */

.Rectangle26_2 {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 104px;
    top: 1200px;
    background: #efc81a;
}


/* Bananas Pancake */

.text_banana_2 {
    position: absolute;
    width: 116px;
    height: 72px;
    left: 560px;
    top: 353px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #ffffff;
}


/* Rectangle 328 */

.Rectangle328_2 {
    position: absolute;
    width: 370px;
    height: 250px;
    left: 536px;
    top: 50px;
    border-radius: 10px;
}


/* My Recipe */

.navbar_myrecipe {
    position: absolute;
    border: none;
    left: 90px;
    top: 587px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    color: #000000;
    display: inline;
}


/* Garneta Sharina */

.text_garneta {
    position: absolute;
    width: 232px;
    height: 31px;
    left: 839px;
    top: 490px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    color: #000000;
}


/* Rectangle 26 */

.Rectangle_26_detail {
    position: absolute;
    width: 1920px;
    height: 685px;
    left: 0px;
    top: 3476px;
    background: #efc81a;
}


/* Nice recipe. simple and delicious, thankyou */

.text_nice_recipe {
    position: absolute;
    width: 600px;
    height: 62px;
    left: 429px;
    top: 3179px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 62px;
    /* identical to box height, or 258% */
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #000000;
}


/* Ayudia */

.text_ayudia {
    position: absolute;
    width: 78px;
    height: 62px;
    left: 429px;
    top: 3147px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 62px;
    /* identical to box height, or 258% */
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #000000;
}


/* Comment */

.text_comment_detail {
    position: absolute;
    width: 229px;
    height: 62px;
    left: 327px;
    top: 3058px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 62px;
    /* identical to box height, or 129% */
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #3f3a3a;
}


/* play */

.play_vector_main4 {
    position: absolute;
    width: 34.96px;
    height: 29.76px;
    left: 486px;
    top: 2316.61px;
}


/* play */

.play_vector_main3 {
    position: absolute;
    width: 34.96px;
    height: 29.76px;
    left: 486px;
    top: 2184.09px;
}


/* play */

.play_vector_main2 {
    position: absolute;
    width: 34.96px;
    height: 29.76px;
    left: 486px;
    top: 2037.52px;
}


/* play */

.play_vector_main {
    position: absolute;
    width: 34.96px;
    height: 29.76px;
    left: 486px;
    top: 1898px;
}


/* Video Step */

.text_videostep {
    position: absolute;
    width: 300px;
    height: 62px;
    left: 306px;
    top: 1769px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 62px;
    /* identical to box height, or 129% */
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #3f3a3a;
}


/* - 2 eggs - 2 tbsp mayonnaise - 3 slices bread - a little butter - ⅓ carton of cress - 2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese - crisps , to serve */

.detail_txt_2 {
    position: absolute;
    width: 654px;
    height: 376px;
    left: 306px;
    top: 1319px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    list-style-type: none;
    line-height: 47px;
    align-items: center;
    text-transform: capitalize;
    color: #000000;
}


/* Ingredients */

.text_ingredients {
    position: absolute;
    width: 258px;
    height: 62px;
    left: 312px;
    top: 1215px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 62px;
    /* identical to box height, or 129% */
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #3f3a3a;
}


/* Rectangle 313 */

.Rectangle313_2 {
    position: absolute;
    width: 800px;
    height: 800px;
    left: 135px;
    top: 2660px;
    border-radius: 15px;
}


/* Rectangle 313 */

.Rectangle313_3 {
    position: absolute;
    width: 1082px;
    height: 700px;
    left: 419px;
    top: 406px;
    border-radius: 15px;
}


/* Rectangle 6 */

.Rectangle6 {
    position: absolute;
    width: 25px;
    height: 140px;
    left: 135px;
    top: 2344px;
    background: #efc81a;
}


/* New Recipe */

.Newrecipe {
    position: absolute;
    width: 300px;
    height: 62px;
    left: 190px;
    top: 2382px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 62px;
    /* identical to box height, or 129% */
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #3f3a3a;
}


/* Rectangle 309 */

.Rectangle309 {
    position: absolute;
    width: 683px;
    height: 801px;
    left: 338px;
    top: 382px;
    border: 3px solid #efc81a;
    box-sizing: border-box;
    border-radius: 10px;
}


/* Chiken Kare */

.chicken_kare {
    position: absolute;
    width: 112px;
    height: 84px;
    left: 175px;
    top: 4294px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #3f3a3a;
}


/* Rectangle 318 */

.Rectangle318_2 {
    position: absolute;
    width: 500px;
    height: 500px;
    left: 710px;
    top: 4493px;
    border-radius: 15px;
}


/* Coffe Lava Cake */

.text_coffe {
    position: absolute;
    width: 280px;
    height: 84px;
    left: 174px;
    top: 4869px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #3f3a3a;
}


/* Eat, Cook, Repeat */

.text_eat_cook2 {
    position: absolute;
    width: 700px;
    height: 48px;
    left: 666px;
    top: 300px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 48px;
    /* identical to box height, or 67% */
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    color: #2e266f;
}


/* Arkademy */

.text_arkademy {
    position: absolute;
    width: 197px;
    height: 16px;
    left: 1558px;
    top: 600px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    color: #000000;
}

#logocopyright {
    position: absolute;
    width: 197px;
    height: 16px;
    left: 1448px;
    top: 600px;
}


/* Product Company Learn more Get in touch */

.text_productcompany {
    position: absolute;
    width: 434px;
    height: 28px;
    left: 760px;
    top: 600px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    color: #707070;
}


/* Share your best recipe by uploading here ! */

.text_shareyour {
    position: absolute;
    width: 600px;
    height: 24px;
    left: 724px;
    top: 400px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    /* identical to box height, or 100% */
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    color: #707070;
}


/* Rectangle 26 */

.Rectangle26 {
    position: absolute;
    width: 1920px;
    height: 685px;
    left: 0px;
    top: 5173px;
    background: #efc81a;
}


/* Indian Salad */

.text_indiansalad {
    position: absolute;
    width: 92px;
    height: 84px;
    left: 1325px;
    top: 4869px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #3f3a3a;
}


/* Rectangle 319 */

.Rectangle319_2 {
    position: absolute;
    width: 500px;
    height: 500px;
    left: 1285px;
    top: 4493px;
    border-radius: 15px;
}


/* Sugar Salmon */

.text_sugarsalmon {
    position: absolute;
    width: 112px;
    height: 84px;
    left: 750px;
    top: 4869px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #3f3a3a;
}


/* Rectangle 317 */

.Rectangle317_2 {
    position: absolute;
    width: 500px;
    height: 500px;
    left: 134px;
    top: 4493px;
    border-radius: 15px;
}


/* Banana Smothie Pop */

.text_banana {
    position: absolute;
    width: 300px;
    height: 84px;
    left: 1325px;
    top: 4294px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #3f3a3a;
}


/* Rectangle 316 */

.Rectangle316_2 {
    position: absolute;
    width: 500px;
    height: 500px;
    left: 1285px;
    top: 3918px;
    border-radius: 15px;
}


/* Bomb Chicken */

.text_bombchicken {
    position: absolute;
    width: 123px;
    height: 84px;
    left: 750px;
    top: 4294px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #3f3a3a;
}


/* Rectangle 315 */

.Rectangle315_2 {
    position: absolute;
    width: 500px;
    height: 500px;
    left: 710px;
    top: 3918px;
    border-radius: 15px;
}


/* Rectangle 314 */

.Rectangle314_2 {
    position: absolute;
    width: 500px;
    height: 500px;
    left: 135px;
    top: 3918px;
    border-radius: 15px;
}


/* Rectangle 8 */

.Rectangle8 {
    position: absolute;
    width: 25px;
    height: 140px;
    left: 135px;
    top: 3665px;
    background: #efc81a;
}


/* Popular Recipe */

.text_popularrecipe {
    position: absolute;
    width: 390px;
    height: 62px;
    left: 190px;
    top: 3703px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 62px;
    /* identical to box height, or 129% */
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #3f3a3a;
}


/* Learn More */

.text_learnmore {
    position: absolute;
    height: 21px;
    left: 1268px;
    top: 868px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */
    letter-spacing: 0.07em;
    color: #ffffff;
}


/* Rectangle 28 */

.rectangle_28 {
    position: absolute;
    width: 200px;
    height: 64px;
    left: 1215px;
    top: 847px;
    background: #efc81a;
    border-radius: 8px;
}


/* Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right! */

.textquick_easychicken {
    position: absolute;
    left: 1215px;
    top: 733px;
    font-family: "Poppins";
    font-size: 24px;
    line-height: 32px;
    /* or 133% */
    letter-spacing: 0.04em;
    color: #3f3a3a;
}


/* Line 16 */

.line_16 {
    position: absolute;
    width: 100px;
    height: 0px;
    left: 1215px;
    top: 696px;
    border: 2px solid #6f6a40;
}


/* Healthy Bone Broth Ramen (Quick & Easy) */

.texthealthy {
    position: absolute;
    width: 690px;
    height: 146px;
    left: 1215px;
    top: 526px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 56px;
    line-height: 73px;
    color: #3f3a3a;
}


/* Rectangle 6 */

.rectangle6 {
    position: absolute;
    width: 25px;
    height: 140px;
    left: 135px;
    top: 66px;
    background: #efc81a;
}


/* Food Item */

.fooditem {
    position: absolute;
    width: 1920px;
    height: 1328px;
    left: 0px;
    top: 1048px;
}


/* Popular For You ! */

.textpopular {
    position: absolute;
    width: 636px;
    height: 105px;
    left: 190px;
    top: 83px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 62px;
    /* or 129% */
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #3f3a3a;
}


/* Rectangle 3 */

.Rectangle3 {
    position: absolute;
    width: 670px;
    height: 90px;
    left: 135px;
    top: 697px;
    background: #efefef;
    border-radius: 15px;
}


/* Vector */

.Vector {
    position: absolute;
    left: 10.35%;
    right: 89.43%;
    top: 40.15%;
    bottom: 50%;
    background-image: url(./Assets/magnifying-glass-solid.svg);
    background-repeat: no-repeat;
    height: 16px;
    width: 16px;
    border-radius: 0px;
}


/* Discover Recipe & Delicious Food */

.DiscoverRecipe {
    position: absolute;
    left: 132px;
    top: 488px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 72px;
    line-height: 90px;
    /* or 125% */
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #2e266f;
}


/* Loream Sandwich */

.text_loreamsandwich {
    position: absolute;
    width: 700px;
    height: 90px;
    left: 660px;
    top: 246px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 72px;
    line-height: 90px;
    /* identical to box height, or 125% */
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #2e266f;
}

.text-searchrestaurant:focus {
    background-color: white;
}


/* search restaurant, food */

.text-searchrestaurant {
    position: absolute;
    width: 500px;
    height: 60px;
    left: 15%;
    top: 20%;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 90px;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    /* or 500% */
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: black;
}

.BG {
    position: absolute;
    width: 1920px;
    height: 1210px;
    left: 0px;
    top: 74px;
}


/* Rectangle 1 */

.Rectangle1 {
    position: absolute;
    width: 1920px;
    height: 1048px;
    left: 0px;
    top: 74px;
    background: #ffffff;
}


/* Rectangle 2 */

.Rectangle2 {
    position: relative;
    width: 514px;
    height: 1210px;
    left: 1406px;
    top: 74px;
    background: #efc81a;
}


/* User Panel */

.UserPanel {
    position: absolute;
    width: 100px;
    height: 52px;
    left: 1671px;
    top: 53px;
}


/* Ellipse 1 */

.Ellipse1 {
    border-radius: 50%;
    display: inline-block;
    position: fixed;
    width: 52px;
    height: 52px;
    left: 1661px;
    top: 52px;
    background: #ffffff;
    z-index: 9999;
}


/* User icon */

.Usericon {
    position: absolute;
    background-size: auto;
    background-image: url(./Assets/User\ icon.png);
    left: 19.6%;
    top: 19.1%;
    width: 50%;
    height: 50%;
    bottom: 98.48%;
    z-index: 9999;
}

input {
    background-color: #efefef;
    border: none;
}


/* Ellipse 2 */

.Ellipse2 {
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    width: 15px;
    height: 15px;
    left: 1707px;
    top: 53px;
    background: #31a24c;
}


/* User Txt */

.UserTxt {
    position: absolute;
    width: 41px;
    height: 21px;
    left: 1730px;
    top: 68px;
}


/* Login */

.Login {
    position: fixed;
    width: 41px;
    height: 21px;
    left: 1730px;
    top: 68px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    z-index: 9999;
    line-height: 21px;
    /* identical to box height */
    display: flex;
    color: #ffffff;
}


/* identical to box height */

.identicaltoboxheight {
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
}


/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

:root {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #e9ecef;
    --bs-gray-300: #dee2e6;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #adb5bd;
    --bs-gray-600: #6c757d;
    --bs-gray-700: #495057;
    --bs-gray-800: #343a40;
    --bs-gray-900: #212529;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-primary-rgb: 13, 110, 253;
    --bs-secondary-rgb: 108, 117, 125;
    --bs-success-rgb: 25, 135, 84;
    --bs-info-rgb: 13, 202, 240;
    --bs-warning-rgb: 255, 193, 7;
    --bs-danger-rgb: 220, 53, 69;
    --bs-light-rgb: 248, 249, 250;
    --bs-dark-rgb: 33, 37, 41;
    --bs-white-rgb: 255, 255, 255;
    --bs-black-rgb: 0, 0, 0;
    --bs-body-color-rgb: 33, 37, 41;
    --bs-body-bg-rgb: 255, 255, 255;
    --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient( 180deg, hsla(0, 0%, 100%, 0.15), hsla(0, 0%, 100%, 0));
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
    --bs-body-color: #212529;
    --bs-body-bg: #fff;
}

*,
:after,
:before {
    box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
     :root {
        scroll-behavior: smooth;
    }
}

body {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    background-color: #fff;
    background-color: var(--bs-body-bg);
    color: #212529;
    color: var(--bs-body-color);
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-family: var(--bs-body-font-family);
    font-size: 1rem;
    font-size: var(--bs-body-font-size);
    font-weight: 400;
    font-weight: var(--bs-body-font-weight);
    line-height: 1.5;
    line-height: var(--bs-body-line-height);
    margin: 0;
    text-align: var(--bs-body-text-align);
}

hr {
    background-color: currentColor;
    border: 0;
    color: inherit;
    margin: 1rem 0;
    opacity: 0.25;
}

hr:not([size]) {
    height: 1px;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 0;
}

.h1,
h1 {
    font-size: calc(1.375rem + 1.5vw);
}

@media (min-width: 1200px) {
    .h1,
    h1 {
        font-size: 2.5rem;
    }
}

.h2,
h2 {
    font-size: calc(1.325rem + 0.9vw);
}

@media (min-width: 1200px) {
    .h2,
    h2 {
        font-size: 2rem;
    }
}

.h3,
h3 {
    font-size: calc(1.3rem + 0.6vw);
}

@media (min-width: 1200px) {
    .h3,
    h3 {
        font-size: 1.75rem;
    }
}

.h4,
h4 {
    font-size: calc(1.275rem + 0.3vw);
}

@media (min-width: 1200px) {
    .h4,
    h4 {
        font-size: 1.5rem;
    }
}

.h5,
h5 {
    font-size: 1.25rem;
}

.h6,
h6 {
    font-size: 1rem;
}

p {
    margin-bottom: 1rem;
    margin-top: 0;
}

abbr[data-bs-original-title],
abbr[title] {
    cursor: help;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
}

address {
    font-style: normal;
    line-height: inherit;
    margin-bottom: 1rem;
}

ol,
ul {
    padding-left: 2rem;
}

dl,
ol,
ul {
    margin-bottom: 1rem;
    margin-top: 0;
}

ol ol,
ol ul,
ul ol,
ul ul {
    margin-bottom: 0;
}

dt {
    font-weight: 700;
}

dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
}

blockquote {
    margin: 0 0 1rem;
}

b,
strong {
    font-weight: bolder;
}

.small,
small {
    font-size: 0.875em;
}

.mark,
mark {
    background-color: #fcf8e3;
    padding: 0.2em;
}

sub,
sup {
    font-size: 0.75em;
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

a {
    color: #0d6efd;
    text-decoration: underline;
}

a:hover {
    color: #0a58ca;
}

a:not([href]):not([class]),
a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
}

code,
kbd,
pre,
samp {
    direction: ltr;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    font-family: var(--bs-font-monospace);
    font-size: 1em;
    unicode-bidi: bidi-override;
}

pre {
    display: block;
    font-size: 0.875em;
    margin-bottom: 1rem;
    margin-top: 0;
    overflow: auto;
}

pre code {
    color: inherit;
    font-size: inherit;
    word-break: normal;
}

code {
    word-wrap: break-word;
    color: #d63384;
    font-size: 0.875em;
}

a>code {
    color: inherit;
}

kbd {
    background-color: #212529;
    border-radius: 0.2rem;
    color: #fff;
    font-size: 0.875em;
    padding: 0.2rem 0.4rem;
}

kbd kbd {
    font-size: 1em;
    font-weight: 700;
    padding: 0;
}

figure {
    margin: 0 0 1rem;
}

img,
svg {
    vertical-align: middle;
}

table {
    border-collapse: collapse;
    caption-side: bottom;
}

caption {
    color: #6c757d;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    text-align: left;
}

th {
    text-align: inherit;
    text-align: -webkit-match-parent;
}

tbody,
td,
tfoot,
th,
thead,
tr {
    border: 0 solid;
    border-color: inherit;
}

label {
    display: inline-block;
}

button {
    border: none;
}

button:focus:not(:focus-visible) {
    outline: 0;
}

optgroup,
select,
textarea {
    padding-top: 35px;
    text-indent: 60px;
    border: none;
    line-height: inherit;
    margin: 0;
}

button,
select {
    text-transform: none;
}

[role="button"] {
    cursor: pointer;
}

select {
    word-wrap: normal;
}

select:disabled {
    opacity: 1;
}

[list]::-webkit-calendar-picker-indicator {
    display: none;
}

[type="button"],
[type="reset"],
[type="submit"],
button {
    -webkit-appearance: button;
}

[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
    cursor: pointer;
}

::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

textarea {
    resize: vertical;
}

fieldset {
    border: 0;
    margin: 0;
    min-width: 0;
    padding: 0;
}

legend {
    float: left;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
    margin-bottom: 0.5rem;
    padding: 0;
    width: 100%;
}

@media (min-width: 1200px) {
    legend {
        font-size: 1.5rem;
    }
}

legend+* {
    clear: left;
}

::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-year-field {
    padding: 0;
}

::-webkit-inner-spin-button {
    height: auto;
}

[type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}

::-webkit-search-decoration {
    -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
    padding: 0;
}

::file-selector-button {
    font: inherit;
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}

output {
    display: inline-block;
}

iframe {
    border: 0;
}

summary {
    cursor: pointer;
    display: list-item;
}

progress {
    vertical-align: baseline;
}

[hidden] {
    display: none !important;
}

.lead {
    font-size: 1.25rem;
    font-weight: 300;
}

.display-1 {
    font-size: calc(1.625rem + 4.5vw);
    font-weight: 300;
    line-height: 1.2;
}

@media (min-width: 1200px) {
    .display-1 {
        font-size: 5rem;
    }
}

.display-2 {
    font-size: calc(1.575rem + 3.9vw);
    font-weight: 300;
    line-height: 1.2;
}

@media (min-width: 1200px) {
    .display-2 {
        font-size: 4.5rem;
    }
}

.display-3 {
    font-size: calc(1.525rem + 3.3vw);
    font-weight: 300;
    line-height: 1.2;
}

@media (min-width: 1200px) {
    .display-3 {
        font-size: 4rem;
    }
}

.display-4 {
    font-size: calc(1.475rem + 2.7vw);
    font-weight: 300;
    line-height: 1.2;
}

@media (min-width: 1200px) {
    .display-4 {
        font-size: 3.5rem;
    }
}

.display-5 {
    font-size: calc(1.425rem + 2.1vw);
    font-weight: 300;
    line-height: 1.2;
}

@media (min-width: 1200px) {
    .display-5 {
        font-size: 3rem;
    }
}

.display-6 {
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 300;
    line-height: 1.2;
}

@media (min-width: 1200px) {
    .display-6 {
        font-size: 2.5rem;
    }
}

.list-inline,
.list-unstyled {
    list-style: none;
    padding-left: 0;
}

.list-inline-item {
    display: inline-block;
}

.list-inline-item:not(:last-child) {
    margin-right: 0.5rem;
}

.initialism {
    font-size: 0.875em;
    text-transform: uppercase;
}

.blockquote {
    font-size: 1.25rem;
    margin-bottom: 1rem;
}

.blockquote> :last-child {
    margin-bottom: 0;
}

.blockquote-footer {
    color: #6c757d;
    font-size: 0.875em;
    margin-bottom: 1rem;
    margin-top: -1rem;
}

.blockquote-footer:before {
    content: "— ";
}

.img-fluid,
.img-thumbnail {
    height: auto;
    max-width: 100%;
}

.img-thumbnail {
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    padding: 0.25rem;
}

.figure {
    display: inline-block;
}

.figure-img {
    line-height: 1;
    margin-bottom: 0.5rem;
}

.figure-caption {
    color: #6c757d;
    font-size: 0.875em;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.75rem;
    padding-left: var(--bs-gutter-x, 0.75rem);
    padding-right: 0.75rem;
    padding-right: var(--bs-gutter-x, 0.75rem);
    width: 100%;
}

@media (min-width: 576px) {
    .container,
    .container-sm {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .container,
    .container-md,
    .container-sm {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .container,
    .container-lg,
    .container-md,
    .container-sm {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
        max-width: 1140px;
    }
}

@media (min-width: 1400px) {
    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl,
    .container-xxl {
        max-width: 1320px;
    }
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--bs-gutter-x) * -0.5);
    margin-right: calc(var(--bs-gutter-x) * -0.5);
    margin-top: calc(var(--bs-gutter-y) * -1);
}

.row>* {
    flex-shrink: 0;
    margin-top: var(--bs-gutter-y);
    max-width: 100%;
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    width: 100%;
}

.col {
    flex: 1 0;
}

.row-cols-auto>* {
    flex: 0 0 auto;
    width: auto;
}

.row-cols-1>* {
    flex: 0 0 auto;
    width: 100%;
}

.row-cols-2>* {
    flex: 0 0 auto;
    width: 50%;
}

.row-cols-3>* {
    flex: 0 0 auto;
    width: 33.3333333333%;
}

.row-cols-4>* {
    flex: 0 0 auto;
    width: 25%;
}

.row-cols-5>* {
    flex: 0 0 auto;
    width: 20%;
}

.row-cols-6>* {
    flex: 0 0 auto;
    width: 16.6666666667%;
}

.col-auto {
    flex: 0 0 auto;
    width: auto;
}

.col-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
}

.col-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
}

.col-3 {
    flex: 0 0 auto;
    width: 25%;
}

.col-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
}

.col-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
}

.col-6 {
    flex: 0 0 auto;
    width: 50%;
}

.col-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
}

.col-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
}

.col-9 {
    flex: 0 0 auto;
    width: 75%;
}

.col-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
}

.col-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
}

.col-12 {
    flex: 0 0 auto;
    width: 100%;
}

.offset-1 {
    margin-left: 8.33333333%;
}

.offset-2 {
    margin-left: 16.66666667%;
}

.offset-3 {
    margin-left: 25%;
}

.offset-4 {
    margin-left: 33.33333333%;
}

.offset-5 {
    margin-left: 41.66666667%;
}

.offset-6 {
    margin-left: 50%;
}

.offset-7 {
    margin-left: 58.33333333%;
}

.offset-8 {
    margin-left: 66.66666667%;
}

.offset-9 {
    margin-left: 75%;
}

.offset-10 {
    margin-left: 83.33333333%;
}

.offset-11 {
    margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
    --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
    --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
    --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
    --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
    --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
    --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
    --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
    --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
    --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
    --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
    --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
    --bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
    .col-sm {
        flex: 1 0;
    }
    .row-cols-sm-auto>* {
        flex: 0 0 auto;
        width: auto;
    }
    .row-cols-sm-1>* {
        flex: 0 0 auto;
        width: 100%;
    }
    .row-cols-sm-2>* {
        flex: 0 0 auto;
        width: 50%;
    }
    .row-cols-sm-3>* {
        flex: 0 0 auto;
        width: 33.3333333333%;
    }
    .row-cols-sm-4>* {
        flex: 0 0 auto;
        width: 25%;
    }
    .row-cols-sm-5>* {
        flex: 0 0 auto;
        width: 20%;
    }
    .row-cols-sm-6>* {
        flex: 0 0 auto;
        width: 16.6666666667%;
    }
    .col-sm-auto {
        flex: 0 0 auto;
        width: auto;
    }
    .col-sm-1 {
        flex: 0 0 auto;
        width: 8.33333333%;
    }
    .col-sm-2 {
        flex: 0 0 auto;
        width: 16.66666667%;
    }
    .col-sm-3 {
        flex: 0 0 auto;
        width: 25%;
    }
    .col-sm-4 {
        flex: 0 0 auto;
        width: 33.33333333%;
    }
    .col-sm-5 {
        flex: 0 0 auto;
        width: 41.66666667%;
    }
    .col-sm-6 {
        flex: 0 0 auto;
        width: 50%;
    }
    .col-sm-7 {
        flex: 0 0 auto;
        width: 58.33333333%;
    }
    .col-sm-8 {
        flex: 0 0 auto;
        width: 66.66666667%;
    }
    .col-sm-9 {
        flex: 0 0 auto;
        width: 75%;
    }
    .col-sm-10 {
        flex: 0 0 auto;
        width: 83.33333333%;
    }
    .col-sm-11 {
        flex: 0 0 auto;
        width: 91.66666667%;
    }
    .col-sm-12 {
        flex: 0 0 auto;
        width: 100%;
    }
    .offset-sm-0 {
        margin-left: 0;
    }
    .offset-sm-1 {
        margin-left: 8.33333333%;
    }
    .offset-sm-2 {
        margin-left: 16.66666667%;
    }
    .offset-sm-3 {
        margin-left: 25%;
    }
    .offset-sm-4 {
        margin-left: 33.33333333%;
    }
    .offset-sm-5 {
        margin-left: 41.66666667%;
    }
    .offset-sm-6 {
        margin-left: 50%;
    }
    .offset-sm-7 {
        margin-left: 58.33333333%;
    }
    .offset-sm-8 {
        margin-left: 66.66666667%;
    }
    .offset-sm-9 {
        margin-left: 75%;
    }
    .offset-sm-10 {
        margin-left: 83.33333333%;
    }
    .offset-sm-11 {
        margin-left: 91.66666667%;
    }
    .g-sm-0,
    .gx-sm-0 {
        --bs-gutter-x: 0;
    }
    .g-sm-0,
    .gy-sm-0 {
        --bs-gutter-y: 0;
    }
    .g-sm-1,
    .gx-sm-1 {
        --bs-gutter-x: 0.25rem;
    }
    .g-sm-1,
    .gy-sm-1 {
        --bs-gutter-y: 0.25rem;
    }
    .g-sm-2,
    .gx-sm-2 {
        --bs-gutter-x: 0.5rem;
    }
    .g-sm-2,
    .gy-sm-2 {
        --bs-gutter-y: 0.5rem;
    }
    .g-sm-3,
    .gx-sm-3 {
        --bs-gutter-x: 1rem;
    }
    .g-sm-3,
    .gy-sm-3 {
        --bs-gutter-y: 1rem;
    }
    .g-sm-4,
    .gx-sm-4 {
        --bs-gutter-x: 1.5rem;
    }
    .g-sm-4,
    .gy-sm-4 {
        --bs-gutter-y: 1.5rem;
    }
    .g-sm-5,
    .gx-sm-5 {
        --bs-gutter-x: 3rem;
    }
    .g-sm-5,
    .gy-sm-5 {
        --bs-gutter-y: 3rem;
    }
}

@media (min-width: 768px) {
    .col-md {
        flex: 1 0;
    }
    .row-cols-md-auto>* {
        flex: 0 0 auto;
        width: auto;
    }
    .row-cols-md-1>* {
        flex: 0 0 auto;
        width: 100%;
    }
    .row-cols-md-2>* {
        flex: 0 0 auto;
        width: 50%;
    }
    .row-cols-md-3>* {
        flex: 0 0 auto;
        width: 33.3333333333%;
    }
    .row-cols-md-4>* {
        flex: 0 0 auto;
        width: 25%;
    }
    .row-cols-md-5>* {
        flex: 0 0 auto;
        width: 20%;
    }
    .row-cols-md-6>* {
        flex: 0 0 auto;
        width: 16.6666666667%;
    }
    .col-md-auto {
        flex: 0 0 auto;
        width: auto;
    }
    .col-md-1 {
        flex: 0 0 auto;
        width: 8.33333333%;
    }
    .col-md-2 {
        flex: 0 0 auto;
        width: 16.66666667%;
    }
    .col-md-3 {
        flex: 0 0 auto;
        width: 25%;
    }
    .col-md-4 {
        flex: 0 0 auto;
        width: 33.33333333%;
    }
    .col-md-5 {
        flex: 0 0 auto;
        width: 41.66666667%;
    }
    .col-md-6 {
        flex: 0 0 auto;
        width: 50%;
    }
    .col-md-7 {
        flex: 0 0 auto;
        width: 58.33333333%;
    }
    .col-md-8 {
        flex: 0 0 auto;
        width: 66.66666667%;
    }
    .col-md-9 {
        flex: 0 0 auto;
        width: 75%;
    }
    .col-md-10 {
        flex: 0 0 auto;
        width: 83.33333333%;
    }
    .col-md-11 {
        flex: 0 0 auto;
        width: 91.66666667%;
    }
    .col-md-12 {
        flex: 0 0 auto;
        width: 100%;
    }
    .offset-md-0 {
        margin-left: 0;
    }
    .offset-md-1 {
        margin-left: 8.33333333%;
    }
    .offset-md-2 {
        margin-left: 16.66666667%;
    }
    .offset-md-3 {
        margin-left: 25%;
    }
    .offset-md-4 {
        margin-left: 33.33333333%;
    }
    .offset-md-5 {
        margin-left: 41.66666667%;
    }
    .offset-md-6 {
        margin-left: 50%;
    }
    .offset-md-7 {
        margin-left: 58.33333333%;
    }
    .offset-md-8 {
        margin-left: 66.66666667%;
    }
    .offset-md-9 {
        margin-left: 75%;
    }
    .offset-md-10 {
        margin-left: 83.33333333%;
    }
    .offset-md-11 {
        margin-left: 91.66666667%;
    }
    .g-md-0,
    .gx-md-0 {
        --bs-gutter-x: 0;
    }
    .g-md-0,
    .gy-md-0 {
        --bs-gutter-y: 0;
    }
    .g-md-1,
    .gx-md-1 {
        --bs-gutter-x: 0.25rem;
    }
    .g-md-1,
    .gy-md-1 {
        --bs-gutter-y: 0.25rem;
    }
    .g-md-2,
    .gx-md-2 {
        --bs-gutter-x: 0.5rem;
    }
    .g-md-2,
    .gy-md-2 {
        --bs-gutter-y: 0.5rem;
    }
    .g-md-3,
    .gx-md-3 {
        --bs-gutter-x: 1rem;
    }
    .g-md-3,
    .gy-md-3 {
        --bs-gutter-y: 1rem;
    }
    .g-md-4,
    .gx-md-4 {
        --bs-gutter-x: 1.5rem;
    }
    .g-md-4,
    .gy-md-4 {
        --bs-gutter-y: 1.5rem;
    }
    .g-md-5,
    .gx-md-5 {
        --bs-gutter-x: 3rem;
    }
    .g-md-5,
    .gy-md-5 {
        --bs-gutter-y: 3rem;
    }
}

@media (min-width: 992px) {
    .col-lg {
        flex: 1 0;
    }
    .row-cols-lg-auto>* {
        flex: 0 0 auto;
        width: auto;
    }
    .row-cols-lg-1>* {
        flex: 0 0 auto;
        width: 100%;
    }
    .row-cols-lg-2>* {
        flex: 0 0 auto;
        width: 50%;
    }
    .row-cols-lg-3>* {
        flex: 0 0 auto;
        width: 33.3333333333%;
    }
    .row-cols-lg-4>* {
        flex: 0 0 auto;
        width: 25%;
    }
    .row-cols-lg-5>* {
        flex: 0 0 auto;
        width: 20%;
    }
    .row-cols-lg-6>* {
        flex: 0 0 auto;
        width: 16.6666666667%;
    }
    .col-lg-auto {
        flex: 0 0 auto;
        width: auto;
    }
    .col-lg-1 {
        flex: 0 0 auto;
        width: 8.33333333%;
    }
    .col-lg-2 {
        flex: 0 0 auto;
        width: 16.66666667%;
    }
    .col-lg-3 {
        flex: 0 0 auto;
        width: 25%;
    }
    .col-lg-4 {
        flex: 0 0 auto;
        width: 33.33333333%;
    }
    .col-lg-5 {
        flex: 0 0 auto;
        width: 41.66666667%;
    }
    .col-lg-6 {
        flex: 0 0 auto;
        width: 50%;
    }
    .col-lg-7 {
        flex: 0 0 auto;
        width: 58.33333333%;
    }
    .col-lg-8 {
        flex: 0 0 auto;
        width: 66.66666667%;
    }
    .col-lg-9 {
        flex: 0 0 auto;
        width: 75%;
    }
    .col-lg-10 {
        flex: 0 0 auto;
        width: 83.33333333%;
    }
    .col-lg-11 {
        flex: 0 0 auto;
        width: 91.66666667%;
    }
    .col-lg-12 {
        flex: 0 0 auto;
        width: 100%;
    }
    .offset-lg-0 {
        margin-left: 0;
    }
    .offset-lg-1 {
        margin-left: 8.33333333%;
    }
    .offset-lg-2 {
        margin-left: 16.66666667%;
    }
    .offset-lg-3 {
        margin-left: 25%;
    }
    .offset-lg-4 {
        margin-left: 33.33333333%;
    }
    .offset-lg-5 {
        margin-left: 41.66666667%;
    }
    .offset-lg-6 {
        margin-left: 50%;
    }
    .offset-lg-7 {
        margin-left: 58.33333333%;
    }
    .offset-lg-8 {
        margin-left: 66.66666667%;
    }
    .offset-lg-9 {
        margin-left: 75%;
    }
    .offset-lg-10 {
        margin-left: 83.33333333%;
    }
    .offset-lg-11 {
        margin-left: 91.66666667%;
    }
    .g-lg-0,
    .gx-lg-0 {
        --bs-gutter-x: 0;
    }
    .g-lg-0,
    .gy-lg-0 {
        --bs-gutter-y: 0;
    }
    .g-lg-1,
    .gx-lg-1 {
        --bs-gutter-x: 0.25rem;
    }
    .g-lg-1,
    .gy-lg-1 {
        --bs-gutter-y: 0.25rem;
    }
    .g-lg-2,
    .gx-lg-2 {
        --bs-gutter-x: 0.5rem;
    }
    .g-lg-2,
    .gy-lg-2 {
        --bs-gutter-y: 0.5rem;
    }
    .g-lg-3,
    .gx-lg-3 {
        --bs-gutter-x: 1rem;
    }
    .g-lg-3,
    .gy-lg-3 {
        --bs-gutter-y: 1rem;
    }
    .g-lg-4,
    .gx-lg-4 {
        --bs-gutter-x: 1.5rem;
    }
    .g-lg-4,
    .gy-lg-4 {
        --bs-gutter-y: 1.5rem;
    }
    .g-lg-5,
    .gx-lg-5 {
        --bs-gutter-x: 3rem;
    }
    .g-lg-5,
    .gy-lg-5 {
        --bs-gutter-y: 3rem;
    }
}

@media (min-width: 1200px) {
    .col-xl {
        flex: 1 0;
    }
    .row-cols-xl-auto>* {
        flex: 0 0 auto;
        width: auto;
    }
    .row-cols-xl-1>* {
        flex: 0 0 auto;
        width: 100%;
    }
    .row-cols-xl-2>* {
        flex: 0 0 auto;
        width: 50%;
    }
    .row-cols-xl-3>* {
        flex: 0 0 auto;
        width: 33.3333333333%;
    }
    .row-cols-xl-4>* {
        flex: 0 0 auto;
        width: 25%;
    }
    .row-cols-xl-5>* {
        flex: 0 0 auto;
        width: 20%;
    }
    .row-cols-xl-6>* {
        flex: 0 0 auto;
        width: 16.6666666667%;
    }
    .col-xl-auto {
        flex: 0 0 auto;
        width: auto;
    }
    .col-xl-1 {
        flex: 0 0 auto;
        width: 8.33333333%;
    }
    .col-xl-2 {
        flex: 0 0 auto;
        width: 16.66666667%;
    }
    .col-xl-3 {
        flex: 0 0 auto;
        width: 25%;
    }
    .col-xl-4 {
        flex: 0 0 auto;
        width: 33.33333333%;
    }
    .col-xl-5 {
        flex: 0 0 auto;
        width: 41.66666667%;
    }
    .col-xl-6 {
        flex: 0 0 auto;
        width: 50%;
    }
    .col-xl-7 {
        flex: 0 0 auto;
        width: 58.33333333%;
    }
    .col-xl-8 {
        flex: 0 0 auto;
        width: 66.66666667%;
    }
    .col-xl-9 {
        flex: 0 0 auto;
        width: 75%;
    }
    .col-xl-10 {
        flex: 0 0 auto;
        width: 83.33333333%;
    }
    .col-xl-11 {
        flex: 0 0 auto;
        width: 91.66666667%;
    }
    .col-xl-12 {
        flex: 0 0 auto;
        width: 100%;
    }
    .offset-xl-0 {
        margin-left: 0;
    }
    .offset-xl-1 {
        margin-left: 8.33333333%;
    }
    .offset-xl-2 {
        margin-left: 16.66666667%;
    }
    .offset-xl-3 {
        margin-left: 25%;
    }
    .offset-xl-4 {
        margin-left: 33.33333333%;
    }
    .offset-xl-5 {
        margin-left: 41.66666667%;
    }
    .offset-xl-6 {
        margin-left: 50%;
    }
    .offset-xl-7 {
        margin-left: 58.33333333%;
    }
    .offset-xl-8 {
        margin-left: 66.66666667%;
    }
    .offset-xl-9 {
        margin-left: 75%;
    }
    .offset-xl-10 {
        margin-left: 83.33333333%;
    }
    .offset-xl-11 {
        margin-left: 91.66666667%;
    }
    .g-xl-0,
    .gx-xl-0 {
        --bs-gutter-x: 0;
    }
    .g-xl-0,
    .gy-xl-0 {
        --bs-gutter-y: 0;
    }
    .g-xl-1,
    .gx-xl-1 {
        --bs-gutter-x: 0.25rem;
    }
    .g-xl-1,
    .gy-xl-1 {
        --bs-gutter-y: 0.25rem;
    }
    .g-xl-2,
    .gx-xl-2 {
        --bs-gutter-x: 0.5rem;
    }
    .g-xl-2,
    .gy-xl-2 {
        --bs-gutter-y: 0.5rem;
    }
    .g-xl-3,
    .gx-xl-3 {
        --bs-gutter-x: 1rem;
    }
    .g-xl-3,
    .gy-xl-3 {
        --bs-gutter-y: 1rem;
    }
    .g-xl-4,
    .gx-xl-4 {
        --bs-gutter-x: 1.5rem;
    }
    .g-xl-4,
    .gy-xl-4 {
        --bs-gutter-y: 1.5rem;
    }
    .g-xl-5,
    .gx-xl-5 {
        --bs-gutter-x: 3rem;
    }
    .g-xl-5,
    .gy-xl-5 {
        --bs-gutter-y: 3rem;
    }
}

@media (min-width: 1400px) {
    .col-xxl {
        flex: 1 0;
    }
    .row-cols-xxl-auto>* {
        flex: 0 0 auto;
        width: auto;
    }
    .row-cols-xxl-1>* {
        flex: 0 0 auto;
        width: 100%;
    }
    .row-cols-xxl-2>* {
        flex: 0 0 auto;
        width: 50%;
    }
    .row-cols-xxl-3>* {
        flex: 0 0 auto;
        width: 33.3333333333%;
    }
    .row-cols-xxl-4>* {
        flex: 0 0 auto;
        width: 25%;
    }
    .row-cols-xxl-5>* {
        flex: 0 0 auto;
        width: 20%;
    }
    .row-cols-xxl-6>* {
        flex: 0 0 auto;
        width: 16.6666666667%;
    }
    .col-xxl-auto {
        flex: 0 0 auto;
        width: auto;
    }
    .col-xxl-1 {
        flex: 0 0 auto;
        width: 8.33333333%;
    }
    .col-xxl-2 {
        flex: 0 0 auto;
        width: 16.66666667%;
    }
    .col-xxl-3 {
        flex: 0 0 auto;
        width: 25%;
    }
    .col-xxl-4 {
        flex: 0 0 auto;
        width: 33.33333333%;
    }
    .col-xxl-5 {
        flex: 0 0 auto;
        width: 41.66666667%;
    }
    .col-xxl-6 {
        flex: 0 0 auto;
        width: 50%;
    }
    .col-xxl-7 {
        flex: 0 0 auto;
        width: 58.33333333%;
    }
    .col-xxl-8 {
        flex: 0 0 auto;
        width: 66.66666667%;
    }
    .col-xxl-9 {
        flex: 0 0 auto;
        width: 75%;
    }
    .col-xxl-10 {
        flex: 0 0 auto;
        width: 83.33333333%;
    }
    .col-xxl-11 {
        flex: 0 0 auto;
        width: 91.66666667%;
    }
    .col-xxl-12 {
        flex: 0 0 auto;
        width: 100%;
    }
    .offset-xxl-0 {
        margin-left: 0;
    }
    .offset-xxl-1 {
        margin-left: 8.33333333%;
    }
    .offset-xxl-2 {
        margin-left: 16.66666667%;
    }
    .offset-xxl-3 {
        margin-left: 25%;
    }
    .offset-xxl-4 {
        margin-left: 33.33333333%;
    }
    .offset-xxl-5 {
        margin-left: 41.66666667%;
    }
    .offset-xxl-6 {
        margin-left: 50%;
    }
    .offset-xxl-7 {
        margin-left: 58.33333333%;
    }
    .offset-xxl-8 {
        margin-left: 66.66666667%;
    }
    .offset-xxl-9 {
        margin-left: 75%;
    }
    .offset-xxl-10 {
        margin-left: 83.33333333%;
    }
    .offset-xxl-11 {
        margin-left: 91.66666667%;
    }
    .g-xxl-0,
    .gx-xxl-0 {
        --bs-gutter-x: 0;
    }
    .g-xxl-0,
    .gy-xxl-0 {
        --bs-gutter-y: 0;
    }
    .g-xxl-1,
    .gx-xxl-1 {
        --bs-gutter-x: 0.25rem;
    }
    .g-xxl-1,
    .gy-xxl-1 {
        --bs-gutter-y: 0.25rem;
    }
    .g-xxl-2,
    .gx-xxl-2 {
        --bs-gutter-x: 0.5rem;
    }
    .g-xxl-2,
    .gy-xxl-2 {
        --bs-gutter-y: 0.5rem;
    }
    .g-xxl-3,
    .gx-xxl-3 {
        --bs-gutter-x: 1rem;
    }
    .g-xxl-3,
    .gy-xxl-3 {
        --bs-gutter-y: 1rem;
    }
    .g-xxl-4,
    .gx-xxl-4 {
        --bs-gutter-x: 1.5rem;
    }
    .g-xxl-4,
    .gy-xxl-4 {
        --bs-gutter-y: 1.5rem;
    }
    .g-xxl-5,
    .gx-xxl-5 {
        --bs-gutter-x: 3rem;
    }
    .g-xxl-5,
    .gy-xxl-5 {
        --bs-gutter-y: 3rem;
    }
}

.table {
    --bs-table-bg: transparent;
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: #212529;
    --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
    --bs-table-active-color: #212529;
    --bs-table-active-bg: rgba(0, 0, 0, 0.1);
    --bs-table-hover-color: #212529;
    --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
    border-color: #dee2e6;
    color: #212529;
    margin-bottom: 1rem;
    vertical-align: top;
    width: 100%;
}

.table> :not(caption)>*>* {
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
    padding: 0.5rem;
}

.table>tbody {
    vertical-align: inherit;
}

.table>thead {
    vertical-align: bottom;
}

.table> :not(:first-child) {
    border-top: 2px solid;
}

.caption-top {
    caption-side: top;
}

.table-sm> :not(caption)>*>* {
    padding: 0.25rem;
}

.table-bordered> :not(caption)>* {
    border-width: 1px 0;
}

.table-bordered> :not(caption)>*>* {
    border-width: 0 1px;
}

.table-borderless> :not(caption)>*>* {
    border-bottom-width: 0;
}

.table-borderless> :not(:first-child) {
    border-top-width: 0;
}

.table-striped>tbody>tr:nth-of-type(odd)>* {
    --bs-table-accent-bg: var(--bs-table-striped-bg);
    color: var(--bs-table-striped-color);
}

.table-active {
    --bs-table-accent-bg: var(--bs-table-active-bg);
    color: var(--bs-table-active-color);
}

.table-hover>tbody>tr:hover>* {
    --bs-table-accent-bg: var(--bs-table-hover-bg);
    color: var(--bs-table-hover-color);
}

.table-primary {
    --bs-table-bg: #cfe2ff;
    --bs-table-striped-bg: #c5d7f2;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bacbe6;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #bfd1ec;
    --bs-table-hover-color: #000;
    border-color: #bacbe6;
    color: #000;
}

.table-secondary {
    --bs-table-bg: #e2e3e5;
    --bs-table-striped-bg: #d7d8da;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #cbccce;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #d1d2d4;
    --bs-table-hover-color: #000;
    border-color: #cbccce;
    color: #000;
}

.table-success {
    --bs-table-bg: #d1e7dd;
    --bs-table-striped-bg: #c7dbd2;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bcd0c7;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #c1d6cc;
    --bs-table-hover-color: #000;
    border-color: #bcd0c7;
    color: #000;
}

.table-info {
    --bs-table-bg: #cff4fc;
    --bs-table-striped-bg: #c5e8ef;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #badce3;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #bfe2e9;
    --bs-table-hover-color: #000;
    border-color: #badce3;
    color: #000;
}

.table-warning {
    --bs-table-bg: #fff3cd;
    --bs-table-striped-bg: #f2e7c3;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #e6dbb9;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #ece1be;
    --bs-table-hover-color: #000;
    border-color: #e6dbb9;
    color: #000;
}

.table-danger {
    --bs-table-bg: #f8d7da;
    --bs-table-striped-bg: #eccccf;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dfc2c4;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e5c7ca;
    --bs-table-hover-color: #000;
    border-color: #dfc2c4;
    color: #000;
}

.table-light {
    --bs-table-bg: #f8f9fa;
    --bs-table-striped-bg: #ecedee;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dfe0e1;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e5e6e7;
    --bs-table-hover-color: #000;
    border-color: #dfe0e1;
    color: #000;
}

.table-dark {
    --bs-table-bg: #212529;
    --bs-table-striped-bg: #2c3034;
    --bs-table-striped-color: #fff;
    --bs-table-active-bg: #373b3e;
    --bs-table-active-color: #fff;
    --bs-table-hover-bg: #323539;
    --bs-table-hover-color: #fff;
    border-color: #373b3e;
    color: #fff;
}

.table-responsive {
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
}

@media (max-width: 575.98px) {
    .table-responsive-sm {
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
    }
}

@media (max-width: 767.98px) {
    .table-responsive-md {
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
    }
}

@media (max-width: 991.98px) {
    .table-responsive-lg {
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
    }
}

@media (max-width: 1199.98px) {
    .table-responsive-xl {
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
    }
}

@media (max-width: 1399.98px) {
    .table-responsive-xxl {
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
    }
}

.form-label {
    margin-bottom: 0.5rem;
}

.col-form-label {
    font-size: inherit;
    line-height: 1.5;
    margin-bottom: 0;
    padding-bottom: calc(0.375rem + 1px);
    padding-top: calc(0.375rem + 1px);
}

.col-form-label-lg {
    font-size: 1.25rem;
    padding-bottom: calc(0.5rem + 1px);
    padding-top: calc(0.5rem + 1px);
}

.col-form-label-sm {
    font-size: 0.875rem;
    padding-bottom: calc(0.25rem + 1px);
    padding-top: calc(0.25rem + 1px);
}

.form-text {
    color: #6c757d;
    font-size: 0.875em;
    margin-top: 0.25rem;
}

.form-control {
    -webkit-appearance: none;
    appearance: none;
    background-clip: padding-box;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    color: #212529;
    display: block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.375rem 0.75rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    width: 100%;
}

@media (prefers-reduced-motion: reduce) {
    .form-control {
        transition: none;
    }
}

.form-control[type="file"] {
    overflow: hidden;
}

.form-control[type="file"]:not(:disabled):not([readonly]) {
    cursor: pointer;
}

.form-control:focus {
    background-color: #fff;
    border-color: 1px solid rgba(239, 200, 26, 1);
    box-shadow: 0 0 0 0.25rem rgba(239, 200, 26, 1);
    color: #212529;
    outline: 0;
}

.form-control::-webkit-date-and-time-value {
    height: 1.5em;
}

.form-control::-webkit-input-placeholder {
    color: #6c757d;
    opacity: 1;
}

.form-control:-ms-input-placeholder {
    color: #6c757d;
    opacity: 1;
}

.form-control::placeholder {
    color: #6c757d;
    opacity: 1;
}

.form-control:disabled,
.form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1;
}

.form-control::file-selector-button {
    -webkit-margin-end: 0.75rem;
    background-color: #e9ecef;
    border: 0 solid;
    border-color: inherit;
    border-inline-end-width: 1px;
    border-radius: 0;
    color: #212529;
    margin: -0.375rem -0.75rem;
    margin-inline-end: 0.75rem;
    padding: 0.375rem 0.75rem;
    pointer-events: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
    .form-control::-webkit-file-upload-button {
        -webkit-transition: none;
        transition: none;
    }
    .form-control::file-selector-button {
        transition: none;
    }
}

.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: #dde0e3;
}

.form-control::-webkit-file-upload-button {
    -webkit-margin-end: 0.75rem;
    background-color: #e9ecef;
    border: 0 solid;
    border-color: inherit;
    border-inline-end-width: 1px;
    border-radius: 0;
    color: #212529;
    margin: -0.375rem -0.75rem;
    margin-inline-end: 0.75rem;
    padding: 0.375rem 0.75rem;
    pointer-events: none;
    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
    .form-control::-webkit-file-upload-button {
        -webkit-transition: none;
        transition: none;
    }
}

.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: #dde0e3;
}

.form-control-plaintext {
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
    color: #212529;
    display: block;
    line-height: 1.5;
    margin-bottom: 0;
    padding: 0.375rem 0;
    width: 100%;
}

.form-control-plaintext.form-control-lg,
.form-control-plaintext.form-control-sm {
    padding-left: 0;
    padding-right: 0;
}

.form-control-sm {
    border-radius: 0.2rem;
    font-size: 0.875rem;
    min-height: calc(1.5em + 0.5rem + 2px);
    padding: 0.25rem 0.5rem;
}

.form-control-sm::file-selector-button {
    -webkit-margin-end: 0.5rem;
    margin: -0.25rem -0.5rem;
    margin-inline-end: 0.5rem;
    padding: 0.25rem 0.5rem;
}

.form-control-sm::-webkit-file-upload-button {
    -webkit-margin-end: 0.5rem;
    margin: -0.25rem -0.5rem;
    margin-inline-end: 0.5rem;
    padding: 0.25rem 0.5rem;
}

.form-control-lg {
    border-radius: 0.3rem;
    font-size: 1.25rem;
    min-height: calc(1.5em + 1rem + 2px);
    padding: 0.5rem 1rem;
}

.form-control-lg::file-selector-button {
    -webkit-margin-end: 1rem;
    margin: -0.5rem -1rem;
    margin-inline-end: 1rem;
    padding: 0.5rem 1rem;
}

.form-control-lg::-webkit-file-upload-button {
    -webkit-margin-end: 1rem;
    margin: -0.5rem -1rem;
    margin-inline-end: 1rem;
    padding: 0.5rem 1rem;
}

textarea.form-control {
    min-height: calc(1.5em + 0.75rem + 2px);
}

textarea.form-control-sm {
    min-height: calc(1.5em + 0.5rem + 2px);
}

textarea.form-control-lg {
    min-height: calc(1.5em + 1rem + 2px);
}

.form-control-color {
    height: auto;
    padding: 0.375rem;
    width: 3rem;
}

.form-control-color:not(:disabled):not([readonly]) {
    cursor: pointer;
}

.form-control-color::-moz-color-swatch {
    border-radius: 0.25rem;
    height: 1.5em;
}

.form-control-color::-webkit-color-swatch {
    border-radius: 0.25rem;
    height: 1.5em;
}

.form-select {
    -moz-padding-start: calc(0.75rem - 3px);
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E");
    background-position: right 0.75rem center;
    background-repeat: no-repeat;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    color: #212529;
    display: block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    width: 100%;
}

@media (prefers-reduced-motion: reduce) {
    .form-select {
        transition: none;
    }
}

.form-select:focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    outline: 0;
}

.form-select[multiple],
.form-select[size]:not([size="1"]) {
    background-image: none;
    padding-right: 0.75rem;
}

.form-select:disabled {
    background-color: #e9ecef;
}

.form-select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #212529;
}

.form-select-sm {
    border-radius: 0.2rem;
    font-size: 0.875rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-top: 0.25rem;
}

.form-select-lg {
    border-radius: 0.3rem;
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-top: 0.5rem;
}

.form-check {
    display: block;
    margin-bottom: 0.125rem;
    min-height: 1.5rem;
    padding-left: 1.5em;
}

.form-check .form-check-input {
    float: left;
    margin-left: -1.5em;
}

.form-check-input {
    -webkit-print-color-adjust: exact;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, 0.25);
    color-adjust: exact;
    height: 1em;
    margin-top: 0.25em;
    vertical-align: top;
    width: 1em;
}

.form-check-input[type="checkbox"] {
    border-radius: 0.25em;
    height: 1em;
}

.form-check-input[type="radio"] {
    border-radius: 50%;
}

.form-check-input:active {
    -webkit-filter: brightness(90%);
    filter: brightness(90%);
}

.form-check-input:focus {
    border-color: none;
    outline: 0;
}

.form-check-input[type="checkbox"]:checked {
    background-color: #efc81a;
}

.form-check-input:checked[type="checkbox"] {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E");
}

.form-check-input:checked[type="radio"] {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='2' fill='%23fff'/%3E%3C/svg%3E");
}

.form-check-input[type="checkbox"]:indeterminate {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3E%3C/svg%3E");
}

.form-check-input:disabled {
    -webkit-filter: none;
    filter: none;
    opacity: 0.5;
    pointer-events: none;
}

.form-check-input:disabled~.form-check-label,
.form-check-input[disabled]~.form-check-label {
    opacity: 0.5;
}

.form-switch {
    padding-left: 2.5em;
}

.form-switch .form-check-input {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='rgba(0, 0, 0, 0.25)'/%3E%3C/svg%3E");
    background-position: 0;
    border-radius: 2em;
    margin-left: -2.5em;
    transition: background-position 0.15s ease-in-out;
    width: 2em;
}

@media (prefers-reduced-motion: reduce) {
    .form-switch .form-check-input {
        transition: none;
    }
}

.form-switch .form-check-input:focus {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%2386b7fe'/%3E%3C/svg%3E");
}

.form-switch .form-check-input:checked {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
    background-position: 100%;
}

.form-check-inline {
    display: inline-block;
    margin-right: 1rem;
}

.btn-check {
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
    position: absolute;
}

.btn-check:disabled+.btn,
.btn-check[disabled]+.btn {
    -webkit-filter: none;
    filter: none;
    opacity: 0.65;
    pointer-events: none;
}

.form-range {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    height: 1.5rem;
    padding: 0;
    width: 100%;
}

.form-range:focus {
    outline: 0;
}

.form-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-range::-moz-focus-outer {
    border: 0;
}

.form-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: #0d6efd;
    border: 0;
    border-radius: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    width: 1rem;
}

@media (prefers-reduced-motion: reduce) {
    .form-range::-webkit-slider-thumb {
        -webkit-transition: none;
        transition: none;
    }
}

.form-range::-webkit-slider-thumb:active {
    background-color: #b6d4fe;
}

.form-range::-webkit-slider-runnable-track {
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
    color: transparent;
    cursor: pointer;
    height: 0.5rem;
    width: 100%;
}

.form-range::-moz-range-thumb {
    appearance: none;
    background-color: #0d6efd;
    border: 0;
    border-radius: 1rem;
    height: 1rem;
    -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    width: 1rem;
}

@media (prefers-reduced-motion: reduce) {
    .form-range::-moz-range-thumb {
        -moz-transition: none;
        transition: none;
    }
}

.form-range::-moz-range-thumb:active {
    background-color: #b6d4fe;
}

.form-range::-moz-range-track {
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
    color: transparent;
    cursor: pointer;
    height: 0.5rem;
    width: 100%;
}

.form-range:disabled {
    pointer-events: none;
}

.form-range:disabled::-webkit-slider-thumb {
    background-color: #adb5bd;
}

.form-range:disabled::-moz-range-thumb {
    background-color: #adb5bd;
}

.form-floating {
    position: relative;
}

.form-floating>.form-control,
.form-floating>.form-select {
    height: calc(3.5rem + 2px);
    line-height: 1.25;
}

.form-floating>label {
    border: 1px solid transparent;
    height: 100%;
    left: 0;
    padding: 1rem 0.75rem;
    pointer-events: none;
    position: absolute;
    top: 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    transition: opacity 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
    .form-floating>label {
        transition: none;
    }
}

.form-floating>.form-control {
    padding: 1rem 0.75rem;
}

.form-floating>.form-control::-webkit-input-placeholder {
    color: transparent;
}

.form-floating>.form-control:-ms-input-placeholder {
    color: transparent;
}

.form-floating>.form-control::placeholder {
    color: transparent;
}

.form-floating>.form-control:not(:-ms-input-placeholder) {
    padding-bottom: 0.625rem;
    padding-top: 1.625rem;
}

.form-floating>.form-control:focus,
.form-floating>.form-control:not(:placeholder-shown) {
    padding-bottom: 0.625rem;
    padding-top: 1.625rem;
}

.form-floating>.form-control:-webkit-autofill {
    padding-bottom: 0.625rem;
    padding-top: 1.625rem;
}

.form-floating>.form-select {
    padding-bottom: 0.625rem;
    padding-top: 1.625rem;
}

.form-floating>.form-control:not(:-ms-input-placeholder)~label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.form-floating>.form-control:focus~label,
.form-floating>.form-control:not(:placeholder-shown)~label,
.form-floating>.form-select~label {
    opacity: 0.65;
    -webkit-transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.form-floating>.form-control:-webkit-autofill~label {
    opacity: 0.65;
    -webkit-transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.input-group {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
}

.input-group>.form-control,
.input-group>.form-select {
    flex: 1 1 auto;
    min-width: 0;
    position: relative;
    width: 1%;
}

.input-group>.form-control:focus,
.input-group>.form-select:focus {
    z-index: 3;
}

.input-group .btn {
    position: relative;
    z-index: 2;
}

.input-group .btn:focus {
    z-index: 3;
}

.input-group-text {
    align-items: center;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    color: #212529;
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.375rem 0.75rem;
    text-align: center;
    white-space: nowrap;
}

.input-group-lg>.btn,
.input-group-lg>.form-control,
.input-group-lg>.form-select,
.input-group-lg>.input-group-text {
    border-radius: 0.3rem;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
}

.input-group-sm>.btn,
.input-group-sm>.form-control,
.input-group-sm>.form-select,
.input-group-sm>.input-group-text {
    border-radius: 0.2rem;
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
}

.input-group-lg>.form-select,
.input-group-sm>.form-select {
    padding-right: 3rem;
}

.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),
.input-group.has-validation> :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),
.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),
.input-group:not(.has-validation)> :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}

.input-group> :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: -1px;
}

.valid-feedback {
    color: #198754;
    display: none;
    font-size: 0.875em;
    margin-top: 0.25rem;
    width: 100%;
}

.valid-tooltip {
    background-color: rgba(25, 135, 84, 0.9);
    border-radius: 0.25rem;
    color: #fff;
    display: none;
    font-size: 0.875rem;
    margin-top: 0.1rem;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    position: absolute;
    top: 100%;
    z-index: 5;
}

.is-valid~.valid-feedback,
.is-valid~.valid-tooltip,
.was-validated :valid~.valid-feedback,
.was-validated :valid~.valid-tooltip {
    display: block;
}

.form-control.is-valid,
.was-validated .form-control:valid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E");
    background-position: right calc(0.375em + 0.1875rem) center;
    background-repeat: no-repeat;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    border-color: #198754;
    padding-right: calc(1.5em + 0.75rem);
}

.form-control.is-valid:focus,
.was-validated .form-control:valid:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.was-validated textarea.form-control:valid,
textarea.form-control.is-valid {
    background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
    padding-right: calc(1.5em + 0.75rem);
}

.form-select.is-valid,
.was-validated .form-select:valid {
    border-color: #198754;
}

.form-select.is-valid:not([multiple]):not([size]),
.form-select.is-valid:not([multiple])[size="1"],
.was-validated .form-select:valid:not([multiple]):not([size]),
.was-validated .form-select:valid:not([multiple])[size="1"] {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E"), url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E");
    background-position: right 0.75rem center, center right 2.25rem;
    background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    padding-right: 4.125rem;
}

.form-select.is-valid:focus,
.was-validated .form-select:valid:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.form-check-input.is-valid,
.was-validated .form-check-input:valid {
    border-color: #198754;
}

.form-check-input.is-valid:checked,
.was-validated .form-check-input:valid:checked {
    background-color: #198754;
}

.form-check-input.is-valid:focus,
.was-validated .form-check-input:valid:focus {
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.form-check-input.is-valid~.form-check-label,
.was-validated .form-check-input:valid~.form-check-label {
    color: #198754;
}

.form-check-inline .form-check-input~.valid-feedback {
    margin-left: 0.5em;
}

.input-group .form-control.is-valid,
.input-group .form-select.is-valid,
.was-validated .input-group .form-control:valid,
.was-validated .input-group .form-select:valid {
    z-index: 1;
}

.input-group .form-control.is-valid:focus,
.input-group .form-select.is-valid:focus,
.was-validated .input-group .form-control:valid:focus,
.was-validated .input-group .form-select:valid:focus {
    z-index: 3;
}

.invalid-feedback {
    color: #dc3545;
    display: none;
    font-size: 0.875em;
    margin-top: 0.25rem;
    width: 100%;
}

.invalid-tooltip {
    background-color: rgba(220, 53, 69, 0.9);
    border-radius: 0.25rem;
    color: #fff;
    display: none;
    font-size: 0.875rem;
    margin-top: 0.1rem;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    position: absolute;
    top: 100%;
    z-index: 5;
}

.is-invalid~.invalid-feedback,
.is-invalid~.invalid-tooltip,
.was-validated :invalid~.invalid-feedback,
.was-validated :invalid~.invalid-tooltip {
    display: block;
}

.form-control.is-invalid,
.was-validated .form-control:invalid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E");
    background-position: right calc(0.375em + 0.1875rem) center;
    background-repeat: no-repeat;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    border-color: #dc3545;
    padding-right: calc(1.5em + 0.75rem);
}

.form-control.is-invalid:focus,
.was-validated .form-control:invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.was-validated textarea.form-control:invalid,
textarea.form-control.is-invalid {
    background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
    padding-right: calc(1.5em + 0.75rem);
}

.form-select.is-invalid,
.was-validated .form-select:invalid {
    border-color: #dc3545;
}

.form-select.is-invalid:not([multiple]):not([size]),
.form-select.is-invalid:not([multiple])[size="1"],
.was-validated .form-select:invalid:not([multiple]):not([size]),
.was-validated .form-select:invalid:not([multiple])[size="1"] {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E"), url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E");
    background-position: right 0.75rem center, center right 2.25rem;
    background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    padding-right: 4.125rem;
}

.form-select.is-invalid:focus,
.was-validated .form-select:invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.form-check-input.is-invalid,
.was-validated .form-check-input:invalid {
    border-color: #dc3545;
}

.form-check-input.is-invalid:checked,
.was-validated .form-check-input:invalid:checked {
    background-color: #dc3545;
}

.form-check-input.is-invalid:focus,
.was-validated .form-check-input:invalid:focus {
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.form-check-input.is-invalid~.form-check-label,
.was-validated .form-check-input:invalid~.form-check-label {
    color: #dc3545;
}

.form-check-inline .form-check-input~.invalid-feedback {
    margin-left: 0.5em;
}

.input-group .form-control.is-invalid,
.input-group .form-select.is-invalid,
.was-validated .input-group .form-control:invalid,
.was-validated .input-group .form-select:invalid {
    z-index: 2;
}

.input-group .form-control.is-invalid:focus,
.input-group .form-select.is-invalid:focus,
.was-validated .input-group .form-control:invalid:focus,
.was-validated .input-group .form-select:invalid:focus {
    z-index: 3;
}

.btn {
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    color: #212529;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.375rem 0.75rem;
    text-align: center;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
}

@media (prefers-reduced-motion: reduce) {
    .btn {
        transition: none;
    }
}

.btn:hover {
    color: #212529;
}

.btn-check:focus+.btn,
.btn:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    outline: 0;
}

.btn.disabled,
.btn:disabled,
fieldset:disabled .btn {
    opacity: 0.65;
    pointer-events: none;
}

.btn-primary {
    background-color: #0d6efd;
    border-color: #0d6efd;
    color: #fff;
}

.btn-check:focus+.btn-primary,
.btn-primary:focus,
.btn-primary:hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
    color: #fff;
}

.btn-check:focus+.btn-primary,
.btn-primary:focus {
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}

.btn-check:active+.btn-primary,
.btn-check:checked+.btn-primary,
.btn-primary.active,
.btn-primary:active,
.show>.btn-primary.dropdown-toggle {
    background-color: #0a58ca;
    border-color: #0a53be;
    color: #fff;
}

.btn-check:active+.btn-primary:focus,
.btn-check:checked+.btn-primary:focus,
.btn-primary.active:focus,
.btn-primary:active:focus,
.show>.btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}

.btn-primary.disabled,
.btn-primary:disabled {
    background-color: #0d6efd;
    border-color: #0d6efd;
    color: #fff;
}

.btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
    color: #fff;
}

.btn-check:focus+.btn-secondary,
.btn-secondary:focus,
.btn-secondary:hover {
    background-color: #5c636a;
    border-color: #565e64;
    color: #fff;
}

.btn-check:focus+.btn-secondary,
.btn-secondary:focus {
    box-shadow: 0 0 0 0.25rem hsla(208, 6%, 54%, 0.5);
}

.btn-check:active+.btn-secondary,
.btn-check:checked+.btn-secondary,
.btn-secondary.active,
.btn-secondary:active,
.show>.btn-secondary.dropdown-toggle {
    background-color: #565e64;
    border-color: #51585e;
    color: #fff;
}

.btn-check:active+.btn-secondary:focus,
.btn-check:checked+.btn-secondary:focus,
.btn-secondary.active:focus,
.btn-secondary:active:focus,
.show>.btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem hsla(208, 6%, 54%, 0.5);
}

.btn-secondary.disabled,
.btn-secondary:disabled {
    background-color: #6c757d;
    border-color: #6c757d;
    color: #fff;
}

.btn-success {
    background-color: #198754;
    border-color: #198754;
    color: #fff;
}

.btn-check:focus+.btn-success,
.btn-success:focus,
.btn-success:hover {
    background-color: #157347;
    border-color: #146c43;
    color: #fff;
}

.btn-check:focus+.btn-success,
.btn-success:focus {
    box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}

.btn-check:active+.btn-success,
.btn-check:checked+.btn-success,
.btn-success.active,
.btn-success:active,
.show>.btn-success.dropdown-toggle {
    background-color: #146c43;
    border-color: #13653f;
    color: #fff;
}

.btn-check:active+.btn-success:focus,
.btn-check:checked+.btn-success:focus,
.btn-success.active:focus,
.btn-success:active:focus,
.show>.btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}

.btn-success.disabled,
.btn-success:disabled {
    background-color: #198754;
    border-color: #198754;
    color: #fff;
}

.btn-info {
    background-color: #0dcaf0;
    border-color: #0dcaf0;
    color: #000;
}

.btn-check:focus+.btn-info,
.btn-info:focus,
.btn-info:hover {
    background-color: #31d2f2;
    border-color: #25cff2;
    color: #000;
}

.btn-check:focus+.btn-info,
.btn-info:focus {
    box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}

.btn-check:active+.btn-info,
.btn-check:checked+.btn-info,
.btn-info.active,
.btn-info:active,
.show>.btn-info.dropdown-toggle {
    background-color: #3dd5f3;
    border-color: #25cff2;
    color: #000;
}

.btn-check:active+.btn-info:focus,
.btn-check:checked+.btn-info:focus,
.btn-info.active:focus,
.btn-info:active:focus,
.show>.btn-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}

.btn-info.disabled,
.btn-info:disabled {
    background-color: #0dcaf0;
    border-color: #0dcaf0;
    color: #000;
}

.btn-warning {
    background-color: #ffc107;
    border-color: #ffc107;
    color: #000;
}

.btn-check:focus+.btn-warning,
.btn-warning:focus,
.btn-warning:hover {
    background-color: #ffca2c;
    border-color: #ffc720;
    color: #000;
}

.btn-check:focus+.btn-warning,
.btn-warning:focus {
    box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}

.btn-check:active+.btn-warning,
.btn-check:checked+.btn-warning,
.btn-warning.active,
.btn-warning:active,
.show>.btn-warning.dropdown-toggle {
    background-color: #ffcd39;
    border-color: #ffc720;
    color: #000;
}

.btn-check:active+.btn-warning:focus,
.btn-check:checked+.btn-warning:focus,
.btn-warning.active:focus,
.btn-warning:active:focus,
.show>.btn-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}

.btn-warning.disabled,
.btn-warning:disabled {
    background-color: #ffc107;
    border-color: #ffc107;
    color: #000;
}

.btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
    color: #fff;
}

.btn-check:focus+.btn-danger,
.btn-danger:focus,
.btn-danger:hover {
    background-color: #bb2d3b;
    border-color: #b02a37;
    color: #fff;
}

.btn-check:focus+.btn-danger,
.btn-danger:focus {
    box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}

.btn-check:active+.btn-danger,
.btn-check:checked+.btn-danger,
.btn-danger.active,
.btn-danger:active,
.show>.btn-danger.dropdown-toggle {
    background-color: #b02a37;
    border-color: #a52834;
    color: #fff;
}

.btn-check:active+.btn-danger:focus,
.btn-check:checked+.btn-danger:focus,
.btn-danger.active:focus,
.btn-danger:active:focus,
.show>.btn-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}

.btn-danger.disabled,
.btn-danger:disabled {
    background-color: #dc3545;
    border-color: #dc3545;
    color: #fff;
}

.btn-light {
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    color: #000;
}

.btn-check:focus+.btn-light,
.btn-light:focus,
.btn-light:hover {
    background-color: #f9fafb;
    border-color: #f9fafb;
    color: #000;
}

.btn-check:focus+.btn-light,
.btn-light:focus {
    box-shadow: 0 0 0 0.25rem hsla(210, 2%, 83%, 0.5);
}

.btn-check:active+.btn-light,
.btn-check:checked+.btn-light,
.btn-light.active,
.btn-light:active,
.show>.btn-light.dropdown-toggle {
    background-color: #f9fafb;
    border-color: #f9fafb;
    color: #000;
}

.btn-check:active+.btn-light:focus,
.btn-check:checked+.btn-light:focus,
.btn-light.active:focus,
.btn-light:active:focus,
.show>.btn-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem hsla(210, 2%, 83%, 0.5);
}

.btn-light.disabled,
.btn-light:disabled {
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    color: #000;
}

.btn-dark {
    background-color: #212529;
    border-color: #212529;
    color: #fff;
}

.btn-check:focus+.btn-dark,
.btn-dark:focus,
.btn-dark:hover {
    background-color: #1c1f23;
    border-color: #1a1e21;
    color: #fff;
}

.btn-check:focus+.btn-dark,
.btn-dark:focus {
    box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}

.btn-check:active+.btn-dark,
.btn-check:checked+.btn-dark,
.btn-dark.active,
.btn-dark:active,
.show>.btn-dark.dropdown-toggle {
    background-color: #1a1e21;
    border-color: #191c1f;
    color: #fff;
}

.btn-check:active+.btn-dark:focus,
.btn-check:checked+.btn-dark:focus,
.btn-dark.active:focus,
.btn-dark:active:focus,
.show>.btn-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}

.btn-dark.disabled,
.btn-dark:disabled {
    background-color: #212529;
    border-color: #212529;
    color: #fff;
}

.btn-outline-primary {
    border-color: #0d6efd;
    color: #0d6efd;
}

.btn-outline-primary:hover {
    background-color: #0d6efd;
    border-color: #0d6efd;
    color: #fff;
}

.btn-check:focus+.btn-outline-primary,
.btn-outline-primary:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}

.btn-check:active+.btn-outline-primary,
.btn-check:checked+.btn-outline-primary,
.btn-outline-primary.active,
.btn-outline-primary.dropdown-toggle.show,
.btn-outline-primary:active {
    background-color: #0d6efd;
    border-color: #0d6efd;
    color: #fff;
}

.btn-check:active+.btn-outline-primary:focus,
.btn-check:checked+.btn-outline-primary:focus,
.btn-outline-primary.active:focus,
.btn-outline-primary.dropdown-toggle.show:focus,
.btn-outline-primary:active:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}

.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
    background-color: transparent;
    color: #0d6efd;
}

.btn-outline-secondary {
    border-color: #6c757d;
    color: #6c757d;
}

.btn-outline-secondary:hover {
    background-color: #6c757d;
    border-color: #6c757d;
    color: #fff;
}

.btn-check:focus+.btn-outline-secondary,
.btn-outline-secondary:focus {
    box-shadow: 0 0 0 0.25rem hsla(208, 7%, 46%, 0.5);
}

.btn-check:active+.btn-outline-secondary,
.btn-check:checked+.btn-outline-secondary,
.btn-outline-secondary.active,
.btn-outline-secondary.dropdown-toggle.show,
.btn-outline-secondary:active {
    background-color: #6c757d;
    border-color: #6c757d;
    color: #fff;
}

.btn-check:active+.btn-outline-secondary:focus,
.btn-check:checked+.btn-outline-secondary:focus,
.btn-outline-secondary.active:focus,
.btn-outline-secondary.dropdown-toggle.show:focus,
.btn-outline-secondary:active:focus {
    box-shadow: 0 0 0 0.25rem hsla(208, 7%, 46%, 0.5);
}

.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
    background-color: transparent;
    color: #6c757d;
}

.btn-outline-success {
    border-color: #198754;
    color: #198754;
}

.btn-outline-success:hover {
    background-color: #198754;
    border-color: #198754;
    color: #fff;
}

.btn-check:focus+.btn-outline-success,
.btn-outline-success:focus {
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}

.btn-check:active+.btn-outline-success,
.btn-check:checked+.btn-outline-success,
.btn-outline-success.active,
.btn-outline-success.dropdown-toggle.show,
.btn-outline-success:active {
    background-color: #198754;
    border-color: #198754;
    color: #fff;
}

.btn-check:active+.btn-outline-success:focus,
.btn-check:checked+.btn-outline-success:focus,
.btn-outline-success.active:focus,
.btn-outline-success.dropdown-toggle.show:focus,
.btn-outline-success:active:focus {
    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}

.btn-outline-success.disabled,
.btn-outline-success:disabled {
    background-color: transparent;
    color: #198754;
}

.btn-outline-info {
    border-color: #0dcaf0;
    color: #0dcaf0;
}

.btn-outline-info:hover {
    background-color: #0dcaf0;
    border-color: #0dcaf0;
    color: #000;
}

.btn-check:focus+.btn-outline-info,
.btn-outline-info:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}

.btn-check:active+.btn-outline-info,
.btn-check:checked+.btn-outline-info,
.btn-outline-info.active,
.btn-outline-info.dropdown-toggle.show,
.btn-outline-info:active {
    background-color: #0dcaf0;
    border-color: #0dcaf0;
    color: #000;
}

.btn-check:active+.btn-outline-info:focus,
.btn-check:checked+.btn-outline-info:focus,
.btn-outline-info.active:focus,
.btn-outline-info.dropdown-toggle.show:focus,
.btn-outline-info:active:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}

.btn-outline-info.disabled,
.btn-outline-info:disabled {
    background-color: transparent;
    color: #0dcaf0;
}

.btn-outline-warning {
    border-color: #ffc107;
    color: #ffc107;
}

.btn-outline-warning:hover {
    background-color: #ffc107;
    border-color: #ffc107;
    color: #000;
}

.btn-check:focus+.btn-outline-warning,
.btn-outline-warning:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}

.btn-check:active+.btn-outline-warning,
.btn-check:checked+.btn-outline-warning,
.btn-outline-warning.active,
.btn-outline-warning.dropdown-toggle.show,
.btn-outline-warning:active {
    background-color: #ffc107;
    border-color: #ffc107;
    color: #000;
}

.btn-check:active+.btn-outline-warning:focus,
.btn-check:checked+.btn-outline-warning:focus,
.btn-outline-warning.active:focus,
.btn-outline-warning.dropdown-toggle.show:focus,
.btn-outline-warning:active:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}

.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
    background-color: transparent;
    color: #ffc107;
}

.btn-outline-danger {
    border-color: #dc3545;
    color: #dc3545;
}

.btn-outline-danger:hover {
    background-color: #dc3545;
    border-color: #dc3545;
    color: #fff;
}

.btn-check:focus+.btn-outline-danger,
.btn-outline-danger:focus {
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}

.btn-check:active+.btn-outline-danger,
.btn-check:checked+.btn-outline-danger,
.btn-outline-danger.active,
.btn-outline-danger.dropdown-toggle.show,
.btn-outline-danger:active {
    background-color: #dc3545;
    border-color: #dc3545;
    color: #fff;
}

.btn-check:active+.btn-outline-danger:focus,
.btn-check:checked+.btn-outline-danger:focus,
.btn-outline-danger.active:focus,
.btn-outline-danger.dropdown-toggle.show:focus,
.btn-outline-danger:active:focus {
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}

.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
    background-color: transparent;
    color: #dc3545;
}

.btn-outline-light {
    border-color: #f8f9fa;
    color: #f8f9fa;
}

.btn-outline-light:hover {
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    color: #000;
}

.btn-check:focus+.btn-outline-light,
.btn-outline-light:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}

.btn-check:active+.btn-outline-light,
.btn-check:checked+.btn-outline-light,
.btn-outline-light.active,
.btn-outline-light.dropdown-toggle.show,
.btn-outline-light:active {
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    color: #000;
}

.btn-check:active+.btn-outline-light:focus,
.btn-check:checked+.btn-outline-light:focus,
.btn-outline-light.active:focus,
.btn-outline-light.dropdown-toggle.show:focus,
.btn-outline-light:active:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}

.btn-outline-light.disabled,
.btn-outline-light:disabled {
    background-color: transparent;
    color: #f8f9fa;
}

.btn-outline-dark {
    border-color: #212529;
    color: #212529;
}

.btn-outline-dark:hover {
    background-color: #212529;
    border-color: #212529;
    color: #fff;
}

.btn-check:focus+.btn-outline-dark,
.btn-outline-dark:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}

.btn-check:active+.btn-outline-dark,
.btn-check:checked+.btn-outline-dark,
.btn-outline-dark.active,
.btn-outline-dark.dropdown-toggle.show,
.btn-outline-dark:active {
    background-color: #212529;
    border-color: #212529;
    color: #fff;
}

.btn-check:active+.btn-outline-dark:focus,
.btn-check:checked+.btn-outline-dark:focus,
.btn-outline-dark.active:focus,
.btn-outline-dark.dropdown-toggle.show:focus,
.btn-outline-dark:active:focus {
    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}

.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
    background-color: transparent;
    color: #212529;
}

.btn-link {
    color: #0d6efd;
    font-weight: 400;
    text-decoration: underline;
}

.btn-link:hover {
    color: #0a58ca;
}

.btn-link.disabled,
.btn-link:disabled {
    color: #6c757d;
}

.btn-group-lg>.btn,
.btn-lg {
    border-radius: 0.3rem;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
}

.btn-group-sm>.btn,
.btn-sm {
    border-radius: 0.2rem;
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
}

.fade {
    transition: opacity 0.15s linear;
}

@media (prefers-reduced-motion: reduce) {
    .fade {
        transition: none;
    }
}

.fade:not(.show) {
    opacity: 0;
}

.collapse:not(.show) {
    display: none;
}

.collapsing {
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
}

@media (prefers-reduced-motion: reduce) {
    .collapsing {
        transition: none;
    }
}

.collapsing.collapse-horizontal {
    height: auto;
    transition: width 0.35s ease;
    width: 0;
}

@media (prefers-reduced-motion: reduce) {
    .collapsing.collapse-horizontal {
        transition: none;
    }
}

.dropdown,
.dropend,
.dropstart,
.dropup {
    position: relative;
}

.dropdown-toggle {
    white-space: nowrap;
}

.dropdown-toggle:after {
    border-bottom: 0;
    border-left: 0.3em solid transparent;
    border-right: 0.3em solid transparent;
    border-top: 0.3em solid;
    content: "";
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
}

.dropdown-toggle:empty:after {
    margin-left: 0;
}

.dropdown-menu {
    background-clip: padding-box;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    color: #212529;
    display: none;
    font-size: 1rem;
    list-style: none;
    margin: 0;
    min-width: 10rem;
    padding: 0.5rem 0;
    position: absolute;
    text-align: left;
    z-index: 1000;
}

.dropdown-menu[data-bs-popper] {
    left: 0;
    margin-top: 0.125rem;
    top: 100%;
}

.dropdown-menu-start {
    --bs-position: start;
}

.dropdown-menu-start[data-bs-popper] {
    left: 0;
    right: auto;
}

.dropdown-menu-end {
    --bs-position: end;
}

.dropdown-menu-end[data-bs-popper] {
    left: auto;
    right: 0;
}

@media (min-width: 576px) {
    .dropdown-menu-sm-start {
        --bs-position: start;
    }
    .dropdown-menu-sm-start[data-bs-popper] {
        left: 0;
        right: auto;
    }
    .dropdown-menu-sm-end {
        --bs-position: end;
    }
    .dropdown-menu-sm-end[data-bs-popper] {
        left: auto;
        right: 0;
    }
}

@media (min-width: 768px) {
    .dropdown-menu-md-start {
        --bs-position: start;
    }
    .dropdown-menu-md-start[data-bs-popper] {
        left: 0;
        right: auto;
    }
    .dropdown-menu-md-end {
        --bs-position: end;
    }
    .dropdown-menu-md-end[data-bs-popper] {
        left: auto;
        right: 0;
    }
}

@media (min-width: 992px) {
    .dropdown-menu-lg-start {
        --bs-position: start;
    }
    .dropdown-menu-lg-start[data-bs-popper] {
        left: 0;
        right: auto;
    }
    .dropdown-menu-lg-end {
        --bs-position: end;
    }
    .dropdown-menu-lg-end[data-bs-popper] {
        left: auto;
        right: 0;
    }
}

@media (min-width: 1200px) {
    .dropdown-menu-xl-start {
        --bs-position: start;
    }
    .dropdown-menu-xl-start[data-bs-popper] {
        left: 0;
        right: auto;
    }
    .dropdown-menu-xl-end {
        --bs-position: end;
    }
    .dropdown-menu-xl-end[data-bs-popper] {
        left: auto;
        right: 0;
    }
}

@media (min-width: 1400px) {
    .dropdown-menu-xxl-start {
        --bs-position: start;
    }
    .dropdown-menu-xxl-start[data-bs-popper] {
        left: 0;
        right: auto;
    }
    .dropdown-menu-xxl-end {
        --bs-position: end;
    }
    .dropdown-menu-xxl-end[data-bs-popper] {
        left: auto;
        right: 0;
    }
}

.dropup .dropdown-menu[data-bs-popper] {
    bottom: 100%;
    margin-bottom: 0.125rem;
    margin-top: 0;
    top: auto;
}

.dropup .dropdown-toggle:after {
    border-bottom: 0.3em solid;
    border-left: 0.3em solid transparent;
    border-right: 0.3em solid transparent;
    border-top: 0;
    content: "";
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
}

.dropup .dropdown-toggle:empty:after {
    margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
    left: 100%;
    margin-left: 0.125rem;
    margin-top: 0;
    right: auto;
    top: 0;
}

.dropend .dropdown-toggle:after {
    border-bottom: 0.3em solid transparent;
    border-left: 0.3em solid;
    border-right: 0;
    border-top: 0.3em solid transparent;
    content: "";
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
}

.dropend .dropdown-toggle:empty:after {
    margin-left: 0;
}

.dropend .dropdown-toggle:after {
    vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
    left: auto;
    margin-right: 0.125rem;
    margin-top: 0;
    right: 100%;
    top: 0;
}

.dropstart .dropdown-toggle:after {
    content: "";
    display: inline-block;
    display: none;
    margin-left: 0.255em;
    vertical-align: 0.255em;
}

.dropstart .dropdown-toggle:before {
    border-bottom: 0.3em solid transparent;
    border-right: 0.3em solid;
    border-top: 0.3em solid transparent;
    content: "";
    display: inline-block;
    margin-right: 0.255em;
    vertical-align: 0.255em;
}

.dropstart .dropdown-toggle:empty:after {
    margin-left: 0;
}

.dropstart .dropdown-toggle:before {
    vertical-align: 0;
}

.dropdown-divider {
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
}

.dropdown-item {
    background-color: transparent;
    border: 0;
    clear: both;
    color: #212529;
    display: block;
    font-weight: 400;
    padding: 0.25rem 1rem;
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    width: 100%;
}

.dropdown-item:focus,
.dropdown-item:hover {
    background-color: #e9ecef;
    color: #1e2125;
}

.dropdown-item.active,
.dropdown-item:active {
    background-color: #0d6efd;
    color: #fff;
    text-decoration: none;
}

.dropdown-item.disabled,
.dropdown-item:disabled {
    background-color: transparent;
    color: #adb5bd;
    pointer-events: none;
}

.dropdown-menu.show {
    display: block;
}

.dropdown-header {
    color: #6c757d;
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0;
    padding: 0.5rem 1rem;
    white-space: nowrap;
}

.dropdown-item-text {
    color: #212529;
    display: block;
    padding: 0.25rem 1rem;
}

.dropdown-menu-dark {
    background-color: #343a40;
    border-color: rgba(0, 0, 0, 0.15);
    color: #dee2e6;
}

.dropdown-menu-dark .dropdown-item {
    color: #dee2e6;
}

.dropdown-menu-dark .dropdown-item:focus,
.dropdown-menu-dark .dropdown-item:hover {
    background-color: hsla(0, 0%, 100%, 0.15);
    color: #fff;
}

.dropdown-menu-dark .dropdown-item.active,
.dropdown-menu-dark .dropdown-item:active {
    background-color: #0d6efd;
    color: #fff;
}

.dropdown-menu-dark .dropdown-item.disabled,
.dropdown-menu-dark .dropdown-item:disabled {
    color: #adb5bd;
}

.dropdown-menu-dark .dropdown-divider {
    border-color: rgba(0, 0, 0, 0.15);
}

.dropdown-menu-dark .dropdown-item-text {
    color: #dee2e6;
}

.dropdown-menu-dark .dropdown-header {
    color: #adb5bd;
}

.btn-group,
.btn-group-vertical {
    display: inline-flex;
    position: relative;
    vertical-align: middle;
}

.btn-group-vertical>.btn,
.btn-group>.btn {
    flex: 1 1 auto;
    position: relative;
}

.btn-group-vertical>.btn-check:checked+.btn,
.btn-group-vertical>.btn-check:focus+.btn,
.btn-group-vertical>.btn.active,
.btn-group-vertical>.btn:active,
.btn-group-vertical>.btn:focus,
.btn-group-vertical>.btn:hover,
.btn-group>.btn-check:checked+.btn,
.btn-group>.btn-check:focus+.btn,
.btn-group>.btn.active,
.btn-group>.btn:active,
.btn-group>.btn:focus,
.btn-group>.btn:hover {
    z-index: 1;
}

.btn-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.btn-toolbar .input-group {
    width: auto;
}

.btn-group>.btn-group:not(:first-child),
.btn-group>.btn:not(:first-child) {
    margin-left: -1px;
}

.btn-group>.btn-group:not(:last-child)>.btn,
.btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}

.btn-group>.btn-group:not(:first-child)>.btn,
.btn-group>.btn:nth-child(n+3),
.btn-group> :not(.btn-check)+.btn {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
}

.dropdown-toggle-split {
    padding-left: 0.5625rem;
    padding-right: 0.5625rem;
}

.dropdown-toggle-split:after,
.dropend .dropdown-toggle-split:after,
.dropup .dropdown-toggle-split:after {
    margin-left: 0;
}

.dropstart .dropdown-toggle-split:before {
    margin-right: 0;
}

.btn-group-sm>.btn+.dropdown-toggle-split,
.btn-sm+.dropdown-toggle-split {
    padding-left: 0.375rem;
    padding-right: 0.375rem;
}

.btn-group-lg>.btn+.dropdown-toggle-split,
.btn-lg+.dropdown-toggle-split {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

.btn-group-vertical {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
}

.btn-group-vertical>.btn,
.btn-group-vertical>.btn-group {
    width: 100%;
}

.btn-group-vertical>.btn-group:not(:first-child),
.btn-group-vertical>.btn:not(:first-child) {
    margin-top: -1px;
}

.btn-group-vertical>.btn-group:not(:last-child)>.btn,
.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.btn-group-vertical>.btn-group:not(:first-child)>.btn,
.btn-group-vertical>.btn~.btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.nav-link {
    color: #0d6efd;
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
    .nav-link {
        transition: none;
    }
}

.nav-link:focus,
.nav-link:hover {
    color: #0a58ca;
}

.nav-link.disabled {
    color: #6c757d;
    cursor: default;
    pointer-events: none;
}

.nav-tabs {
    border-bottom: 1px solid #dee2e6;
}

.nav-tabs .nav-link {
    background: 0 0;
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    margin-bottom: -1px;
}

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
    isolation: isolate;
}

.nav-tabs .nav-link.disabled {
    background-color: transparent;
    border-color: transparent;
    color: #6c757d;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    color: #495057;
}

.nav-tabs .dropdown-menu {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: -1px;
}

.nav-pills .nav-link {
    background: 0 0;
    border: 0;
    border-radius: 0.25rem;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    background-color: #0d6efd;
    color: #fff;
}

.nav-fill .nav-item,
.nav-fill>.nav-link {
    flex: 1 1 auto;
    text-align: center;
}

.nav-justified .nav-item,
.nav-justified>.nav-link {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
    width: 100%;
}

.tab-content>.tab-pane {
    display: none;
}

.tab-content>.active {
    display: block;
}

.navbar {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    position: relative;
}

.navbar>.container,
.navbar>.container-fluid,
.navbar>.container-lg,
.navbar>.container-md,
.navbar>.container-sm,
.navbar>.container-xl,
.navbar>.container-xxl {
    align-items: center;
    display: flex;
    flex-wrap: inherit;
    justify-content: space-between;
}

.navbar-brand {
    font-size: 1.25rem;
    margin-right: 1rem;
    padding-bottom: 0.3125rem;
    padding-top: 0.3125rem;
    text-decoration: none;
    white-space: nowrap;
}

.navbar-nav {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
}

.navbar-nav .nav-link {
    padding-left: 0;
    padding-right: 0;
}

.navbar-nav .dropdown-menu {
    position: static;
}

.navbar-text {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
}

.navbar-collapse {
    align-items: center;
    flex-basis: 100%;
    flex-grow: 1;
}

.navbar-toggler {
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    font-size: 1.25rem;
    line-height: 1;
    padding: 0.25rem 0.75rem;
    transition: box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
    .navbar-toggler {
        transition: none;
    }
}

.navbar-toggler:hover {
    text-decoration: none;
}

.navbar-toggler:focus {
    box-shadow: 0 0 0 0.25rem;
    outline: 0;
    text-decoration: none;
}

.navbar-toggler-icon {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    height: 1.5em;
    vertical-align: middle;
    width: 1.5em;
}

.navbar-nav-scroll {
    max-height: 75vh;
    max-height: var(--bs-scroll-height, 75vh);
    overflow-y: auto;
}

@media (min-width: 576px) {
    .navbar-expand-sm {
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    .navbar-expand-sm .navbar-nav {
        flex-direction: row;
    }
    .navbar-expand-sm .navbar-nav .dropdown-menu {
        position: absolute;
    }
    .navbar-expand-sm .navbar-nav .nav-link {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    .navbar-expand-sm .navbar-nav-scroll {
        overflow: visible;
    }
    .navbar-expand-sm .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
    }
    .navbar-expand-sm .navbar-toggler,
    .navbar-expand-sm .offcanvas-header {
        display: none;
    }
    .navbar-expand-sm .offcanvas {
        background-color: transparent;
        border-left: 0;
        border-right: 0;
        bottom: 0;
        flex-grow: 1;
        position: inherit;
        -webkit-transform: none;
        transform: none;
        transition: none;
        visibility: visible !important;
        z-index: 1000;
    }
    .navbar-expand-sm .offcanvas-bottom,
    .navbar-expand-sm .offcanvas-top {
        border-bottom: 0;
        border-top: 0;
        height: auto;
    }
    .navbar-expand-sm .offcanvas-body {
        display: flex;
        flex-grow: 0;
        overflow-y: visible;
        padding: 0;
    }
}

@media (min-width: 768px) {
    .navbar-expand-md {
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    .navbar-expand-md .navbar-nav {
        flex-direction: row;
    }
    .navbar-expand-md .navbar-nav .dropdown-menu {
        position: absolute;
    }
    .navbar-expand-md .navbar-nav .nav-link {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    .navbar-expand-md .navbar-nav-scroll {
        overflow: visible;
    }
    .navbar-expand-md .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
    }
    .navbar-expand-md .navbar-toggler,
    .navbar-expand-md .offcanvas-header {
        display: none;
    }
    .navbar-expand-md .offcanvas {
        background-color: transparent;
        border-left: 0;
        border-right: 0;
        bottom: 0;
        flex-grow: 1;
        position: inherit;
        -webkit-transform: none;
        transform: none;
        transition: none;
        visibility: visible !important;
        z-index: 1000;
    }
    .navbar-expand-md .offcanvas-bottom,
    .navbar-expand-md .offcanvas-top {
        border-bottom: 0;
        border-top: 0;
        height: auto;
    }
    .navbar-expand-md .offcanvas-body {
        display: flex;
        flex-grow: 0;
        overflow-y: visible;
        padding: 0;
    }
}

@media (min-width: 992px) {
    .navbar-expand-lg {
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    .navbar-expand-lg .navbar-nav {
        flex-direction: row;
    }
    .navbar-expand-lg .navbar-nav .dropdown-menu {
        position: absolute;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    .navbar-expand-lg .navbar-nav-scroll {
        overflow: visible;
    }
    .navbar-expand-lg .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
    }
    .navbar-expand-lg .navbar-toggler,
    .navbar-expand-lg .offcanvas-header {
        display: none;
    }
    .navbar-expand-lg .offcanvas {
        background-color: transparent;
        border-left: 0;
        border-right: 0;
        bottom: 0;
        flex-grow: 1;
        position: inherit;
        -webkit-transform: none;
        transform: none;
        transition: none;
        visibility: visible !important;
        z-index: 1000;
    }
    .navbar-expand-lg .offcanvas-bottom,
    .navbar-expand-lg .offcanvas-top {
        border-bottom: 0;
        border-top: 0;
        height: auto;
    }
    .navbar-expand-lg .offcanvas-body {
        display: flex;
        flex-grow: 0;
        overflow-y: visible;
        padding: 0;
    }
}

@media (min-width: 1200px) {
    .navbar-expand-xl {
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    .navbar-expand-xl .navbar-nav {
        flex-direction: row;
    }
    .navbar-expand-xl .navbar-nav .dropdown-menu {
        position: absolute;
    }
    .navbar-expand-xl .navbar-nav .nav-link {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    .navbar-expand-xl .navbar-nav-scroll {
        overflow: visible;
    }
    .navbar-expand-xl .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
    }
    .navbar-expand-xl .navbar-toggler,
    .navbar-expand-xl .offcanvas-header {
        display: none;
    }
    .navbar-expand-xl .offcanvas {
        background-color: transparent;
        border-left: 0;
        border-right: 0;
        bottom: 0;
        flex-grow: 1;
        position: inherit;
        -webkit-transform: none;
        transform: none;
        transition: none;
        visibility: visible !important;
        z-index: 1000;
    }
    .navbar-expand-xl .offcanvas-bottom,
    .navbar-expand-xl .offcanvas-top {
        border-bottom: 0;
        border-top: 0;
        height: auto;
    }
    .navbar-expand-xl .offcanvas-body {
        display: flex;
        flex-grow: 0;
        overflow-y: visible;
        padding: 0;
    }
}

@media (min-width: 1400px) {
    .navbar-expand-xxl {
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    .navbar-expand-xxl .navbar-nav {
        flex-direction: row;
    }
    .navbar-expand-xxl .navbar-nav .dropdown-menu {
        position: absolute;
    }
    .navbar-expand-xxl .navbar-nav .nav-link {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    .navbar-expand-xxl .navbar-nav-scroll {
        overflow: visible;
    }
    .navbar-expand-xxl .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
    }
    .navbar-expand-xxl .navbar-toggler,
    .navbar-expand-xxl .offcanvas-header {
        display: none;
    }
    .navbar-expand-xxl .offcanvas {
        background-color: transparent;
        border-left: 0;
        border-right: 0;
        bottom: 0;
        flex-grow: 1;
        position: inherit;
        -webkit-transform: none;
        transform: none;
        transition: none;
        visibility: visible !important;
        z-index: 1000;
    }
    .navbar-expand-xxl .offcanvas-bottom,
    .navbar-expand-xxl .offcanvas-top {
        border-bottom: 0;
        border-top: 0;
        height: auto;
    }
    .navbar-expand-xxl .offcanvas-body {
        display: flex;
        flex-grow: 0;
        overflow-y: visible;
        padding: 0;
    }
}

.navbar-expand {
    flex-wrap: nowrap;
    justify-content: flex-start;
}

.navbar-expand .navbar-nav {
    flex-direction: row;
}

.navbar-expand .navbar-nav .dropdown-menu {
    position: absolute;
}

.navbar-expand .navbar-nav .nav-link {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.navbar-expand .navbar-nav-scroll {
    overflow: visible;
}

.navbar-expand .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
}

.navbar-expand .navbar-toggler,
.navbar-expand .offcanvas-header {
    display: none;
}

.navbar-expand .offcanvas {
    background-color: transparent;
    border-left: 0;
    border-right: 0;
    bottom: 0;
    flex-grow: 1;
    position: inherit;
    -webkit-transform: none;
    transform: none;
    transition: none;
    visibility: visible !important;
    z-index: 1000;
}

.navbar-expand .offcanvas-bottom,
.navbar-expand .offcanvas-top {
    border-bottom: 0;
    border-top: 0;
    height: auto;
}

.navbar-expand .offcanvas-body {
    display: flex;
    flex-grow: 0;
    overflow-y: visible;
    padding: 0;
}

.navbar-light .navbar-brand,
.navbar-light .navbar-brand:focus,
.navbar-light .navbar-brand:hover {
    color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.55);
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
    color: rgba(0, 0, 0, 0.7);
}

.navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, 0.3);
}

.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .show>.nav-link {
    color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-toggler {
    border-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.55);
}

.navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-light .navbar-text {
    color: rgba(0, 0, 0, 0.55);
}

.navbar-light .navbar-text a,
.navbar-light .navbar-text a:focus,
.navbar-light .navbar-text a:hover {
    color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand,
.navbar-dark .navbar-brand:focus,
.navbar-dark .navbar-brand:hover {
    color: #fff;
}

.navbar-dark .navbar-nav .nav-link {
    color: hsla(0, 0%, 100%, 0.55);
}

.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover {
    color: hsla(0, 0%, 100%, 0.75);
}

.navbar-dark .navbar-nav .nav-link.disabled {
    color: hsla(0, 0%, 100%, 0.25);
}

.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .show>.nav-link {
    color: #fff;
}

.navbar-dark .navbar-toggler {
    border-color: hsla(0, 0%, 100%, 0.1);
    color: hsla(0, 0%, 100%, 0.55);
}

.navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-dark .navbar-text {
    color: hsla(0, 0%, 100%, 0.55);
}

.navbar-dark .navbar-text a,
.navbar-dark .navbar-text a:focus,
.navbar-dark .navbar-text a:hover {
    color: #fff;
}

.card {
    word-wrap: break-word;
    background-clip: border-box;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    min-width: 0;
    position: relative;
}

.card>hr {
    margin-left: 0;
    margin-right: 0;
}

.card>.list-group {
    border-bottom: inherit;
    border-top: inherit;
}

.card>.list-group:first-child {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    border-top-width: 0;
}

.card>.list-group:last-child {
    border-bottom-left-radius: calc(0.25rem - 1px);
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-width: 0;
}

.card>.card-header+.list-group,
.card>.list-group+.card-footer {
    border-top: 0;
}

.card-body {
    flex: 1 1 auto;
    padding: 1rem;
}

.card-title {
    margin-bottom: 0.5rem;
}

.card-subtitle {
    margin-top: -0.25rem;
}

.card-subtitle,
.card-text:last-child {
    margin-bottom: 0;
}

.card-link+.card-link {
    margin-left: 1rem;
}

.card-header {
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 0;
    padding: 0.5rem 1rem;
}

.card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-footer {
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    padding: 0.5rem 1rem;
}

.card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
    border-bottom: 0;
    margin-bottom: -0.5rem;
}

.card-header-pills,
.card-header-tabs {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
}

.card-img-overlay {
    border-radius: calc(0.25rem - 1px);
    bottom: 0;
    left: 0;
    padding: 1rem;
    position: absolute;
    right: 0;
    top: 0;
}

.card-img,
.card-img-bottom,
.card-img-top {
    width: 100%;
}

.card-img,
.card-img-top {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-bottom {
    border-bottom-left-radius: calc(0.25rem - 1px);
    border-bottom-right-radius: calc(0.25rem - 1px);
}

.card-group>.card {
    margin-bottom: 0.75rem;
}

@media (min-width: 576px) {
    .card-group {
        display: flex;
        flex-flow: row wrap;
    }
    .card-group>.card {
        flex: 1 0;
        margin-bottom: 0;
    }
    .card-group>.card+.card {
        border-left: 0;
        margin-left: 0;
    }
    .card-group>.card:not(:last-child) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }
    .card-group>.card:not(:last-child) .card-header,
    .card-group>.card:not(:last-child) .card-img-top {
        border-top-right-radius: 0;
    }
    .card-group>.card:not(:last-child) .card-footer,
    .card-group>.card:not(:last-child) .card-img-bottom {
        border-bottom-right-radius: 0;
    }
    .card-group>.card:not(:first-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }
    .card-group>.card:not(:first-child) .card-header,
    .card-group>.card:not(:first-child) .card-img-top {
        border-top-left-radius: 0;
    }
    .card-group>.card:not(:first-child) .card-footer,
    .card-group>.card:not(:first-child) .card-img-bottom {
        border-bottom-left-radius: 0;
    }
}

.accordion-button {
    align-items: center;
    background-color: #fff;
    border: 0;
    border-radius: 0;
    color: #212529;
    display: flex;
    font-size: 1rem;
    overflow-anchor: none;
    padding: 1rem 1.25rem;
    position: relative;
    text-align: left;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
    width: 100%;
}

@media (prefers-reduced-motion: reduce) {
    .accordion-button {
        transition: none;
    }
}

.accordion-button:not(.collapsed) {
    background-color: #e7f1ff;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
    color: #0c63e4;
}

.accordion-button:not(.collapsed):after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
}

.accordion-button:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 1.25rem;
    content: "";
    flex-shrink: 0;
    height: 1.25rem;
    margin-left: auto;
    transition: -webkit-transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
    width: 1.25rem;
}

@media (prefers-reduced-motion: reduce) {
    .accordion-button:after {
        transition: none;
    }
}

.accordion-button:hover {
    z-index: 2;
}

.accordion-button:focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    outline: 0;
    z-index: 3;
}

.accordion-header {
    margin-bottom: 0;
}

.accordion-item {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
}

.accordion-item:first-of-type {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}

.accordion-item:first-of-type .accordion-button {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
}

.accordion-item:not(:first-of-type) {
    border-top: 0;
}

.accordion-item:last-of-type {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
}

.accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-left-radius: calc(0.25rem - 1px);
    border-bottom-right-radius: calc(0.25rem - 1px);
}

.accordion-item:last-of-type .accordion-collapse {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
}

.accordion-body {
    padding: 1rem 1.25rem;
}

.accordion-flush .accordion-collapse {
    border-width: 0;
}

.accordion-flush .accordion-item {
    border-left: 0;
    border-radius: 0;
    border-right: 0;
}

.accordion-flush .accordion-item:first-child {
    border-top: 0;
}

.accordion-flush .accordion-item:last-child {
    border-bottom: 0;
}

.accordion-flush .accordion-item .accordion-button {
    border-radius: 0;
}

.breadcrumb {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 1rem;
    padding: 0;
}

.breadcrumb-item+.breadcrumb-item {
    padding-left: 0.5rem;
}

.breadcrumb-item+.breadcrumb-item:before {
    color: #6c757d;
    content: "/";
    content: var(--bs-breadcrumb-divider, "/");
    float: left;
    padding-right: 0.5rem;
}

.breadcrumb-item.active {
    color: #6c757d;
}

.pagination {
    display: flex;
    list-style: none;
    padding-left: 0;
}

.page-link {
    background-color: #fff;
    border: 1px solid #dee2e6;
    color: #0d6efd;
    display: block;
    position: relative;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
    .page-link {
        transition: none;
    }
}

.page-link:hover {
    border-color: #dee2e6;
    z-index: 2;
}

.page-link:focus,
.page-link:hover {
    background-color: #e9ecef;
    color: #0a58ca;
}

.page-link:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    outline: 0;
    z-index: 3;
}

.page-item:not(:first-child) .page-link {
    margin-left: -1px;
}

.page-item.active .page-link {
    background-color: #0d6efd;
    border-color: #0d6efd;
    color: #fff;
    z-index: 3;
}

.page-item.disabled .page-link {
    background-color: #fff;
    border-color: #dee2e6;
    color: #6c757d;
    pointer-events: none;
}

.page-link {
    padding: 0.375rem 0.75rem;
}

.page-item:first-child .page-link {
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
}

.page-item:last-child .page-link {
    border-bottom-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}

.pagination-lg .page-link {
    font-size: 1.25rem;
    padding: 0.75rem 1.5rem;
}

.pagination-lg .page-item:first-child .page-link {
    border-bottom-left-radius: 0.3rem;
    border-top-left-radius: 0.3rem;
}

.pagination-lg .page-item:last-child .page-link {
    border-bottom-right-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
}

.pagination-sm .page-link {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
}

.pagination-sm .page-item:first-child .page-link {
    border-bottom-left-radius: 0.2rem;
    border-top-left-radius: 0.2rem;
}

.pagination-sm .page-item:last-child .page-link {
    border-bottom-right-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
}

.badge {
    border-radius: 0.25rem;
    color: #fff;
    display: inline-block;
    font-size: 0.75em;
    font-weight: 700;
    line-height: 1;
    padding: 0.35em 0.65em;
    text-align: center;
    vertical-align: baseline;
    white-space: nowrap;
}

.badge:empty {
    display: none;
}

.btn .badge {
    position: relative;
    top: -1px;
}

.alert {
    border: 1px solid transparent;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    padding: 1rem;
    position: relative;
}

.alert-heading {
    color: inherit;
}

.alert-link {
    font-weight: 700;
}

.alert-dismissible {
    padding-right: 3rem;
}

.alert-dismissible .btn-close {
    padding: 1.25rem 1rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
}

.alert-primary {
    background-color: #cfe2ff;
    border-color: #b6d4fe;
    color: #084298;
}

.alert-primary .alert-link {
    color: #06357a;
}

.alert-secondary {
    background-color: #e2e3e5;
    border-color: #d3d6d8;
    color: #41464b;
}

.alert-secondary .alert-link {
    color: #34383c;
}

.alert-success {
    background-color: #d1e7dd;
    border-color: #badbcc;
    color: #0f5132;
}

.alert-success .alert-link {
    color: #0c4128;
}

.alert-info {
    background-color: #cff4fc;
    border-color: #b6effb;
    color: #055160;
}

.alert-info .alert-link {
    color: #04414d;
}

.alert-warning {
    background-color: #fff3cd;
    border-color: #ffecb5;
    color: #664d03;
}

.alert-warning .alert-link {
    color: #523e02;
}

.alert-danger {
    background-color: #f8d7da;
    border-color: #f5c2c7;
    color: #842029;
}

.alert-danger .alert-link {
    color: #6a1a21;
}

.alert-light {
    background-color: #fefefe;
    border-color: #fdfdfe;
    color: #636464;
}

.alert-light .alert-link {
    color: #4f5050;
}

.alert-dark {
    background-color: #d3d3d4;
    border-color: #bcbebf;
    color: #141619;
}

.alert-dark .alert-link {
    color: #101214;
}

@-webkit-keyframes progress-bar-stripes {
    0% {
        background-position-x: 1rem;
    }
}

@keyframes progress-bar-stripes {
    0% {
        background-position-x: 1rem;
    }
}

.progress {
    background-color: #e9ecef;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    height: 1rem;
}

.progress,
.progress-bar {
    display: flex;
    overflow: hidden;
}

.progress-bar {
    background-color: #0d6efd;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    transition: width 0.6s ease;
    white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
    .progress-bar {
        transition: none;
    }
}

.progress-bar-striped {
    background-image: linear-gradient( 45deg, hsla(0, 0%, 100%, 0.15) 25%, transparent 0, transparent 50%, hsla(0, 0%, 100%, 0.15) 0, hsla(0, 0%, 100%, 0.15) 75%, transparent 0, transparent);
    background-size: 1rem 1rem;
}

.progress-bar-animated {
    -webkit-animation: progress-bar-stripes 1s linear infinite;
    animation: progress-bar-stripes 1s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
    .progress-bar-animated {
        -webkit-animation: none;
        animation: none;
    }
}

.list-group {
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    padding-left: 0;
}

.list-group-numbered {
    counter-reset: section;
    list-style-type: none;
}

.list-group-numbered>li:before {
    content: counters(section, ".") ". ";
    counter-increment: section;
}

.list-group-item-action {
    color: #495057;
    text-align: inherit;
    width: 100%;
}

.list-group-item-action:focus,
.list-group-item-action:hover {
    background-color: #f8f9fa;
    color: #495057;
    text-decoration: none;
    z-index: 1;
}

.list-group-item-action:active {
    background-color: #e9ecef;
    color: #212529;
}

.list-group-item {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    color: #212529;
    display: block;
    padding: 0.5rem 1rem;
    position: relative;
    text-decoration: none;
}

.list-group-item:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}

.list-group-item:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
}

.list-group-item.disabled,
.list-group-item:disabled {
    background-color: #fff;
    color: #6c757d;
    pointer-events: none;
}

.list-group-item.active {
    background-color: #0d6efd;
    border-color: #0d6efd;
    color: #fff;
    z-index: 2;
}

.list-group-item+.list-group-item {
    border-top-width: 0;
}

.list-group-item+.list-group-item.active {
    border-top-width: 1px;
    margin-top: -1px;
}

.list-group-horizontal {
    flex-direction: row;
}

.list-group-horizontal>.list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
}

.list-group-horizontal>.list-group-item:last-child {
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.25rem;
}

.list-group-horizontal>.list-group-item.active {
    margin-top: 0;
}

.list-group-horizontal>.list-group-item+.list-group-item {
    border-left-width: 0;
    border-top-width: 1px;
}

.list-group-horizontal>.list-group-item+.list-group-item.active {
    border-left-width: 1px;
    margin-left: -1px;
}

@media (min-width: 576px) {
    .list-group-horizontal-sm {
        flex-direction: row;
    }
    .list-group-horizontal-sm>.list-group-item:first-child {
        border-bottom-left-radius: 0.25rem;
        border-top-right-radius: 0;
    }
    .list-group-horizontal-sm>.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: 0.25rem;
    }
    .list-group-horizontal-sm>.list-group-item.active {
        margin-top: 0;
    }
    .list-group-horizontal-sm>.list-group-item+.list-group-item {
        border-left-width: 0;
        border-top-width: 1px;
    }
    .list-group-horizontal-sm>.list-group-item+.list-group-item.active {
        border-left-width: 1px;
        margin-left: -1px;
    }
}

@media (min-width: 768px) {
    .list-group-horizontal-md {
        flex-direction: row;
    }
    .list-group-horizontal-md>.list-group-item:first-child {
        border-bottom-left-radius: 0.25rem;
        border-top-right-radius: 0;
    }
    .list-group-horizontal-md>.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: 0.25rem;
    }
    .list-group-horizontal-md>.list-group-item.active {
        margin-top: 0;
    }
    .list-group-horizontal-md>.list-group-item+.list-group-item {
        border-left-width: 0;
        border-top-width: 1px;
    }
    .list-group-horizontal-md>.list-group-item+.list-group-item.active {
        border-left-width: 1px;
        margin-left: -1px;
    }
}

@media (min-width: 992px) {
    .list-group-horizontal-lg {
        flex-direction: row;
    }
    .list-group-horizontal-lg>.list-group-item:first-child {
        border-bottom-left-radius: 0.25rem;
        border-top-right-radius: 0;
    }
    .list-group-horizontal-lg>.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: 0.25rem;
    }
    .list-group-horizontal-lg>.list-group-item.active {
        margin-top: 0;
    }
    .list-group-horizontal-lg>.list-group-item+.list-group-item {
        border-left-width: 0;
        border-top-width: 1px;
    }
    .list-group-horizontal-lg>.list-group-item+.list-group-item.active {
        border-left-width: 1px;
        margin-left: -1px;
    }
}

@media (min-width: 1200px) {
    .list-group-horizontal-xl {
        flex-direction: row;
    }
    .list-group-horizontal-xl>.list-group-item:first-child {
        border-bottom-left-radius: 0.25rem;
        border-top-right-radius: 0;
    }
    .list-group-horizontal-xl>.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: 0.25rem;
    }
    .list-group-horizontal-xl>.list-group-item.active {
        margin-top: 0;
    }
    .list-group-horizontal-xl>.list-group-item+.list-group-item {
        border-left-width: 0;
        border-top-width: 1px;
    }
    .list-group-horizontal-xl>.list-group-item+.list-group-item.active {
        border-left-width: 1px;
        margin-left: -1px;
    }
}

@media (min-width: 1400px) {
    .list-group-horizontal-xxl {
        flex-direction: row;
    }
    .list-group-horizontal-xxl>.list-group-item:first-child {
        border-bottom-left-radius: 0.25rem;
        border-top-right-radius: 0;
    }
    .list-group-horizontal-xxl>.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: 0.25rem;
    }
    .list-group-horizontal-xxl>.list-group-item.active {
        margin-top: 0;
    }
    .list-group-horizontal-xxl>.list-group-item+.list-group-item {
        border-left-width: 0;
        border-top-width: 1px;
    }
    .list-group-horizontal-xxl>.list-group-item+.list-group-item.active {
        border-left-width: 1px;
        margin-left: -1px;
    }
}

.list-group-flush {
    border-radius: 0;
}

.list-group-flush>.list-group-item {
    border-width: 0 0 1px;
}

.list-group-flush>.list-group-item:last-child {
    border-bottom-width: 0;
}

.list-group-item-primary {
    background-color: #cfe2ff;
    color: #084298;
}

.list-group-item-primary.list-group-item-action:focus,
.list-group-item-primary.list-group-item-action:hover {
    background-color: #bacbe6;
    color: #084298;
}

.list-group-item-primary.list-group-item-action.active {
    background-color: #084298;
    border-color: #084298;
    color: #fff;
}

.list-group-item-secondary {
    background-color: #e2e3e5;
    color: #41464b;
}

.list-group-item-secondary.list-group-item-action:focus,
.list-group-item-secondary.list-group-item-action:hover {
    background-color: #cbccce;
    color: #41464b;
}

.list-group-item-secondary.list-group-item-action.active {
    background-color: #41464b;
    border-color: #41464b;
    color: #fff;
}

.list-group-item-success {
    background-color: #d1e7dd;
    color: #0f5132;
}

.list-group-item-success.list-group-item-action:focus,
.list-group-item-success.list-group-item-action:hover {
    background-color: #bcd0c7;
    color: #0f5132;
}

.list-group-item-success.list-group-item-action.active {
    background-color: #0f5132;
    border-color: #0f5132;
    color: #fff;
}

.list-group-item-info {
    background-color: #cff4fc;
    color: #055160;
}

.list-group-item-info.list-group-item-action:focus,
.list-group-item-info.list-group-item-action:hover {
    background-color: #badce3;
    color: #055160;
}

.list-group-item-info.list-group-item-action.active {
    background-color: #055160;
    border-color: #055160;
    color: #fff;
}

.list-group-item-warning {
    background-color: #fff3cd;
    color: #664d03;
}

.list-group-item-warning.list-group-item-action:focus,
.list-group-item-warning.list-group-item-action:hover {
    background-color: #e6dbb9;
    color: #664d03;
}

.list-group-item-warning.list-group-item-action.active {
    background-color: #664d03;
    border-color: #664d03;
    color: #fff;
}

.list-group-item-danger {
    background-color: #f8d7da;
    color: #842029;
}

.list-group-item-danger.list-group-item-action:focus,
.list-group-item-danger.list-group-item-action:hover {
    background-color: #dfc2c4;
    color: #842029;
}

.list-group-item-danger.list-group-item-action.active {
    background-color: #842029;
    border-color: #842029;
    color: #fff;
}

.list-group-item-light {
    background-color: #fefefe;
    color: #636464;
}

.list-group-item-light.list-group-item-action:focus,
.list-group-item-light.list-group-item-action:hover {
    background-color: #e5e5e5;
    color: #636464;
}

.list-group-item-light.list-group-item-action.active {
    background-color: #636464;
    border-color: #636464;
    color: #fff;
}

.list-group-item-dark {
    background-color: #d3d3d4;
    color: #141619;
}

.list-group-item-dark.list-group-item-action:focus,
.list-group-item-dark.list-group-item-action:hover {
    background-color: #bebebf;
    color: #141619;
}

.list-group-item-dark.list-group-item-action.active {
    background-color: #141619;
    border-color: #141619;
    color: #fff;
}

.btn-close {
    background: transparent url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E") 50%/1em auto no-repeat;
    border: 0;
    border-radius: 0.25rem;
    box-sizing: content-box;
    color: #000;
    height: 1em;
    opacity: 0.5;
    padding: 0.25em;
    width: 1em;
}

.btn-close:hover {
    color: #000;
    opacity: 0.75;
    text-decoration: none;
}

.btn-close:focus {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    opacity: 1;
    outline: 0;
}

.btn-close.disabled,
.btn-close:disabled {
    opacity: 0.25;
    pointer-events: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.btn-close-white {
    -webkit-filter: invert(1) grayscale(100%) brightness(200%);
    filter: invert(1) grayscale(100%) brightness(200%);
}

.toast {
    background-clip: padding-box;
    background-color: hsla(0, 0%, 100%, 0.85);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    font-size: 0.875rem;
    max-width: 100%;
    pointer-events: auto;
    width: 350px;
}

.toast.showing {
    opacity: 0;
}

.toast:not(.show) {
    display: none;
}

.toast-container {
    max-width: 100%;
    pointer-events: none;
    width: -webkit-max-content;
    width: max-content;
}

.toast-container> :not(:last-child) {
    margin-bottom: 0.75rem;
}

.toast-header {
    align-items: center;
    background-clip: padding-box;
    background-color: hsla(0, 0%, 100%, 0.85);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    color: #6c757d;
    display: flex;
    padding: 0.5rem 0.75rem;
}

.toast-header .btn-close {
    margin-left: 0.75rem;
    margin-right: -0.375rem;
}

.toast-body {
    word-wrap: break-word;
    padding: 0.75rem;
}

.modal {
    display: none;
    height: 100%;
    left: 0;
    outline: 0;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1055;
}

.modal-dialog {
    margin: 0.5rem;
    pointer-events: none;
    position: relative;
    width: auto;
}

.modal.fade .modal-dialog {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    transition: -webkit-transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
}

@media (prefers-reduced-motion: reduce) {
    .modal.fade .modal-dialog {
        transition: none;
    }
}

.modal.show .modal-dialog {
    -webkit-transform: none;
    transform: none;
}

.modal.modal-static .modal-dialog {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
}

.modal-dialog-scrollable {
    height: calc(100% - 1rem);
}

.modal-dialog-scrollable .modal-content {
    max-height: 100%;
    overflow: hidden;
}

.modal-dialog-scrollable .modal-body {
    overflow-y: auto;
}

.modal-dialog-centered {
    align-items: center;
    display: flex;
    min-height: calc(100% - 1rem);
}

.modal-content {
    background-clip: padding-box;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    outline: 0;
    pointer-events: auto;
    position: relative;
    width: 100%;
}

.modal-backdrop {
    background-color: #000;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1050;
}

.modal-backdrop.fade {
    opacity: 0;
}

.modal-backdrop.show {
    opacity: 0.5;
}

.modal-header {
    align-items: center;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    padding: 1rem;
}

.modal-header .btn-close {
    margin: -0.5rem -0.5rem -0.5rem auto;
    padding: 0.5rem;
}

.modal-title {
    line-height: 1.5;
    margin-bottom: 0;
}

.modal-body {
    flex: 1 1 auto;
    padding: 1rem;
    position: relative;
}

.modal-footer {
    align-items: center;
    border-bottom-left-radius: calc(0.3rem - 1px);
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-top: 1px solid #dee2e6;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: 0.75rem;
}

.modal-footer>* {
    margin: 0.25rem;
}

@media (min-width: 576px) {
    .modal-dialog {
        margin: 1.75rem auto;
        max-width: 500px;
    }
    .modal-dialog-scrollable {
        height: calc(100% - 3.5rem);
    }
    .modal-dialog-centered {
        min-height: calc(100% - 3.5rem);
    }
    .modal-sm {
        max-width: 300px;
    }
}

@media (min-width: 992px) {
    .modal-lg,
    .modal-xl {
        max-width: 800px;
    }
}

@media (min-width: 1200px) {
    .modal-xl {
        max-width: 1140px;
    }
}

.modal-fullscreen {
    height: 100%;
    margin: 0;
    max-width: none;
    width: 100vw;
}

.modal-fullscreen .modal-content {
    border: 0;
    border-radius: 0;
    height: 100%;
}

.modal-fullscreen .modal-header {
    border-radius: 0;
}

.modal-fullscreen .modal-body {
    overflow-y: auto;
}

.modal-fullscreen .modal-footer {
    border-radius: 0;
}

@media (max-width: 575.98px) {
    .modal-fullscreen-sm-down {
        height: 100%;
        margin: 0;
        max-width: none;
        width: 100vw;
    }
    .modal-fullscreen-sm-down .modal-content {
        border: 0;
        border-radius: 0;
        height: 100%;
    }
    .modal-fullscreen-sm-down .modal-header {
        border-radius: 0;
    }
    .modal-fullscreen-sm-down .modal-body {
        overflow-y: auto;
    }
    .modal-fullscreen-sm-down .modal-footer {
        border-radius: 0;
    }
}

@media (max-width: 767.98px) {
    .modal-fullscreen-md-down {
        height: 100%;
        margin: 0;
        max-width: none;
        width: 100vw;
    }
    .modal-fullscreen-md-down .modal-content {
        border: 0;
        border-radius: 0;
        height: 100%;
    }
    .modal-fullscreen-md-down .modal-header {
        border-radius: 0;
    }
    .modal-fullscreen-md-down .modal-body {
        overflow-y: auto;
    }
    .modal-fullscreen-md-down .modal-footer {
        border-radius: 0;
    }
}

@media (max-width: 991.98px) {
    .modal-fullscreen-lg-down {
        height: 100%;
        margin: 0;
        max-width: none;
        width: 100vw;
    }
    .modal-fullscreen-lg-down .modal-content {
        border: 0;
        border-radius: 0;
        height: 100%;
    }
    .modal-fullscreen-lg-down .modal-header {
        border-radius: 0;
    }
    .modal-fullscreen-lg-down .modal-body {
        overflow-y: auto;
    }
    .modal-fullscreen-lg-down .modal-footer {
        border-radius: 0;
    }
}

@media (max-width: 1199.98px) {
    .modal-fullscreen-xl-down {
        height: 100%;
        margin: 0;
        max-width: none;
        width: 100vw;
    }
    .modal-fullscreen-xl-down .modal-content {
        border: 0;
        border-radius: 0;
        height: 100%;
    }
    .modal-fullscreen-xl-down .modal-header {
        border-radius: 0;
    }
    .modal-fullscreen-xl-down .modal-body {
        overflow-y: auto;
    }
    .modal-fullscreen-xl-down .modal-footer {
        border-radius: 0;
    }
}

@media (max-width: 1399.98px) {
    .modal-fullscreen-xxl-down {
        height: 100%;
        margin: 0;
        max-width: none;
        width: 100vw;
    }
    .modal-fullscreen-xxl-down .modal-content {
        border: 0;
        border-radius: 0;
        height: 100%;
    }
    .modal-fullscreen-xxl-down .modal-header {
        border-radius: 0;
    }
    .modal-fullscreen-xxl-down .modal-body {
        overflow-y: auto;
    }
    .modal-fullscreen-xxl-down .modal-footer {
        border-radius: 0;
    }
}

.tooltip {
    word-wrap: break-word;
    display: block;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-family: var(--bs-font-sans-serif);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-break: auto;
    line-height: 1.5;
    margin: 0;
    opacity: 0;
    position: absolute;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    z-index: 1080;
}

.tooltip.show {
    opacity: 0.9;
}

.tooltip .tooltip-arrow {
    display: block;
    height: 0.4rem;
    position: absolute;
    width: 0.8rem;
}

.tooltip .tooltip-arrow:before {
    border-color: transparent;
    border-style: solid;
    content: "";
    position: absolute;
}

.bs-tooltip-auto[data-popper-placement^="top"],
.bs-tooltip-top {
    padding: 0.4rem 0;
}

.bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow,
.bs-tooltip-top .tooltip-arrow {
    bottom: 0;
}

.bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow:before,
.bs-tooltip-top .tooltip-arrow:before {
    border-top-color: #000;
    border-width: 0.4rem 0.4rem 0;
    top: -1px;
}

.bs-tooltip-auto[data-popper-placement^="right"],
.bs-tooltip-end {
    padding: 0 0.4rem;
}

.bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow,
.bs-tooltip-end .tooltip-arrow {
    height: 0.8rem;
    left: 0;
    width: 0.4rem;
}

.bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow:before,
.bs-tooltip-end .tooltip-arrow:before {
    border-right-color: #000;
    border-width: 0.4rem 0.4rem 0.4rem 0;
    right: -1px;
}

.bs-tooltip-auto[data-popper-placement^="bottom"],
.bs-tooltip-bottom {
    padding: 0.4rem 0;
}

.bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow,
.bs-tooltip-bottom .tooltip-arrow {
    top: 0;
}

.bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow:before,
.bs-tooltip-bottom .tooltip-arrow:before {
    border-bottom-color: #000;
    border-width: 0 0.4rem 0.4rem;
    bottom: -1px;
}

.bs-tooltip-auto[data-popper-placement^="left"],
.bs-tooltip-start {
    padding: 0 0.4rem;
}

.bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow,
.bs-tooltip-start .tooltip-arrow {
    height: 0.8rem;
    right: 0;
    width: 0.4rem;
}

.bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow:before,
.bs-tooltip-start .tooltip-arrow:before {
    border-left-color: #000;
    border-width: 0.4rem 0 0.4rem 0.4rem;
    left: -1px;
}

.tooltip-inner {
    background-color: #000;
    border-radius: 0.25rem;
    color: #fff;
    max-width: 200px;
    padding: 0.25rem 0.5rem;
    text-align: center;
}

.popover {
    word-wrap: break-word;
    background-clip: padding-box;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    display: block;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-family: var(--bs-font-sans-serif);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    left: 0;
    letter-spacing: normal;
    line-break: auto;
    line-height: 1.5;
    max-width: 276px;
    position: absolute;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    top: 0;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    z-index: 1070;
}

.popover .popover-arrow {
    display: block;
    height: 0.5rem;
    position: absolute;
    width: 1rem;
}

.popover .popover-arrow:after,
.popover .popover-arrow:before {
    border-color: transparent;
    border-style: solid;
    content: "";
    display: block;
    position: absolute;
}

.bs-popover-auto[data-popper-placement^="top"]>.popover-arrow,
.bs-popover-top>.popover-arrow {
    bottom: calc(-0.5rem - 1px);
}

.bs-popover-auto[data-popper-placement^="top"]>.popover-arrow:before,
.bs-popover-top>.popover-arrow:before {
    border-top-color: rgba(0, 0, 0, 0.25);
    border-width: 0.5rem 0.5rem 0;
    bottom: 0;
}

.bs-popover-auto[data-popper-placement^="top"]>.popover-arrow:after,
.bs-popover-top>.popover-arrow:after {
    border-top-color: #fff;
    border-width: 0.5rem 0.5rem 0;
    bottom: 1px;
}

.bs-popover-auto[data-popper-placement^="right"]>.popover-arrow,
.bs-popover-end>.popover-arrow {
    height: 1rem;
    left: calc(-0.5rem - 1px);
    width: 0.5rem;
}

.bs-popover-auto[data-popper-placement^="right"]>.popover-arrow:before,
.bs-popover-end>.popover-arrow:before {
    border-right-color: rgba(0, 0, 0, 0.25);
    border-width: 0.5rem 0.5rem 0.5rem 0;
    left: 0;
}

.bs-popover-auto[data-popper-placement^="right"]>.popover-arrow:after,
.bs-popover-end>.popover-arrow:after {
    border-right-color: #fff;
    border-width: 0.5rem 0.5rem 0.5rem 0;
    left: 1px;
}

.bs-popover-auto[data-popper-placement^="bottom"]>.popover-arrow,
.bs-popover-bottom>.popover-arrow {
    top: calc(-0.5rem - 1px);
}

.bs-popover-auto[data-popper-placement^="bottom"]>.popover-arrow:before,
.bs-popover-bottom>.popover-arrow:before {
    border-bottom-color: rgba(0, 0, 0, 0.25);
    border-width: 0 0.5rem 0.5rem;
    top: 0;
}

.bs-popover-auto[data-popper-placement^="bottom"]>.popover-arrow:after,
.bs-popover-bottom>.popover-arrow:after {
    border-bottom-color: #fff;
    border-width: 0 0.5rem 0.5rem;
    top: 1px;
}

.bs-popover-auto[data-popper-placement^="bottom"] .popover-header:before,
.bs-popover-bottom .popover-header:before {
    border-bottom: 1px solid #f0f0f0;
    content: "";
    display: block;
    left: 50%;
    margin-left: -0.5rem;
    position: absolute;
    top: 0;
    width: 1rem;
}

.bs-popover-auto[data-popper-placement^="left"]>.popover-arrow,
.bs-popover-start>.popover-arrow {
    height: 1rem;
    right: calc(-0.5rem - 1px);
    width: 0.5rem;
}

.bs-popover-auto[data-popper-placement^="left"]>.popover-arrow:before,
.bs-popover-start>.popover-arrow:before {
    border-left-color: rgba(0, 0, 0, 0.25);
    border-width: 0.5rem 0 0.5rem 0.5rem;
    right: 0;
}

.bs-popover-auto[data-popper-placement^="left"]>.popover-arrow:after,
.bs-popover-start>.popover-arrow:after {
    border-left-color: #fff;
    border-width: 0.5rem 0 0.5rem 0.5rem;
    right: 1px;
}

.popover-header {
    background-color: #f0f0f0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
    font-size: 1rem;
    margin-bottom: 0;
    padding: 0.5rem 1rem;
}

.popover-header:empty {
    display: none;
}

.popover-body {
    color: #212529;
    padding: 1rem;
}

.carousel {
    position: relative;
}

.carousel.pointer-event {
    touch-action: pan-y;
}

.carousel-inner {
    overflow: hidden;
    position: relative;
    width: 100%;
}

.carousel-inner:after {
    clear: both;
    content: "";
    display: block;
}

.carousel-item {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: none;
    float: left;
    margin-right: -100%;
    position: relative;
    transition: -webkit-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
    width: 100%;
}

@media (prefers-reduced-motion: reduce) {
    .carousel-item {
        transition: none;
    }
}

.carousel-item-next,
.carousel-item-prev,
.carousel-item.active {
    display: block;
}

.active.carousel-item-end,
.carousel-item-next:not(.carousel-item-start) {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
}

.active.carousel-item-start,
.carousel-item-prev:not(.carousel-item-end) {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}

.carousel-fade .carousel-item {
    opacity: 0;
    -webkit-transform: none;
    transform: none;
    transition-property: opacity;
}

.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end,
.carousel-fade .carousel-item.active {
    opacity: 1;
    z-index: 1;
}

.carousel-fade .active.carousel-item-end,
.carousel-fade .active.carousel-item-start {
    opacity: 0;
    transition: opacity 0s 0.6s;
    z-index: 0;
}

@media (prefers-reduced-motion: reduce) {
    .carousel-fade .active.carousel-item-end,
    .carousel-fade .active.carousel-item-start {
        transition: none;
    }
}

.carousel-control-next,
.carousel-control-prev {
    align-items: center;
    background: 0 0;
    border: 0;
    bottom: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    opacity: 0.5;
    padding: 0;
    position: absolute;
    text-align: center;
    top: 0;
    transition: opacity 0.15s ease;
    width: 15%;
    z-index: 1;
}

@media (prefers-reduced-motion: reduce) {
    .carousel-control-next,
    .carousel-control-prev {
        transition: none;
    }
}

.carousel-control-next:focus,
.carousel-control-next:hover,
.carousel-control-prev:focus,
.carousel-control-prev:hover {
    color: #fff;
    opacity: 0.9;
    outline: 0;
    text-decoration: none;
}

.carousel-control-prev {
    left: 0;
}

.carousel-control-next {
    right: 0;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    height: 2rem;
    width: 2rem;
}

.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
}

.carousel-indicators {
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    list-style: none;
    margin-bottom: 1rem;
    margin-left: 15%;
    margin-right: 15%;
    padding: 0;
    position: absolute;
    right: 0;
    z-index: 2;
}

.carousel-indicators [data-bs-target] {
    background-clip: padding-box;
    background-color: #fff;
    border: 0;
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    box-sizing: content-box;
    cursor: pointer;
    flex: 0 1 auto;
    height: 3px;
    margin-left: 3px;
    margin-right: 3px;
    opacity: 0.5;
    padding: 0;
    text-indent: -999px;
    transition: opacity 0.6s ease;
    width: 30px;
}

@media (prefers-reduced-motion: reduce) {
    .carousel-indicators [data-bs-target] {
        transition: none;
    }
}

.carousel-indicators .active {
    opacity: 1;
}

.carousel-caption {
    bottom: 1.25rem;
    color: #fff;
    left: 15%;
    padding-bottom: 1.25rem;
    padding-top: 1.25rem;
    position: absolute;
    right: 15%;
    text-align: center;
}

.carousel-dark .carousel-control-next-icon,
.carousel-dark .carousel-control-prev-icon {
    -webkit-filter: invert(1) grayscale(100);
    filter: invert(1) grayscale(100);
}

.carousel-dark .carousel-indicators [data-bs-target] {
    background-color: #000;
}

.carousel-dark .carousel-caption {
    color: #000;
}

@-webkit-keyframes spinner-border {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
    }
}

@keyframes spinner-border {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
    }
}

.spinner-border {
    -webkit-animation: spinner-border 0.75s linear infinite;
    animation: spinner-border 0.75s linear infinite;
    border: 0.25em solid;
    border-radius: 50%;
    border-right: 0.25em solid transparent;
    display: inline-block;
    height: 2rem;
    vertical-align: -0.125em;
    width: 2rem;
}

.spinner-border-sm {
    border-width: 0.2em;
    height: 1rem;
    width: 1rem;
}

@-webkit-keyframes spinner-grow {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    50% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

@keyframes spinner-grow {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    50% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

.spinner-grow {
    -webkit-animation: spinner-grow 0.75s linear infinite;
    animation: spinner-grow 0.75s linear infinite;
    background-color: currentColor;
    border-radius: 50%;
    display: inline-block;
    height: 2rem;
    opacity: 0;
    vertical-align: -0.125em;
    width: 2rem;
}

.spinner-grow-sm {
    height: 1rem;
    width: 1rem;
}

@media (prefers-reduced-motion: reduce) {
    .spinner-border,
    .spinner-grow {
        -webkit-animation-duration: 1.5s;
        animation-duration: 1.5s;
    }
}

.offcanvas {
    background-clip: padding-box;
    background-color: #fff;
    bottom: 0;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    outline: 0;
    position: fixed;
    transition: -webkit-transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    visibility: hidden;
    z-index: 1045;
}

@media (prefers-reduced-motion: reduce) {
    .offcanvas {
        transition: none;
    }
}

.offcanvas-backdrop {
    background-color: #000;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1040;
}

.offcanvas-backdrop.fade {
    opacity: 0;
}

.offcanvas-backdrop.show {
    opacity: 0.5;
}

.offcanvas-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

.offcanvas-header .btn-close {
    margin-bottom: -0.5rem;
    margin-right: -0.5rem;
    margin-top: -0.5rem;
    padding: 0.5rem;
}

.offcanvas-title {
    line-height: 1.5;
    margin-bottom: 0;
}

.offcanvas-body {
    flex-grow: 1;
    overflow-y: auto;
    padding: 1rem;
}

.offcanvas-start {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    left: 0;
    top: 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    width: 400px;
}

.offcanvas-end {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    right: 0;
    top: 0;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    width: 400px;
}

.offcanvas-top {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    top: 0;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
}

.offcanvas-bottom,
.offcanvas-top {
    height: 30vh;
    left: 0;
    max-height: 100%;
    right: 0;
}

.offcanvas-bottom {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
}

.offcanvas.show {
    -webkit-transform: none;
    transform: none;
}

.placeholder {
    background-color: currentColor;
    cursor: wait;
    display: inline-block;
    min-height: 1em;
    opacity: 0.5;
    vertical-align: middle;
}

.placeholder.btn:before {
    content: "";
    display: inline-block;
}

.placeholder-xs {
    min-height: 0.6em;
}

.placeholder-sm {
    min-height: 0.8em;
}

.placeholder-lg {
    min-height: 1.2em;
}

.placeholder-glow .placeholder {
    -webkit-animation: placeholder-glow 2s ease-in-out infinite;
    animation: placeholder-glow 2s ease-in-out infinite;
}

@-webkit-keyframes placeholder-glow {
    50% {
        opacity: 0.2;
    }
}

@keyframes placeholder-glow {
    50% {
        opacity: 0.2;
    }
}

.placeholder-wave {
    -webkit-animation: placeholder-wave 2s linear infinite;
    animation: placeholder-wave 2s linear infinite;
    -webkit-mask-image: linear-gradient( 130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
    mask-image: linear-gradient( 130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
    -webkit-mask-size: 200% 100%;
    mask-size: 200% 100%;
}

@-webkit-keyframes placeholder-wave {
    to {
        -webkit-mask-position: -200% 0;
        mask-position: -200% 0;
    }
}

@keyframes placeholder-wave {
    to {
        -webkit-mask-position: -200% 0;
        mask-position: -200% 0;
    }
}

.clearfix:after {
    clear: both;
    content: "";
    display: block;
}

.link-primary {
    color: #0d6efd;
}

.link-primary:focus,
.link-primary:hover {
    color: #0a58ca;
}

.link-secondary {
    color: #6c757d;
}

.link-secondary:focus,
.link-secondary:hover {
    color: #565e64;
}

.link-success {
    color: #198754;
}

.link-success:focus,
.link-success:hover {
    color: #146c43;
}

.link-info {
    color: #0dcaf0;
}

.link-info:focus,
.link-info:hover {
    color: #3dd5f3;
}

.link-warning {
    color: #ffc107;
}

.link-warning:focus,
.link-warning:hover {
    color: #ffcd39;
}

.link-danger {
    color: #dc3545;
}

.link-danger:focus,
.link-danger:hover {
    color: #b02a37;
}

.link-light {
    color: #f8f9fa;
}

.link-light:focus,
.link-light:hover {
    color: #f9fafb;
}

.link-dark {
    color: #212529;
}

.link-dark:focus,
.link-dark:hover {
    color: #1a1e21;
}

.ratio {
    position: relative;
    width: 100%;
}

.ratio:before {
    content: "";
    display: block;
    padding-top: var(--bs-aspect-ratio);
}

.ratio>* {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.ratio-1x1 {
    --bs-aspect-ratio: 100%;
}

.ratio-4x3 {
    --bs-aspect-ratio: 75%;
}

.ratio-16x9 {
    --bs-aspect-ratio: 56.25%;
}

.ratio-21x9 {
    --bs-aspect-ratio: 42.8571428571%;
}

.fixed-top {
    top: 0;
}

.fixed-bottom,
.fixed-top {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1030;
}

.fixed-bottom {
    bottom: 0;
}

.sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
}

@media (min-width: 576px) {
    .sticky-sm-top {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1020;
    }
}

@media (min-width: 768px) {
    .sticky-md-top {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1020;
    }
}

@media (min-width: 992px) {
    .sticky-lg-top {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1020;
    }
}

@media (min-width: 1200px) {
    .sticky-xl-top {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1020;
    }
}

@media (min-width: 1400px) {
    .sticky-xxl-top {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1020;
    }
}

.hstack {
    align-items: center;
    flex-direction: row;
}

.hstack,
.vstack {
    align-self: stretch;
    display: flex;
}

.vstack {
    flex: 1 1 auto;
    flex-direction: column;
}

.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
    clip: rect(0, 0, 0, 0) !important;
    border: 0 !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 1px !important;
}

.stretched-link:after {
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
}

.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.vr {
    align-self: stretch;
    background-color: currentColor;
    display: inline-block;
    min-height: 1em;
    opacity: 0.25;
    width: 1px;
}

.align-baseline {
    vertical-align: baseline !important;
}

.align-top {
    vertical-align: top !important;
}

.align-middle {
    vertical-align: middle !important;
}

.align-bottom {
    vertical-align: bottom !important;
}

.align-text-bottom {
    vertical-align: text-bottom !important;
}

.align-text-top {
    vertical-align: text-top !important;
}

.float-start {
    float: left !important;
}

.float-end {
    float: right !important;
}

.float-none {
    float: none !important;
}

.opacity-0 {
    opacity: 0 !important;
}

.opacity-25 {
    opacity: 0.25 !important;
}

.opacity-50 {
    opacity: 0.5 !important;
}

.opacity-75 {
    opacity: 0.75 !important;
}

.opacity-100 {
    opacity: 1 !important;
}

.overflow-auto {
    overflow: auto !important;
}

.overflow-hidden {
    overflow: hidden !important;
}

.overflow-visible {
    overflow: visible !important;
}

.overflow-scroll {
    overflow: scroll !important;
}

.d-inline {
    display: inline !important;
}

.d-inline-block {
    display: inline-block !important;
}

.d-block {
    display: block !important;
}

.d-grid {
    display: grid !important;
}

.d-table {
    display: table !important;
}

.d-table-row {
    display: table-row !important;
}

.d-table-cell {
    display: table-cell !important;
}

.d-flex {
    display: flex !important;
}

.d-inline-flex {
    display: inline-flex !important;
}

.d-none {
    display: none !important;
}

.shadow {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-sm {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
    box-shadow: none !important;
}

.position-static {
    position: static !important;
}

.position-relative {
    position: relative !important;
}

.position-absolute {
    position: absolute !important;
}

.position-fixed {
    position: fixed !important;
}

.position-sticky {
    position: -webkit-sticky !important;
    position: sticky !important;
}

.top-0 {
    top: 0 !important;
}

.top-50 {
    top: 50% !important;
}

.top-100 {
    top: 100% !important;
}

.bottom-0 {
    bottom: 0 !important;
}

.bottom-50 {
    bottom: 50% !important;
}

.bottom-100 {
    bottom: 100% !important;
}

.start-0 {
    left: 0 !important;
}

.start-50 {
    left: 50% !important;
}

.start-100 {
    left: 100% !important;
}

.end-0 {
    right: 0 !important;
}

.end-50 {
    right: 50% !important;
}

.end-100 {
    right: 100% !important;
}

.translate-middle {
    -webkit-transform: translate(-50%, -50%) !important;
    transform: translate(-50%, -50%) !important;
}

.translate-middle-x {
    -webkit-transform: translateX(-50%) !important;
    transform: translateX(-50%) !important;
}

.translate-middle-y {
    -webkit-transform: translateY(-50%) !important;
    transform: translateY(-50%) !important;
}

.border {
    border: 1px solid #dee2e6 !important;
}

.border-0 {
    border: 0 !important;
}

.border-top {
    border-top: 1px solid #dee2e6 !important;
}

.border-top-0 {
    border-top: 0 !important;
}

.border-end {
    border-right: 1px solid #dee2e6 !important;
}

.border-end-0 {
    border-right: 0 !important;
}

.border-bottom {
    border-bottom: 1px solid #dee2e6 !important;
}

.border-bottom-0 {
    border-bottom: 0 !important;
}

.border-start {
    border-left: 1px solid #dee2e6 !important;
}

.border-start-0 {
    border-left: 0 !important;
}

.border-primary {
    border-color: #0d6efd !important;
}

.border-secondary {
    border-color: #6c757d !important;
}

.border-success {
    border-color: #198754 !important;
}

.border-info {
    border-color: #0dcaf0 !important;
}

.border-warning {
    border-color: #ffc107 !important;
}

.border-danger {
    border-color: #dc3545 !important;
}

.border-light {
    border-color: #f8f9fa !important;
}

.border-dark {
    border-color: #212529 !important;
}

.border-white {
    border-color: #fff !important;
}

.border-1 {
    border-width: 1px !important;
}

.border-2 {
    border-width: 2px !important;
}

.border-3 {
    border-width: 3px !important;
}

.border-4 {
    border-width: 4px !important;
}

.border-5 {
    border-width: 5px !important;
}

.w-25 {
    width: 25% !important;
}

.w-50 {
    width: 50% !important;
}

.w-75 {
    width: 75% !important;
}

.w-100 {
    width: 100% !important;
}

.w-auto {
    width: auto !important;
}

.mw-100 {
    max-width: 100% !important;
}

.vw-100 {
    width: 100vw !important;
}

.min-vw-100 {
    min-width: 100vw !important;
}

.h-25 {
    height: 25% !important;
}

.h-50 {
    height: 50% !important;
}

.h-75 {
    height: 75% !important;
}

.h-100 {
    height: 100% !important;
}

.h-auto {
    height: auto !important;
}

.mh-100 {
    max-height: 100% !important;
}

.vh-100 {
    height: 100vh !important;
}

.min-vh-100 {
    min-height: 100vh !important;
}

.flex-fill {
    flex: 1 1 auto !important;
}

.flex-row {
    flex-direction: row !important;
}

.flex-column {
    flex-direction: column !important;
}

.flex-row-reverse {
    flex-direction: row-reverse !important;
}

.flex-column-reverse {
    flex-direction: column-reverse !important;
}

.flex-grow-0 {
    flex-grow: 0 !important;
}

.flex-grow-1 {
    flex-grow: 1 !important;
}

.flex-shrink-0 {
    flex-shrink: 0 !important;
}

.flex-shrink-1 {
    flex-shrink: 1 !important;
}

.flex-wrap {
    flex-wrap: wrap !important;
}

.flex-nowrap {
    flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
    flex-wrap: wrap-reverse !important;
}

.gap-0 {
    gap: 0 !important;
}

.gap-1 {
    gap: 0.25rem !important;
}

.gap-2 {
    gap: 0.5rem !important;
}

.gap-3 {
    gap: 1rem !important;
}

.gap-4 {
    gap: 1.5rem !important;
}

.gap-5 {
    gap: 3rem !important;
}

.justify-content-start {
    justify-content: flex-start !important;
}

.justify-content-end {
    justify-content: flex-end !important;
}

.justify-content-center {
    justify-content: center !important;
}

.justify-content-between {
    justify-content: space-between !important;
}

.justify-content-around {
    justify-content: space-around !important;
}

.justify-content-evenly {
    justify-content: space-evenly !important;
}

.align-items-start {
    align-items: flex-start !important;
}

.align-items-end {
    align-items: flex-end !important;
}

.align-items-center {
    align-items: center !important;
}

.align-items-baseline {
    align-items: baseline !important;
}

.align-items-stretch {
    align-items: stretch !important;
}

.align-content-start {
    align-content: flex-start !important;
}

.align-content-end {
    align-content: flex-end !important;
}

.align-content-center {
    align-content: center !important;
}

.align-content-between {
    align-content: space-between !important;
}

.align-content-around {
    align-content: space-around !important;
}

.align-content-stretch {
    align-content: stretch !important;
}

.align-self-auto {
    align-self: auto !important;
}

.align-self-start {
    align-self: flex-start !important;
}

.align-self-end {
    align-self: flex-end !important;
}

.align-self-center {
    align-self: center !important;
}

.align-self-baseline {
    align-self: baseline !important;
}

.align-self-stretch {
    align-self: stretch !important;
}

.order-first {
    order: -1 !important;
}

.order-0 {
    order: 0 !important;
}

.order-1 {
    order: 1 !important;
}

.order-2 {
    order: 2 !important;
}

.order-3 {
    order: 3 !important;
}

.order-4 {
    order: 4 !important;
}

.order-5 {
    order: 5 !important;
}

.order-last {
    order: 6 !important;
}

.m-0 {
    margin: 0 !important;
}

.m-1 {
    margin: 0.25rem !important;
}

.m-2 {
    margin: 0.5rem !important;
}

.m-3 {
    margin: 1rem !important;
}

.m-4 {
    margin: 1.5rem !important;
}

.m-5 {
    margin: 3rem !important;
}

.m-auto {
    margin: auto !important;
}

.mx-0 {
    margin-left: 0 !important;
    margin-right: 0 !important;
}

.mx-1 {
    margin-left: 0.25rem !important;
    margin-right: 0.25rem !important;
}

.mx-2 {
    margin-left: 0.5rem !important;
    margin-right: 0.5rem !important;
}

.mx-3 {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
}

.mx-4 {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important;
}

.mx-5 {
    margin-left: 3rem !important;
    margin-right: 3rem !important;
}

.mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
}

.my-0 {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
}

.my-1 {
    margin-bottom: 0.25rem !important;
    margin-top: 0.25rem !important;
}

.my-2 {
    margin-bottom: 0.5rem !important;
    margin-top: 0.5rem !important;
}

.my-3 {
    margin-bottom: 1rem !important;
    margin-top: 1rem !important;
}

.my-4 {
    margin-bottom: 1.5rem !important;
    margin-top: 1.5rem !important;
}

.my-5 {
    margin-bottom: 3rem !important;
    margin-top: 3rem !important;
}

.my-auto {
    margin-bottom: auto !important;
    margin-top: auto !important;
}

.mt-0 {
    margin-top: 0 !important;
}

.mt-1 {
    margin-top: 0.25rem !important;
}

.mt-2 {
    margin-top: 0.5rem !important;
}

.mt-3 {
    margin-top: 1rem !important;
}

.mt-4 {
    margin-top: 1.5rem !important;
}

.mt-5 {
    margin-top: 3rem !important;
}

.mt-auto {
    margin-top: auto !important;
}

.me-0 {
    margin-right: 0 !important;
}

.me-1 {
    margin-right: 0.25rem !important;
}

.me-2 {
    margin-right: 0.5rem !important;
}

.me-3 {
    margin-right: 1rem !important;
}

.me-4 {
    margin-right: 1.5rem !important;
}

.me-5 {
    margin-right: 3rem !important;
}

.me-auto {
    margin-right: auto !important;
}

.mb-0 {
    margin-bottom: 0 !important;
}

.mb-1 {
    margin-bottom: 0.25rem !important;
}

.mb-2 {
    margin-bottom: 0.5rem !important;
}

.mb-3 {
    margin-bottom: 1rem !important;
}

.mb-4 {
    margin-bottom: 1.5rem !important;
}

.mb-5 {
    margin-bottom: 3rem !important;
}

.mb-auto {
    margin-bottom: auto !important;
}

.ms-0 {
    margin-left: 0 !important;
}

.ms-1 {
    margin-left: 0.25rem !important;
}

.ms-2 {
    margin-left: 0.5rem !important;
}

.ms-3 {
    margin-left: 1rem !important;
}

.ms-4 {
    margin-left: 1.5rem !important;
}

.ms-5 {
    margin-left: 3rem !important;
}

.ms-auto {
    margin-left: auto !important;
}

.p-0 {
    padding: 0 !important;
}

.p-1 {
    padding: 0.25rem !important;
}

.p-2 {
    padding: 0.5rem !important;
}

.p-3 {
    padding: 1rem !important;
}

.p-4 {
    padding: 1.5rem !important;
}

.p-5 {
    padding: 3rem !important;
}

.px-0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
}

.px-1 {
    padding-left: 0.25rem !important;
    padding-right: 0.25rem !important;
}

.px-2 {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
}

.px-3 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
}

.px-4 {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
}

.px-5 {
    padding-left: 3rem !important;
    padding-right: 3rem !important;
}

.py-0 {
    padding-bottom: 0 !important;
    padding-top: 0 !important;
}

.py-1 {
    padding-bottom: 0.25rem !important;
    padding-top: 0.25rem !important;
}

.py-2 {
    padding-bottom: 0.5rem !important;
    padding-top: 0.5rem !important;
}

.py-3 {
    padding-bottom: 1rem !important;
    padding-top: 1rem !important;
}

.py-4 {
    padding-bottom: 1.5rem !important;
    padding-top: 1.5rem !important;
}

.py-5 {
    padding-bottom: 3rem !important;
    padding-top: 3rem !important;
}

.pt-0 {
    padding-top: 0 !important;
}

.pt-1 {
    padding-top: 0.25rem !important;
}

.pt-2 {
    padding-top: 0.5rem !important;
}

.pt-3 {
    padding-top: 1rem !important;
}

.pt-4 {
    padding-top: 1.5rem !important;
}

.pt-5 {
    padding-top: 3rem !important;
}

.pe-0 {
    padding-right: 0 !important;
}

.pe-1 {
    padding-right: 0.25rem !important;
}

.pe-2 {
    padding-right: 0.5rem !important;
}

.pe-3 {
    padding-right: 1rem !important;
}

.pe-4 {
    padding-right: 1.5rem !important;
}

.pe-5 {
    padding-right: 3rem !important;
}

.pb-0 {
    padding-bottom: 0 !important;
}

.pb-1 {
    padding-bottom: 0.25rem !important;
}

.pb-2 {
    padding-bottom: 0.5rem !important;
}

.pb-3 {
    padding-bottom: 1rem !important;
}

.pb-4 {
    padding-bottom: 1.5rem !important;
}

.pb-5 {
    padding-bottom: 3rem !important;
}

.ps-0 {
    padding-left: 0 !important;
}

.ps-1 {
    padding-left: 0.25rem !important;
}

.ps-2 {
    padding-left: 0.5rem !important;
}

.ps-3 {
    padding-left: 1rem !important;
}

.ps-4 {
    padding-left: 1.5rem !important;
}

.ps-5 {
    padding-left: 3rem !important;
}

.font-monospace {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace !important;
    font-family: var(--bs-font-monospace) !important;
}

.fs-1 {
    font-size: calc(1.375rem + 1.5vw) !important;
}

.fs-2 {
    font-size: calc(1.325rem + 0.9vw) !important;
}

.fs-3 {
    font-size: calc(1.3rem + 0.6vw) !important;
}

.fs-4 {
    font-size: calc(1.275rem + 0.3vw) !important;
}

.fs-5 {
    font-size: 1.25rem !important;
}

.fs-6 {
    font-size: 1rem !important;
}

.fst-italic {
    font-style: italic !important;
}

.fst-normal {
    font-style: normal !important;
}

.fw-light {
    font-weight: 300 !important;
}

.fw-lighter {
    font-weight: lighter !important;
}

.fw-normal {
    font-weight: 400 !important;
}

.fw-bold {
    font-weight: 700 !important;
}

.fw-bolder {
    font-weight: bolder !important;
}

.lh-1 {
    line-height: 1 !important;
}

.lh-sm {
    line-height: 1.25 !important;
}

.lh-base {
    line-height: 1.5 !important;
}

.lh-lg {
    line-height: 2 !important;
}

.text-start {
    text-align: left !important;
}

.text-end {
    text-align: right !important;
}

.text-center {
    text-align: center !important;
}

.text-decoration-none {
    text-decoration: none !important;
}

.text-decoration-underline {
    text-decoration: underline !important;
}

.text-decoration-line-through {
    text-decoration: line-through !important;
}

.text-lowercase {
    text-transform: lowercase !important;
}

.text-uppercase {
    text-transform: uppercase !important;
}

.text-capitalize {
    text-transform: capitalize !important;
}

.text-wrap {
    white-space: normal !important;
}

.text-nowrap {
    white-space: nowrap !important;
}

.text-break {
    word-wrap: break-word !important;
    word-break: break-word !important;
}

.text-primary {
    --bs-text-opacity: 1;
    color: rgba(13, 110, 253, var(--bs-text-opacity)) !important;
    color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}

.text-secondary {
    --bs-text-opacity: 1;
    color: rgba(108, 117, 125, var(--bs-text-opacity)) !important;
    color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
}

.text-success {
    --bs-text-opacity: 1;
    color: rgba(25, 135, 84, var(--bs-text-opacity)) !important;
    color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
}

.text-info {
    --bs-text-opacity: 1;
    color: rgba(13, 202, 240, var(--bs-text-opacity)) !important;
    color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
}

.text-warning {
    --bs-text-opacity: 1;
    color: rgba(255, 193, 7, var(--bs-text-opacity)) !important;
    color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
}

.text-danger {
    --bs-text-opacity: 1;
    color: rgba(220, 53, 69, var(--bs-text-opacity)) !important;
    color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}

.text-light {
    --bs-text-opacity: 1;
    color: rgba(248, 249, 250, var(--bs-text-opacity)) !important;
    color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
}

.text-dark {
    --bs-text-opacity: 1;
    color: rgba(33, 37, 41, var(--bs-text-opacity)) !important;
    color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
}

.text-black {
    --bs-text-opacity: 1;
    color: rgba(0, 0, 0, var(--bs-text-opacity)) !important;
    color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
}

.text-white {
    --bs-text-opacity: 1;
    color: rgba(255, 255, 255, var(--bs-text-opacity)) !important;
    color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
}

.text-body {
    --bs-text-opacity: 1;
    color: rgba(33, 37, 41, var(--bs-text-opacity)) !important;
    color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
}

.text-muted {
    --bs-text-opacity: 1;
    color: #6c757d !important;
}

.text-black-50 {
    --bs-text-opacity: 1;
    color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
    --bs-text-opacity: 1;
    color: hsla(0, 0%, 100%, 0.5) !important;
}

.text-reset {
    --bs-text-opacity: 1;
    color: inherit !important;
}

.text-opacity-25 {
    --bs-text-opacity: 0.25;
}

.text-opacity-50 {
    --bs-text-opacity: 0.5;
}

.text-opacity-75 {
    --bs-text-opacity: 0.75;
}

.text-opacity-100 {
    --bs-text-opacity: 1;
}

.bg-primary {
    --bs-bg-opacity: 1;
    background-color: rgba(13, 110, 253, var(--bs-bg-opacity)) !important;
    background-color: rgba( var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-secondary {
    --bs-bg-opacity: 1;
    background-color: rgba(108, 117, 125, var(--bs-bg-opacity)) !important;
    background-color: rgba( var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-success {
    --bs-bg-opacity: 1;
    background-color: rgba(25, 135, 84, var(--bs-bg-opacity)) !important;
    background-color: rgba( var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}

.bg-info {
    --bs-bg-opacity: 1;
    background-color: rgba(13, 202, 240, var(--bs-bg-opacity)) !important;
    background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
}

.bg-warning {
    --bs-bg-opacity: 1;
    background-color: rgba(255, 193, 7, var(--bs-bg-opacity)) !important;
    background-color: rgba( var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;
}

.bg-danger {
    --bs-bg-opacity: 1;
    background-color: rgba(220, 53, 69, var(--bs-bg-opacity)) !important;
    background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
}

.bg-light {
    --bs-bg-opacity: 1;
    background-color: rgba(248, 249, 250, var(--bs-bg-opacity)) !important;
    background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

.bg-dark {
    --bs-bg-opacity: 1;
    background-color: rgba(33, 37, 41, var(--bs-bg-opacity)) !important;
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}

.bg-black {
    --bs-bg-opacity: 1;
    background-color: rgba(0, 0, 0, var(--bs-bg-opacity)) !important;
    background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;
}

.bg-white {
    --bs-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--bs-bg-opacity)) !important;
    background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
}

.bg-body {
    --bs-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--bs-bg-opacity)) !important;
    background-color: rgba( var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;
}

.bg-transparent {
    --bs-bg-opacity: 1;
    background-color: transparent !important;
}

.bg-opacity-10 {
    --bs-bg-opacity: 0.1;
}

.bg-opacity-25 {
    --bs-bg-opacity: 0.25;
}

.bg-opacity-50 {
    --bs-bg-opacity: 0.5;
}

.bg-opacity-75 {
    --bs-bg-opacity: 0.75;
}

.bg-opacity-100 {
    --bs-bg-opacity: 1;
}

.bg-gradient {
    background-image: linear-gradient( 180deg, hsla(0, 0%, 100%, 0.15), hsla(0, 0%, 100%, 0)) !important;
    background-image: var(--bs-gradient) !important;
}

.user-select-all {
    -webkit-user-select: all !important;
    user-select: all !important;
}

.user-select-auto {
    -webkit-user-select: auto !important;
    -ms-user-select: auto !important;
    user-select: auto !important;
}

.user-select-none {
    -webkit-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
}

.pe-none {
    pointer-events: none !important;
}

.pe-auto {
    pointer-events: auto !important;
}

.rounded {
    border-radius: 0.25rem !important;
}

.rounded-0 {
    border-radius: 0 !important;
}

.rounded-1 {
    border-radius: 0.2rem !important;
}

.rounded-2 {
    border-radius: 0.25rem !important;
}

.rounded-3 {
    border-radius: 0.3rem !important;
}

.rounded-circle {
    border-radius: 50% !important;
}

.rounded-pill {
    border-radius: 50rem !important;
}

.rounded-top {
    border-top-left-radius: 0.25rem !important;
}

.rounded-end,
.rounded-top {
    border-top-right-radius: 0.25rem !important;
}

.rounded-bottom,
.rounded-end {
    border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom,
.rounded-start {
    border-bottom-left-radius: 0.25rem !important;
}

.rounded-start {
    border-top-left-radius: 0.25rem !important;
}

.visible {
    visibility: visible !important;
}

.invisible {
    visibility: hidden !important;
}

@media (min-width: 576px) {
    .float-sm-start {
        float: left !important;
    }
    .float-sm-end {
        float: right !important;
    }
    .float-sm-none {
        float: none !important;
    }
    .d-sm-inline {
        display: inline !important;
    }
    .d-sm-inline-block {
        display: inline-block !important;
    }
    .d-sm-block {
        display: block !important;
    }
    .d-sm-grid {
        display: grid !important;
    }
    .d-sm-table {
        display: table !important;
    }
    .d-sm-table-row {
        display: table-row !important;
    }
    .d-sm-table-cell {
        display: table-cell !important;
    }
    .d-sm-flex {
        display: flex !important;
    }
    .d-sm-inline-flex {
        display: inline-flex !important;
    }
    .d-sm-none {
        display: none !important;
    }
    .flex-sm-fill {
        flex: 1 1 auto !important;
    }
    .flex-sm-row {
        flex-direction: row !important;
    }
    .flex-sm-column {
        flex-direction: column !important;
    }
    .flex-sm-row-reverse {
        flex-direction: row-reverse !important;
    }
    .flex-sm-column-reverse {
        flex-direction: column-reverse !important;
    }
    .flex-sm-grow-0 {
        flex-grow: 0 !important;
    }
    .flex-sm-grow-1 {
        flex-grow: 1 !important;
    }
    .flex-sm-shrink-0 {
        flex-shrink: 0 !important;
    }
    .flex-sm-shrink-1 {
        flex-shrink: 1 !important;
    }
    .flex-sm-wrap {
        flex-wrap: wrap !important;
    }
    .flex-sm-nowrap {
        flex-wrap: nowrap !important;
    }
    .flex-sm-wrap-reverse {
        flex-wrap: wrap-reverse !important;
    }
    .gap-sm-0 {
        gap: 0 !important;
    }
    .gap-sm-1 {
        gap: 0.25rem !important;
    }
    .gap-sm-2 {
        gap: 0.5rem !important;
    }
    .gap-sm-3 {
        gap: 1rem !important;
    }
    .gap-sm-4 {
        gap: 1.5rem !important;
    }
    .gap-sm-5 {
        gap: 3rem !important;
    }
    .justify-content-sm-start {
        justify-content: flex-start !important;
    }
    .justify-content-sm-end {
        justify-content: flex-end !important;
    }
    .justify-content-sm-center {
        justify-content: center !important;
    }
    .justify-content-sm-between {
        justify-content: space-between !important;
    }
    .justify-content-sm-around {
        justify-content: space-around !important;
    }
    .justify-content-sm-evenly {
        justify-content: space-evenly !important;
    }
    .align-items-sm-start {
        align-items: flex-start !important;
    }
    .align-items-sm-end {
        align-items: flex-end !important;
    }
    .align-items-sm-center {
        align-items: center !important;
    }
    .align-items-sm-baseline {
        align-items: baseline !important;
    }
    .align-items-sm-stretch {
        align-items: stretch !important;
    }
    .align-content-sm-start {
        align-content: flex-start !important;
    }
    .align-content-sm-end {
        align-content: flex-end !important;
    }
    .align-content-sm-center {
        align-content: center !important;
    }
    .align-content-sm-between {
        align-content: space-between !important;
    }
    .align-content-sm-around {
        align-content: space-around !important;
    }
    .align-content-sm-stretch {
        align-content: stretch !important;
    }
    .align-self-sm-auto {
        align-self: auto !important;
    }
    .align-self-sm-start {
        align-self: flex-start !important;
    }
    .align-self-sm-end {
        align-self: flex-end !important;
    }
    .align-self-sm-center {
        align-self: center !important;
    }
    .align-self-sm-baseline {
        align-self: baseline !important;
    }
    .align-self-sm-stretch {
        align-self: stretch !important;
    }
    .order-sm-first {
        order: -1 !important;
    }
    .order-sm-0 {
        order: 0 !important;
    }
    .order-sm-1 {
        order: 1 !important;
    }
    .order-sm-2 {
        order: 2 !important;
    }
    .order-sm-3 {
        order: 3 !important;
    }
    .order-sm-4 {
        order: 4 !important;
    }
    .order-sm-5 {
        order: 5 !important;
    }
    .order-sm-last {
        order: 6 !important;
    }
    .m-sm-0 {
        margin: 0 !important;
    }
    .m-sm-1 {
        margin: 0.25rem !important;
    }
    .m-sm-2 {
        margin: 0.5rem !important;
    }
    .m-sm-3 {
        margin: 1rem !important;
    }
    .m-sm-4 {
        margin: 1.5rem !important;
    }
    .m-sm-5 {
        margin: 3rem !important;
    }
    .m-sm-auto {
        margin: auto !important;
    }
    .mx-sm-0 {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .mx-sm-1 {
        margin-left: 0.25rem !important;
        margin-right: 0.25rem !important;
    }
    .mx-sm-2 {
        margin-left: 0.5rem !important;
        margin-right: 0.5rem !important;
    }
    .mx-sm-3 {
        margin-left: 1rem !important;
        margin-right: 1rem !important;
    }
    .mx-sm-4 {
        margin-left: 1.5rem !important;
        margin-right: 1.5rem !important;
    }
    .mx-sm-5 {
        margin-left: 3rem !important;
        margin-right: 3rem !important;
    }
    .mx-sm-auto {
        margin-left: auto !important;
        margin-right: auto !important;
    }
    .my-sm-0 {
        margin-bottom: 0 !important;
        margin-top: 0 !important;
    }
    .my-sm-1 {
        margin-bottom: 0.25rem !important;
        margin-top: 0.25rem !important;
    }
    .my-sm-2 {
        margin-bottom: 0.5rem !important;
        margin-top: 0.5rem !important;
    }
    .my-sm-3 {
        margin-bottom: 1rem !important;
        margin-top: 1rem !important;
    }
    .my-sm-4 {
        margin-bottom: 1.5rem !important;
        margin-top: 1.5rem !important;
    }
    .my-sm-5 {
        margin-bottom: 3rem !important;
        margin-top: 3rem !important;
    }
    .my-sm-auto {
        margin-bottom: auto !important;
        margin-top: auto !important;
    }
    .mt-sm-0 {
        margin-top: 0 !important;
    }
    .mt-sm-1 {
        margin-top: 0.25rem !important;
    }
    .mt-sm-2 {
        margin-top: 0.5rem !important;
    }
    .mt-sm-3 {
        margin-top: 1rem !important;
    }
    .mt-sm-4 {
        margin-top: 1.5rem !important;
    }
    .mt-sm-5 {
        margin-top: 3rem !important;
    }
    .mt-sm-auto {
        margin-top: auto !important;
    }
    .me-sm-0 {
        margin-right: 0 !important;
    }
    .me-sm-1 {
        margin-right: 0.25rem !important;
    }
    .me-sm-2 {
        margin-right: 0.5rem !important;
    }
    .me-sm-3 {
        margin-right: 1rem !important;
    }
    .me-sm-4 {
        margin-right: 1.5rem !important;
    }
    .me-sm-5 {
        margin-right: 3rem !important;
    }
    .me-sm-auto {
        margin-right: auto !important;
    }
    .mb-sm-0 {
        margin-bottom: 0 !important;
    }
    .mb-sm-1 {
        margin-bottom: 0.25rem !important;
    }
    .mb-sm-2 {
        margin-bottom: 0.5rem !important;
    }
    .mb-sm-3 {
        margin-bottom: 1rem !important;
    }
    .mb-sm-4 {
        margin-bottom: 1.5rem !important;
    }
    .mb-sm-5 {
        margin-bottom: 3rem !important;
    }
    .mb-sm-auto {
        margin-bottom: auto !important;
    }
    .ms-sm-0 {
        margin-left: 0 !important;
    }
    .ms-sm-1 {
        margin-left: 0.25rem !important;
    }
    .ms-sm-2 {
        margin-left: 0.5rem !important;
    }
    .ms-sm-3 {
        margin-left: 1rem !important;
    }
    .ms-sm-4 {
        margin-left: 1.5rem !important;
    }
    .ms-sm-5 {
        margin-left: 3rem !important;
    }
    .ms-sm-auto {
        margin-left: auto !important;
    }
    .p-sm-0 {
        padding: 0 !important;
    }
    .p-sm-1 {
        padding: 0.25rem !important;
    }
    .p-sm-2 {
        padding: 0.5rem !important;
    }
    .p-sm-3 {
        padding: 1rem !important;
    }
    .p-sm-4 {
        padding: 1.5rem !important;
    }
    .p-sm-5 {
        padding: 3rem !important;
    }
    .px-sm-0 {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    .px-sm-1 {
        padding-left: 0.25rem !important;
        padding-right: 0.25rem !important;
    }
    .px-sm-2 {
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
    }
    .px-sm-3 {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
    }
    .px-sm-4 {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
    }
    .px-sm-5 {
        padding-left: 3rem !important;
        padding-right: 3rem !important;
    }
    .py-sm-0 {
        padding-bottom: 0 !important;
        padding-top: 0 !important;
    }
    .py-sm-1 {
        padding-bottom: 0.25rem !important;
        padding-top: 0.25rem !important;
    }
    .py-sm-2 {
        padding-bottom: 0.5rem !important;
        padding-top: 0.5rem !important;
    }
    .py-sm-3 {
        padding-bottom: 1rem !important;
        padding-top: 1rem !important;
    }
    .py-sm-4 {
        padding-bottom: 1.5rem !important;
        padding-top: 1.5rem !important;
    }
    .py-sm-5 {
        padding-bottom: 3rem !important;
        padding-top: 3rem !important;
    }
    .pt-sm-0 {
        padding-top: 0 !important;
    }
    .pt-sm-1 {
        padding-top: 0.25rem !important;
    }
    .pt-sm-2 {
        padding-top: 0.5rem !important;
    }
    .pt-sm-3 {
        padding-top: 1rem !important;
    }
    .pt-sm-4 {
        padding-top: 1.5rem !important;
    }
    .pt-sm-5 {
        padding-top: 3rem !important;
    }
    .pe-sm-0 {
        padding-right: 0 !important;
    }
    .pe-sm-1 {
        padding-right: 0.25rem !important;
    }
    .pe-sm-2 {
        padding-right: 0.5rem !important;
    }
    .pe-sm-3 {
        padding-right: 1rem !important;
    }
    .pe-sm-4 {
        padding-right: 1.5rem !important;
    }
    .pe-sm-5 {
        padding-right: 3rem !important;
    }
    .pb-sm-0 {
        padding-bottom: 0 !important;
    }
    .pb-sm-1 {
        padding-bottom: 0.25rem !important;
    }
    .pb-sm-2 {
        padding-bottom: 0.5rem !important;
    }
    .pb-sm-3 {
        padding-bottom: 1rem !important;
    }
    .pb-sm-4 {
        padding-bottom: 1.5rem !important;
    }
    .pb-sm-5 {
        padding-bottom: 3rem !important;
    }
    .ps-sm-0 {
        padding-left: 0 !important;
    }
    .ps-sm-1 {
        padding-left: 0.25rem !important;
    }
    .ps-sm-2 {
        padding-left: 0.5rem !important;
    }
    .ps-sm-3 {
        padding-left: 1rem !important;
    }
    .ps-sm-4 {
        padding-left: 1.5rem !important;
    }
    .ps-sm-5 {
        padding-left: 3rem !important;
    }
    .text-sm-start {
        text-align: left !important;
    }
    .text-sm-end {
        text-align: right !important;
    }
    .text-sm-center {
        text-align: center !important;
    }
}

@media (min-width: 768px) {
    .float-md-start {
        float: left !important;
    }
    .float-md-end {
        float: right !important;
    }
    .float-md-none {
        float: none !important;
    }
    .d-md-inline {
        display: inline !important;
    }
    .d-md-inline-block {
        display: inline-block !important;
    }
    .d-md-block {
        display: block !important;
    }
    .d-md-grid {
        display: grid !important;
    }
    .d-md-table {
        display: table !important;
    }
    .d-md-table-row {
        display: table-row !important;
    }
    .d-md-table-cell {
        display: table-cell !important;
    }
    .d-md-flex {
        display: flex !important;
    }
    .d-md-inline-flex {
        display: inline-flex !important;
    }
    .d-md-none {
        display: none !important;
    }
    .flex-md-fill {
        flex: 1 1 auto !important;
    }
    .flex-md-row {
        flex-direction: row !important;
    }
    .flex-md-column {
        flex-direction: column !important;
    }
    .flex-md-row-reverse {
        flex-direction: row-reverse !important;
    }
    .flex-md-column-reverse {
        flex-direction: column-reverse !important;
    }
    .flex-md-grow-0 {
        flex-grow: 0 !important;
    }
    .flex-md-grow-1 {
        flex-grow: 1 !important;
    }
    .flex-md-shrink-0 {
        flex-shrink: 0 !important;
    }
    .flex-md-shrink-1 {
        flex-shrink: 1 !important;
    }
    .flex-md-wrap {
        flex-wrap: wrap !important;
    }
    .flex-md-nowrap {
        flex-wrap: nowrap !important;
    }
    .flex-md-wrap-reverse {
        flex-wrap: wrap-reverse !important;
    }
    .gap-md-0 {
        gap: 0 !important;
    }
    .gap-md-1 {
        gap: 0.25rem !important;
    }
    .gap-md-2 {
        gap: 0.5rem !important;
    }
    .gap-md-3 {
        gap: 1rem !important;
    }
    .gap-md-4 {
        gap: 1.5rem !important;
    }
    .gap-md-5 {
        gap: 3rem !important;
    }
    .justify-content-md-start {
        justify-content: flex-start !important;
    }
    .justify-content-md-end {
        justify-content: flex-end !important;
    }
    .justify-content-md-center {
        justify-content: center !important;
    }
    .justify-content-md-between {
        justify-content: space-between !important;
    }
    .justify-content-md-around {
        justify-content: space-around !important;
    }
    .justify-content-md-evenly {
        justify-content: space-evenly !important;
    }
    .align-items-md-start {
        align-items: flex-start !important;
    }
    .align-items-md-end {
        align-items: flex-end !important;
    }
    .align-items-md-center {
        align-items: center !important;
    }
    .align-items-md-baseline {
        align-items: baseline !important;
    }
    .align-items-md-stretch {
        align-items: stretch !important;
    }
    .align-content-md-start {
        align-content: flex-start !important;
    }
    .align-content-md-end {
        align-content: flex-end !important;
    }
    .align-content-md-center {
        align-content: center !important;
    }
    .align-content-md-between {
        align-content: space-between !important;
    }
    .align-content-md-around {
        align-content: space-around !important;
    }
    .align-content-md-stretch {
        align-content: stretch !important;
    }
    .align-self-md-auto {
        align-self: auto !important;
    }
    .align-self-md-start {
        align-self: flex-start !important;
    }
    .align-self-md-end {
        align-self: flex-end !important;
    }
    .align-self-md-center {
        align-self: center !important;
    }
    .align-self-md-baseline {
        align-self: baseline !important;
    }
    .align-self-md-stretch {
        align-self: stretch !important;
    }
    .order-md-first {
        order: -1 !important;
    }
    .order-md-0 {
        order: 0 !important;
    }
    .order-md-1 {
        order: 1 !important;
    }
    .order-md-2 {
        order: 2 !important;
    }
    .order-md-3 {
        order: 3 !important;
    }
    .order-md-4 {
        order: 4 !important;
    }
    .order-md-5 {
        order: 5 !important;
    }
    .order-md-last {
        order: 6 !important;
    }
    .m-md-0 {
        margin: 0 !important;
    }
    .m-md-1 {
        margin: 0.25rem !important;
    }
    .m-md-2 {
        margin: 0.5rem !important;
    }
    .m-md-3 {
        margin: 1rem !important;
    }
    .m-md-4 {
        margin: 1.5rem !important;
    }
    .m-md-5 {
        margin: 3rem !important;
    }
    .m-md-auto {
        margin: auto !important;
    }
    .mx-md-0 {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .mx-md-1 {
        margin-left: 0.25rem !important;
        margin-right: 0.25rem !important;
    }
    .mx-md-2 {
        margin-left: 0.5rem !important;
        margin-right: 0.5rem !important;
    }
    .mx-md-3 {
        margin-left: 1rem !important;
        margin-right: 1rem !important;
    }
    .mx-md-4 {
        margin-left: 1.5rem !important;
        margin-right: 1.5rem !important;
    }
    .mx-md-5 {
        margin-left: 3rem !important;
        margin-right: 3rem !important;
    }
    .mx-md-auto {
        margin-left: auto !important;
        margin-right: auto !important;
    }
    .my-md-0 {
        margin-bottom: 0 !important;
        margin-top: 0 !important;
    }
    .my-md-1 {
        margin-bottom: 0.25rem !important;
        margin-top: 0.25rem !important;
    }
    .my-md-2 {
        margin-bottom: 0.5rem !important;
        margin-top: 0.5rem !important;
    }
    .my-md-3 {
        margin-bottom: 1rem !important;
        margin-top: 1rem !important;
    }
    .my-md-4 {
        margin-bottom: 1.5rem !important;
        margin-top: 1.5rem !important;
    }
    .my-md-5 {
        margin-bottom: 3rem !important;
        margin-top: 3rem !important;
    }
    .my-md-auto {
        margin-bottom: auto !important;
        margin-top: auto !important;
    }
    .mt-md-0 {
        margin-top: 0 !important;
    }
    .mt-md-1 {
        margin-top: 0.25rem !important;
    }
    .mt-md-2 {
        margin-top: 0.5rem !important;
    }
    .mt-md-3 {
        margin-top: 1rem !important;
    }
    .mt-md-4 {
        margin-top: 1.5rem !important;
    }
    .mt-md-5 {
        margin-top: 3rem !important;
    }
    .mt-md-auto {
        margin-top: auto !important;
    }
    .me-md-0 {
        margin-right: 0 !important;
    }
    .me-md-1 {
        margin-right: 0.25rem !important;
    }
    .me-md-2 {
        margin-right: 0.5rem !important;
    }
    .me-md-3 {
        margin-right: 1rem !important;
    }
    .me-md-4 {
        margin-right: 1.5rem !important;
    }
    .me-md-5 {
        margin-right: 3rem !important;
    }
    .me-md-auto {
        margin-right: auto !important;
    }
    .mb-md-0 {
        margin-bottom: 0 !important;
    }
    .mb-md-1 {
        margin-bottom: 0.25rem !important;
    }
    .mb-md-2 {
        margin-bottom: 0.5rem !important;
    }
    .mb-md-3 {
        margin-bottom: 1rem !important;
    }
    .mb-md-4 {
        margin-bottom: 1.5rem !important;
    }
    .mb-md-5 {
        margin-bottom: 3rem !important;
    }
    .mb-md-auto {
        margin-bottom: auto !important;
    }
    .ms-md-0 {
        margin-left: 0 !important;
    }
    .ms-md-1 {
        margin-left: 0.25rem !important;
    }
    .ms-md-2 {
        margin-left: 0.5rem !important;
    }
    .ms-md-3 {
        margin-left: 1rem !important;
    }
    .ms-md-4 {
        margin-left: 1.5rem !important;
    }
    .ms-md-5 {
        margin-left: 3rem !important;
    }
    .ms-md-auto {
        margin-left: auto !important;
    }
    .p-md-0 {
        padding: 0 !important;
    }
    .p-md-1 {
        padding: 0.25rem !important;
    }
    .p-md-2 {
        padding: 0.5rem !important;
    }
    .p-md-3 {
        padding: 1rem !important;
    }
    .p-md-4 {
        padding: 1.5rem !important;
    }
    .p-md-5 {
        padding: 3rem !important;
    }
    .px-md-0 {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    .px-md-1 {
        padding-left: 0.25rem !important;
        padding-right: 0.25rem !important;
    }
    .px-md-2 {
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
    }
    .px-md-3 {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
    }
    .px-md-4 {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
    }
    .px-md-5 {
        padding-left: 3rem !important;
        padding-right: 3rem !important;
    }
    .py-md-0 {
        padding-bottom: 0 !important;
        padding-top: 0 !important;
    }
    .py-md-1 {
        padding-bottom: 0.25rem !important;
        padding-top: 0.25rem !important;
    }
    .py-md-2 {
        padding-bottom: 0.5rem !important;
        padding-top: 0.5rem !important;
    }
    .py-md-3 {
        padding-bottom: 1rem !important;
        padding-top: 1rem !important;
    }
    .py-md-4 {
        padding-bottom: 1.5rem !important;
        padding-top: 1.5rem !important;
    }
    .py-md-5 {
        padding-bottom: 3rem !important;
        padding-top: 3rem !important;
    }
    .pt-md-0 {
        padding-top: 0 !important;
    }
    .pt-md-1 {
        padding-top: 0.25rem !important;
    }
    .pt-md-2 {
        padding-top: 0.5rem !important;
    }
    .pt-md-3 {
        padding-top: 1rem !important;
    }
    .pt-md-4 {
        padding-top: 1.5rem !important;
    }
    .pt-md-5 {
        padding-top: 3rem !important;
    }
    .pe-md-0 {
        padding-right: 0 !important;
    }
    .pe-md-1 {
        padding-right: 0.25rem !important;
    }
    .pe-md-2 {
        padding-right: 0.5rem !important;
    }
    .pe-md-3 {
        padding-right: 1rem !important;
    }
    .pe-md-4 {
        padding-right: 1.5rem !important;
    }
    .pe-md-5 {
        padding-right: 3rem !important;
    }
    .pb-md-0 {
        padding-bottom: 0 !important;
    }
    .pb-md-1 {
        padding-bottom: 0.25rem !important;
    }
    .pb-md-2 {
        padding-bottom: 0.5rem !important;
    }
    .pb-md-3 {
        padding-bottom: 1rem !important;
    }
    .pb-md-4 {
        padding-bottom: 1.5rem !important;
    }
    .pb-md-5 {
        padding-bottom: 3rem !important;
    }
    .ps-md-0 {
        padding-left: 0 !important;
    }
    .ps-md-1 {
        padding-left: 0.25rem !important;
    }
    .ps-md-2 {
        padding-left: 0.5rem !important;
    }
    .ps-md-3 {
        padding-left: 1rem !important;
    }
    .ps-md-4 {
        padding-left: 1.5rem !important;
    }
    .ps-md-5 {
        padding-left: 3rem !important;
    }
    .text-md-start {
        text-align: left !important;
    }
    .text-md-end {
        text-align: right !important;
    }
    .text-md-center {
        text-align: center !important;
    }
}

@media (min-width: 992px) {
    .float-lg-start {
        float: left !important;
    }
    .float-lg-end {
        float: right !important;
    }
    .float-lg-none {
        float: none !important;
    }
    .d-lg-inline {
        display: inline !important;
    }
    .d-lg-inline-block {
        display: inline-block !important;
    }
    .d-lg-block {
        display: block !important;
    }
    .d-lg-grid {
        display: grid !important;
    }
    .d-lg-table {
        display: table !important;
    }
    .d-lg-table-row {
        display: table-row !important;
    }
    .d-lg-table-cell {
        display: table-cell !important;
    }
    .d-lg-flex {
        display: flex !important;
    }
    .d-lg-inline-flex {
        display: inline-flex !important;
    }
    .d-lg-none {
        display: none !important;
    }
    .flex-lg-fill {
        flex: 1 1 auto !important;
    }
    .flex-lg-row {
        flex-direction: row !important;
    }
    .flex-lg-column {
        flex-direction: column !important;
    }
    .flex-lg-row-reverse {
        flex-direction: row-reverse !important;
    }
    .flex-lg-column-reverse {
        flex-direction: column-reverse !important;
    }
    .flex-lg-grow-0 {
        flex-grow: 0 !important;
    }
    .flex-lg-grow-1 {
        flex-grow: 1 !important;
    }
    .flex-lg-shrink-0 {
        flex-shrink: 0 !important;
    }
    .flex-lg-shrink-1 {
        flex-shrink: 1 !important;
    }
    .flex-lg-wrap {
        flex-wrap: wrap !important;
    }
    .flex-lg-nowrap {
        flex-wrap: nowrap !important;
    }
    .flex-lg-wrap-reverse {
        flex-wrap: wrap-reverse !important;
    }
    .gap-lg-0 {
        gap: 0 !important;
    }
    .gap-lg-1 {
        gap: 0.25rem !important;
    }
    .gap-lg-2 {
        gap: 0.5rem !important;
    }
    .gap-lg-3 {
        gap: 1rem !important;
    }
    .gap-lg-4 {
        gap: 1.5rem !important;
    }
    .gap-lg-5 {
        gap: 3rem !important;
    }
    .justify-content-lg-start {
        justify-content: flex-start !important;
    }
    .justify-content-lg-end {
        justify-content: flex-end !important;
    }
    .justify-content-lg-center {
        justify-content: center !important;
    }
    .justify-content-lg-between {
        justify-content: space-between !important;
    }
    .justify-content-lg-around {
        justify-content: space-around !important;
    }
    .justify-content-lg-evenly {
        justify-content: space-evenly !important;
    }
    .align-items-lg-start {
        align-items: flex-start !important;
    }
    .align-items-lg-end {
        align-items: flex-end !important;
    }
    .align-items-lg-center {
        align-items: center !important;
    }
    .align-items-lg-baseline {
        align-items: baseline !important;
    }
    .align-items-lg-stretch {
        align-items: stretch !important;
    }
    .align-content-lg-start {
        align-content: flex-start !important;
    }
    .align-content-lg-end {
        align-content: flex-end !important;
    }
    .align-content-lg-center {
        align-content: center !important;
    }
    .align-content-lg-between {
        align-content: space-between !important;
    }
    .align-content-lg-around {
        align-content: space-around !important;
    }
    .align-content-lg-stretch {
        align-content: stretch !important;
    }
    .align-self-lg-auto {
        align-self: auto !important;
    }
    .align-self-lg-start {
        align-self: flex-start !important;
    }
    .align-self-lg-end {
        align-self: flex-end !important;
    }
    .align-self-lg-center {
        align-self: center !important;
    }
    .align-self-lg-baseline {
        align-self: baseline !important;
    }
    .align-self-lg-stretch {
        align-self: stretch !important;
    }
    .order-lg-first {
        order: -1 !important;
    }
    .order-lg-0 {
        order: 0 !important;
    }
    .order-lg-1 {
        order: 1 !important;
    }
    .order-lg-2 {
        order: 2 !important;
    }
    .order-lg-3 {
        order: 3 !important;
    }
    .order-lg-4 {
        order: 4 !important;
    }
    .order-lg-5 {
        order: 5 !important;
    }
    .order-lg-last {
        order: 6 !important;
    }
    .m-lg-0 {
        margin: 0 !important;
    }
    .m-lg-1 {
        margin: 0.25rem !important;
    }
    .m-lg-2 {
        margin: 0.5rem !important;
    }
    .m-lg-3 {
        margin: 1rem !important;
    }
    .m-lg-4 {
        margin: 1.5rem !important;
    }
    .m-lg-5 {
        margin: 3rem !important;
    }
    .m-lg-auto {
        margin: auto !important;
    }
    .mx-lg-0 {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .mx-lg-1 {
        margin-left: 0.25rem !important;
        margin-right: 0.25rem !important;
    }
    .mx-lg-2 {
        margin-left: 0.5rem !important;
        margin-right: 0.5rem !important;
    }
    .mx-lg-3 {
        margin-left: 1rem !important;
        margin-right: 1rem !important;
    }
    .mx-lg-4 {
        margin-left: 1.5rem !important;
        margin-right: 1.5rem !important;
    }
    .mx-lg-5 {
        margin-left: 3rem !important;
        margin-right: 3rem !important;
    }
    .mx-lg-auto {
        margin-left: auto !important;
        margin-right: auto !important;
    }
    .my-lg-0 {
        margin-bottom: 0 !important;
        margin-top: 0 !important;
    }
    .my-lg-1 {
        margin-bottom: 0.25rem !important;
        margin-top: 0.25rem !important;
    }
    .my-lg-2 {
        margin-bottom: 0.5rem !important;
        margin-top: 0.5rem !important;
    }
    .my-lg-3 {
        margin-bottom: 1rem !important;
        margin-top: 1rem !important;
    }
    .my-lg-4 {
        margin-bottom: 1.5rem !important;
        margin-top: 1.5rem !important;
    }
    .my-lg-5 {
        margin-bottom: 3rem !important;
        margin-top: 3rem !important;
    }
    .my-lg-auto {
        margin-bottom: auto !important;
        margin-top: auto !important;
    }
    .mt-lg-0 {
        margin-top: 0 !important;
    }
    .mt-lg-1 {
        margin-top: 0.25rem !important;
    }
    .mt-lg-2 {
        margin-top: 0.5rem !important;
    }
    .mt-lg-3 {
        margin-top: 1rem !important;
    }
    .mt-lg-4 {
        margin-top: 1.5rem !important;
    }
    .mt-lg-5 {
        margin-top: 3rem !important;
    }
    .mt-lg-auto {
        margin-top: auto !important;
    }
    .me-lg-0 {
        margin-right: 0 !important;
    }
    .me-lg-1 {
        margin-right: 0.25rem !important;
    }
    .me-lg-2 {
        margin-right: 0.5rem !important;
    }
    .me-lg-3 {
        margin-right: 1rem !important;
    }
    .me-lg-4 {
        margin-right: 1.5rem !important;
    }
    .me-lg-5 {
        margin-right: 3rem !important;
    }
    .me-lg-auto {
        margin-right: auto !important;
    }
    .mb-lg-0 {
        margin-bottom: 0 !important;
    }
    .mb-lg-1 {
        margin-bottom: 0.25rem !important;
    }
    .mb-lg-2 {
        margin-bottom: 0.5rem !important;
    }
    .mb-lg-3 {
        margin-bottom: 1rem !important;
    }
    .mb-lg-4 {
        margin-bottom: 1.5rem !important;
    }
    .mb-lg-5 {
        margin-bottom: 3rem !important;
    }
    .mb-lg-auto {
        margin-bottom: auto !important;
    }
    .ms-lg-0 {
        margin-left: 0 !important;
    }
    .ms-lg-1 {
        margin-left: 0.25rem !important;
    }
    .ms-lg-2 {
        margin-left: 0.5rem !important;
    }
    .ms-lg-3 {
        margin-left: 1rem !important;
    }
    .ms-lg-4 {
        margin-left: 1.5rem !important;
    }
    .ms-lg-5 {
        margin-left: 3rem !important;
    }
    .ms-lg-auto {
        margin-left: auto !important;
    }
    .p-lg-0 {
        padding: 0 !important;
    }
    .p-lg-1 {
        padding: 0.25rem !important;
    }
    .p-lg-2 {
        padding: 0.5rem !important;
    }
    .p-lg-3 {
        padding: 1rem !important;
    }
    .p-lg-4 {
        padding: 1.5rem !important;
    }
    .p-lg-5 {
        padding: 3rem !important;
    }
    .px-lg-0 {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    .px-lg-1 {
        padding-left: 0.25rem !important;
        padding-right: 0.25rem !important;
    }
    .px-lg-2 {
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
    }
    .px-lg-3 {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
    }
    .px-lg-4 {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
    }
    .px-lg-5 {
        padding-left: 3rem !important;
        padding-right: 3rem !important;
    }
    .py-lg-0 {
        padding-bottom: 0 !important;
        padding-top: 0 !important;
    }
    .py-lg-1 {
        padding-bottom: 0.25rem !important;
        padding-top: 0.25rem !important;
    }
    .py-lg-2 {
        padding-bottom: 0.5rem !important;
        padding-top: 0.5rem !important;
    }
    .py-lg-3 {
        padding-bottom: 1rem !important;
        padding-top: 1rem !important;
    }
    .py-lg-4 {
        padding-bottom: 1.5rem !important;
        padding-top: 1.5rem !important;
    }
    .py-lg-5 {
        padding-bottom: 3rem !important;
        padding-top: 3rem !important;
    }
    .pt-lg-0 {
        padding-top: 0 !important;
    }
    .pt-lg-1 {
        padding-top: 0.25rem !important;
    }
    .pt-lg-2 {
        padding-top: 0.5rem !important;
    }
    .pt-lg-3 {
        padding-top: 1rem !important;
    }
    .pt-lg-4 {
        padding-top: 1.5rem !important;
    }
    .pt-lg-5 {
        padding-top: 3rem !important;
    }
    .pe-lg-0 {
        padding-right: 0 !important;
    }
    .pe-lg-1 {
        padding-right: 0.25rem !important;
    }
    .pe-lg-2 {
        padding-right: 0.5rem !important;
    }
    .pe-lg-3 {
        padding-right: 1rem !important;
    }
    .pe-lg-4 {
        padding-right: 1.5rem !important;
    }
    .pe-lg-5 {
        padding-right: 3rem !important;
    }
    .pb-lg-0 {
        padding-bottom: 0 !important;
    }
    .pb-lg-1 {
        padding-bottom: 0.25rem !important;
    }
    .pb-lg-2 {
        padding-bottom: 0.5rem !important;
    }
    .pb-lg-3 {
        padding-bottom: 1rem !important;
    }
    .pb-lg-4 {
        padding-bottom: 1.5rem !important;
    }
    .pb-lg-5 {
        padding-bottom: 3rem !important;
    }
    .ps-lg-0 {
        padding-left: 0 !important;
    }
    .ps-lg-1 {
        padding-left: 0.25rem !important;
    }
    .ps-lg-2 {
        padding-left: 0.5rem !important;
    }
    .ps-lg-3 {
        padding-left: 1rem !important;
    }
    .ps-lg-4 {
        padding-left: 1.5rem !important;
    }
    .ps-lg-5 {
        padding-left: 3rem !important;
    }
    .text-lg-start {
        text-align: left !important;
    }
    .text-lg-end {
        text-align: right !important;
    }
    .text-lg-center {
        text-align: center !important;
    }
}

@media (min-width: 1200px) {
    .float-xl-start {
        float: left !important;
    }
    .float-xl-end {
        float: right !important;
    }
    .float-xl-none {
        float: none !important;
    }
    .d-xl-inline {
        display: inline !important;
    }
    .d-xl-inline-block {
        display: inline-block !important;
    }
    .d-xl-block {
        display: block !important;
    }
    .d-xl-grid {
        display: grid !important;
    }
    .d-xl-table {
        display: table !important;
    }
    .d-xl-table-row {
        display: table-row !important;
    }
    .d-xl-table-cell {
        display: table-cell !important;
    }
    .d-xl-flex {
        display: flex !important;
    }
    .d-xl-inline-flex {
        display: inline-flex !important;
    }
    .d-xl-none {
        display: none !important;
    }
    .flex-xl-fill {
        flex: 1 1 auto !important;
    }
    .flex-xl-row {
        flex-direction: row !important;
    }
    .flex-xl-column {
        flex-direction: column !important;
    }
    .flex-xl-row-reverse {
        flex-direction: row-reverse !important;
    }
    .flex-xl-column-reverse {
        flex-direction: column-reverse !important;
    }
    .flex-xl-grow-0 {
        flex-grow: 0 !important;
    }
    .flex-xl-grow-1 {
        flex-grow: 1 !important;
    }
    .flex-xl-shrink-0 {
        flex-shrink: 0 !important;
    }
    .flex-xl-shrink-1 {
        flex-shrink: 1 !important;
    }
    .flex-xl-wrap {
        flex-wrap: wrap !important;
    }
    .flex-xl-nowrap {
        flex-wrap: nowrap !important;
    }
    .flex-xl-wrap-reverse {
        flex-wrap: wrap-reverse !important;
    }
    .gap-xl-0 {
        gap: 0 !important;
    }
    .gap-xl-1 {
        gap: 0.25rem !important;
    }
    .gap-xl-2 {
        gap: 0.5rem !important;
    }
    .gap-xl-3 {
        gap: 1rem !important;
    }
    .gap-xl-4 {
        gap: 1.5rem !important;
    }
    .gap-xl-5 {
        gap: 3rem !important;
    }
    .justify-content-xl-start {
        justify-content: flex-start !important;
    }
    .justify-content-xl-end {
        justify-content: flex-end !important;
    }
    .justify-content-xl-center {
        justify-content: center !important;
    }
    .justify-content-xl-between {
        justify-content: space-between !important;
    }
    .justify-content-xl-around {
        justify-content: space-around !important;
    }
    .justify-content-xl-evenly {
        justify-content: space-evenly !important;
    }
    .align-items-xl-start {
        align-items: flex-start !important;
    }
    .align-items-xl-end {
        align-items: flex-end !important;
    }
    .align-items-xl-center {
        align-items: center !important;
    }
    .align-items-xl-baseline {
        align-items: baseline !important;
    }
    .align-items-xl-stretch {
        align-items: stretch !important;
    }
    .align-content-xl-start {
        align-content: flex-start !important;
    }
    .align-content-xl-end {
        align-content: flex-end !important;
    }
    .align-content-xl-center {
        align-content: center !important;
    }
    .align-content-xl-between {
        align-content: space-between !important;
    }
    .align-content-xl-around {
        align-content: space-around !important;
    }
    .align-content-xl-stretch {
        align-content: stretch !important;
    }
    .align-self-xl-auto {
        align-self: auto !important;
    }
    .align-self-xl-start {
        align-self: flex-start !important;
    }
    .align-self-xl-end {
        align-self: flex-end !important;
    }
    .align-self-xl-center {
        align-self: center !important;
    }
    .align-self-xl-baseline {
        align-self: baseline !important;
    }
    .align-self-xl-stretch {
        align-self: stretch !important;
    }
    .order-xl-first {
        order: -1 !important;
    }
    .order-xl-0 {
        order: 0 !important;
    }
    .order-xl-1 {
        order: 1 !important;
    }
    .order-xl-2 {
        order: 2 !important;
    }
    .order-xl-3 {
        order: 3 !important;
    }
    .order-xl-4 {
        order: 4 !important;
    }
    .order-xl-5 {
        order: 5 !important;
    }
    .order-xl-last {
        order: 6 !important;
    }
    .m-xl-0 {
        margin: 0 !important;
    }
    .m-xl-1 {
        margin: 0.25rem !important;
    }
    .m-xl-2 {
        margin: 0.5rem !important;
    }
    .m-xl-3 {
        margin: 1rem !important;
    }
    .m-xl-4 {
        margin: 1.5rem !important;
    }
    .m-xl-5 {
        margin: 3rem !important;
    }
    .m-xl-auto {
        margin: auto !important;
    }
    .mx-xl-0 {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .mx-xl-1 {
        margin-left: 0.25rem !important;
        margin-right: 0.25rem !important;
    }
    .mx-xl-2 {
        margin-left: 0.5rem !important;
        margin-right: 0.5rem !important;
    }
    .mx-xl-3 {
        margin-left: 1rem !important;
        margin-right: 1rem !important;
    }
    .mx-xl-4 {
        margin-left: 1.5rem !important;
        margin-right: 1.5rem !important;
    }
    .mx-xl-5 {
        margin-left: 3rem !important;
        margin-right: 3rem !important;
    }
    .mx-xl-auto {
        margin-left: auto !important;
        margin-right: auto !important;
    }
    .my-xl-0 {
        margin-bottom: 0 !important;
        margin-top: 0 !important;
    }
    .my-xl-1 {
        margin-bottom: 0.25rem !important;
        margin-top: 0.25rem !important;
    }
    .my-xl-2 {
        margin-bottom: 0.5rem !important;
        margin-top: 0.5rem !important;
    }
    .my-xl-3 {
        margin-bottom: 1rem !important;
        margin-top: 1rem !important;
    }
    .my-xl-4 {
        margin-bottom: 1.5rem !important;
        margin-top: 1.5rem !important;
    }
    .my-xl-5 {
        margin-bottom: 3rem !important;
        margin-top: 3rem !important;
    }
    .my-xl-auto {
        margin-bottom: auto !important;
        margin-top: auto !important;
    }
    .mt-xl-0 {
        margin-top: 0 !important;
    }
    .mt-xl-1 {
        margin-top: 0.25rem !important;
    }
    .mt-xl-2 {
        margin-top: 0.5rem !important;
    }
    .mt-xl-3 {
        margin-top: 1rem !important;
    }
    .mt-xl-4 {
        margin-top: 1.5rem !important;
    }
    .mt-xl-5 {
        margin-top: 3rem !important;
    }
    .mt-xl-auto {
        margin-top: auto !important;
    }
    .me-xl-0 {
        margin-right: 0 !important;
    }
    .me-xl-1 {
        margin-right: 0.25rem !important;
    }
    .me-xl-2 {
        margin-right: 0.5rem !important;
    }
    .me-xl-3 {
        margin-right: 1rem !important;
    }
    .me-xl-4 {
        margin-right: 1.5rem !important;
    }
    .me-xl-5 {
        margin-right: 3rem !important;
    }
    .me-xl-auto {
        margin-right: auto !important;
    }
    .mb-xl-0 {
        margin-bottom: 0 !important;
    }
    .mb-xl-1 {
        margin-bottom: 0.25rem !important;
    }
    .mb-xl-2 {
        margin-bottom: 0.5rem !important;
    }
    .mb-xl-3 {
        margin-bottom: 1rem !important;
    }
    .mb-xl-4 {
        margin-bottom: 1.5rem !important;
    }
    .mb-xl-5 {
        margin-bottom: 3rem !important;
    }
    .mb-xl-auto {
        margin-bottom: auto !important;
    }
    .ms-xl-0 {
        margin-left: 0 !important;
    }
    .ms-xl-1 {
        margin-left: 0.25rem !important;
    }
    .ms-xl-2 {
        margin-left: 0.5rem !important;
    }
    .ms-xl-3 {
        margin-left: 1rem !important;
    }
    .ms-xl-4 {
        margin-left: 1.5rem !important;
    }
    .ms-xl-5 {
        margin-left: 3rem !important;
    }
    .ms-xl-auto {
        margin-left: auto !important;
    }
    .p-xl-0 {
        padding: 0 !important;
    }
    .p-xl-1 {
        padding: 0.25rem !important;
    }
    .p-xl-2 {
        padding: 0.5rem !important;
    }
    .p-xl-3 {
        padding: 1rem !important;
    }
    .p-xl-4 {
        padding: 1.5rem !important;
    }
    .p-xl-5 {
        padding: 3rem !important;
    }
    .px-xl-0 {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    .px-xl-1 {
        padding-left: 0.25rem !important;
        padding-right: 0.25rem !important;
    }
    .px-xl-2 {
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
    }
    .px-xl-3 {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
    }
    .px-xl-4 {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
    }
    .px-xl-5 {
        padding-left: 3rem !important;
        padding-right: 3rem !important;
    }
    .py-xl-0 {
        padding-bottom: 0 !important;
        padding-top: 0 !important;
    }
    .py-xl-1 {
        padding-bottom: 0.25rem !important;
        padding-top: 0.25rem !important;
    }
    .py-xl-2 {
        padding-bottom: 0.5rem !important;
        padding-top: 0.5rem !important;
    }
    .py-xl-3 {
        padding-bottom: 1rem !important;
        padding-top: 1rem !important;
    }
    .py-xl-4 {
        padding-bottom: 1.5rem !important;
        padding-top: 1.5rem !important;
    }
    .py-xl-5 {
        padding-bottom: 3rem !important;
        padding-top: 3rem !important;
    }
    .pt-xl-0 {
        padding-top: 0 !important;
    }
    .pt-xl-1 {
        padding-top: 0.25rem !important;
    }
    .pt-xl-2 {
        padding-top: 0.5rem !important;
    }
    .pt-xl-3 {
        padding-top: 1rem !important;
    }
    .pt-xl-4 {
        padding-top: 1.5rem !important;
    }
    .pt-xl-5 {
        padding-top: 3rem !important;
    }
    .pe-xl-0 {
        padding-right: 0 !important;
    }
    .pe-xl-1 {
        padding-right: 0.25rem !important;
    }
    .pe-xl-2 {
        padding-right: 0.5rem !important;
    }
    .pe-xl-3 {
        padding-right: 1rem !important;
    }
    .pe-xl-4 {
        padding-right: 1.5rem !important;
    }
    .pe-xl-5 {
        padding-right: 3rem !important;
    }
    .pb-xl-0 {
        padding-bottom: 0 !important;
    }
    .pb-xl-1 {
        padding-bottom: 0.25rem !important;
    }
    .pb-xl-2 {
        padding-bottom: 0.5rem !important;
    }
    .pb-xl-3 {
        padding-bottom: 1rem !important;
    }
    .pb-xl-4 {
        padding-bottom: 1.5rem !important;
    }
    .pb-xl-5 {
        padding-bottom: 3rem !important;
    }
    .ps-xl-0 {
        padding-left: 0 !important;
    }
    .ps-xl-1 {
        padding-left: 0.25rem !important;
    }
    .ps-xl-2 {
        padding-left: 0.5rem !important;
    }
    .ps-xl-3 {
        padding-left: 1rem !important;
    }
    .ps-xl-4 {
        padding-left: 1.5rem !important;
    }
    .ps-xl-5 {
        padding-left: 3rem !important;
    }
    .text-xl-start {
        text-align: left !important;
    }
    .text-xl-end {
        text-align: right !important;
    }
    .text-xl-center {
        text-align: center !important;
    }
}

@media (min-width: 1400px) {
    .float-xxl-start {
        float: left !important;
    }
    .float-xxl-end {
        float: right !important;
    }
    .float-xxl-none {
        float: none !important;
    }
    .d-xxl-inline {
        display: inline !important;
    }
    .d-xxl-inline-block {
        display: inline-block !important;
    }
    .d-xxl-block {
        display: block !important;
    }
    .d-xxl-grid {
        display: grid !important;
    }
    .d-xxl-table {
        display: table !important;
    }
    .d-xxl-table-row {
        display: table-row !important;
    }
    .d-xxl-table-cell {
        display: table-cell !important;
    }
    .d-xxl-flex {
        display: flex !important;
    }
    .d-xxl-inline-flex {
        display: inline-flex !important;
    }
    .d-xxl-none {
        display: none !important;
    }
    .flex-xxl-fill {
        flex: 1 1 auto !important;
    }
    .flex-xxl-row {
        flex-direction: row !important;
    }
    .flex-xxl-column {
        flex-direction: column !important;
    }
    .flex-xxl-row-reverse {
        flex-direction: row-reverse !important;
    }
    .flex-xxl-column-reverse {
        flex-direction: column-reverse !important;
    }
    .flex-xxl-grow-0 {
        flex-grow: 0 !important;
    }
    .flex-xxl-grow-1 {
        flex-grow: 1 !important;
    }
    .flex-xxl-shrink-0 {
        flex-shrink: 0 !important;
    }
    .flex-xxl-shrink-1 {
        flex-shrink: 1 !important;
    }
    .flex-xxl-wrap {
        flex-wrap: wrap !important;
    }
    .flex-xxl-nowrap {
        flex-wrap: nowrap !important;
    }
    .flex-xxl-wrap-reverse {
        flex-wrap: wrap-reverse !important;
    }
    .gap-xxl-0 {
        gap: 0 !important;
    }
    .gap-xxl-1 {
        gap: 0.25rem !important;
    }
    .gap-xxl-2 {
        gap: 0.5rem !important;
    }
    .gap-xxl-3 {
        gap: 1rem !important;
    }
    .gap-xxl-4 {
        gap: 1.5rem !important;
    }
    .gap-xxl-5 {
        gap: 3rem !important;
    }
    .justify-content-xxl-start {
        justify-content: flex-start !important;
    }
    .justify-content-xxl-end {
        justify-content: flex-end !important;
    }
    .justify-content-xxl-center {
        justify-content: center !important;
    }
    .justify-content-xxl-between {
        justify-content: space-between !important;
    }
    .justify-content-xxl-around {
        justify-content: space-around !important;
    }
    .justify-content-xxl-evenly {
        justify-content: space-evenly !important;
    }
    .align-items-xxl-start {
        align-items: flex-start !important;
    }
    .align-items-xxl-end {
        align-items: flex-end !important;
    }
    .align-items-xxl-center {
        align-items: center !important;
    }
    .align-items-xxl-baseline {
        align-items: baseline !important;
    }
    .align-items-xxl-stretch {
        align-items: stretch !important;
    }
    .align-content-xxl-start {
        align-content: flex-start !important;
    }
    .align-content-xxl-end {
        align-content: flex-end !important;
    }
    .align-content-xxl-center {
        align-content: center !important;
    }
    .align-content-xxl-between {
        align-content: space-between !important;
    }
    .align-content-xxl-around {
        align-content: space-around !important;
    }
    .align-content-xxl-stretch {
        align-content: stretch !important;
    }
    .align-self-xxl-auto {
        align-self: auto !important;
    }
    .align-self-xxl-start {
        align-self: flex-start !important;
    }
    .align-self-xxl-end {
        align-self: flex-end !important;
    }
    .align-self-xxl-center {
        align-self: center !important;
    }
    .align-self-xxl-baseline {
        align-self: baseline !important;
    }
    .align-self-xxl-stretch {
        align-self: stretch !important;
    }
    .order-xxl-first {
        order: -1 !important;
    }
    .order-xxl-0 {
        order: 0 !important;
    }
    .order-xxl-1 {
        order: 1 !important;
    }
    .order-xxl-2 {
        order: 2 !important;
    }
    .order-xxl-3 {
        order: 3 !important;
    }
    .order-xxl-4 {
        order: 4 !important;
    }
    .order-xxl-5 {
        order: 5 !important;
    }
    .order-xxl-last {
        order: 6 !important;
    }
    .m-xxl-0 {
        margin: 0 !important;
    }
    .m-xxl-1 {
        margin: 0.25rem !important;
    }
    .m-xxl-2 {
        margin: 0.5rem !important;
    }
    .m-xxl-3 {
        margin: 1rem !important;
    }
    .m-xxl-4 {
        margin: 1.5rem !important;
    }
    .m-xxl-5 {
        margin: 3rem !important;
    }
    .m-xxl-auto {
        margin: auto !important;
    }
    .mx-xxl-0 {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .mx-xxl-1 {
        margin-left: 0.25rem !important;
        margin-right: 0.25rem !important;
    }
    .mx-xxl-2 {
        margin-left: 0.5rem !important;
        margin-right: 0.5rem !important;
    }
    .mx-xxl-3 {
        margin-left: 1rem !important;
        margin-right: 1rem !important;
    }
    .mx-xxl-4 {
        margin-left: 1.5rem !important;
        margin-right: 1.5rem !important;
    }
    .mx-xxl-5 {
        margin-left: 3rem !important;
        margin-right: 3rem !important;
    }
    .mx-xxl-auto {
        margin-left: auto !important;
        margin-right: auto !important;
    }
    .my-xxl-0 {
        margin-bottom: 0 !important;
        margin-top: 0 !important;
    }
    .my-xxl-1 {
        margin-bottom: 0.25rem !important;
        margin-top: 0.25rem !important;
    }
    .my-xxl-2 {
        margin-bottom: 0.5rem !important;
        margin-top: 0.5rem !important;
    }
    .my-xxl-3 {
        margin-bottom: 1rem !important;
        margin-top: 1rem !important;
    }
    .my-xxl-4 {
        margin-bottom: 1.5rem !important;
        margin-top: 1.5rem !important;
    }
    .my-xxl-5 {
        margin-bottom: 3rem !important;
        margin-top: 3rem !important;
    }
    .my-xxl-auto {
        margin-bottom: auto !important;
        margin-top: auto !important;
    }
    .mt-xxl-0 {
        margin-top: 0 !important;
    }
    .mt-xxl-1 {
        margin-top: 0.25rem !important;
    }
    .mt-xxl-2 {
        margin-top: 0.5rem !important;
    }
    .mt-xxl-3 {
        margin-top: 1rem !important;
    }
    .mt-xxl-4 {
        margin-top: 1.5rem !important;
    }
    .mt-xxl-5 {
        margin-top: 3rem !important;
    }
    .mt-xxl-auto {
        margin-top: auto !important;
    }
    .me-xxl-0 {
        margin-right: 0 !important;
    }
    .me-xxl-1 {
        margin-right: 0.25rem !important;
    }
    .me-xxl-2 {
        margin-right: 0.5rem !important;
    }
    .me-xxl-3 {
        margin-right: 1rem !important;
    }
    .me-xxl-4 {
        margin-right: 1.5rem !important;
    }
    .me-xxl-5 {
        margin-right: 3rem !important;
    }
    .me-xxl-auto {
        margin-right: auto !important;
    }
    .mb-xxl-0 {
        margin-bottom: 0 !important;
    }
    .mb-xxl-1 {
        margin-bottom: 0.25rem !important;
    }
    .mb-xxl-2 {
        margin-bottom: 0.5rem !important;
    }
    .mb-xxl-3 {
        margin-bottom: 1rem !important;
    }
    .mb-xxl-4 {
        margin-bottom: 1.5rem !important;
    }
    .mb-xxl-5 {
        margin-bottom: 3rem !important;
    }
    .mb-xxl-auto {
        margin-bottom: auto !important;
    }
    .ms-xxl-0 {
        margin-left: 0 !important;
    }
    .ms-xxl-1 {
        margin-left: 0.25rem !important;
    }
    .ms-xxl-2 {
        margin-left: 0.5rem !important;
    }
    .ms-xxl-3 {
        margin-left: 1rem !important;
    }
    .ms-xxl-4 {
        margin-left: 1.5rem !important;
    }
    .ms-xxl-5 {
        margin-left: 3rem !important;
    }
    .ms-xxl-auto {
        margin-left: auto !important;
    }
    .p-xxl-0 {
        padding: 0 !important;
    }
    .p-xxl-1 {
        padding: 0.25rem !important;
    }
    .p-xxl-2 {
        padding: 0.5rem !important;
    }
    .p-xxl-3 {
        padding: 1rem !important;
    }
    .p-xxl-4 {
        padding: 1.5rem !important;
    }
    .p-xxl-5 {
        padding: 3rem !important;
    }
    .px-xxl-0 {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    .px-xxl-1 {
        padding-left: 0.25rem !important;
        padding-right: 0.25rem !important;
    }
    .px-xxl-2 {
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
    }
    .px-xxl-3 {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
    }
    .px-xxl-4 {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
    }
    .px-xxl-5 {
        padding-left: 3rem !important;
        padding-right: 3rem !important;
    }
    .py-xxl-0 {
        padding-bottom: 0 !important;
        padding-top: 0 !important;
    }
    .py-xxl-1 {
        padding-bottom: 0.25rem !important;
        padding-top: 0.25rem !important;
    }
    .py-xxl-2 {
        padding-bottom: 0.5rem !important;
        padding-top: 0.5rem !important;
    }
    .py-xxl-3 {
        padding-bottom: 1rem !important;
        padding-top: 1rem !important;
    }
    .py-xxl-4 {
        padding-bottom: 1.5rem !important;
        padding-top: 1.5rem !important;
    }
    .py-xxl-5 {
        padding-bottom: 3rem !important;
        padding-top: 3rem !important;
    }
    .pt-xxl-0 {
        padding-top: 0 !important;
    }
    .pt-xxl-1 {
        padding-top: 0.25rem !important;
    }
    .pt-xxl-2 {
        padding-top: 0.5rem !important;
    }
    .pt-xxl-3 {
        padding-top: 1rem !important;
    }
    .pt-xxl-4 {
        padding-top: 1.5rem !important;
    }
    .pt-xxl-5 {
        padding-top: 3rem !important;
    }
    .pe-xxl-0 {
        padding-right: 0 !important;
    }
    .pe-xxl-1 {
        padding-right: 0.25rem !important;
    }
    .pe-xxl-2 {
        padding-right: 0.5rem !important;
    }
    .pe-xxl-3 {
        padding-right: 1rem !important;
    }
    .pe-xxl-4 {
        padding-right: 1.5rem !important;
    }
    .pe-xxl-5 {
        padding-right: 3rem !important;
    }
    .pb-xxl-0 {
        padding-bottom: 0 !important;
    }
    .pb-xxl-1 {
        padding-bottom: 0.25rem !important;
    }
    .pb-xxl-2 {
        padding-bottom: 0.5rem !important;
    }
    .pb-xxl-3 {
        padding-bottom: 1rem !important;
    }
    .pb-xxl-4 {
        padding-bottom: 1.5rem !important;
    }
    .pb-xxl-5 {
        padding-bottom: 3rem !important;
    }
    .ps-xxl-0 {
        padding-left: 0 !important;
    }
    .ps-xxl-1 {
        padding-left: 0.25rem !important;
    }
    .ps-xxl-2 {
        padding-left: 0.5rem !important;
    }
    .ps-xxl-3 {
        padding-left: 1rem !important;
    }
    .ps-xxl-4 {
        padding-left: 1.5rem !important;
    }
    .ps-xxl-5 {
        padding-left: 3rem !important;
    }
    .text-xxl-start {
        text-align: left !important;
    }
    .text-xxl-end {
        text-align: right !important;
    }
    .text-xxl-center {
        text-align: center !important;
    }
}

@media (min-width: 1200px) {
    .fs-1 {
        font-size: 2.5rem !important;
    }
    .fs-2 {
        font-size: 2rem !important;
    }
    .fs-3 {
        font-size: 1.75rem !important;
    }
    .fs-4 {
        font-size: 1.5rem !important;
    }
}

@media print {
    .d-print-inline {
        display: inline !important;
    }
    .d-print-inline-block {
        display: inline-block !important;
    }
    .d-print-block {
        display: block !important;
    }
    .d-print-grid {
        display: grid !important;
    }
    .d-print-table {
        display: table !important;
    }
    .d-print-table-row {
        display: table-row !important;
    }
    .d-print-table-cell {
        display: table-cell !important;
    }
    .d-print-flex {
        display: flex !important;
    }
    .d-print-inline-flex {
        display: inline-flex !important;
    }
    .d-print-none {
        display: none !important;
    }
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Rubik, Poppins, sans-serif;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
}


/*# sourceMappingURL=main.469bde12.css.map*/


/*# sourceMappingURL=main.469bde12.css.map*/


`} 
</style>
export default MyApp;
