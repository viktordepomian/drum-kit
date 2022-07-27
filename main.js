window.addEventListener('keydown', (e) => {
    var whatKey = e.key;
    const audio = document.querySelector('audio[data-key="' + whatKey + '"]');
    if(audio){
        audio.play();
    } else{
        return;
    }
})