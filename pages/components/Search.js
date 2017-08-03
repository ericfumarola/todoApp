import React, { Component } from 'react';

// Styles
import {SearchBox,Button, NewCard} from './../styled/general.styles';

class Search extends Component {
  constructor() {
    super();

    // Set initial state
    this.state = {
      'typed': 'text'
    };

    // Maneja el cambio de texto del input
    this.changeText = this.changeText.bind(this);
  }

  changeText(event) {
    event.preventDefault();
    this.setState({typed: event.target.value});
  }

  render() {
    return (
      <SearchBox onSubmit={this.changeText}>

        <input  placeholder="Agregar..."
                onChange={this.changeText} />

        <Button type="submit"
                primary>Guardar</Button>
        <br/>

        <NewCard>{this.state.typed}</NewCard>

      </SearchBox>
    );
  }

}

export default Search;
