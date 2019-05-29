import React, { Component } from 'react'

import Header from './Header'

class App extends Component {

    handleLogoClick(header) {
        console.log(header, "Hello MG");
    } 

    render() {
        return (
            <Header
                onClick = {this.handleLogoClick}
            />
        )
    }
}

export default App