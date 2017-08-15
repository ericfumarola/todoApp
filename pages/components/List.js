import React, { Component } from 'react';

class List extends Component {

  render() {
    return (
      <li id={this.props.id} key={this.props.key}>
        <aside></aside>
        {this.props.cards}
      </li>
    );
  }

}


export default List;
