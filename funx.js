function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Therapy - Rex Orange County"];
const yp = document.getElementById("typewriter");

let sleepTime = 100;

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
