
const play_pause = () => {
    let play = document.getElementById("play")
    console.log(play)
    play.classList.toggle("fa-pause")
}



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

// const play_pause = () => {
//     let play = document.getElementById("play")
//     console.log(play)
//     play.classList.toggle("fa-pause")
// }


// ! bottom music player
function calculateTotalValue(length) {
    var minutes = Math.floor(length / 60),
        seconds_int = length - minutes * 60,
        seconds_str = seconds_int.toString(),
        seconds = seconds_str.substr(0, 2),
        time = minutes + ':' + seconds

    return time;
}

function calculateCurrentValue(currentTime) {
    var current_hour = parseInt(currentTime / 3600) % 24,
        current_minute = parseInt(currentTime / 60) % 60,
        current_seconds_long = currentTime % 60,
        current_seconds = current_seconds_long.toFixed(),
        current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

    return current_time;
}

function initProgressBar() {
    var player = document.getElementById('player');
    var length = player.duration
    var current_time = player.currentTime;

    // calculate total length of value
    var totalLength = calculateTotalValue(length)
    jQuery(".end-time").html(totalLength);

    // calculate current value time
    var currentTime = calculateCurrentValue(current_time);
    jQuery(".start-time").html(currentTime);

    var progressbar = document.getElementById('seekObj');
    progressbar.value = (player.currentTime / player.duration);
    progressbar.addEventListener("click", seek);

    if (player.currentTime == player.duration) {
        $('#play-btn').removeClass('pause');
    }

    function seek(evt) {
        var percent = evt.offsetX / this.offsetWidth;
        player.currentTime = percent * player.duration;
        progressbar.value = percent / 100;
    }
};

function initPlayers(num) {
    // pass num in if there are multiple audio players e.g 'player' + i

    for (var i = 0; i < num; i++) {
        (function () {

            // Variables
            // ----------------------------------------------------------
            // audio embed object
            var playerContainer = document.getElementById('player-container'),
                player = document.getElementById('player'),
                isPlaying = false,
                playBtn = document.getElementById('play-btn');

            // Controls Listeners
            // ----------------------------------------------------------
            if (playBtn != null) {
                playBtn.addEventListener('click', function () {
                    togglePlay()
                });
            }

            // Controls & Sounds Methods
            // ----------------------------------------------------------
            function togglePlay() {
                if (player.paused === false) {
                    player.pause();
                    isPlaying = false;
                    $('#play-btn').removeClass('pause');

                } else {
                    player.play();
                    $('#play-btn').addClass('pause');
                    isPlaying = true;
                }
            }
        }());
    }
}

initPlayers(jQuery('#player-container').length);





