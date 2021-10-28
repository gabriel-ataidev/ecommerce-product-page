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


const mainImg = document.querySelector('#main-img')
let number = 1;

function showImage1() {
    mainImg.setAttribute("src", "images/image-product-1.jpg");
}
function showImage2() {
    mainImg.setAttribute("src", "images/image-product-2.jpg");
}
function showImage3() {
    mainImg.setAttribute("src", "images/image-product-3.jpg");
}
function showImage4() {
    mainImg.setAttribute("src", "images/image-product-4.jpg");
}




let value = 1
const modalMainImg = document.querySelector('.modal-main-img');
const imagesModal = document.querySelector('.images-modal');

function showNextImage() {
    if(value <= 3){
        ++value;
    }else{
        value = 1;
    }
    modalMainImg.setAttribute("src", `images/image-product-${value}.jpg`);
}
function showPrevImage() {
    if(value == 1){
        value = 4;
    }else{
        --value;
    }
    modalMainImg.setAttribute("src", `images/image-product-${value}.jpg`);
}
function showImagesModal() {
    imagesModal.style.display = 'flex';
}
function closeImagesModal() {
    imagesModal.style.display = 'none';
}console.log(items);
items.forEach((item) => {
  item.addEventListener("click", onItemClick);
});
function onItemClick(e) {
  const selectedAttribute = e.target;
  items.forEach((item) => {
    const itemAttribute = item;
    if (itemAttribute === selectedAttribute) {
      item.classList.add("active");
      return;
    }
    item.classList.remove("active");
  });
}
