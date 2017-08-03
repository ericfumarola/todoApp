import styled from 'styled-components';

export const Container = styled.section`
  max-width:1200px;
  position:relaitve;
  display:flex;
  align-items:flex-start;
  flex-direction:column;
  align-self:flex-start;
  margin:auto;
  padding:1em;
`;

export const SearchBox = styled.form`
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  width:100%;

  input {
    flex-grow:1;
    height:50px;
    border:1px solid #ddd;
    border-radius:3px;
    font-size:1em;
    padding:.7em;
    outline:none;
    margin-right:.5em;

    &:hover,
    &:focus {
      outline:none;
    }
  }
`;

export const NewCard = styled.article`
  width:100%;
  padding:1em;
  font-size:2em;
  color:black;
  background-color:#ddd;
  box-shadow: 0 .1em .3em .03em rgba(0,0,0,0.3);
  margin:1em 0;
`;

export const Button = styled.button`
  background-color: ${props => props.primary ? '#4171e2' : 'red'};
  border-radius: 4px;
  min-width:200px;
  color:white;
  font-size:1.1em;
  font-family: 'Raleway', sans-serif;
  font-weight:500;
  letter-spacing:0.15em;
  border:0;
  text-transform: uppercase;
  box-shadow: 0 .1em .1em .03em rgba(0,0,0,0.3);
`;
