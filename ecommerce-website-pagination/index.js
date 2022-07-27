const cart_items = document.querySelector('#cart .cart-items');

const Product = require('../models/products');
const Cart = require('../models/cart');
const parentNode = document.getElementById('music-content');


window.addEventListener('load', (req,res,next) => {
    console.log('loaded');
    const page = req.query.page;
    const ITEMS_PER_PAGE=2;
      
        Product.find()
          .skip((page - 1) * ITEMS_PER_PAGE)
          .limit(ITEMS_PER_PAGE)
          .then(products => {
            res.json(products);
          })
          .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
          });
      
    
    axios.get('http://localhost:3000/products')
    .skip((page - 1) * ITEMS_PER_PAGE)
    .limit(ITEMS_PER_PAGE).then((products) => {
        res.json(products);
        products.data.forEach(product => {
            const productHtml = `
                <div id="album-${product.id}">
                    <h3>${product.title}</h3>
                    <div class="image-container">
                        <img class="prod-images" src=${product.imageUrl} alt="">
                    </div>
                                    <div class="prod-details">
                        <span>$<span>${product.price}</span></span>
                        <button class="shop-item-button" type='button'>ADD TO CART</button>
                    </div>
                </div>`
            parentNode.innerHTML += productHtml

        })
    })

})

document.addEventListener('click',(e,req,res,next)=>{

    if (e.target.className=='shop-item-button'){
        const prodId = Number(e.target.parentNode.parentNode.id.split('-')[1]);
        axios.post('http://localhost:3000/cart', { productId: prodId}).then(data => {
            if(data.data.error){
                throw new Error('Unable to add product');
            }
            showNotification(data.data.message, false);
        })
        .catch(err => {
            console.log(err);
            showNotification(err, true);
        });

    }
    if (e.target.className=='cart-btn-bottom' || e.target.className=='cart-bottom' || e.target.className=='cart-holder'){
        axios.get('http://localhost:3000/cart').then(carProducts => {
            req.user.getCart().then(cart => {
                // Cart.getCart(cart => {
                  cart.getProducts().then(cartProducts => {
                  
                    res.json(cartProducts)
                });
            });
            showProductsInCart(carProducts.data);
            document.querySelector('#cart').style = "display:block;"

        })
    }
    if (e.target.className=='cancel'){
        document.querySelector('#cart').style = "display:none;"
    }
    if (e.target.className=='purchase-btn'){
        if (parseInt(document.querySelector('.cart-number').innerText) === 0){
            alert('You have Nothing in Cart , Add some products to purchase !');
            return
        }
        alert('This Feature is yet to be completed ')
    }
})

function showProductsInCart(listofproducts){
    cart_items.innerHTML = "";
    listofproducts.forEach(product => {
        const id = `album-${product.id}`;
        const name = document.querySelector(`#${id} h3`).innerText;
        const img_src = document.querySelector(`#${id} img`).src;
        const price = product.price;
        document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)+1
        const cart_item = document.createElement('div');
        cart_item.classList.add('cart-row');
        cart_item.setAttribute('id',`in-cart-${id}`);
        cart_item.innerHTML = `
        <span class='cart-item cart-column'>
        <img class='cart-img' src="${img_src}" alt="">
            <span>${name}</span>
        </span>
        <span class='cart-price cart-column'>${price}</span>
        <form onsubmit='deleteCartItem(event, ${product.id})' class='cart-quantity cart-column'>
            <input type="text" value="1">
            <button>REMOVE</button>
        </form>`
        cart_items.appendChild(cart_item)
    })
}
function deleteCartItem(e, prodId){
    e.preventDefault();
    axios.post('http://localhost:3000/cart-delete-item', {productId: prodId})
        .then(() => removeElementFromCartDom(prodId))
}

function showNotification(message, iserror){
    const container = document.getElementById('container');
    const notification = document.createElement('div');
    notification.style.backgroundColor = iserror ? 'red' : 'green';
    notification.classList.add('notification');
    notification.innerHTML = `<h4>${message}<h4>`;
    container.appendChild(notification);
    setTimeout(()=>{
        notification.remove();
    },2500)
}

function removeElementFromCartDom(prodId){
        document.getElementById(`in-cart-album-${prodId}`).remove();
        showNotification('Succesfuly removed product')
}

