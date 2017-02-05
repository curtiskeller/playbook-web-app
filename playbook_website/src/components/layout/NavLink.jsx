import React, { Component } from 'react';
import { Link } from 'react-router'
import NavLinkStore from '../../stores/NavLinkStore.js'

class NavLink extends Component {
    constructor(){
        super();
    
        this.getActiveState = this.getActiveState.bind(this);
        this.state = { active: false}; 
    }
    
    isActive() {
        return 'nav-item ' + (this.state.active ? 'active' : '');
    }

    componentWillMount() {
        NavLinkStore.on("change", this.getActiveState);
    }

    componentWillUnmount(){
        NavLinkStore.removeListener("change", this.getActiveState);
    }

    getActiveState()
    {
        this.setState({
            active: NavLinkStore.getRoute() === this.props.url 
        });
    }

    render() {
        return (
            <li className={this.isActive()}>
                <Link className="nav-link" to={this.props.url}>
                    <span>{this.props.text}</span>
                </Link>
            </li>
        );
    }
}

export default NavLink;
