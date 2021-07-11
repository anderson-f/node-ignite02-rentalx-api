import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

// toda vez que bater na url /categories o use vai direcionar pro arquivo de categorias
router.use("/categories", categoriesRoutes); // middleware da rota categories
router.use("/specifications", specificationsRoutes); // middleware da rota categories
router.use("/users", usersRoutes);

export { router };
