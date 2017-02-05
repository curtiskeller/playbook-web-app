import React, { Component } from 'react';
import { Link } from 'react-router'
import RouteStore from '../../stores/RouteStore'

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
        RouteStore.on("change", this.getActiveState);
    }

    componentWillUnmount(){
        RouteStore.removeListener("change", this.getActiveState);
    }

    getActiveState()
    {
        this.setState({
            active: RouteStore.getRoute() === this.props.url 
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
