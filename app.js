const cartNr = document.querySelector('#cart-nr');
const cartValue = document.querySelector('#cart-value');
const cartModal = document.querySelector('.cart-modal');
const modalEmpty = document.querySelector('#modal-empty');
const modalFilled = document.querySelector('#modal-filled');
const quantity = document.querySelector('#quantity');
const result = document.querySelector('#result');

function increaseCartNr() {
    ++cartNr.innerText;
}
function decreaseCartNr() {
    if(cartNr.innerText == 0) return;
    --cartNr.innerText;
}
function addToCart() {
    cartValue.innerText = cartNr.innerText;
    quantity.innerText = cartNr.innerText;
    cartValue.style.display = 'flex';
    modalEmpty.style.display = 'none';
    modalFilled.style.display = 'none';
    displayCartValue();
    finalPrice();
}
function displayCartValue() {
    if(cartValue.innerText == 0) {
        cartValue.style.display = 'none';
        modalEmpty.style.display = 'flex';
    }else{
        modalFilled.style.display = 'flex';
    }
}
function showCartModal() {
    cartModal.classList.toggle("show-cart");
}
function finalPrice() {
    const calculation = cartNr.innerText * 125;
    result.innerHTML = `$${calculation}.00`;
}
function deleteItem() {
    cartValue.innerText = 0;
    modalFilled.style.display = 'none';
    displayCartValue();
}


const modalMainImg = document.querySelector('.modal-main-img');
const imagesModal = document.querySelector('.images-modal');
let value = 1

function showNextImage() {
    if(value <= 3){
        ++value;
    }else{
        value = 1;
    }
    modalMainImg.setAttribute("src", `images/image-product-${value}.jpg`);
}
function showImagesModal() {
    imagesModal.style.display = 'flex';
}
function closeImagesModal() {
    imagesModal.style.display = 'none';
}