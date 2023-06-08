'use strict';

import express from "express";
import { StatusCodes } from "http-status-codes";

const app = express();
const PORT = process.env.PORT || 1220;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.status(StatusCodes.OK).render('pages/home.ejs', {title: 'YouDown'})
})