import { Router } from "express";

import helloController from "./controllers/helloController";

const api = ({}) => {
    const routes = Router();
    routes.get('/', helloController.hello);
    return routes
};

export default api;