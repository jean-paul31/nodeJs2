import  Router  from "express";

import helloController from "./controllers/helloController";
import userController from "./controllers/userController"


const api = () => {
    const routes = Router();
    routes.get('/', helloController.hello);
    routes.get('/templatedPage', helloController.templatedPage);

    routes.get('/users', userController.getUsers);

    routes.get('/user/:userId', userController.getUser);
    routes.post('/user/:userId', userController.postUser);
    routes.put('/user/:userId', userController.putUser);
    routes.delete('/user/:userId', userController.deleteUser);

    routes.get('/meteo/:city', helloController.getMeteo);
    
    return routes
};

export default api;