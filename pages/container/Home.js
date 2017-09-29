import React, { Component } from 'react';

import firebaseApp from 'firebase';
import config from './../database/DbFirebase';
import Search from './../components/Search';

// styles
import {Container} from './../styled/general.styles';
import {ListItems} from './../styled/list.styles';

// inicializa Firebase (si ya existe no lo vuelve a crear)
if (!firebaseApp.apps.length) {
  firebaseApp.initializeApp(config);
}

class Home extends Component {
  constructor() {
    super();

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    // Inicializa firebase
    this.database = firebaseApp.database().ref().child('notes');

    this.state = {
      notes : [],
      archivedNotes : []
    }
  }

  componentWillMount() {
    //const notaPrevia = this.state.notes;

    // Add note
    this.database.on('child_added', snapshot => {
      this.state.notes.push(snapshot.val());

      // actualiza nuevo estado y nota
      this.setState({
        notes : this.state.notes
      })
    })

    // Remove Note
    this.database.on('child_removed', snapshot => {
      this.state.notes.push(snapshot.val());

      // actualiza nuevo estado y nota
      this.setState({
      	notes: this.state.notes.filter((el) => snapshot.key !== el.key)
      })
    })
  }

  // Add Note
  addNote(note) {
    // si el texto tiene más de un val se agrega
    if (note.length > 0) {
      const data = this.database.push();
      const key = data.key;
      data.set({
        content: note,
        key: key
      })
    }
  }

  // Remove Note
  removeNote(noteId){
    // this.database.child(noteId).remove();
    this.database.child(noteId).remove();
  }

  render () {
    if (!this.state.notes.length > 0) {

      return <p className="text-center">Cargando empleados...</p>


    } else {
      // mapea nota por nota
      const allNotes = this.state.notes.map((note) => <li id={note.key} key={note.key}><aside onClick={() => this.removeNote(note.key) }></aside>{note.content}</li>).reverse();

      return (
        <Container>
          <Search addNote={this.addNote} />
          <ListItems>
            {allNotes}
          </ListItems>
        </Container>
      )
    }


  }
}

export default Home;
