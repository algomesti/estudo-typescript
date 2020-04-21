import express from 'express';
import cors from 'cors';
import routes from './routes';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
app.use(routes);
app.use(cors());

app.listen(3333, function () {
    console.log(`Server running on port 3333`);
});
