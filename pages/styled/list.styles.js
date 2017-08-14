import styled from 'styled-components';

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
    margin-bottom:15px;
    border-radius: 4px;
    min-height: 100px;
    break-inside: avoid;
    padding:1em;
    overflow:hidden;
    font-size:1em;
    color:black;
    background-color:#eee;
    box-shadow: 0 0.1em 0.15em 0em rgba(0,0,0,0.3);
    transition:all 150ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

    &:hover,
    &:focus {
      outline:none;
      box-shadow: 0 0.1em 0.15em 0.01em rgba(0,0,0,0.2),
                  0 0.2em 0.35em 0em rgba(0,0,0,0.25);

      aside {
        opacity:1;

        &:before {
           transform:rotate(45deg);
        }
        &:after {
          transform:rotate(-45deg);
        }
      }
    }

    aside {
      opacity:0;
      position:absolute;
      color:black;
      top:10px;
      right: 10px;
      width:15px;
      height:15px;
      cursor:pointer;
      transition-property:opacity;
      transition-timing-function:cubic-bezier(0.18, 0.89, 0.32, 1.28);
      transition-duration:150ms;
      transition-delay:120ms;

      &:before,
      &:after {
        content:'';
        width:100%;
        height:1px;
        top:50%;
        position:absolute;
        background-color:black;
        transition-property:transform;
        transition-timing-function:cubic-bezier(0.18, 0.89, 0.32, 1.28);
        transition-duration:250ms;
        transition-delay:150ms;
        transform:rotate(0);
      }

      &:before {
        transform:rotate(0);
      }
      &:after {
        transform:rotate(-90deg);
      }
    }
  }
`;
