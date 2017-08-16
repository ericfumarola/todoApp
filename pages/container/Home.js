import React, { Component } from 'react';
import {fire} from './../database/DbFirebase';
import Search from './../components/Search';

// styles
import {Container} from './../styled/general.styles';
import {ListItems} from './../styled/list.styles';

//
console.log(fire);

// if (!firebase.apps.length) {
//   firebase.initializeApp(DbFirebase)
// }

class Home extends Component {
  constructor(props) {
    super(props);

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    // this.app = fire;
    // this.db = this.app.database().ref().child('notes');

    this.state = {
      notes : [
        {
          content: [
            'local'
          ],
          id : [
            '1'
          ]
        }
      ]
    }
  }

  componentWillMount() {
    const previousNotes = this.state.notes;

    const nameRef = fire.database().ref().child('notes');

    nameRef.on('note_added', snap => {
      previousNotes.push({
        id : snap.key,
        content: snap.val().content
      });

      this.setState({
        notes : previousNotes
      })
    })
  }

  // Add Note
  addNote(note) {
    // this.database.push().set({content:note})
    // const previousNotes = this.state.notes;
    //
    // previousNotes.push({
    //   id : previousNotes.length + 1,
    //   content: note
    // });
    //
    // this.setState({
    //   notes : previousNotes
    // })

    this.database.push().set({content:note})
  }

  // Remove Note
  removeNote(id){
    this.setState({
    	notes: this.state.notes.filter((el) => id !== el.id)
    })
  }


  render () {
    return (
      <Container>
        <Search addNote={this.addNote} />
        <ListItems>
          {this.state.notes.map((note) => <li id={note.id} key={note.id}><aside  onClick={() => this.removeNote(note.id)}></aside>{note.content}</li>)}
        </ListItems>
      </Container>
    )
  }
}

export default Home;
