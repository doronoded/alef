const successSound = new Audio('/alef/success.mp3');
successSound.volume = 0.5;
const failureSound = new Audio('/alef/failure.mp3');
failureSound.volume = 0.5;

const Sound = {
    success: () => successSound.play(),
    failure: () => failureSound.play()
}

export default Sound;