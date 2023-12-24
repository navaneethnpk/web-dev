document.getElementById('yesButton').addEventListener('click', function() {
    showHappyModal();
});

document.getElementById('noButton').addEventListener('click', function() {
    moveButtonRandomly();
});

function moveButtonRandomly() {
    const button = document.getElementById('noButton');
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function showHappyModal() {
    const modal = document.getElementById('happyModal');
    const closeBtn = document.getElementById('closeModal');

    modal.style.display = 'block';

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}
