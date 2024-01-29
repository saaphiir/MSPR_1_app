const bouton = document.getElementById('imageCliquable');
const red_bouton = document.getElementById('red_bouton')
const green_bouton = document.getElementById('green_bouton')
const canvas = document.getElementById('canvasElement');
const context = canvas.getContext('2d');    
const red_circle = document.querySelector('.red_circle');
const green_circle = document.querySelector('.green_circle');
const recadrer = document.querySelector('.recadrer');
const capturedImage = document.createElement('img');
const info_container = document.getElementById("info_container");
const overlay = document.getElementById('overlay');


let info_animaux_ON = 0

bouton.addEventListener('click', function() {
    video.style.display = "block";
    bouton.style.display = 'none'; 
    red_bouton.style.display = 'block';
    green_bouton.style.display = 'block'; 
    recadrer.style.display = 'block'; 

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const image = canvas.toDataURL('image/png');
    
    
    capturedImage.src = image;
    capturedImage.id = 'fullScreenImage';  // Ajoutez un ID pour cibler l'image en CSS
    document.body.appendChild(capturedImage);
    // Ajoutez la classe pour centrer l'image
    capturedImage.classList.add('centeredImage');

    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = image;
    downloadLink.download = 'captured-image.png';
    downloadLink.click();
    capturedImage.style.display = 'block';
});

video.addEventListener('loadedmetadata', function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
});

red_bouton.addEventListener('click', function() {

    video.style.display = "block";
    bouton.style.display = 'block'; 
    red_bouton.style.display = 'none';
    green_bouton.style.display = 'none';
    recadrer.style.display = 'none';
    capturedImage.style.display = 'none';

    info_animaux_ON = 0
});

green_bouton.addEventListener('click', function() {
    info_container.style.display = 'block';
    overlay.style.display = 'block';

    bouton.style.display = 'none';
    red_bouton.style.display = 'none';
    green_bouton.style.display = 'none';
    recadrer.style.display = 'none';

    
    setTimeout(function(){
        info_animaux_ON = 1
    }, 1000);
});


document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(event) {
        if (!info_container.contains(event.target) && info_animaux_ON == 1) {
            info_container.style.display = 'none';
            overlay.style.display = 'none';

            video.style.display = "block";
            bouton.style.display = 'block'; 
            info_animaux_ON = 0
        }
    });
});