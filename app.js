const cartNr = document.querySelector('#cart-nr');
const cartValue = document.querySelector('#cart-value');
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
    displayCartValue();
}
function displayCartValue() {
    if(cartValue.innerText == 0) {
        cartValue.style.display = 'none';
    }
    console.log('is working');
}
