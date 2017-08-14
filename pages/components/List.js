import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props)
  }

  render(props) {

    return (
      <li>
        <aside></aside>
        {this.props.cards}
      </li>
    );
  }

}


export default List;
