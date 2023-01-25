let store = [{
  name: 'Nutella',
  img: 'https://images.unsplash.com/photo-1603701972178-96760b471be9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80',
  price: 22.93,
  inStock: true,
  sku: '12j'
},{
  name: '💖 Stopper',
  img: 'https://images.unsplash.com/photo-1625932948487-10d58571c487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  price: 19.99,
  inStock: true,
  sku: '7744hs'
}]

let cart = []


// SECTION DRAW FUNCTIONS
//#region - Draw Functions 

function drawStore(){

  let storeElem = document.getElementById('product-cards')
  let template = ''
  
  for (let i = 0; i < store.length; i++) {
    const product = store[i];
    template += `
    <div class="col-md-6 col-lg-4 my-3">
      <div class="card product-card">
        <img src="${product.img}" alt="${product.name}">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
            <p><b>${product.name}</b></p>
            <p>$${product.price}</p>
          </div>
          <button 
            class="btn btn-outline-secondary" 
            title="Add to cart"
            onclick="addItemToCart('${product.sku}')"
            >
            <i class="mdi mdi-cart"></i>
            <small>ADD</small>
          </button>
        </div>
      </div>
    </div>`
  }

  
  
  // store.forEach(product => {
    // you could paste template += here 
  // })
    
  storeElem.innerHTML = template
  



  console.log('drawStore')
}

function drawCart(){
  console.log('drawCart')
}

//#endregion

function addItemToCart(sku){
  console.log('addItemToCart', sku)
}


function calculateCartTotal(){
  console.log('calculateCartTotal')
}

function checkout(){
  console.log('checkout')
}

function removeItem(sku){
 console.log('removeItem')
}

// TODO stretch goal
// function adjustQuantity(){}



// example only
// function add(a,b = 3){

//   if(!a){throw new Error("cannot compute 🤖")}

//   return a + b
// }

// add(2,3)

// add(4)

drawStore()