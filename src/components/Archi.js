import React, { Component } from 'react'
import Card from './Card'
import mode_archi from '../modules/mod_archi'


class Archi extends Component {

    constructor() {
        super()
        this.state = {
            mode_archi
        }
    }

    render() {

        const Cards = Object
        .keys(this.state.mode_archi)
        .map(key => <Card key={key} details={this.state.mode_archi[key]} />);

        return(
            <div>
               {Cards}
            </div>
        )
    }
}

export default Archi;