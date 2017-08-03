import styled from 'styled-components';

export const ListItems = styled.ul`
  border-top:1px solid #eee;
  width:100%;
  padding:1em 0;
  margin:0;
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;

  li {
    list-style-type:none;
    border-radius:3px;
    width:calc(100% / 3 - 1em);
    padding:1em;
    font-size:1em;
    color:black;
    margin:.5em;
    background-color:#eee;
    box-shadow: 0 .1em .3em .03em rgba(0,0,0,0.3);
  }
`;
