var btn = document.querySelector('button');
var inner = document.querySelector('.inner');
var h2 = document.querySelector('h2');
var card = document.querySelector('.card');

var grow = 0;
var num = 50 + Math.floor(Math.random() * 50);

btn.addEventListener('click', function () {

    var h1 = document.createElement('h1');
    h1.innerHTML = `Your download will be completed in ${num / 10} seconds...`
    h1.style.fontSize = '18px';
    h1.style.opacity = '0.4';
    card.appendChild(h1);

    btn.style.pointerEvents = 'none';
    btn.innerHTML = 'Downloading..'

    var int = setInterval(function () {
        grow++;
        h2.innerHTML = grow + '%';
        inner.style.width = grow + '%';
    }, num);

    setTimeout(function () {
        clearInterval(int);
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = '0.5';
        h1.innerHTML = `Your download got completed in ${num / 10} seconds`
        h1.style.opacity = '1';
    }, num * 100);
});