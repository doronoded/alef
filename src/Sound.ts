const successSound = new Audio('/alef/success.mp3');
successSound.volume = 0.5;
const failureSound = new Audio('/alef/failure.mp3');
failureSound.volume = 0.5;
const tapSound = new Audio('/alef/tap.mp3');
tapSound.playbackRate = 10;

const Sound = {
    success: () => successSound.play(),
    failure: () => failureSound.play(),
    tap: () => tapSound.play()
}

export default Sound;