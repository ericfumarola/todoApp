import React, { Component } from 'react';

import firebaseApp from 'firebase';
import config from './../database/DbFirebase';
import Search from './../components/Search';

// styles
import {Container} from './../styled/general.styles';
import {ListItems} from './../styled/list.styles';


class Home extends Component {
  constructor(props) {
    super(props);

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    // this.app = fire;
    // this.db = this.app.database().ref().child('notes');

    this.state = {
      notes : []
    }
  }

  componentWillMount() {
    const previousNotes = this.state.notes;

    if (!firebaseApp.apps.length) {
      firebaseApp.initializeApp(config);
    }

    const nameRef =  firebaseApp.database().ref().child('notes');


    console.log(previousNotes);

    nameRef.on('child_added', snapshot => {
      previousNotes.push(snapshot.val());

      const postId = previousNotes.key;

      console.log(postId);

      this.setState({
        notes : previousNotes
      })
    })
  }

  // Add Note
  addNote(note) {
    firebaseApp.database().ref().child('notes').push().set({content:note})
  }

  // Remove Note
  removeNote(id){
    this.setState({
    	notes: this.state.notes.filter((el) => id !== el.id)
    })
  }


  render () {

    const allNotes = this.state.notes.map((note, i) => <li id={i} key={i}><aside onClick={() => this.removeNote(note.key)}></aside>{note.content} {note[i]}</li>)

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
