import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Raleway:200,300,400,600&subset=latin-ext');

  * {
    box-sizing:border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color:white;
    font-family: 'Raleway', sans-serif;
  }
`;
