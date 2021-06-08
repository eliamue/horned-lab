import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="stabby-bois">
                <h1>WANTED FOR MURDER: {this.props.title}</h1>
                <img src={this.props.url} alt={this.props.keyword}/>
                <h3>He's a {this.props.keyword}</h3>
                <section>Guess what? {this.props.description}.</section>
                <p className="number-horns">This goofball has {this.props.horns} horns!</p>
            </div>
        )
    }
}
