import React, { Component } from 'react';
import Playbook from './Playbook.jsx';

class PlaybookLibrary extends Component {
    render() {
        const Playbooks = [{name: "Playbook 1"},{name: "Playbook 2"},{name: "Playbook 3"}].map((playbook, i) => <Playbook key={i} name={playbook.name}/>);
        return (
                <div className="row">
                    {Playbooks}
                </div>
        );
    }
}

export default PlaybookLibrary;
