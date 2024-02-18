import express from 'express';
import api from './routes.js';
import bodyParser from 'body-parser';

const app = express(); // Créer une instance de l'application Express
const port = 3000;

app.use(bodyParser.json({}));
app.use('/', api()); // Assurez-vous que api() est une fonction middleware express
app.set('view engine', 'ejs');
app.use('/static', express.static('src/public'));

app.listen(port, () => {
    console.log(`Exemple app listening on port ${port} !`);
});

// Les gestionnaires d'erreurs doivent être définis après app.listen()
app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.status(500).send('oops, server error !');
});

app.use((req, res) => {
    res.status(404).send('oops, you took a wrong turn !!!');
});
