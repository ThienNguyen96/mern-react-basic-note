import express from 'express';
// wanna declare import xxx from xxx please add "type": "module" in package.jsin
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import posts from './routers/posts.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.DB_URL;

// middlewarw limit capacity user submit to server
app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}))
app.use(cors());

// connect database

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Server running port ${PORT}`);
    });
})
.catch((err) => {
    console.log('err', err)
})

app.use('/posts', posts);
