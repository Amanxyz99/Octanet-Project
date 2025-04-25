// Basic JavaScript for Buy Now buttons

document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your purchase! This is a demo button.');
        });
    });
});
