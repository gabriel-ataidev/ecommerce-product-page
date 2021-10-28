const cartNr = document.querySelector('#cart-nr');
const cartValue = document.querySelector('#cart-value');
const cartModal = document.querySelector('.cart-modal');
const modalEmpty = document.querySelector('#modal-empty');
const modalFilled = document.querySelector('#modal-filled');

function increaseCartNr() {
    ++cartNr.innerText;
}
function decreaseCartNr() {
    if(cartNr.innerText == 0) return;
    --cartNr.innerText;
}
function addToCart() {
    cartValue.innerText = cartNr.innerText;
    cartValue.style.display = 'flex';
    modalEmpty.style.display = 'none';
    modalFilled.style.display = 'none';
    displayCartValue();
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
