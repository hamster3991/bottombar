const list = document.querySelector('.auto__list');
const totalbet = document.querySelector('.totalbet__value');
const coin = document.querySelector('.coin__value');
const clickSound = new Audio;
clickSound.src = "sounds/Button_Click.wav";
let spinIcon = document.querySelector('.spin__ico');
let spin = document.querySelector('.spin');

document.querySelector('.auto').addEventListener('mouseover', function() {
    if (window.getComputedStyle(list).display === "none" && this.getAttribute("disabled") !== "disabled") {
        list.style.display = "block";
    }
});

document.querySelector('.auto').addEventListener('mouseout', function() {
    list.style.display = "none";
});

let buttons = document.getElementsByClassName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        clickSound.play();
    });
}

document.querySelector('.totalbet__button--plus').addEventListener('click', function() {
    let newValueTotalbet = Number(totalbet.innerHTML.replace("¥", "")) + 0.15;
    totalbet.innerHTML = "¥" + newValueTotalbet.toFixed(2).toString();
    let newValueCoin = Number(coin.innerHTML.replace("¥", "")) + 1;
    coin.innerHTML = "¥" + newValueCoin.toFixed(0).toString();
});

document.querySelector('.totalbet__button--minus').addEventListener('click', function() {
    let newValueTotalbet = Number(totalbet.innerHTML.replace("¥", "")) - 0.15;
    totalbet.innerHTML = "¥" + newValueTotalbet.toFixed(2).toString();
    let newValueCoin = Number(coin.innerHTML.replace("¥", "")) - 1;
    coin.innerHTML = "¥" + newValueCoin.toFixed(0).toString();
});

let spinTimes = 0;
let spinTimesElems = document.getElementsByClassName('spin-times');
for (let i = 0; i < spinTimesElems.length; i++) {
    spinTimesElems[i].addEventListener('click', function() {
        spinTimes = this.getAttribute('data-spin');
        list.style.display = "none";
        spin.click();
    });
}

spin.addEventListener('click', function() {
    let start = Date.now();
    spinAround(Date.now() - start);
    if (spinTimes > 0) {
        let timerId = setInterval(function() {spinAround(Date.now() - start);}, 2500);
        setTimeout(() => { clearInterval(timerId);}, 2500 * (spinTimes - 1));
    }
});

let spinAround = function(timePassed) {
    setTimeout(function () {
        spin.setAttribute('disabled', 'disabled');
        spinIcon.classList.add('stop');
    }, timePassed);
    setTimeout(function () {
        spin.removeAttribute('disabled');
    }, 1000 + timePassed);
    setTimeout(function () {
        spinIcon.classList.remove('stop');
    }, 2000 + timePassed);
    setTimeout(function () {
        spinIcon.classList.add('rotate');
    }, 2100 + timePassed);
    setTimeout(function () {
        spinIcon.classList.remove('rotate');
    }, 4100 + timePassed);
}