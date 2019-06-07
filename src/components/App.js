import React, { Component } from 'react'
import Anime from 'react-anime'
import { Link } from 'react-router-dom';

import '../css/HomePage.css';

class App extends Component {

    render() {

        let animeProps = {
            opacity: [0, 1],
            translateX: [-400, 0],
            delay: (el, i) => i * 100
        };

        return (
            <div>
                <nav className="Main-menu">
                    <ul>
                        <Anime {...animeProps}>
                            <li><Link to="/archi" className="Link_nav">Archi</Link></li>
                            <li><Link to="/mode" className="Link_nav">Mode</Link></li>
                        </Anime>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default App;