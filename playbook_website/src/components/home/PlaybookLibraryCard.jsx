import React, { Component } from 'react';
import PlaybookImg from '../../../static/de_dust2.jpg';
import { Link } from 'react-router'

class PlaybookLibraryCard extends Component {
    render() {
        const { name } = this.props;
        const { owner } = this.props;
        const { id } = this.props;
        return (
            <div className="col-md-4">
                <Link to={'/playbookOverview/' + id}>
                    <div className="card">
                        <div className="thumbnail">
                            <img src={PlaybookImg} alt="playbook" />
                        </div>
                        <div className="card-img-overlay">
                            <h4 className="card-title">{name}</h4>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default PlaybookLibraryCard;