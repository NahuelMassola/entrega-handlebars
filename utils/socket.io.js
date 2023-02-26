import ProductManager from "../Controller/ProductManager.js";
import { server } from ("socket.io");

const product = new ProductManager();

const conectionSocket = (httpserver) => {
    let io = new server(httpserver);
    io.on("conection" , async (Socket) => {
        console.log("nuevo cliente conectado");
        let products = await product.getProducts();
        Socket.emit("init-product" , products);
    });
}

/* const emitDeleteProduct = (id) => {
    emit.io("delete-product" , {id});
}

const emitAddRealTime = (add) => {
    emit.io("add-product" , {add});
} */

export default conectionSocket;
