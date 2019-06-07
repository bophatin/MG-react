import React, { Component } from 'react'
import Card from './Card'
import mod_mode from '../modules/mod_mode'


class Mode extends Component {

    constructor() {
        super()
        this.state = {
            mod_mode
        }
    }

    render() {

        const Cards = Object
        .keys(this.state.mod_mode)
        .map(key => <Card key={key} details={this.state.mod_mode[key]} />);

        return(
            <div>
               {Cards}
            </div>
        )
    }
}

export default Mode;