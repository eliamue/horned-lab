import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
import images from './data.js';

export default class ImageList extends Component {

    state = {
        filteredHorns: '',
    }

    handleHornsChange = (event) => {
        this.setState({ horns: event.target.value })
    }

    render() {

        const stabbyBois = images;

        let filteredHorns = stabbyBois;

        if (this.state.filteredHorns) {
            filteredHorns = stabbyBois.filter(stabbyBois => stabbyBois.horns === this.state.filteredHorns)
        }

        return (
        <div>
            <label>
                <select onChange={this.handleHornsChange}>
                    <option value="one">One horn</option>
                    <option value="two">Two horns</option>
                    <option value="three">Three horns</option>
                    <option value="more">More than three horns</option>
                </select>
            </label>
            <button>Submit!</button>
            <section className="infodump">
            {
                filteredHorns.map(stabbyBois => 
                    <ImageItem
                    url={stabbyBois.url}
                    title={stabbyBois.title}
                    description={stabbyBois.description}
                    keyword={stabbyBois.keyword}
                    horns={stabbyBois.horns} />)
            }
            </section>
        </div>
        
        )
    }
}