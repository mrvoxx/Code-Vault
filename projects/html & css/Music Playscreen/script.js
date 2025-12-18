let playPausebtn = document.getElementById("playPause");
let audio = document.getElementsByTagName("audio")[0];

function toggleplaypause(){
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }
}
playPausebtn.addEventListener("click",toggleplaypause);