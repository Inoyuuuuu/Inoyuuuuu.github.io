const movableCardContainer = document.getElementById('movable-card-container');
const movableCards_loc = document.querySelectorAll('.movable');

arrangeCardsInCircle();


function arrangeCardsInCircle() {
    let amountCards = movableCards_loc.length;
    let angleSize = 360 / amountCards;
    let radius = 300; //in px

    let angleOffset = Math.random() * 360;

    for (let i = 0; i < amountCards; i++) {
        const card = movableCards_loc[i];

        let angle = i * angleSize + angleOffset;

        //x0, y0 start pos of cards (cards center point)
        const cardX = movableCardContainer.getBoundingClientRect().left - (card.offsetWidth / 2);
        const cardY = movableCardContainer.getBoundingClientRect().top - (card.offsetHeight / 2);

        //x50, y50 of movable card container thing
        const midX = movableCardContainer.getBoundingClientRect().width / 2;
        const midY = movableCardContainer.getBoundingClientRect().height / 2;

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