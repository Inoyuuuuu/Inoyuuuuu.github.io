const movableCards_mv = document.querySelectorAll('.movable');

//movement even listeners
for (const card of movableCards_mv) {
    let isDragging = false;
    let startX, startY;

    card.addEventListener('mousedown', (e) => {
        isDragging = true;
        card.style.cursor = 'grabbing';
        card.style.zIndex = '9999';        //brings the card to the front
        card.style.position = 'absolute';

        startX = e.clientX - card.getBoundingClientRect().left;
        startY = e.clientY - card.getBoundingClientRect().top;

        card.style.userSelect = 'none';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        card.style.cursor = 'grab';
        card.style.zIndex = '1';
        card.style.userSelect = 'auto';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            card.style.left = (e.clientX - startX) + 'px';
            card.style.top = (e.clientY - startY) + 'px';
        }
    });
}