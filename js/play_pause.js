
var clientId = '933bc67dd9ff18eab500e8992a6b6a5f',
    webx = $('#containera');

$(document).ready(function () {
    myTrack = "";
    audioPlayer = new Audio(myTrack + '/stream?client_id=' + clientId);
});

$('#play').on('click', function () {
    // audioPlayer.play();
    $(audioPlayer).bind('timeupdate', updateTime);
    webx.addClass("playing");
});

var updateTime = function () {
    var thisPlayer = $(this);
    var widthOfProgressBar = Math.floor((100 / this.duration) * this.currentTime);
    $('#songIdForPorgessBar').css({
        'width': widthOfProgressBar + '%'
    });
}

// ! 2


$(document).ready(function () {
    //Your Script Goes Here
    $(".spinner-wrap").click(function () {
        var $this = $(this),
            audio = $this.siblings('audio')[0],
            bpm = Number($this.siblings('audio').data('bpm'));

        // console.log(bpm);


        if (audio.paused == false) {
            audio.pause();
            audio.currentTime = 0;
            $this.removeClass('playing');
        } else {
            audio.play();
            $this.addClass('playing');
        }
    });
});

const play_pause = () => {
    let play = document.getElementById("play")
    console.log(play)

    play.classList.toggle("fa-pause")





}


