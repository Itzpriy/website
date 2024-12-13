document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Pizza', price: '$12', image: 'pizza.jpg', description: 'Delicious cheese pizza with fresh ingredients.' },
        { name: 'Burger', price: '$8', image: 'bruger.jpg', description: 'Juicy beef burger with lettuce, tomato, and cheese.' },
        { name: 'Pasta', price: '$10', image: 'pasta.jpg', description: 'Creamy Alfredo pasta with grilled chicken.' }
    ];

    const productsDiv = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
        `;
        productDiv.addEventListener('click', () => {
            alert(`You clicked on ${product.name}\n\nDescription: ${product.description}`);
        });
        productsDiv.appendChild(productDiv);
    });
});