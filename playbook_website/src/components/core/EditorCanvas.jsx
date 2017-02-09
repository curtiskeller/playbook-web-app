import React, { Component } from 'react';
import {PIXI} from 'pixi.js';

class EditorCanvas extends Component {
    
    componentDidMount(){
        //Create the renderer
        var renderer = PIXI.autoDetectRenderer(256, 256);

        document.getElementById("canvas").appendChild(renderer.view);

        //Create a container object called the `stage`
        var stage = new PIXI.Container();

        renderer.render(stage);
    }

    render() {
        return (
            <div id="canvas"></div>
        );
    }
}

export default EditorCanvas;

