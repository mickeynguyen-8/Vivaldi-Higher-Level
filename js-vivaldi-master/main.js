
document.getElementById('summerBtn').addEventListener('click', SetSummer);
document.getElementById('autumnBtn').addEventListener('click', SetAutumn);
document.getElementById('winterBtn').addEventListener('click', SetWinter);
document.getElementById('springBtn').addEventListener('click', SetSpring);

function SetSummer() {
    displaySeason('Summer','#1BA848' );
}

function SetAutumn() {
    displaySeason('Autumn', '#FE6732');
}


function SetWinter() {
    displaySeason('Winter','#1C64B9');
}

function SetSpring() {
    displaySeason('Spring', '#0E94D1');
}





function displaySeason(name,color) {
    // change concerto text
    document.getElementById('season').innerHTML = name;
    
    
    // image to summer.jpg
    document.getElementById('main-img').src = 'images/' + name.toLowerCase() + '.jpg';
    // background-color match the button
    document.body.style.backgroundColor = color;
    // audio source to vivaldi-summer. mp3
    document.getElementById('audio-source').src = 'songs/vivaldi-' + name + '.mp3';

}
