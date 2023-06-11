function playSound(idSoundElement) {
    document.querySelector(idSoundElement).play();
}

const keysList = document.querySelectorAll('.tecla')
keysList.forEach( (element) => {
    const idSoundElement = `#som_${element.classList[1]}`
    element.onclick = function () {
        playSound(idSoundElement);
    };
    element.onkeydown = function (event) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            element.classList.add('ativa');
        }
    }
    element.onkeyup = function () {
        element.classList.remove('ativa');
    }
})

