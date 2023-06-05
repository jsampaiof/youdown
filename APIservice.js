'use strict';

import 'dotenv/config';
import fetch from 'node-fetch';

const ID = 'oLx2hV2o0_M';
const url = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${ID}`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
  }
};

async function videoInfo(){
  const response = await fetch(url, options);
  const json = await response.json();

  // console.log(json);
  return json.formats;
};

export{videoInfo};

// videoInfo()