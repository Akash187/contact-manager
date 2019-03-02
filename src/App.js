import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faHome, faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';

library.add(faTrash, faEdit, faHome, faPlus, faQuestion);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Contacts/>
      </div>
    );
  }
}

export default App;
