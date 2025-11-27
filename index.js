var btns = document.querySelectorAll(".drum")

// for (let i = 0; i < btns.length; i++) {
//     const element = btns[i];
//     element.addEventListener("click", function () {
//         playDrum(this.innerHTML);
//     })
// }

for (let i = 0; i < btns.length; i++) {
    const element = btns[i];
    element.addEventListener("click", () => playDrum (element.innerHTML))
}

document.addEventListener("keydown", (event) => playDrum(event.key))

function playDrum(buttonName){
    buttonAnimation(buttonName);
    switch (buttonName) {
        case 'w':
            var w = new Audio('./sounds/tom-1.mp3')
            w.play()
            break;
        case 'a':
            var a = new Audio('./sounds/tom-2.mp3')
            a.play()
            break;
        case 's':
            var s = new Audio('./sounds/tom-3.mp3')
            s.play()
            break;
        case 'd':
            var d = new Audio('./sounds/tom-4.mp3')
            d.play()
            break;
        case 'j':
            var j = new Audio('./sounds/crash.mp3')
            j.play()
            break;
        case 'k':
            var k = new Audio('./sounds/kick-bass.mp3')
            k.play()
            break;
        case 'l':
            var l = new Audio('./sounds/snare.mp3')
            l.play()
            break;
        default:
            break;
    }
}

function buttonAnimation(buttonName){
    var activeButton = document.querySelector(`.${buttonName}`);

    activeButton.classList.add('pressed');
    
    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 145)
}