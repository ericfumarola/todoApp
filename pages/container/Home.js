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
  constructor() {
    super();

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.database = firebaseApp.database().ref().child('notes');

    this.state = {
      notes : []
    }
  }

  componentWillMount() {
    const previousNotes = this.state.notes;

    // Add note
    this.database.on('child_added', snapshot => {
      previousNotes.push(snapshot.val());

      this.setState({
        notes : previousNotes
      })
    })

    // Remove Note
    this.database.on('child_removed', snapshot => {
      // for(var i=0; i < previousNotes.length; i++){
      //   if(previousNotes[i].key === snapshot.key){
      //     previousNotes.splice(i, 1);
      //   }
      // }
      this.setState({
      	notes: this.state.notes.filter((el) => snapshot.key !== el.key)
      })

      // this.setState({
      //   notes: previousNotes
      // })

      console.log(this.state.notes);
    })
  }

  // Add Note
  addNote(note) {
    const data = this.database.push();
    const key = data.key;
    data.set({
      content: note,
      key: key
    })
  }

  // Remove Note
  removeNote(noteId){
    this.database.child(noteId).remove();
  }


  render () {

    const allNotes = this.state.notes.map((note) => <li id={note.key} key={note.key}><aside onClick={() => this.removeNote(note.key)}></aside>{note.content}</li>).reverse()

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
