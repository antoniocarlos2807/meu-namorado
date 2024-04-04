document.getElementById('naoBtn').addEventListener('click', function() {
    var naoBtn = document.getElementById('naoBtn');
    var randomX = Math.floor(Math.random() * (window.innerWidth - naoBtn.offsetWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - naoBtn.offsetHeight));

    naoBtn.style.position = 'absolute';
    naoBtn.style.left = randomX + 'px';
    naoBtn.style.top = randomY + 'px';
});

document.getElementById('simBtn').addEventListener('click', function() {
    window.location.href = 'https://youtu.be/A0gw3hOcXNk?si=RjwppE4DKWfLPDVz';
});
