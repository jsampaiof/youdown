'use strict';

import {APIService} from './APIservice.js';
import { videoFilter } from './youTubeVideo.js';

const link = document.querySelector('#ytlink');
const button = document.querySelector('#image-button');

button.addEventListener('click', async function(){
    const url = link.value;
    const lastEleven = url.slice(-11);
    // console.log(lastEleven);
    const newVideo = new APIService(lastEleven);
    const info = await newVideo.videoInfo();
    videoFilter.filter(info);
    
});