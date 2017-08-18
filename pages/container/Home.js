import React, { Component } from 'react';

import firebaseApp from 'firebase';
import config from './../database/DbFirebase';
import Search from './../components/Search';

// styles
import {Container} from './../styled/general.styles';
import {ListItems} from './../styled/list.styles';

// inicializa Firebase
if (!firebaseApp.apps.length) {
  firebaseApp.initializeApp(config);
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.state = {
      notes : []
    }
  }

  componentWillMount() {
    const previousNotes = this.state.notes;

    const nameRef =  firebaseApp.database().ref().child('notes');

    // Add note
    nameRef.on('child_added', snapshot => {
      previousNotes.push(snapshot.val());

      this.setState({
        notes : previousNotes
      })
    })

    // Remove Note
    nameRef.on('child_removed', snapshot => {
      previousNotes.push(snapshot.val());

      this.setState({
      	notes: previousNotes
      })
    })
  }

  // Add Note
  addNote(note) {
    const dato = firebaseApp.database().ref().child('notes').push();
    const key = dato.key;
    const insertar = {
      content: note,
      key: key
    }
    dato.set(insertar)
  }

  // Remove Note
  removeNote(note, id){
    const dato = firebaseApp.database().ref().child('notes').push();
    const key = dato.key;
    console.log(key);
    const remove = {
      note: id
    }
    dato.remove(remove)
  }


  render () {

    const allNotes = this.state.notes.map((note, i) => <li id={note.key} key={note.key}><aside onClick={() => this.removeNote(note.key)}></aside>{note.content}</li>)

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

export default Home;
