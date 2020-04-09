import  Router  from "express";
import helloController from "./controllers/helloController";
import userController from "./controllers/userController"


const api = ({}) => {
    const routes = Router();
    routes.get('/', helloController.hello);
    routes.get('/templatedPage', helloController.templatedPage);
    routes.get('/user', userController.getUser);
    routes.post('/user', userController.postUser);
    routes.put('/user', userController.putUser);
    routes.delete('/user', userController.deleteUser);
    routes.get('/user/ :userId', userController.getUser);
    routes.post('/user/ :userId', userController.postUser);
    routes.put('/user/ :userId', userController.putUser);
    routes.delete('/user/ :userId', userController.deleteUser);
    return routes
};

export default api;