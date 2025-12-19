var audA = new Audio('./audios/a.mp3')
var audB = new Audio('./audios/b.mp3')
var audC = new Audio('./audios/c.mp3')
var audD = new Audio('./audios/d.mp3')
var audE = new Audio('./audios/e.mp3')
var audF = new Audio('./audios/f.mp3')
var audG = new Audio('./audios/g.mp3')
var audH = new Audio('./audios/h.mp3')
var audI = new Audio('./audios/i.mp3')
var audJ = new Audio('./audios/j.mp3')
var audK = new Audio('./audios/k.mp3')
var audL = new Audio('./audios/l.mp3')
var audM = new Audio('./audios/m.mp3')
var audN = new Audio('./audios/n.mp3')
var audO = new Audio('./audios/o.mp3')
var audP = new Audio('./audios/p.mp3')
var audQ = new Audio('./audios/q.mp3')
var audR = new Audio('./audios/r.mp3')
var audS = new Audio('./audios/s.mp3')
var audT = new Audio('./audios/t.mp3')
var audU = new Audio('./audios/u.mp3')
var audV = new Audio('./audios/v.mp3')
var audW = new Audio('./audios/w.mp3')
var audX = new Audio('./audios/x.mp3')
var audY = new Audio('./audios/y.mp3')
var audZ = new Audio('./audios/z.mp3')

var A = document.getElementById('A');
var B = document.getElementById('B');
var C = document.getElementById('C');
var D = document.getElementById('D');
var E = document.getElementById('E');
var F = document.getElementById('F');
var G = document.getElementById('G');
var H = document.getElementById('H');
var I = document.getElementById('I');
var J = document.getElementById('J');
var K = document.getElementById('K');
var L = document.getElementById('L');
var M = document.getElementById('M');
var N = document.getElementById('N');
var O = document.getElementById('O');
var P = document.getElementById('P');
var Q = document.getElementById('Q');
var R = document.getElementById('R');
var S = document.getElementById('S');
var T = document.getElementById('T');
var U = document.getElementById('U');
var V = document.getElementById('V');
var W = document.getElementById('W');
var X = document.getElementById('X');
var Y = document.getElementById('Y');
var Z = document.getElementById('Z');


var body = document.body
var allKey = document.querySelectorAll('.key')

allKey.forEach(function (elem) {
    elem.addEventListener('click', function () {
        if (elem.innerHTML == 'A') {
            audA.play();
        }
        if (elem.innerHTML == 'B') {
            audB.play();
        }
        if (elem.innerHTML == 'C') {
            audC.play();
        }
        if (elem.innerHTML == 'D') {
            audD.play();
        }
        if (elem.innerHTML == 'E') {
            audE.play();
        }
        if (elem.innerHTML == 'F') {
            audF.play();
        }
        if (elem.innerHTML == 'G') {
            audG.play();
        }
        if (elem.innerHTML == 'H') {
            audH.play();
        }
        if (elem.innerHTML == 'I') {
            audI.play();
        }
        if (elem.innerHTML == 'J') {
            audJ.play();
        }
        if (elem.innerHTML == 'K') {
            audK.play();
        }
        if (elem.innerHTML == 'L') {
            audL.play();
        }
        if (elem.innerHTML == 'M') {
            audM.play();
        }
        if (elem.innerHTML == 'N') {
            audN.play();
        }
        if (elem.innerHTML == 'O') {
            audO.play();
        }
        if (elem.innerHTML == 'P') {
            audP.play();
        }
        if (elem.innerHTML == 'Q') {
            audQ.play();
        }
        if (elem.innerHTML == 'R') {
            audR.play();
        }
        if (elem.innerHTML == 'S') {
            audS.play();
        }
        if (elem.innerHTML == 'T') {
            audT.play();
        }
        if (elem.innerHTML == 'U') {
            audU.play();
        }
        if (elem.innerHTML == 'V') {
            audV.play();
        }
        if (elem.innerHTML == 'W') {
            audW.play();
        }
        if (elem.innerHTML == 'X') {
            audX.play();
        }
        if (elem.innerHTML == 'Y') {
            audY.play();
        }
        if (elem.innerHTML == 'Z') {
            audZ.play();
        }

    })
})


body.addEventListener('keydown', function (dets) {
    if (dets.code == 'KeyA') {
        audA.play();
    }
    if (dets.code == 'KeyB') {
        audB.play();
    }
    if (dets.code == 'KeyC') {
        audC.play();
    }
    if (dets.code == 'KeyD') {
        audD.play();
    }
    if (dets.code == 'KeyE') {
        audE.play();
    }
    if (dets.code == 'KeyF') {
        audF.play();
    }
    if (dets.code == 'KeyG') {
        audG.play();
    }
    if (dets.code == 'KeyH') {
        audH.play();
    }
    if (dets.code == 'KeyI') {
        audI.play();
    }
    if (dets.code == 'KeyJ') {
        audJ.play();
    }
    if (dets.code == 'KeyK') {
        audK.play();
    }
    if (dets.code == 'KeyL') {
        audL.play();
    }
    if (dets.code == 'KeyM') {
        audM.play();
    }
    if (dets.code == 'KeyN') {
        audN.play();
    }
    if (dets.code == 'KeyO') {
        audO.play();
    }
    if (dets.code == 'KeyP') {
        audP.play();
    }
    if (dets.code == 'KeyQ') {
        audQ.play();
    }
    if (dets.code == 'KeyR') {
        audR.play();
    }
    if (dets.code == 'KeyS') {
        audS.play();
    }
    if (dets.code == 'KeyT') {
        audT.play();
    }
    if (dets.code == 'KeyU') {
        audU.play();
    }
    if (dets.code == 'KeyV') {
        audV.play();
    }
    if (dets.code == 'KeyW') {
        audW.play();
    }
    if (dets.code == 'KeyX') {
        audX.play();
    }
    if (dets.code == 'KeyY') {
        audY.play();
    }
    if (dets.code == 'KeyZ') {
        audZ.play();
    }
})
