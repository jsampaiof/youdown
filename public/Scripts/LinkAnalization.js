'use strict';

import {APIService} from './APIservice.js';
import { videoFilter } from './youTubeVideo.js';
import { selection } from './FormatAndQuality.js';

const link = document.querySelector('#ytlink');
const button = document.querySelector('#image-button');
const selector = document.querySelector('#options');

button.addEventListener('click', async function(){
    const url = link.value;
    if(url){
        const lastEleven = url.slice(-11);
        const newVideo = new APIService(lastEleven);
        const info = await newVideo.videoInfo();
        const filter = videoFilter.filter(info);
        selection.formatAndQuality(filter, selector)
    }else{
        window.alert('Link não encontrado!')
    }
});