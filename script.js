function navigateTo(url) {
    window.location.href = url;
}

setInterval(() => {
    const images = document.querySelectorAll('.fly-image');
    images.forEach(image => {
        const x = Math.random() * innerWidth;
        const y = Math.random() * document.body.scrollHeight;
        image.style.left = x + 'px';
        image.style.top = y + 'px';
    });
}, 2000);
