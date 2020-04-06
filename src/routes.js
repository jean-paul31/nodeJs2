import { Router } from "express";

import helloController from "./controllers/helloController";

const api = ({}) => {
    const routes = Router();
    routes.get('/', helloController.hello);
    routes.get('/templatedPage', helloController.templatedPage);
    return routes
};

export default api;