const spinButton = document.getElementById('spincard-button');
let id = null;
let isSpinning = false;
let angleOffset = currentAngleOffset;


spinButton.addEventListener('click', (event) => {
    let radius = currentRadius;

    if (isSpinning) {
        isSpinning = false;
        clearInterval(id);
    } else {
        isSpinning = true;

        let movableCardContainer = document.getElementById('movable-card-container');
        let movableCards = document.querySelectorAll('.movable');
        id = setInterval(frame, 20);
        
        function frame() {
            if (angleOffset >= 360) {
                angleOffset = 0;
            } else {
                arrangeCardsInCircle(movableCardContainer, movableCards, radius, angleOffset);
                angleOffset++;
            }
        }
    }
});