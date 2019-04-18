window.onload = function(){
    document.getElementById("enterButton").onclick = function () {
        window.location.href = "/map";
    }
    document.getElementById("exitButton").onclick = function () {
        window.location.href = "/";
    }
    document.getElementById("musicButton").onclick = function () {
        var music = document.getElementById("musicButton");
        var play = 1;
        if (play == 1){
          music.pause();
          play = 0;
        }
        else if (play == 0) {
          music.play();
          play = 1;
        }
    }
}
