'use strict';

import express from "express";
import { StatusCodes } from "http-status-codes";
import fetch from 'node-fetch';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 1220;


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});

app.get('/', async (req, res) => {
  res.status(StatusCodes.OK).render('pages/home.ejs', {title: 'YouDown'});
});

app.get('/api',  async (req, res) => {
  try{
    const link = req.query.link;
    const ID = link;
    const url = `${process.env.API_URL}?id=${ID}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env. API_HOST
      }
    };
    
    const response = await fetch(url, options);
    const json = await response.json();
    const formats = json.formats;

    res.json(formats);
  }catch(error){
    console.error(error);
  };
});