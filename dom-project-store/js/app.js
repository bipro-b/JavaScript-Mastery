// API Fetching

const loadProducts = () => {
  const url = `https://fakestoreapi.com/products`;  // url
  fetch(url)
    .then((response) => response.json())
    .then((data) => ShowProducts(data));
};

loadProducts();

// Show products

const ShowProducts = (products) => {
  const allProducts = products.map((pd) => pd);

  allProducts.forEach((product) => {
    // const image = product.image;

    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML =  `<div class="single-product">
    <div>
    <div class="rounded" style="background-image: linear-gradient(rgb(0,255,157),rgb(31,195,236));">
    <img class="pt-3 product-image" src=${product.image}></img>
    <h3>${product.title}</h3>
    <p>Category: ${product.category}</p>
    <h2>Price: ${product.price}</h2>

    <button onclick="addToCart(${product.id},${product.price})" id="addToCart-btn" class="buy-now btn -btn-success">Add to cart</button>

    </div>
    </div>
    </div>`;
    document.getElementById("all-products").appendChild(div);

  });
};

// Count Price

let count = 0;

const addToCart =(id,price)=>{
    count = count+1;
    // Update price
    updatePrice("price",price);
    // Update Tax and Charge

}
// Get input value

const getInputValue = (id)=>{
    const element = document.getElementById(id).innerText;
    const converted = parseFloat(element);
    return converted;
}

// update price

const updatePrice = (id,value)=>{
    const convertedPrice = getInputValue(id);
    
    const convertPrice = parseFloat(value);

    const total = convertedPrice + convertPrice;

    document.getElementById(id).innerText = parseFloat(total).toFixed(2);
}