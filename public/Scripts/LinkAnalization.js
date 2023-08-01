'use strict';

import {APIService} from './APIservice.js';
import { videoFilter } from './youTubeVideo.js';
import { selection } from './FormatAndQuality.js';

const link = document.querySelector('#ytlink');
const linkButton = document.querySelector('#image-button');
const selector = document.querySelector('#options');
const downloadButton = document.querySelector('.download');
let quality;

linkButton.addEventListener('click', async function(){
    while(selector.firstChild){
        selector.removeChild(selector.firstChild)
    }
    const url = link.value;
    if(url){
        const lastEleven = url.slice(-11);
        const newVideo = new APIService(lastEleven);
        const info = await newVideo.videoInfo();
        const filter = videoFilter.filter(info);
        selection.formatAndQuality(filter, selector);
    }else{
        window.alert('Link não encontrado!')
    };
    quality = selector.options[selector.selectedIndex].text;
});

selector.addEventListener('change', function(event){
    quality = event.target.options[event.target.selectedIndex].text;
})

downloadButton.addEventListener('click', function(){
    const download = new selection(downloadButton, quality);
    download.download();
})