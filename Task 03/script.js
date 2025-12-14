var btn = document.querySelector('#btn');
var main = document.querySelector('main');
var arr = ['Code is today’s universal language.','Technology is best when it brings people together.','Think logically, build digitally.','Software eats the world.','Tech turns imagination into reality.','Build once, scale endlessly.','Automation is the future in motion.'];

btn.addEventListener('click', function(){
    var h2 = document.createElement('h2');
    var a = Math.floor(Math.random()*arr.length);
    var x = Math.random()*100;
    var y = Math.random()*100;
    var r = Math.floor(Math.random()*360);
    var c1 = Math.floor(Math.random()*255);
    var c2 = Math.floor(Math.random()*255);
    var c3 = Math.floor(Math.random()*255);

    h2.innerHTML = arr[a];
    h2.style.position = 'absolute'
    h2.style.top = x+'%';
    h2.style.left = y+'%';
    h2.style.rotate = r+'deg'
    h2.style.color = `rgb(${c1},${c2},${c3})`
    main.appendChild(h2);
})