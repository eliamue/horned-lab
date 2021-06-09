import { Component } from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageList />
      </div>
    )
  }
}
