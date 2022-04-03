let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })

}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumber');

    console.log(productNumbers);

    console.log(typeof productNumbers);

    productNumbers = parseInt(productNumbers);

    console.log(productNumbers);

    localStorage.setItem('cartNumbers', 1);
}