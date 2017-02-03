import React, { Component } from 'react';
import PlaybookLibraryCard from './PlaybookLibraryCard.jsx';
import * as PlaybookLibraryActions from '../../actions/PlaybookLibraryActions.js'
import PlaybookLibraryStore from '../../stores/PlaybookLibraryStore.js'

class PlaybookLibrary extends Component {
    constructor(){
        super();
        this.getPlaybookLibrary = this.getPlaybookLibrary.bind(this);
        this.state = { playbooks: PlaybookLibraryStore.getAll()}; 
        PlaybookLibraryActions.loadPlaybookLibrary(); 
    }

    componentWillMount() {
        PlaybookLibraryStore.on("change", this.getPlaybookLibrary);
    }

    componentWillUnmount(){
        PlaybookLibraryStore.removeListener("change", this.getPlaybookLibrary);
    }

    getPlaybookLibrary()
    {
        this.setState({
            playbooks: PlaybookLibraryStore.getAll()
        });
    }

    render() {
        const Playbooks = this.state.playbooks.map((playbook) => <PlaybookLibraryCard key={playbook.id} id={playbook.id} name={playbook.name} owner={playbook.owner}/>);
       
        return (
                <div className="row">
                    {Playbooks}
                </div>
        );
    }
}

export default PlaybookLibrary;
