import React, { Component } from 'react'

export default class FilterDropdown extends Component {
    render() {
        return (
            <div>
                <label>
                    How many horns do you dig?
                    <select onChange={this.handleHornsChange}>
                        <option value=''>I want to gaze upon all these fine fellas</option>
                        <option value='1'>One horn</option>
                        <option value='2'>Two horns</option>
                        <option value='3'>Three horns</option>
                        <option value='100'>More than three horns</option>
                    </select>
                </label>
            </div>
        )
    }
}
