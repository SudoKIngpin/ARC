let track_name = document.querySelector("#trackname");
let track_art = document.querySelector(".track_art");



let track_index = 0;
let isPlaying = false;

let playpause_btn = document.querySelector(".iconplaypause");
let next_btn = document.querySelector(".iconnext");
let prev_btn = document.querySelector(".iconprev");
let updateTimer;



let curr_track = document.createElement('audio'); //audio element 

let track_list = [
    {
        name: "Hanuman Chalisa",
        image: "/assets/media/songimg/h1.jpg",
        path: "/assets/media/song/hanuman.mp3"
    },
    {
        name: "Iron Man Theme",
        image: "/assets/media/songimg/s1.jpg",
        path: "/assets/media/song/horror.mp3"
    },
    {
        name: "Horror",
        image: "/assets/media/songimg/s1.jpg",
        path: "/assets/media/song/horror.mp3",
    },
];

function loadTrack(track_index) {
    clearInterval(updateTimer);
    // resetValues();
    curr_track.src = track_list[track_index].path;
    curr_track.load();
}


track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
track_name.textContent = track_list[track_index].name;

loadTrack(track_index);

function playpauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true; //Pause btn
    playpause_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#1afdc6" d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>';
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false; //play btn
    playpause_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path fill="#1afdc6" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>';
}
