import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div>
                <header className='Logo'><Link to="/" className="Link_logo">Dictionary</Link></header>
            </div>
        );
    }
}

export default Header;