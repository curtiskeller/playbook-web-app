import React, { Component } from 'react';
import PlaybookLibraryCard from './PlaybookLibraryCard.jsx';
import axios from 'axios';

class PlaybookLibrary extends Component {
    constructor(){
        super();
        this.state = {playbooks: []}
    }
    componentWillMount(){
        this.getPlaybooks();
    }
    getPlaybooks() {
        axios('/playbooklibrary').then((response) => { this.setState({playbooks: response.data})});
    }
    render() {
        const Playbooks = this.state.playbooks.map((playbook, i) => <PlaybookLibraryCard key={playbook.id} id={playbook.id} name={playbook.name} owner={playbook.owner}/>);
       
        return (
                <div className="row">
                    {Playbooks}
                </div>
        );
    }
}

export default PlaybookLibrary;
