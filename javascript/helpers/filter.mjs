import { makeJacketCard } from '../pages/index.js';


export const createAddEventListenerGenderButtons = (jackets) => {
    document.querySelectorAll('.gender-ul li').forEach((li) => {
    li.addEventListener('click', () => {
        filterByGender(jackets, li.textContent);
    });
    }); 
} 

const filterByGender = (jackets, gender) => {
    if (gender === 'Show All') {
    makeJacketCard(jackets);
    } else {
    let filteredList = jackets.filter((jacket) => jacket.gender === gender);
    makeJacketCard(filteredList);
    }
} 