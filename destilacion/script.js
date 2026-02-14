const images = document.querySelectorAll('.image-container img');

images.forEach(img => {
    img.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            img.requestFullscreen().catch(err => {
                alert(`Error: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });
});