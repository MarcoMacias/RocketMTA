import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  outline: none;
  scroll-behavior: smooth;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
}

@font-face {
  font-family: "Whitney";
  src: url("../src/assets/fonts/whitneymedium.otf");
}

body {
  background-color: #121214;
}

#root {
  max-width: 100vw;
  font-family: 'Inter', sans-serif;
  position: relative;
}

.font-Satoshi {
  font-family: 'Satoshi', sans-serif;
}

.font-Cabinet {
  font-family: 'Cabinet Grotesk', sans-serif;
}

.font-Poppins {
  font-family: 'Poppins', sans-serif;
}

.font-Inter {
  font-family: 'Inter', sans-serif;
}

.font-Manrope{
  font-family: 'Manrope', sans-serif;
}

.font-Roboto{
  font-family: 'Roboto', sans-serif;
}

.font-francker {
  font-family: "FranckerW01", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

input {
  background: none;
  border: none;
  outline: none;
}

button {
  background: none;
  border: none;
  display: flex;
  cursor: pointer;
  user-select: none;
  font-family: inherit;
}


ol, ul {
  list-style: none;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  max-width: 100%;
  display: block;
  -webkit-user-drag: none;
}

* {
  & ::-webkit-scrollbar {
    width: 4px;
  }
  & ::-webkit-scrollbar-track {
    background: #121214;
  }
  & ::-webkit-scrollbar-thumb {
    background: #4D4D57;

  }

  & ::-webkit-scrollbar-thumb:hover {
    background: #CED4DA;
  }
} 

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
  }
  .ReactModal__Overlay--after-open {
    opacity: 1;
  }
  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;
