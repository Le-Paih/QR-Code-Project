// Modal Button
const closeBtn = document.querySelector('.close-btn')
const modal = document.querySelector('.modal')
const rulesBtn = document.querySelector('.rules-btn')

rulesBtn.addEventListener('click', () => {
    modal.classList.toggle('close-modal');
    modal.classList.toggle('modal-overlay');
})

closeBtn.addEventListener('click', () => {
    modal.classList.toggle('close-modal');
    modal.classList.toggle('modal-overlay');
})


const handChoice = {
    'rock': 'icon-rock.svg',
    'paper': 'icon-paper.svg',
    'scissors': 'icon-scissors.svg'
}

const handColor = {
    'rock': 'var(--Rock-Gradient)',
    'paper': 'var(--Paper-Gradient)',
    'scissors': 'var(--Scissors-Gradient)'
}

let score = 0;


// When User picks option
const pickUserHand = (hand) => {
    console.log(hand);
    let hands = document.querySelector('.hands');
    hands.style.display = 'none';
    const contest = document.querySelector('.contest');
    contest.classList.remove('hidden');

    const userChoiceColor = document.querySelector('.userPicked-wrapper');

    document.getElementById('pickedIcon').src = handChoice[hand];
    userChoiceColor.style.backgroundImage = handColor[hand];

    setTimeout(() => {
        computerPickHand(hand)
    }, 1000);
    compDiv();
    bgBlue();

    result();
};

// Computer Choice
const computerPickHand = (hand) => {
    let hands = ['rock', 'paper', 'scissors'];
    
    let pcHand = hands[Math.floor(Math.random()*3)];
    console.log(pcHand);

    const compChoiceColor = document.querySelector('.computerChoice-wrapper');   

    document.getElementById('computerPickImage').src = handChoice[pcHand];
    compChoiceColor.style.backgroundImage = handColor[pcHand];

    playGame(hand, pcHand)
}

// Deciding who wins and what happens
const playGame = (userHand, pcHand) => {
    const you = document.querySelector('.you');
    const scoreNumber = document.querySelector('.score-number');
    scoreNumber.innerHTML = score;

    if(userHand === pcHand) {
        you.innerHTML = 'Tie';
    }
    if (userHand == 'rock' && pcHand == 'paper') {
        you.innerHTML = 'You Lose'
        setTimeout(()=>{
            setScore(score - 1);
        }, 1000);
    }
    if (userHand == 'rock' && pcHand == 'scissors') {
        you.innerHTML = 'You Win';
        setTimeout(()=>{
            setScore(score + 1);
        }, 1000);
    }
    if (userHand == 'paper' && pcHand == 'scissors') {
        you.innerHTML = 'You Lose';
        setTimeout(()=>{
            setScore(score - 1);
        }, 1000);
    }
    if (userHand == 'paper' && pcHand == 'rock') {
        you.innerHTML = 'You Win';
        setTimeout(()=>{
            setScore(score + 1);
        }, 1000);
    }
    if (userHand == 'scissors' && pcHand == 'rock') {
        you.innerHTML = 'You Lose';
        setTimeout(()=>{
            setScore(score - 1);
        }, 1000);
    }
    if (userHand == 'scissors' && pcHand == 'paper') {
        you.innerHTML = 'You Win';
        setTimeout(()=>{
            setScore(score + 1);
        }, 1000);
    }
    
}

const setScore = (newScore) => {
    score = newScore;
    document.querySelector('.score-number').innerText = newScore;
    if(score > 0){
        document.querySelector('.score-number').innerText = 0
    }
}

const playAgainBtn = document.querySelector('.play-btn')
playAgainBtn.addEventListener('click', (playAgain))

//What happens when play again is clicked
function playAgain(){
    let hands = document.querySelector('.hands');
    hands.style.display = 'flex';
    const contest = document.querySelector('.contest');
    contest.classList.add('hidden');
    document.querySelector('.result-div').classList.add('hidden');
    document.querySelector('.computerChoice-wrapper').classList.add('hidden');
    document.querySelector('.bg-blue').classList.remove('hidden');
}


// Functions
function compDiv(){
    setTimeout(()=>{
        document.querySelector('.computerChoice-wrapper').classList.remove('hidden');
    }, 1000)
}

function result(){
    setTimeout(()=>{
        document.querySelector('.result-div').classList.remove('hidden')
    }, 1750)
};

function bgBlue(){
    setTimeout(()=>{
        document.querySelector('.bg-blue').classList.add('hidden');
    }, 1000)
}

