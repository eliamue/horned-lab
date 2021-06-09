import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="stabby-bois">
                <h2>WANTED FOR MURDER: {this.props.title}</h2>
                <img src={this.props.url} alt={this.props.keyword}/>
                <h3>He's a {this.props.keyword}</h3>
                <section>TURN DOWN FOR HWHAT: {this.props.description}.</section>
                <p className="number-horns">How many horns does this goofball have? <h3>{this.props.horns}!</h3></p>
                <img src='https://freepngimg.com/thumb/decorative_line_black/11-2-decorative-line-black-png-picture.png' alt='' />
            </div>
        )
    }
}
