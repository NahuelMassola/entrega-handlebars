import express from "express";
import productRouter from "./routes/products.routes.js";
import cartRouter from "./routes/carts.routes.js";
import viewsRouter from "./routes/views.routes.js";
import { engine } from "express-handlebars";
import * as path from "path"
import __dirname from "./utils/utils.js";




const app = express();

//handlebars

app.engine("handlebars" , engine());
app.set("views engine" , "handlebars");
app.set("views", path.join(`${__dirname}/views`));

//static

app.use("/" , express.static(`${__dirname}/public`))
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Rutas

app.use("/api/products" , productRouter);
app.use("/api/cart" , cartRouter);
app.use("/" , viewsRouter);

// creo el Puerto

const PORT = 5000 ;
const httpserver = app.listen (PORT , () => { 
    console.log(`Local host on Port: ${PORT}` )
});


// inicializo el servidor 
//server.on("error" , (error) => console.log(`Error on ${error}`));

