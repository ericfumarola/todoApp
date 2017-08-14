import React, { Component } from 'react';
import {DbFirebase} from './../database/DbFirebase';
import firebase from 'firebase';
import Search from './../components/Search';
import List from './../components/List';

// styles
import {Container} from './../styled/general.styles';
import {ListItems} from './../styled/list.styles';

//
// if (!firebase.apps.length) {
//
// }

class Home extends Component {
  constructor() {
    super();

    this.app = firebase.initializeApp(DbFirebase),
    this.db  = this.app.firebase.database().ref().child('notes');
    this.state = {
      notes : [
        {
          content: [
            'saraza',
            'tu vieja',
            'sasas',
            'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa',
            'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa',
            'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa'
          ],
          id : [
            'saraza',
            'tu vieja',
            'sasas',
            'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa',
            'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa',
            'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa'
          ],
        },
        {
          content: [
            'saraza',
            'tu vieja',
            'sasas',
            'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa',
            'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa',
            'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa'
          ],
          id : [
            'saraza',
            'tu vieja',
            'sasas',
            'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa',
            'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa',
            'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa'
          ],
        }
      ],

    }

  }

  componentWillMount() {
    const prevNotes = this.state.notes;

    this.database.on('value', (snap) => {
      prevNotes.push({
        content : snapshot.val().content,
        id      : snap.key
      })

      this.setState({
        notes:prevNotes
      })
    })
  }

  addNote(note) {
    this.database.push().set({content:note})
  }

  render () {
    return (
      <Container>
        <Search />
        <ListItems>
          {this.state.notes.map((note, index) => <List cards={note.content} key={index}/>)}
        </ListItems>
      </Container>
    )
  }
}

export default Home;
