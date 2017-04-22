import React, { Component } from 'react';

class FileUploader extends Component {
    handleFileSelect(e) {
        var files = e.dataTransfer.files; // FileList object.
        console.log(files);
        //convert File to useable data type.
    }

    silenceEventDefaults(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    handleDragOver(e) {
        e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        //update css
    }
    handleDragEnd(e) {
        //update css
    }

    componentDidMount() {
        var dropZone = document.getElementById('drop_zone');
        ['drag','dragstart','dragend','dragover','dragenter','dragleave','drop']
            .forEach(event => dropZone.addEventListener(event, this.silenceEventDefaults));
        ['dragover','dragenter']
            .forEach(event => dropZone.addEventListener(event, this.handleDragOver));
        ['dragleave','dragend','drop']
            .forEach(event => dropZone.addEventListener(event, this.handleDragEnd));
        dropZone.addEventListener('drop', this.handleFileSelect, false);
    }

    render() {
        return (
            <div>
                <div id="drop_zone">drop files here</div>
                <p id="list"></p>
            </div>
        );
    }
}

export default FileUploader;
