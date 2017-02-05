import React, { Component } from 'react';
import NavLink from './NavLink.jsx';

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
                        <NavLink url="/" text="Home" />
                        <NavLink url="/scratch" text="Scratch" />
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
