const form = document.getElementById('formOfProduct');
const key = 'list';
form.onsubmit = () => {
    const product = {};
    for (let i = 0; i < form.length; i++) {
        if (form[i].name !== 'save')
        product[form[i].name] = form[i].value
    }
    product.id = new Date().valueOf();
    const products = JSON.parse(localStorage.getItem(key)) || [];
    products.push(product);
    localStorage.setItem(key, JSON.stringify(products));
}


