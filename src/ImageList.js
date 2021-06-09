import './index.css';
import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
import images from './data.js';

export default class ImageList extends Component {

    state = {
        filteredHorns: '',
        filteredKeywords: ''
    }

    handleHornsChange = (event) => {
        this.setState({ filteredHorns: event.target.value })
    }

    handleKeywordChange = (event) => {
        this.setState({ filteredKeywords: event.target.value })
    }

    render() {

        let stabbyBois = images;

        if (this.state.filteredHorns) {
            stabbyBois = images.filter(stabbyBois => stabbyBois.horns === +this.state.filteredHorns)
        }

        if (this.state.filteredKeywords) {
            stabbyBois = images.filter(stabbyBois => stabbyBois.keyword === this.state.filteredKeywords)
        }

        return (
        <div>
            <div className="dropdown">
                <label>
            How many horns do you want to see?
                    <select onChange={this.handleHornsChange}>
                        <option value=''>I want to gaze upon all these fine fellas</option>
                        <option value='1'>One horn</option>
                        <option value='2'>Two horns</option>
                        <option value='3'>Three horns</option>
                        <option value='100'>More than three horns</option>
                    </select>
                </label>
            <br></br>
                <label>
                    Who do you want to party with?
                    <select onChange={this.handleKeywordChange}>
                        <option value=''>All these doods</option>
                        <option value='rhino'>Rhino</option>
                        <option value='narwhal'>Narwhal</option>
                        <option value='unicorn'>Unicorn</option>
                        <option value='unilego'>Unilego</option>
                        <option value='triceratops'>Triceratops</option>
                        <option value='markhor'>Markhor</option>
                        <option value='mouflon'>Mouflon</option>
                        <option value='addax'>Addax</option>
                        <option value='chameleon'>Chameleon</option>
                        <option value='lizard'>Lizard</option>
                        <option value='dragon'>Dragon</option>
                    </select>
                </label>
            </div>

            <section className="infodump">
            {
                stabbyBois.map((stabbyBois, i) => 
                    <ImageItem
                    url={stabbyBois.url}
                    title={stabbyBois.title}
                    description={stabbyBois.description}
                    keyword={stabbyBois.keyword}
                    horns={stabbyBois.horns} 
                    key={i}
                    />)
            }
            </section>
        </div>
        
        )
    }
}