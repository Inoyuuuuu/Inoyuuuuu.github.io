let currentAngleOffset = Math.random() * 360;
let currentRadius = 300;

window.onload = function() {
    const movableCardContainer = document.getElementById('movable-card-container');
    const movableCards = document.querySelectorAll('.movable');

    placeMainCard(movableCardContainer);
    
    currentRadius = (movableCardContainer.offsetHeight / 2) - (findCardWithGreatestHeight(movableCards) / 2);
    
    arrangeCardsInCircle(movableCardContainer, movableCards, currentRadius, currentAngleOffset);
};

function arrangeCardsInCircle(movableCardContainer, movableCards, radius, angleOffset) {
    let amountCards = movableCards.length;
    let angleSize = 360 / amountCards;

    for (let i = 0; i < amountCards; i++) {
        const card = movableCards[i];
        let angle = i * angleSize + angleOffset;

        //x0, y0 start pos of cards (cards center point)
        const cardX = movableCardContainer.getBoundingClientRect().left - (card.offsetWidth /2);
        const cardY = movableCardContainer.getBoundingClientRect().top - (card.offsetHeight /2);

        //x50, y50 of movable card container thing
        const midX = movableCardContainer.offsetWidth / 2;
        const midY = movableCardContainer.offsetHeight / 2;

        function toRadians(degrees) {
            return degrees * (Math.PI / 180);
        }

        let circleX = radius * Math.cos(toRadians(angle));
        let circleY = radius * Math.sin(toRadians(angle));

        circleX = Math.round(circleX);
        circleY = Math.round(circleY);

        card.style.left = (midX + circleX + cardX) + 'px';
        card.style.top = (midY + circleY + cardY) + 'px';
    }
}

function findCardWithGreatestHeight(movableCards) {
    let amountCards = movableCards.length;

    let heighest = 0;
    for (let i = 0; i < amountCards; i++) {
        var card = movableCards[i];
        if (card.offsetHeight > heighest) {
            heighest = card.offsetHeight;
        }
    }
    return heighest;
}

function placeMainCard(movableCardContainer) {
    const mainCard = document.getElementById('main-card');
    mainCard.style.marginTop = ((movableCardContainer.offsetHeight / 2) - (mainCard.offsetHeight / 2)) + "px";
    mainCard.style.marginLeft = ((movableCardContainer.offsetWidth / 2) - (mainCard.offsetWidth / 2)) + "px";
}