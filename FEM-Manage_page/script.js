/* Toggle */
const toggleBtn = document.querySelector('.toggle-btn');
const toggleIcon = document.getElementById('toggle-icon');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('.main-body');

let showSidebar = false;

toggleBtn.addEventListener('click', toggleSidebar);

function toggleSidebar() {
    if (!showSidebar) {
        toggleIcon.src = 'icon-close.svg'
        sidebar.classList.add('show-sidebar');
        body.classList.add('modal');
        showSidebar = true;
    } else {
        toggleIcon.src = 'icon-hamburger.svg'
        sidebar.classList.remove('show-sidebar');
        body.classList.remove('modal');
        showSidebar = false
    };
};



/* Carousel */
let cardIndex = 1;
const cards = document.getElementsByClassName('card');
const dots = document.getElementsByClassName('dot');

showCards(cardIndex);

// Dot Image Control
function currentCard(n) {
    showCards(cardIndex = n)
};

// Cycle through cards
function nextCard(){
    cardIndex++;
    if (cardIndex > cards.length) {
        cardIndex = 1
    }
    showCards(cardIndex)
};

// Show selected cards
function showCards(n){
    let i;
    if (n > cards.length) {
        cardIndex = 1
    }
    if (n < 1) {
        cardIndex = cards.length;
    }
    for (i = 0; i < cards.length; i++) {
        cards[i].classList.remove('active-card')
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    cards[cardIndex - 1].classList.add('active-card');
    dots[cardIndex - 1].classList.add('active')
};

setInterval(nextCard, 15000);

/* Email Validation */
const form = document.querySelector('.email-div');
const submit = document.querySelector('.go');
const email = document.getElementById('email');
const error = document.querySelector('.error-msg');

form.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('hello');

    const regEx = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if(!email.value.match(regEx)){
        error.classList.remove('error-hidden');
        email.style.borderColor = 'red'
    } else {
        error.classList.add('error-hidden');
        email.style.borderColor = '2px solid var(--Very-Dark-Blue)';
    }
});









// const carousel = document.querySelector('.carousel')
// let isDown = false;
// let startX;
// let scrollLeft;

// carousel.addEventListener('mousedown', e => {
//     isDown = true;
//     carousel.classList.add('active');
//     startX = e.pageX - carousel.offsetLeft;
//     scroll = carousel.scrollLeft
// })
// carousel.addEventListener('mouseleave', _ => {
//     isDown = false;
//     carousel.classList.remove('active');
// });
// carousel.addEventListener('mouseup', _ => {
//     isDown = false;
//     carousel.classList.remove('active');
// })
// carousel.addEventListener('mousemove', e => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - carousel.offsetLeft;
//     const SCROLL_SPEED = 3;
//     const walk =(x - startX) * SCROLL_SPEED;
//     carousel.scrollLeft = scrollLeft - walk;
// });


// const dragging = (e) => {
//     carousel.scrollLeft = e.pageX
// }

// carousel.addEventListener('click', dragging );