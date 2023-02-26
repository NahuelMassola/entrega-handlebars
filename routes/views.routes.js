import ProductManager from "../Controller/ProductManager.js";
import { Router} from "express";


const viewsRouter = Router();
const products = new ProductManager();

viewsRouter.get("/" , async (req , res) => {
    let product = await products.getProducts(); 
    res.render("home" , {
        product })
});

viewsRouter.get("/realtimeproducts" , async (req , res) => {
    let product = await products.getProducts(); 
    res.render("home" , {
        title: "hola" ,
        product})
});



export default viewsRouter;
