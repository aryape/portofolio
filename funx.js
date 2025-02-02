function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Therapy - Rex Orange County"];
const yp = document.getElementById("typewriter");

let sleepTime = 150;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
        yp.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
        yp.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
        curPhraseIndex = 0;
    } else {
        curPhraseIndex++;
    }
    }
};

writeLoop();

    const audio = document.querySelector('#audiox')
    const audioPlayer = document.querySelector('.audio_player');
    const playBtn = document.querySelector('#audio_play');

    // check if song is playing
    function isAudioPlaying() {
        return audioPlayer.classList.contains('playing');
    }

    // play audio of current song
    function playAudio() {
        audioPlayer.classList.add('playing');
        playBtn.querySelector('i').classList.remove('ri-play-circle-fill');
        playBtn.querySelector('i').classList.add('ri-pause-circle-line');
        audio.play();
    }

    // pause audio of current song
    function pauseAudio() {
        audioPlayer.classList.remove('playing');
        playBtn.querySelector('i').classList.add('ri-play-circle-fill');
        playBtn.querySelector('i').classList.remove('ri-pause-circle-line');
        audio.pause();
    }

    playBtn.addEventListener('click', () => {
        isAudioPlaying() ? pauseAudio() : playAudio();
    });

  
