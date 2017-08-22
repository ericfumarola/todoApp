import styled from 'styled-components';
// import {media, sizes, acc, label}  from './mediaqueries.styled';

export const ListItems = styled.ul`
  position:relative;
  clear:both;
  width:100%;
  padding:1.7em 0;
  margin:0;
  border-top:1px solid #eee;

  column-count: 3;
  column-gap: 20px;
  height: 100%;

  li {
    display:inline-block;
    position:relative;
    list-style-type:none;
    width: 100%;
    margin-bottom:20px;
    border-radius: 4px;
    min-height: 100px;
    break-inside: avoid;
    padding:1em;

    font-size:1em;
    color:black;
    background-color:#eee;
    box-shadow: 0 0.1em 0.15em 0em rgba(0,0,0,0.3);

    

    aside {
      position:absolute;
      color:black;
      top:10px;
      right: 10px;
      width:15px;
      height:15px;
      cursor:pointer;

      &:before,
      &:after {
        content:'';
        width:100%;
        height:1px;
        top:50%;
        position:absolute;
        background-color:black;
        transition:all 300ms linear;
        transform:rotate(45deg) translateY(-50%);
      }

      &:after {
        transform:rotate(-45deg);
      }

      &:hover {
        &:before {
           transform:rotate(-45deg);
        }
        &:after {
          transform:rotate(45deg);
        }
      }

    }
  }
`;
