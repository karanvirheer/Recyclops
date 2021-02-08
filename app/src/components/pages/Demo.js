import React from 'react';
import { useState, useEffect } from 'react';
import Sketch from "react-p5";
import ml5 from "ml5";

const database = {
    "aluminium foil": { "bin": "garbage", "tip": "" },
    "battery": { "bin": "hazardous waste", "tip": "Place in clear plastic bag and take this item to one of the city's drop-off depots." },
    "blister pack": { "bin": "garbage", "tip": "" },
    "bottle cap": { "bin": "garbage", "tip": "" },
    "broken glass": { "bin": "garbage", "tip": "Wrap sharp edges with thick or multi-layered material (e.g. newspaper, cardboard, plastic, fabric) before placing in the garbage." },
    "can": { "bin": "recycling", "tip": "Empty and rinse (if necessary and possible) this item before placing it in the recycling." },
    "cardboard": { "bin": "recycling", "tip": "Remove any plastic/foil liners or windows and place those in the garbage. Flatten and place in the recycling." },
    "carton": { "bin": "recycling", "tip": "Empty and rinse (if necessary and possible); remove and discard the straw in the garbage. Place the carton/box in your recycling without flattening it." },
    "cigarette": { "bin": "garbage", "tip": "Place this extinguished and cooled item in the garbage." },
    "cup": { "bin": "garbage", "tip": "If applicable, remove plastic lid and place in recycling." },
    "food waste": { "bin": "compost", "tip": "" },
    "glass": { "bin": "recycling", "tip": "" },
    "lid": { "bin": "recycling", "tip": "" },
    "other plastic": { "bin": "garbage", "tip": "" },
    "paper": { "bin": "recycling", "tip": "If item is soiled with food/beverage, place it in the compost." },
    "paper bag": { "bin": "recycling", "tip": "If lined with wax or plastic (can be revealed by ripping slowly), then place this item in the garbage." },
    "plastic bag & wrapper": { "bin": "garbage", "tip": "If lined with wax or plastic (can be revealed by ripping slowly), then place this item in the garbage." },
    "plastic bottle": { "bin": "recycling", "tip": "Empty and rinse (if necessary and possible) this item before placing it with the lid on, into the recycling." },
    "plastic container": { "bin": "recycling", "tip": "Place any black and/or compostable plastic in the garbage. Place this empty and clean item in the recycling." },
    "plastic glooves": { "bin": "garbage", "tip": "" },
    "plastic utensils": { "bin": "recycling", "tip": "Place clean item in the recycling. Place all black and compostable plastic in the garbage." },
    "pop tab": { "bin": "recycling", "tip": "" },
    "rope & strings": { "bin": "garbage", "tip": "" },
    "scrap metal": { "bin": "metal", "tip": "Please break down, bundle and/or tie where possible before setting the item out for curbside pick up." },
    "shoe": { "bin": "garbage", "tip": "Alternatively, consider donating reusable items to non-profit organizations." },
    "squeezable tube": { "bin": "garbage", "tip": "" },
    "straw": { "bin": "garbage", "tip": "" },
    "styrofoam piece": { "bin": "recycling", "tip": "Any type of black foam is not accepted and should be placed in the garbage. Empty and rinse (if necessary and possible) this item before placing it in the recycling." },
    "unlabeled litter": { "bin": "garbage", "tip": "" }
};

function Demo(props) {

    let classifier;
    // let URL = 'https://teachablemachine.withgoogle.com/models/voqdKd4Z3/';
    let URL = 'https://teachablemachine.withgoogle.com/models/OGpAH453K/';
    let video;
    let WIDTH = 320;
    let HEIGHT = 240;
    let CANVAS;

    let garbage;

    let garbage_label;
    let bin_label;
    let tip_label;
    let info_div;

    const preload = (p5) => {
        classifier = ml5.imageClassifier(URL + 'model.json', () => console.log("model loaded!"));
    }

    const setup = (p5) => {
        CANVAS = p5.createCanvas(WIDTH, HEIGHT);
        CANVAS.style('display', 'block');

        video = p5.createCapture(p5.VIDEO);
        video.hide();

        garbage_label = p5.select('#garbage-label')
        garbage_label.style('display', 'inline');

        bin_label = p5.select('#bin-label')
        bin_label.style('display', 'inline');

        tip_label = p5.select('#tip-label')
        info_div = p5.select("#demo-info")
        // tip_label.style('display', 'block');

        windowResized(p5)
        classifyVideo();
    }

    const draw = (p5) => {
        p5.background(255);
        displayVideo(p5)
    }

    const classifyVideo = () => {
        classifier.classify(video, gotResult);
    }

    const displayVideo = (p5) => {
        p5.push()
        p5.imageMode(p5.CENTER);
        p5.translate(p5.width, 0);
        p5.scale(-1, 1);
        p5.image(video, WIDTH / 2, HEIGHT / 2);
        p5.pop()
    }

    const gotResult = (error, results) => {
        if (error) {
            console.error(error);
            return;
        }
        // garbage_label.center('horizontal')
        updateInfo(results[0].label)
        classifyVideo();
    }

    const updateInfo = (label) => {
        garbage = label.toLowerCase();
        garbage_label.html(garbage)

        let data = database[garbage];
        let bin = data['bin'].toUpperCase()
        let tip = data['tip']
        bin_label.html(bin)
        tip_label.html(tip)
    }

    const windowResized = (p5) => {
        WIDTH = p5.max(320, p5.windowWidth / 1.5)
        WIDTH = p5.min(600, WIDTH)
        HEIGHT = 3 * WIDTH / 4
        p5.resizeCanvas(WIDTH, HEIGHT)
        var x = (p5.windowWidth - p5.width) / 2;
        var y = (p5.windowHeight - p5.height) / 2;
        CANVAS.position(x, y);

        // garbage_label.position(x, y + p5.min(HEIGHT, 500) + 10)
        // bin_label.position(x, y + p5.min(HEIGHT, 500) + 25)

        // ask_recyclops.position(x - 140 + WIDTH, y + p5.min(HEIGHT, 500) + 10)

        // garbage_label.position(p5.windowWidth / 2 , y  + p5.min(HEIGHT, 500))
        // garbage_label.center('horizontal')
        info_div.style('width', WIDTH + 'px');
        info_div.position(x, y + p5.min(HEIGHT, 500) + 10)
        tip_label.style('width', WIDTH + 'px');
        tip_label.position(x, y + p5.min(HEIGHT, 500) + 40)

        p5.image(video, WIDTH / 2, HEIGHT / 2);
    }

    const mousePressed = (p5) => {

    }

    const mouseReleased = (p5) => {

    }

    const componentDidMount = (p5) => {

    }

    return (<>
        <Sketch preload={preload} setup={setup} draw={draw} mousePressed={mousePressed} mouseReleased={mouseReleased} windowResized={windowResized} componentDidMount={componentDidMount} />
        <div id="demo-info">
            <div id="garbage-label"></div>
            <div id="bin-label"></div>
        </div>
        <div id="tip-label"></div>

    </>);

}

export default Demo