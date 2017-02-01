import React, { Component } from 'react';

class TopNav extends Component {
    render() {
        return (
                <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                    <span className="navbar-brand  mr-auto">Playbook Configurator<span className="sr-only">(current)</span></span>
                    <span className="navbar-text">
                            Username
                    </span>
                </nav>
        );
    }
}

export default TopNav;
