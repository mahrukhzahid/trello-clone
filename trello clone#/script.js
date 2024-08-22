document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const lists = document.querySelectorAll('.list');
    let draggedCard = null;

    cards.forEach(card => {
        card.addEventListener('dragstart', () => {
            draggedCard = card;
            setTimeout(() => {
                card.style.display = 'none';
            }, 0);
        });

        card.addEventListener('dragend', () => {
            setTimeout(() => {
                card.style.display = 'block';
                draggedCard = null;
            }, 0);
        });
    });

    lists.forEach(list => {
        list.addEventListener('dragover', e => {
            e.preventDefault();
        });

        list.addEventListener('dragenter', e => {
            e.preventDefault();
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });

        list.addEventListener('dragleave', () => {
            list.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });

        list.addEventListener('drop', () => {
            list.appendChild(draggedCard);
            list.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });
    });

    const newCardInputs = document.querySelectorAll('.new-card-input');

    newCardInputs.forEach(input => {
        input.addEventListener('keypress', e => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                const newCard = document.createElement('div');
                newCard.classList.add('card');
                newCard.setAttribute('draggable', 'true');
                newCard.textContent = input.value.trim();
                input.value = '';
                input.parentElement.insertBefore(newCard, input);

                newCard.addEventListener('dragstart', () => {
                    draggedCard = newCard;
                    setTimeout(() => {
                        newCard.style.display = 'none';
                    }, 0);
                });

                newCard.addEventListener('dragend', () => {
                    setTimeout(() => {
                        newCard.style.display = 'block';
                        draggedCard = null;
                    }, 0);
                });
            }
        });
    });
});
