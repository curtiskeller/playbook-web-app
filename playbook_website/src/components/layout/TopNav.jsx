import React, { Component } from 'react';
import { Link } from 'react-router'
import { IndexLink } from 'react-router'

class TopNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand  mr-auto">Playbook Configurator</span>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <IndexLink activeStyle={{ color: '#53acff' }} className="nav-link" to='/'>
                                <span>Home</span>
                            </IndexLink>
                        </li>
                        <li className="nav-item">
                            <Link activeStyle={{ color: '#53acff' }} className="nav-link" to='/scratch'>
                                <span>Scratch</span>
                            </Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Username
                </span>
                </div>
            </nav>
        );
    }
}

export default TopNav;
