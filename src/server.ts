import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

// toda vez que bater na url /categories o use vai direcionar pro arquivo de categorias
app.use("/categories", categoriesRoutes); // middleware da rota categories
app.use("/specifications", specificationsRoutes); // middleware da rota categories

app.listen(3333, () => console.log("Server is running!"));
