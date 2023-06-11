function playSound(idSoundElement) {
    element = document.querySelector(idSoundElement);
    if (element && element.localName === 'audio') {
        element.play();
    } else {
        console.log('Element or selector not found!')
    }
}

const keysList = document.querySelectorAll('.tecla')
keysList.forEach( (element) => {
    const idSoundElement = `#som_${element.classList[1]}`
    element.onclick = function () {
        playSound(idSoundElement);
    };
    element.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            element.classList.add('ativa');
        }
    }
    element.onkeyup = function () {
        element.classList.remove('ativa');
    }
})

