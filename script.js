document.addEventListener('DOMContentLoaded', () => {
    const shutter = document.getElementById('shutter');

    // Auto-close the shutter after 5 seconds
    setTimeout(() => {
        shutter.style.opacity = '0';
        setTimeout(() => {
            shutter.style.display = 'none';
        }, 300); // Matches the CSS transition duration
    }, 3000); // 5 seconds before auto-closing
});
