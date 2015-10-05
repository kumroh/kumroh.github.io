var progFill = document.getElementById('progressFill'),
    progPerc = document.getElementById('progressPercent');
progFill.style.height = '18px';
progFill.style['border-radius'] = '5px';
progFill.style['border'] = "2px solid red";
var progWidth, winWidth = window.innerWidth;

var progInterval = window.setInterval(function() {
    progWidth = parseFloat(progFill.style.width.replace('px', ''));
    if (winWidth <= (progWidth + 2)) {
        clearInterval(progInterval);
    }
    progFill.style.width = (progWidth + 2) + 'px';
    progPerc.innerHTML = (parseFloat((progWidth + 2) / winWidth) * 100).toFixed(3).toString() + ' %';
}, 25);