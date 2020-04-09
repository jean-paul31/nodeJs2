import express from "express";
import routes from './routes';
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use("/", routes({ }));
app.set('view engine', 'ejs');
app.use('/static', express.static('src/public'));
app.use(bodyParser.json({}));
app.listen(port, () => {
                    console.log(`Exemple app listening on port ${port} !`)
                    });
app.use((err, req, res, next) => {
                                    console.error(err.stack); res.status(500).send('oops, server error !')
                                });
app.use((req, res) => {
                        res.status(404).send("oops, you took a wrong turn !!!") 
                    });