function changeh1(i) {
    let h1 = document.getElementsByTagName('h1')[0];
    h1.innerText = i.value;
}
function changeP(i) {
    let p = document.getElementsByTagName('p')[0];
    p.innerText = i.value;
}
var elementH1 = document.querySelector('h1');
var elementBtnIncreaseFont = document.getElementById('increase-font');
var elementBtnDecreaseFont = document.getElementById('decrease-font');
fontSize = 100;
increaseDecrease = 10;
elementBtnIncreaseFont.addEventListener('click', function (event) {
    fontSize = fontSize + increaseDecrease;
    elementH1.style.fontSize = fontSize + '%';
});
elementBtnDecreaseFont.addEventListener('click', function (event) {
    fontSize = fontSize - increaseDecrease;
    elementH1.style.fontSize = fontSize + '%';
});
var elementp = document.querySelector('p');
var elementBtnIncreaseFont2 = document.getElementById('increase-font2');
var elementBtnDecreaseFont2 = document.getElementById('decrease-font2');
fontSize = 100;
increaseDecrease2 = 10;
elementBtnIncreaseFont2.addEventListener('click', function (event) {
    fontSize = fontSize + increaseDecrease2;
    elementp.style.fontSize = fontSize + '%';
});
elementBtnDecreaseFont2.addEventListener('click', function (event) {
    fontSize = fontSize - increaseDecrease2;
    elementp.style.fontSize = fontSize + '%';
});
function fontcolor1(i) {
    let h1 = document.getElementsByTagName('h1')[0];
    h1.style.color = i.value;
}
function fontcolor(i) {
    let p = document.getElementsByTagName('p')[0];
    p.style.color = i.value;
}
function font(select) {
    let boxText = document.getElementsByTagName('h1')[0];
    if (select.value == 'a') {
        boxText.style.fontFamily = 'arial';
    } else if (select.value == 't') {
        boxText.style.fontFamily = 'Times New Roman';
    } else if (select.value == 'v') {
        boxText.style.fontFamily = 'verdana';
    }
}
function font2(select) {
    let boxText = document.getElementsByTagName('p')[0];
    if (select.value == 'a') {
        boxText.style.fontFamily = 'arial';
    } else if (select.value == 't') {
        boxText.style.fontFamily = 'Times New Roman';
    } else if (select.value == 'v') {
        boxText.style.fontFamily = 'verdana';
    }
}
function position(select) {
    let position = document.getElementsByTagName('h1')[0];
    if (select.value == 'e') {
        position.style.textAlign = 'left';
    } else if (select.value == 'c') {
        position.style.textAlign = 'center';
    } else if (select.value == 'd') {
        position.style.textAlign = 'right';
    }
}
function position2(select) {
    let position = document.getElementsByTagName('p')[0];
    if (select.value == 'e') {
        position.style.textAlign = 'left';
    } else if (select.value == 'c') {
        position.style.textAlign = 'center';
    } else if (select.value == 'd') {
        position.style.textAlign = 'right';
    }
}
