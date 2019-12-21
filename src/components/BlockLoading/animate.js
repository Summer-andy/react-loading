import  { keyframes } from 'styled-components';
const $InColor = '#f9c094';
const $color = '#00adb5';
const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animateFirst = color => keyframes`
  0% {
    background: ${$InColor};
  }
  25% {
    background: ${color};
  }
  50% {
    background: ${color};
  }
  75% {
    background: ${color};
  }
  100% {
    background: ${$InColor};
  }
`

const animateTwo = color =>  keyframes`
  0% {
    background: ${color};
  }
  25% {
    background: ${$InColor};
  }
  50% {
    background: ${color};
  }
  75% {
    background: ${color};
  }
  100% {
    background: ${color};
  }
`

const animateThree = color =>  keyframes`
  0% {
    background: ${color};
  }
  25% {
    background: ${color};
  }
  50% {
    background: ${$InColor};
  }
  75% {
    background: ${color};
  }
  100% {
    background: ${color};
  }
`
const animateFour = color =>  keyframes`
  0% {
    background: ${color};
  }
  25% {
    background: ${color};
  }
  50% {
    background: ${color};
  }
  75% {
    background: ${$InColor};
  }
  100% {
    background: ${color};
  }
`

export { Rotate, animateFirst, animateTwo, animateThree, animateFour }
