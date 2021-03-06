import styled from 'styled-components';
import {media}  from './mediaqueries.styled';

export const Container = styled.section`
  max-width:800px;
  position:relaitve;
  display:flex;
  align-items:flex-start;
  flex-direction:column;
  align-self:flex-start;
  margin:auto;
  padding:2em;
  ${media.xs`
    padding:1em;
    width:100%;
  `}
`;

export const SearchBox = styled.form`
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;

  input {
    font-family: 'Raleway', sans-serif;
    flex-grow:1;
    height:50px;
    border:1px solid #ddd;
    border-radius:3px;
    font-size:1em;
    padding:.7em;
    outline:none;
    margin-right:.5em;

    ${media.xs`
      width:100%;
      margin-right:0;
    `}

    &:hover,
    &:focus {
      outline:none;
    }
  }
`;

export const NewCard = styled.article`
  width:100%;
  min-height:100px;
  border-radius:4px;
  padding:1em;
  font-size:2em;
  color:black;
  background-color:#fcffd4;
  box-shadow: 0 .1em .2em 0 rgba(0,0,0,0.3);
  margin:1em 0;

  ${media.xs`
    font-size:1.5em;
    margin:.75em 0;
  `}
`;

export const Button = styled.button`
  position:relative;
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
  outline:none;
  box-shadow: 0 .1em .1em .03em rgba(0,0,0,0.3);
  transition:all 350ms linear;

  ${media.xs`
    width:100%;
    height:50px;
    margin-top:1em;
    margin-bottom:1em;
  `}

  &:hover {
    background-color: ${props => props.primary ? '#e24141' : '#4171e2'};
  }
`;
