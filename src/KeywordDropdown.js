import React, { Component } from 'react'

export default class KeywordDropdown extends Component {
    render() {
        return (
            <div>
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
        )
    }
}
