import React, { Component } from 'react';
// import {DbFirebase} from './../database/DbFirebase';
// import firebase from 'firebase';
import Search from './../components/Search';
import List from './../components/List';

// styles
import {Container} from './../styled/general.styles';
import {ListItems} from './../styled/list.styles';

//
// if (!firebase.apps.length) {
//   firebase.initializeApp(DbFirebase)
// }

class Home extends Component {
  constructor(props) {
    super(props);

    this.addNote = this.addNote.bind(this);

    this.state = {
      notes : [
        {
          content: [
            'sasasa 1'
          ],
          id : [
            '1'
          ]
        }
      ]
    }
  }

  componentWillMount() {
    // const prevNotes = this.state.notes;
    //
    // this.app = firebase.initializeApp(DbFirebase);
    // this.database.on('value', (snap) => {
    //   prevNotes.push({
    //     content : snapshot.val().content,
    //     id      : snap.key
    //   })
    //
    //   this.setState({
    //     notes:prevNotes
    //   })
    // })
  }

  addNote(note) {
    // this.database.push().set({content:note})
    const previousNotes = this.state.notes;
    previousNotes.push({
      id : previousNotes.length + 1,
      content: note
    });

    this.setState({
      notes : previousNotes
    })

    console.log(previousNotes)

  }

  render () {
    return (
      <Container>
        <Search addNote={this.addNote} />
        <ListItems>
          {this.state.notes.map((note, index) => <List cards={note.content} key={note.id}/>)}
        </ListItems>
      </Container>
    )
  }
}

export default Home;
