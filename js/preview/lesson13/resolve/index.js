const key = 'list';
const mainBlock = document.createElement('div');
document.body.append(mainBlock);

let listOfProducts = JSON.parse(localStorage.getItem(key));

function createList() {
    if (!listOfProducts.length) {
        mainBlock.innerText = 'List is empty';
        return
    }
    for (const product of listOfProducts) {
        const cardOfProduct = document.createElement('div');
        const image = document.createElement('img');
        const title = document.createElement('h2');
        const text = document.createElement('p');
        const price = document.createElement('h3');
        const total = document.createElement('h4');

        cardOfProduct.id = `product_${product.id}`;
        image.src = product.image;
        title.innerText = product.title;
        price.innerText = `Price: ${product.price}`;
        total.innerText = `total: ${product.total}`;

        mainBlock.classList.add('wrap');
        cardOfProduct.classList.add('product');

        mainBlock.append(cardOfProduct);
        text.append(price, total);
        cardOfProduct.append(image, title, text);

        const buttonDelete = document.createElement('button');
        cardOfProduct.append(buttonDelete);
        buttonDelete.innerText = 'delete';
        buttonDelete.id = product.id;
        buttonDelete.onclick = () => {
            listOfProducts = listOfProducts.filter(item => item.id !== +buttonDelete.id);
            console.log(listOfProducts)
            localStorage.setItem(key, JSON.stringify(listOfProducts));
            document.getElementById(`product_${buttonDelete.id}`).remove();
            if (!listOfProducts.length) mainBlock.innerText = 'List is empty';
        }
    }
}

createList();
