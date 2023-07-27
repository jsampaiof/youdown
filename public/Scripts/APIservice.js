'use strict';

import { API_KEY } from "./key.js";

export class APIService{
  #link
  constructor(link){
    this.#link = link;
  }

  async videoInfo(){
    const ID = this.#link;
    const url = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${ID}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const json = await response.json();

    return json.formats;
  };
}