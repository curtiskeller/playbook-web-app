import React, { Component } from 'react';
import * as EditorCanvasActions from '../../actions/EditorCanvasActions.js'
import EditorCanvasStore from '../../stores/EditorCanvasStore.js'
import PlaybookImg from '../../../static/de_mirage.png';
import { Container } from 'pixi.js';

class EditorCanvas extends Component {

    componentWillMount() {
        const { topic } = this.props;
        EditorCanvasActions.joinDesignSession(topic);
    }

    componentDidMount() {
        EditorCanvasActions.updateProperty(this.props.topic,"name","coreyTest")

        var renderer = PIXI.autoDetectRenderer(1100, 800);

        document.getElementById("canvas").appendChild(renderer.view);

        //Create a container object called the `stage`
        var stage = new PIXI.Container();

        PIXI.loader.add(PlaybookImg).load(() => {

            var backgroundImage = new PIXI.Sprite(PIXI.loader.resources[PlaybookImg].texture)
            stage.addChild(backgroundImage);
            renderer.render(stage);

        })
    }

    render() {
        return (
            <div id="canvas"></div>
        );
    }
}

export default EditorCanvas;

