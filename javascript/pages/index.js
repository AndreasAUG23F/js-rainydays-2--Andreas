import { loader } from "../helpers/loading.mjs";
import { fetchApi, apiUrl} from "../helpers/fetch.mjs";
import { createAddEventListenerGenderButtons } from "../helpers/filter.mjs";
const runPage = async () => {
    await loader(fetchApi, apiUrl);
    makeJacketCard(JSON.parse(localStorage.getItem("jacketList")));
    createAddEventListenerGenderButtons(JSON.parse(localStorage.getItem("jacketList")));
}



export const makeJacketCard = (jacketList) => {
    let collectionItems = document.createElement('div');
    collectionItems.id = "collectionItems";
    collectionItems.classList = "collectionItems";

    let main = document.querySelector('main');

    main.appendChild(collectionItems);
    let row = document.getElementById('collectionItems');
    row.innerHTML = '';
    console.log(collectionItems.innerHTML);
    console.log(jacketList);
    jacketList.forEach((jacket) => 
        jacketCardContent(jacket)
    );
}


const jacketCardContent = (jacket) => {
    let collectionItems = document.getElementById('collectionItems');

    let row = document.createElement('ul');
    row.classList = "row";

    let productContainer = document.createElement('li');
    productContainer.classList = "product";
    
    productContainer.dataset.gender = jacket.gender;

    let jacketImage = document.createElement('img');
    jacketImage.src = jacket.image.url;
    jacketImage.alt = jacket.image.alt;
    jacketImage.classList = "product-image";

    const linkToProduct = document.createElement('a');
    linkToProduct.href = '../html/jacket.html';
    linkToProduct.classList = 'linkToProduct';
    linkToProduct.addEventListener('click', () => {
        localStorage.setItem("jacket", JSON.stringify(jacket));
        console.log("Hello from the other side")
    })

    let h3 = document.createElement('h3');
    h3.textContent = jacket.title;

    let p = document.createElement('p');
    p.textContent = jacket.price + 'kr';

    let button = document.createElement('button');
    button.textContent = "see more";

    
    collectionItems.appendChild(row);
    row.appendChild(productContainer);
    productContainer.append(h3, p, linkToProduct);
    linkToProduct.appendChild(jacketImage);
    linkToProduct.appendChild(button);
}

runPage();