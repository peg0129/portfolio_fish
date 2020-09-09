var loadingArea = document.getElementById('loading');

window.addEventListener('load',loadstop);

function loadstop(){
  loadingArea.classList.add('loadingNone');
}

setTimeout('loadstop()',10000);
