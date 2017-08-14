import React, { Component } from 'react';

// Styles
import {SearchBox, Button, NewCard} from './../styled/general.styles';

class Search extends Component {
  constructor() {
    super();

    // Set initial state
    this.state = {
      'inputText': '',
      'typed': ''
    };

    // Maneja el cambio de texto del input
    this.onChangeText = this.onChangeText.bind(this);
  }

  // Acción de cambio de texto
  onChangeText = (event) => {
    event.preventDefault();

    // Asigna nuevo state
    this.setState({typed: event.target.value});
  }

  // Guardar tarjeta
  onSaveCard = (event) => {
    event.preventDefault();
    let newCard = this.state.typed;

    // Resetea value e input
    this.setState({ typed: '' });
    this.setState({ inputText: '' });

    console.log(newCard);
  }

  render() {
    return (
      <SearchBox onSubmit={this.onSaveCard}>

        <input  placeholder="Agregar texto..."
                value={this.state.typed}
                onChange={this.onChangeText} />

        <Button primary
                type="submit">Guardar</Button>

        <br/>

        <NewCard>{this.state.typed}</NewCard>

      </SearchBox>
    );
  }

}

export default Search;
