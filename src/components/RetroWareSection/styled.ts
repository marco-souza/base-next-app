import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  height: 100vh;
  font-weight: 700;
  font-family: 'Saira', sans-serif;

  img {
    position: fixed;
    width: 100%;
    top: 30%;
    transition: top 1s;
  }

  .wrapper {
    display: grid;
    place-items: center;
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 10;
  }

  .graph-container {
    overflow: hidden;
    height: 100vh;

    .graph {
      background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0px,
          rgba(54, 226, 248, 0.5) 0%,
          rgba(54, 226, 248, 0.5) 3px,
          rgba(0, 0, 0, 0) 0px
        ),
        linear-gradient(
          90deg,
          rgba(0, 0, 0, 0) 0px,
          rgba(54, 226, 248, 0.5) 0%,
          rgba(54, 226, 248, 0.5) 3px,
          rgba(0, 0, 0, 0) 0px
        );
      background-size: 4em 2em, 4em 2em;
      background-color: black;
      height: 40em;
      perspective: 1000px;
      margin-top: 20em;
      transform: perspective(200px) rotateX(45deg) scale(2);
    }
  }

  h1 {
    background: linear-gradient(
      to bottom,
      #ebf1f6 0%,
      #abd3ee 50%,
      #859ee2 51%,
      #d5ebfb 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ebf1f6', endColorstr='#d5ebfb',GradientType=0 ); /* IE6-9 */
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2em;
    transition: font-size 1s;
    position: absolute;
    text-transform: uppercase;

    &:after {
      background: none;
      content: attr(data-text);
      left: 0;
      position: absolute;
      text-shadow: 1px -1px 0 rgba(255, 255, 255, 0.5), 3px 1px 3px rgba(255, 0, 255, 0.85),
        -3px -2px 3px rgba(0, 0, 255, 0.85), 1px -2px 0 rgba(255, 255, 255, 0.8);
      z-index: -3;
    }

    &:before {
      content: ' ';
      position: absolute;
      top: -1.5em;
      left: 0em;
      width: 7.1em;
      height: 6.2em;
      background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/triangle.svg') no-repeat;
      background-size: 7.5em;
      z-index: -4;
    }
  }

  h2 {
    text-shadow: 1px -1px 0 rgba(255, 255, 255, 0.5), 2px 1px 2px rgba(255, 0, 255, 0.85),
      -3px -2px 3px rgba(0, 0, 255, 0.85), 1px -2px 0 rgba(255, 255, 255, 0.8);
    color: rgb(255, 0, 234);
    font-size: 2em;
    transform: rotateZ(-15deg);
    position: absolute;
    font-family: 'Courgette', cursive;
    transition: font-size 1s;
    margin-top: 3.5em;
  }

  @media only screen and (min-width: 768px) {
    img {
      top: 17%;
    }

    h1 {
      font-size: 4em;
    }

    h2 {
      font-size: 3.5em;
    }
  }

  @media only screen and (min-width: 950px) {
    body {
      background-position: 50% 0%;
    }
  }

  @media only screen and (min-width: 1100px) {
    img {
      top: 8%;
    }
  }

  @media only screen and (min-width: 1500px) {
    img {
      top: -10%;
    }
  }
`;
