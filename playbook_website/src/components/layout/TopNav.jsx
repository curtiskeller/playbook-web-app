import React, { Component } from 'react';
import { Link } from 'react-router'
import { IndexLink } from 'react-router'




class TopNav extends Component {

    getRandomId() {
      var min = 1;
      var max = 999999;
      return Math.floor(Math.random() * (max - min)) + min;
    }

    render() {
        const scratchId = this.getRandomId();
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand  mr-auto">Chat Demo</span>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <IndexLink activeStyle={{ color: '#53acff' }} className="nav-link" to='/'>
                                <span>Home</span>
                            </IndexLink>
                        </li>
                        <li className="nav-item">
                            <Link activeStyle={{ color: '#53acff' }} className="nav-link" to={'/scratch/' + scratchId}>
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
