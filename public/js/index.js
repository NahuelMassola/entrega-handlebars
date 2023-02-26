const socket = io();

socket.io("init=products" , (products) =>{
    const rowProducts = document.getElementById("rowProducts");
    rowProducts.innerHTML="" ;
    products.forEach(product => {
        rowProducts.innerHTML +=
        `<div class="card col-4 m-2 border border-4">
        <img src="${product.thumbnail}}" class="img-fuid" alt="">
        <div class="card-body">
            <h2 class="card-title text-center">${product.title}</h2>
            <p class="card-tect text-center mb-0">${product.description}}</p>
            <p class="card-text text-center">code:product.code}</p>
            <h3 class="card-text text-center">$ ${product.price}</h3>
            <p class="card-text text-center">Stock: ${product.stock}</p>
            <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-primary">ADD</button>
            </div>
        </div>    
        </div>
        `
    });
});

socket.on("delete-product"), (id) => {
    const product = document.getElementById("id")
    product.remove();
}

socket.on("add-product"), (add) => {
    const rowProducts = document.getElementById("rowProducts");
    rowProducts.innerHTML += 
    rowProducts.innerHTML +=
        `<div class="card col-4 m-2 border border-4">
        <img src="${product.thumbnail}}" class="img-fuid" alt="">
        <div class="card-body">
            <h2 class="card-title text-center">${product.title}</h2>
            <p class="card-tect text-center mb-0">${product.description}}</p>
            <p class="card-text text-center">code:product.code}</p>
            <h3 class="card-text text-center">$ ${product.price}</h3>
            <p class="card-text text-center">Stock: ${product.stock}</p>
            <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-primary">ADD</button>
            </div>
        </div>    
        </div>
        `
}
