const successSound = new Audio('/success.mp3');
successSound.volume = 0.5;
const failureSound = new Audio('/failure.mp3');
failureSound.volume = 0.5;

const Sound = {
    success: () => successSound.play(),
    failure: () => failureSound.play()
}

export default Sound;