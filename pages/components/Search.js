import React, { Component } from 'react';

// Styles
import {SearchBox, Button, NewCard} from './../styled/general.styles';

class Search extends Component {
  constructor() {
    super();

    // Set initial state
    this.state = {
      'cardContent': ''
    };

    // Maneja el cambio de texto del input
    this.onChangeText = this.onChangeText.bind(this);
  }

  // Acción de cambio de texto
  onChangeText = (event) => {
    event.preventDefault();

    // Asigna nuevo state
    this.setState({cardContent: event.target.value});
  }

  // Guardar tarjeta
  onSaveCard = (event) => {
    event.preventDefault();
    let newCard = this.state.cardContent;

    this.props.addNote(this.state.cardContent)

    // Resetea value e input
    this.setState({ cardContent: '' });
  }

  render() {
    return (
      <SearchBox onSubmit={this.onSaveCard}>

        <input  placeholder="Agregar texto..."
          value={this.state.cardContent}
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
