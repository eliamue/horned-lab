import { Component } from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import ImageItem from './ImageItem.js';
import images from './data.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageItem images={images}/>
        <ImageList />
      </div>
    )
  }
}
