/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { buyListItem, createListItem, deleteAllListItems, getListItems } from './fetch-utils.js';

/* Get DOM Elements */
const form = document.querySelector('.item-form');
const deleteButton = document.querySelector('.delete');
const listEl = document.querySelector('.list');

/* State */

/* Events */
window.addEventListener('load', async () => {
    fetchAndDisplayList();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const quantity = data.get('quantity');
    const item = data.get('item');

    form.reset();

    const newItem = await createListItem(quantity, item);
    if (newItem) {
        fetchAndDisplayList();
    } else {
        error.textContent = 'Something went wrong while adding to your shopping list';
    }

    fetchAndDisplayList();
});

/* Display Functions */

async function fetchAndDisplayList() {
    const list = await getListItems();
    listEl.textContent = '';
    for (let item of list) {
        const listItemEl = document.createElement('p');
        listItemEl.classList.add('list-item');
        listItemEl.textContent = `${item.quantity} ${item.item}`;

        if (item.complete) {
            listItemEl.classList.add('bought');
        } else {
            listItemEl.classList.add('not-bought');
            listItemEl.addEventListener('click', async () => {
                await buyListItem(item.id);

                fetchAndDisplayList();
            });
        }
        listEl.append(listItemEl);
    }
}

deleteButton.addEventListener('click', async () => {
    await deleteAllListItems();

    await fetchAndDisplayList();
});
