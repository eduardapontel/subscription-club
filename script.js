const cards = document.querySelectorAll('.card');
const biannualCard = document.getElementById('biannual');

cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        if (card.id !== 'biannual') {
            biannualCard.style.setProperty('background-color', '#000f1f', 'important');
        }
        card.style.backgroundColor = '#001933';
    });

    card.addEventListener('mouseout', () => {
        if (card.id !== 'biannual') {
            biannualCard.style.removeProperty('background-color');
        }
        card.style.backgroundColor = '';
    });
});

const monthlyCard = document.getElementById('monthly');
const annualCard = document.getElementById('annual');
const star1 = document.getElementById('star-1');
const star2 = document.getElementById('star-2');
const star3 = document.getElementById('star-3');
const star4 = document.getElementById('star-4');

function rotateStars(stars, angle) {
    stars.forEach((star) => {
        star.style.transform = `rotate(${angle}deg)`;
    });
}

monthlyCard.addEventListener('mouseover', () => {
    rotateStars([star1, star2], -15);
});

monthlyCard.addEventListener('mouseout', () => {
    rotateStars([star1, star2], 0);
});

annualCard.addEventListener('mouseover', () => {
    rotateStars([star3, star4], 15);
});

annualCard.addEventListener('mouseout', () => {
    rotateStars([star3, star4], 0);
});

