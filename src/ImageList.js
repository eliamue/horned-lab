import './index.css';
import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
import images from './data.js';
import Dropdown from './Dropdown.js';


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

        const categoriesWithDuplicates = stabbyBois.map(stabbyBois => stabbyBois.horns)
        const setOfCategories = new Set(categoriesWithDuplicates);

        const hornsOptions = Array.from(setOfCategories);

        const keywordOptions = Array.from(new Set(stabbyBois.map(stabbyBois => stabbyBois.keyword)));

    return (

        <div>
            <label>Filter by number of horns</label>
                <Dropdown
                    options={hornsOptions}
                    handleChange={this.handleHornsChange} />
                <br></br>
            <label>Filter by species</label>
                <Dropdown
                    options={keywordOptions}
                    handleChange={this.handleKeywordChange} />

            <section className="infodump">
                {stabbyBois.map((stabbyBois, i) => 
                    <ImageItem
                    url={stabbyBois.url}
                    title={stabbyBois.title}
                    description={stabbyBois.description}
                    keyword={stabbyBois.keyword}
                    horns={stabbyBois.horns} 
                    key={i}
                    />)}
            </section>
        </div>
        )
    }
}