"use strict";

let boxArray = [];
let idsArray = [];

function shuffle_sort() {
    return Math.random() - 0.5;
}

function shuffle() {
    idsExtractor();
    idsArray.sort(shuffle_sort);
    resizeHandler()
}

function idsExtractor(){
    idsArray = [];
    for (let index = 0; index < boxArray.length; index++) {
        idsArray.push(boxArray[index].id);
    }
}

function resizeHandler() {
    if (window.screen.width < 960) {
        for (let i = 0; i < 9; i++) {
            let boxId = "box" + i;
            for (let index = 0; index < boxArray.length; index++) {
                if(idsArray[i] === boxArray[index].id){
                    document.getElementById(boxId).style.backgroundColor = "#EBEBEB";
                    document.getElementById(boxId).style.borderLeft = "10px solid " + boxArray[index].color;
                    document.getElementById(boxId).innerText = boxArray[index].value;
                    break;
                }
            }
        }
    } else {
        for (let i = 0; i < 9; i++) {
            let boxId = "box" + i;
            for (let index = 0; index < boxArray.length; index++) {
                if(idsArray[i] === boxArray[index].id){
                    document.getElementById(boxId).style.backgroundColor = boxArray[index].color;
                    document.getElementById(boxId).style.borderLeft = "none";
                    document.getElementById(boxId).innerText = boxArray[index].value;
                    break;
                }
            }
        }
    }
}

function init() {
    boxArray = [{
        id: 0,
        value: 1,
        color: "#528AAE"
        },
        {
        id: 1,
        value: 2,
        color: "#2B8EAD"
        },
        {
        id: 2,
        value: 3,
        color: "#035569"
        },
        {
        id: 3,
        value: 4,
        color: "#6F98A8"
        },
        {
        id: 4,
        value: 5,
        color: "#2F454E"
        },
        {
        id: 5,
        value: 6,
        color: "#58CCED"
        },
        {
        id: 6,
        value: 7,
        color: "#72C3DC"
        },
        {
        id: 7,
        value: 8,
        color: "#BFBFBF"
        },
        {
        id: 8,
        value: 9,
        color: "#1E3F66"
        }
    ];
    idsExtractor();
    resizeHandler();
}

init();

window.addEventListener("resize", resizeHandler);